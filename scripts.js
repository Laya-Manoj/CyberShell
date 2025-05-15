// const tools = [
//   {
//     name: "Port Scanner",
//     file: "scripts/portscanner.sh",
//     description: "Scans ports on a target IP to find open ports.",
//   },
//   {
//     name: "Subnet Scanner",
//     file: "scripts/subnetscanner.sh",
//     description: "Scans a subnet to find live hosts.",
//   },
//   {
//     name: "Password Strength Checker",
//     file: "scripts/password_strength_checker.sh",
//     description: "Checks the strength of passwords using pattern analysis.",
//   }
// ];

// const container = document.getElementById("tool-container");

// tools.forEach(tool => {
//   const card = document.createElement("div");
//   card.className = "tool-card";

//   card.innerHTML = `
//     <h2>${tool.name}</h2>
//     <p>${tool.description}</p>
//     <a href="${tool.file}" download>Download Script</a>
//   `;

//   container.appendChild(card);
// });

// function copyScript(filePath) {
//   fetch(filePath)
//     .then(res => {
//       if (!res.ok) throw new Error("Script not found");
//       return res.text();
//     })
//     .then(scriptText => {
//       navigator.clipboard.writeText(scriptText)
//         .then(() => alert("✅ Script copied to clipboard!"))
//         .catch(() => alert("❌ Failed to copy script"));
//     })
//     .catch(() => alert("❌ Could not load the script."));
// }










// const tools = [
//   {
//     name: "Port Scanner",
//     file: "scripts/portscanner.sh",
//     description: "Scans ports on a target IP to find open ports.",
//   },
//   {
//     name: "Subnet Scanner",
//     file: "scripts/subnetscanner.sh",
//     description: "Scans a subnet to find live hosts.",
//   },
//   {
//     name: "Password Strength Checker",
//     file: "scripts/password_strength_checker.sh",
//     description: "Checks the strength of passwords using pattern analysis.",
//   }
// ];

// const container = document.getElementById("tool-container");

// tools.forEach(tool => {
//   const card = document.createElement("div");
//   card.className = "tool-card";

//   // Create input area dynamically based on tool type for demo runs
//   let inputHTML = '';
//   let outputId = '';
//   if (tool.name === "Port Scanner") {
//     inputHTML = `
//       <label>Target IP/Hostname:</label>
//       <input type="text" class="input-field" id="input-${tool.name.replace(/\s+/g, '-').toLowerCase()}" placeholder="e.g. 192.168.1.1" />
//     `;
//     outputId = `output-${tool.name.replace(/\s+/g, '-').toLowerCase()}`;
//   } else if (tool.name === "Subnet Scanner") {
//     inputHTML = `
//       <label>Subnet (e.g. 192.168.1):</label>
//       <input type="text" class="input-field" id="input-${tool.name.replace(/\s+/g, '-').toLowerCase()}" placeholder="e.g. 192.168.1" />
//     `;
//     outputId = `output-${tool.name.replace(/\s+/g, '-').toLowerCase()}`;
//   } else if (tool.name === "Password Strength Checker") {
//     inputHTML = `
//       <label>Enter Password:</label>
//       <input type="password" class="input-field" id="input-${tool.name.replace(/\s+/g, '-').toLowerCase()}" placeholder="Type password here" />
//     `;
//     outputId = `output-${tool.name.replace(/\s+/g, '-').toLowerCase()}`;
//   }

//   card.innerHTML = `
//     <h2>${tool.name}</h2>
//     <p>${tool.description}</p>
//     ${inputHTML}
//     <button onclick="runDemo('${tool.name}')">Run Demo</button>
//     <button onclick="copyScript('${tool.file}')">Copy Script</button>
//     <a href="${tool.file}" download>Download Script</a>
//     <pre class="output" id="${outputId}"></pre>
//   `;

//   container.appendChild(card);
// });

// function copyScript(filePath) {
//   fetch(filePath)
//     .then(res => {
//       if (!res.ok) throw new Error("Script not found");
//       return res.text();
//     })
//     .then(scriptText => {
//       navigator.clipboard.writeText(scriptText)
//         .then(() => alert("✅ Script copied to clipboard!"))
//         .catch(() => alert("❌ Failed to copy script"));
//     })
//     .catch(() => alert("❌ Could not load the script."));
// }

// function runDemo(toolName) {
//   const key = toolName.replace(/\s+/g, '-').toLowerCase();
//   const input = document.getElementById(`input-${key}`).value.trim();
//   const outputEl = document.getElementById(`output-${key}`);

//   if (!input) {
//     outputEl.textContent = "Please enter a valid input.";
//     return;
//   }

//   if (toolName === "Port Scanner") {
//     outputEl.textContent = `Simulating port scan on ${input}...\n\n`;
//     const commonPorts = [22, 80, 443];
//     commonPorts.forEach(port => {
//       const isOpen = Math.random() > 0.5;
//       outputEl.textContent += `Port ${port}: ${isOpen ? 'Open' : 'Closed'}\n`;
//     });
//   } else if (toolName === "Subnet Scanner") {
//     outputEl.textContent = `Simulating subnet scan on ${input}.0/24...\n\n`;
//     for (let i = 1; i <= 10; i++) { // limiting to first 10 hosts for demo
//       const isUp = Math.random() > 0.7;
//       outputEl.textContent += `Host ${input}.${i}: ${isUp ? 'Alive' : 'No response'}\n`;
//     }
//   } else if (toolName === "Password Strength Checker") {
//     outputEl.textContent = checkPasswordStrength(input);
//   }
// }

// function checkPasswordStrength(password) {
//   let score = 0;
//   if (password.length >= 8) score++;
//   if (/[A-Z]/.test(password)) score++;
//   if (/[a-z]/.test(password)) score++;
//   if (/\d/.test(password)) score++;
//   if (/[\W_]/.test(password)) score++;

//   let strength = "";
//   switch (score) {
//     case 5:
//       strength = "Very Strong";
//       break;
//     case 4:
//       strength = "Strong";
//       break;
//     case 3:
//       strength = "Moderate";
//       break;
//     case 2:
//       strength = "Weak";
//       break;
//     default:
//       strength = "Very Weak";
//   }

//   return `Password Strength: ${strength}\nScore: ${score} / 5`;
// }








const tools = [
  {
    name: "Port Scanner",
    file: "scripts/portscanner.sh",
    description: "Scans ports on a target IP to find open ports.",
    hasInput: true,
    inputFields: [
      { label: "Target IP", placeholder: "e.g., 192.168.2.1" },
      { label: "Start Port", placeholder: "e.g., 1" },
      { label: "End Port", placeholder: "e.g., 1000" }
    ]
  },
  {
    name: "Subnet Scanner",
    file: "scripts/subnetscanner.sh",
    description: "Scans a subnet to find live hosts.",
    hasInput: true,
    inputFields: [
      { label: "Subnet (e.g., 192.168.1.0/24)", placeholder: "e.g., 192.168.1.0/24" }
    ]
  },
  {
    name: "Password Strength Checker",
    file: "scripts/password_strength_checker.sh",
    description: "Checks the strength of passwords using pattern analysis.",
    hasInput: true,
    inputFields: [
      { label: "Password", placeholder: "Enter password" }
    ]
  }
];

const container = document.getElementById("tool-container");

tools.forEach((tool, index) => {
  const card = document.createElement("div");
  card.className = "tool-card";

  card.innerHTML = `
    <h2>${tool.name}</h2>
    <p>${tool.description}</p>
    ${tool.hasInput ? generateInputFields(tool.inputFields, index) : ""}
    <div>
      <button onclick="copyScript('${tool.file}')">Copy Script</button>
      <a href="${tool.file}" download>Download Script</a>
      ${tool.hasInput ? `<button onclick="runDemo(${index})">Run Demo</button>` : ""}
    </div>
    ${tool.hasInput ? `<div class="output" id="output-${index}"></div>` : ""}
  `;

  container.appendChild(card);
});

function generateInputFields(fields, index) {
  return fields.map((field, i) => `
    <label for="input-${index}-${i}">${field.label}</label>
    <input type="text" class="input-field" id="input-${index}-${i}" placeholder="${field.placeholder}">
  `).join('');
}

function copyScript(filePath) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) throw new Error("Script not found");
      return response.text();
    })
    .then(scriptText => {
      navigator.clipboard.writeText(scriptText)
        .then(() => alert("✅ Script copied to clipboard!"))
        .catch(err => {
          console.error("Clipboard error:", err);
          alert("❌ Clipboard access failed.");
        });
    })
    .catch(err => {
      console.error("Fetch error:", err);
      alert("❌ Could not load the script.");
    });
}

function runDemo(index) {
  const tool = tools[index];
  const inputs = tool.inputFields.map((_, i) => document.getElementById(`input-${index}-${i}`).value.trim());
  const outputDiv = document.getElementById(`output-${index}`);

  let output = `(kali㉿kali)-[~/git/${tool.name.replace(/\s/g, '')}]\n$ ./script.sh ${inputs.join(" ")}\n`;

  switch (tool.name) {
    case "Port Scanner":
      if (inputs.length !== 3 || inputs.includes("")) {
        output += "Usage: ./port_scanner.sh <target> <start_port> <end_port>";
      } else {
        output += `Scanning ${inputs[0]} from port ${inputs[1]} to ${inputs[2]} ...\nPort 22 is OPEN\nPort 53 is OPEN`;
      }
      break;

    case "Subnet Scanner":
      if (!inputs[0]) {
        output += "Usage: ./subnetscanner.sh <subnet>";
      } else {
        output += `Scanning subnet ${inputs[0]}...\nHost 192.168.1.1 is UP\nHost 192.168.1.5 is UP`;
      }
      break;

    case "Password Strength Checker":
      if (!inputs[0]) {
        output += "Usage: ./password_strength_checker.sh <password>";
      } else {
        const strength = inputs[0].length >= 8 ? "strong" : "weak";
        output += `Checking password...\nPassword is ${strength}`;
      }
      break;
  }

  outputDiv.textContent = output;
}
