#!/bin/bash

# Simple Port Scanner with IP Validation

# Function to validate IPv4 format
is_valid_ip() {
    local ip=$1
    local stat=1

    if [[ $ip =~ ^([0-9]{1,3}\.){3}[0-9]{1,3}$ ]]; then
        OIFS=$IFS
        IFS='.'
        ip_array=($ip)
        IFS=$OIFS
        [[ ${ip_array[0]} -le 255 && ${ip_array[1]} -le 255 && ${ip_array[2]} -le 255 && ${ip_array[3]} -le 255 ]]
        stat=$?
    else
        stat=1
    fi
    return $stat
}

# Usage check
if [ "$#" -ne 3 ]; then
    echo "Usage: $0 <target> <start_port> <end_port>"
    exit 1
fi

TARGET=$1
START_PORT=$2
END_PORT=$3

# Validate IP address
if ! is_valid_ip "$TARGET"; then
    echo "Error: '$TARGET' is not a valid IPv4 address."
    exit 1
fi

# Validate port numbers
if ! [[ "$START_PORT" =~ ^[0-9]+$ ]] || ! [[ "$END_PORT" =~ ^[0-9]+$ ]] || [ "$START_PORT" -lt 1 ] || [ "$END_PORT" -gt 65535 ] || [ "$START_PORT" -gt "$END_PORT" ]; then
    echo "Error: Invalid port range. Ports must be numeric and between 1 and 65535."
    exit 1
fi

echo "Scanning $TARGET from port $START_PORT to $END_PORT..."

# Scan loop
for (( port=$START_PORT; port<=$END_PORT; port++ )); do
    timeout 1 bash -c "echo > /dev/tcp/$TARGET/$port" 2>/dev/null && echo "Port $port is OPEN"
done

echo "Scan Complete!"
