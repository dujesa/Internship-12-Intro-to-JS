"use strict";

function getDeveloperTypeFromInput() {
  const developerTypes = Object.values(developerType);
  let isInputValid = false,
    inputtedType;

  while (!isInputValid) {
    inputtedType = prompt(`Choose dev type for developer:
    [${developerTypes.join(", ")}]`).toUpperCase();

    isInputValid = developerTypes.includes(inputtedType);

    if (!isInputValid) {
      alert("Input for dev type is invalid! Please try again...");
    }
  }

  return inputtedType;
}

function getEmploymentStatusFromInput() {
  const employmentStatuses = Object.values(employmentStatus);
  let isInputValid = false,
    inputtedStatus;

  while (!isInputValid) {
    inputtedStatus = prompt(`Choose employment status for developer:
    [${employmentStatuses.join(", ")}]`).toUpperCase();

    isInputValid = employmentStatuses.includes(inputtedStatus);

    if (!isInputValid) {
      alert("Input for employment status is invalid! Please try again...");
    }
  }

  return inputtedStatus;
}

function getInputForProperty(propertyName) {
  return prompt(`Enter ${propertyName}: `);
}

function getInputForMessage(message) {
  return prompt(message);
}
