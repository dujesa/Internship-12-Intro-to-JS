"use strict";

class Storage {
  #developers = [
    {
      fullName: "Alex Amanzi",
      employmentStatus: employmentStatus["FREELANCER"],
      company: "Dump",
      developerType: developerType["FULLSTACK"],
      programmingLanguages: ["C#", "JS"],
    },
    {
      fullName: "Matija Luketin",
      employmentStatus: employmentStatus["EMPLOYED"],
      company: "CompanyA",
      developerType: developerType["FRONTEND"],
      programmingLanguages: ["WebAssembly", "JS", "Sass"],
    },
    {
      fullName: "Ante Vuletić",
      employmentStatus: employmentStatus["EMPLOYED"],
      company: "Dump",
      developerType: developerType["BACKEND"],
      programmingLanguages: ["C#", "Java", "JS", "Python", "C++"],
    },
    {
      fullName: "Duje Šarić",
      employmentStatus: employmentStatus["UNEMPLOYED"],
      company: null,
      developerType: developerType["FULLSTACK"],
      programmingLanguages: ["PHP", "JS"],
    },
  ];

  #programmingLanguages = [
    {
      name: "JavaScript",
    },
    {
      name: "WebAssembly",
    },
    {
      name: "C#",
    },
    {
      name: "PHP",
    },
    {
      name: "Java",
    },
    {
      name: "C++",
    },
    {
      name: "Python",
    },
    {
      name: "Sass",
    },
  ];

  #companies = [
    {
      name: "Dump",
      employees: [1, 3],
    },
    {
      name: "CompanyA",
      employees: [2],
    },
    {
      name: "CompanyBankrupt",
      employees: [],
    },
  ];

  addDeveloper(developer) {
    this.#developers.push(developer);
  }

  updateDeveloper(legacyDeveloperId, newDeveloper) {
    this.#developers.splice(legacyDeveloperId, 1, newDeveloper);
  }

  getDevelopers() {
    return this.#developers;
  }

  addProgrammingLanguage(programmingLanguage) {
    this.#programmingLanguages.push(programmingLanguage);
  }

  updateProgrammingLanguage(
    legacyProgrammingLanguageId,
    newProgrammingLanguage
  ) {
    this.#programmingLanguages.splice(
      legacyProgrammingLanguageId,
      1,
      newProgrammingLanguage
    );
  }

  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }

  addCompany(company) {
    this.#companies.push(company);
  }

  updateCompany(legacyCompanyId, newCompany) {
    this.#companies.splice(legacyCompanyId, 1, newCompany);
  }

  getCompanies() {
    return this.#companies;
  }
}
