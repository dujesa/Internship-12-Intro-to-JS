"use strict";

function getProgrammingLanguageFromInput() {
  return new ProgrammingLanguage(getInputForProperty("name"));
}

function getDeveloperFromInput() {
  return {
    fullName: sanitizeName(getInputForProperty("name")),
    //employmentStatus: getEmploymentStatusFromInput("employmentStatus"),
    company: getInputForProperty("company"),
    developerType: getDeveloperTypeFromInput("developerType"),
    pero: getInputForProperty("programmingLanguages"),
  };
}

function getCompanyFromInput() {
  return new Company(
    getInputForProperty("name"),
    getInputForProperty("employees")
  );
}

function getDeveloperTypeFromInput() {
  const allDeveloperTypes = Object.keys(developerType).join(", ");
  return prompt(`Choose dev type for developer:
  [${allDeveloperTypes}]`);
}

function getInputForProperty(propertyName) {
  return prompt(`Enter ${propertyName}: `);
}

function getInputForMessage(message) {
  return prompt(message);
}
