"use strict";

function getProgrammingLanguageFromInput() {
  return [{ name: getInputForProperty("name") }];
}

function getDeveloperFromInput() {
  return [
    { fullName: getInputForProperty("name") },
    { jobStatus: getInputForProperty("jobStatus") },
    { company: getInputForProperty("company") },
    { developerType: getInputForProperty("developerType") },
    { programmingLanguages: getInputForProperty("programmingLanguages") },
  ];
}

function getCompanyFromInput() {
  return [
    { name: getInputForProperty("name") },
    { employees: getInputForProperty("employees") },
  ];
}

function getInputForProperty(propertyName) {
  return prompt(`Enter ${propertyName}: `);
}
