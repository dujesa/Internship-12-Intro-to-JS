"use strict";

class Storage {
  #developers = [];
  #lastDeveloperId = 0;
  #programmingLanguages = [];
  #lastProgrammingLanguageId = 0;
  #companies = [];
  #lastCompanyId = 0;

  addDeveloper(developer) {
    const newDevId = this.#lastDeveloperId++;

    this.#developers.push({ id: newDevId, developer: developer });
  }

  updateDeveloper(legacyDeveloperId, newDeveloper) {
    const legacyDeveloperData = this.#developers.find(
      (developerData) => developerData.id == legacyDeveloperId
    );
    legacyDeveloperData.developer = newDeveloper;
  }

  getDevelopers() {
    return this.#developers;
  }

  addProgrammingLanguage(programmingLanguage) {
    const newLanguageId = this.#lastProgrammingLanguageId++;

    this.#programmingLanguages.push({
      id: newLanguageId,
      programmingLanguage: programmingLanguage,
    });
  }

  updateProgrammingLanguage(
    legacyProgrammingLanguageId,
    newProgrammingLanguage
  ) {
    const legacyProgrammingLanguageData = this.#programmingLanguages.find(
      (programmingLanguageData) =>
        programmingLanguageData.id == legacyProgrammingLanguageId
    );
    legacyProgrammingLanguageData.programmingLanguage = newProgrammingLanguage;
  }

  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }

  addCompany(company) {
    const newCompanyId = this.#lastCompanyId++;

    this.#companies.push({ id: newCompanyId, company: company });
  }

  updateCompany(legacyCompanyId, newCompany) {
    const legacyCompanyData = this.#companies.find(
      (companyData) => companyData.id == legacyCompanyId
    );
    legacyCompanyData.company = newCompany;
  }

  getCompanies() {
    return this.#companies;
  }
}
