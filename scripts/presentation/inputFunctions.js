"use strict";

function getProgrammingLanguageFromInput() {
  return new ProgrammingLanguage(getInputForProperty("name"));
}

function getDeveloperFromInput() {
  return {
    fullName: sanitizeName(getInputForProperty("name")),
    jobStatus: getInputForProperty("jobStatus"),
    company: getInputForProperty("company"),
    developerType: getInputForProperty("developerType"),
    pero: getInputForProperty("programmingLanguages")
  };
}

function getCompanyFromInput() {
  return new Company(
    getInputForProperty("name"),
    getInputForProperty("employees")
  );
}

function getInputForProperty(propertyName) {
  return prompt(`Enter ${propertyName}: `);
}

function getInputForMessage(message) {
  return prompt(message);
}
