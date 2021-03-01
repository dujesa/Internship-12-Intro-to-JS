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

    this.updateCompanyInDevelopersById(legacyCompanyId, newCompany);
  }

  updateCompanyInDevelopersById(id, updatedCompany) {
    this.#developers.forEach((developerData) => {
      const companyData = developerData.developer.company;
      if (companyData !== null && companyData.id == id)
        developerData.developer.company = updatedCompany;
    });
  }

  deleteCompany(id) {
    const deletingCompanyIndex = this.#companies.findIndex(
      (companyData) => companyData.id == id
    );
    if (deletingCompanyIndex == null) return;

    this.removeCompanyFromDevelopersById(id);
    this.#companies.splice(deletingCompanyIndex, 1);
  }

  removeCompanyFromDevelopersById(id) {
    this.#developers.forEach((developerData) => {
      const companyData = developerData.developer.company;
      if (companyData !== null && companyData.id == id)
        developerData.developer.company = null;
    });
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
        programmingLanguageData.programmingLanguage =
          legacyLanguageData.programmingLanguage;

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

  deleteDeveloper(id) {
    const deletingDeveloperIndex = this.#developers.findIndex(
      (developerData) => developerData.id == id
    );

    if (!deletingDeveloperIndex) return;

    this.removeDeveloperFromCompanyById(id);
    this.removeDeveloperFromProgrammingLanguagesById(id);

    this.#developers.splice(deletingDeveloperIndex, 1);
  }

  removeDeveloperFromProgrammingLanguagesById(id) {
    this.#programmingLanguages.forEach((languageData) => {
      const programmingLanguage = languageData.programmingLanguage;
      const removingIndex = programmingLanguage.developerIds.indexOf(
        parseInt(id)
      );
      if (removingIndex >= 0) {
        programmingLanguage.developerIds.splice(removingIndex, 1);
      }
    });
  }

  removeDeveloperFromCompanyById(id) {
    this.#companies.forEach((companyData) => {
      const company = companyData.company;
      const removingIndex = company.developerIds.indexOf(parseInt(id));
      if (removingIndex >= 0) {
        company.developerIds.splice(removingIndex, 1);
      }
    });
  }

  getDevelopers() {
    return this.#developers;
  }

  getDevelopersByType(type) {
    return this.#developers.filter(
      (developerData) => developerData.developer.developerType === type
    );
  }

  getDevelopersByProgrammingLanguages(programmingLanguages) {
    let developers = [];

    programmingLanguages.forEach((programmingLanguageData) => {
      const filteredDevs = this.#developers.filter((developerData) =>
        developerData.developer.programmingLanguages.includes(
          (developerLanguageData) =>
            parseInt(developerLanguageData.id) ==
            parseInt(programmingLanguageData.id)
        )
      );
console.log(filteredDevs);
      for (let index = 0; index < filteredDevs.length; index++) {
        const filteredDev = filteredDevs[index];
        /*if (
          developers.includes(
            (developerData) =>
              parseInt(developerData.id) ===
              parseInt(filteredDev.developerData.id)
          )
        )
          continue;
*/
        developers.push(filteredDev);
      }
    });

    return developers;
  }

  getDevelopersByEmploymentStatus(employmentStatus) {
    return this.#developers.filter(
      (developerData) =>
        developerData.developer.employmentStatus === employmentStatus
    );
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

    this.removeProgrammingLanguageFromDevelopersById(id);
    this.#programmingLanguages.splice(deletingLanguageIndex, 1);
  }

  removeProgrammingLanguageFromDevelopersById(id) {
    this.#developers.forEach((developerData) => {
      const developer = developerData.developer;
      const removingLanguageIndex = developer.programmingLanguages.findIndex(
        (programmingLanguageData) => programmingLanguageData.id == id
      );

      if (removingLanguageIndex)
        developer.programmingLanguages.splice(removingLanguageIndex, 1);
    });
  }

  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }

  getProgrammingLanguageById(id) {
    return this.#programmingLanguages.find(
      (programmingLanguageData) => programmingLanguageData.id == id
    );
  }
}
