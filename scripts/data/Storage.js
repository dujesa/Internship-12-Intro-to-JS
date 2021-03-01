"use strict";

class Storage {
  #developers = [];
  #lastDeveloperId = 0;
  #programmingLanguages = [];
  #lastProgrammingLanguageId = 0;
  #companies = [];
  #lastCompanyId = 0;

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

  getCompanyById(id) {
    return this.#companies.find((companyData) => companyData.id == id);
  }

  addDeveloper(developer) {
    const newDevId = this.#lastDeveloperId++;

    const companyData = developer.company;
    const legacyCompanyData = companyData
      ? this.getCompanyById(companyData.id)
      : null;
    if (legacyCompanyData) {
      companyData.company = legacyCompanyData.company;

      companyData.company.developerIds.push(newDevId);
    }

    const programmingLanguagesData = developer.programmingLanguages;
    programmingLanguagesData.forEach((programmingLanguageData) => {
      const legacyLanguageData = programmingLanguageData
        ? this.getProgrammingLanguageById(programmingLanguageData.id)
        : null;
      if (legacyLanguageData) {
        programmingLanguageData.programmingLanguage = legacyLanguageData.programmingLanguage;

        programmingLanguageData.programmingLanguage.developerIds.push(newDevId);
      }
    });

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

  deleteProgrammingLanguage(id) {
    const deletingLanguageIndex = this.#programmingLanguages.findIndex(
      (programmingLanguageData) => programmingLanguageData.id == id
    );
    if (!deletingLanguageIndex) return;

    this.#programmingLanguages.splice(deletingLanguageIndex, 1);
  }

  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }

  getProgrammingLanguageById(id) {
    return this.#programmingLanguages.find((programmingLanguageData) => programmingLanguageData.id == id);
  }
}
