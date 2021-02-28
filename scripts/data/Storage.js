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
    new ProgrammingLanguage("JS"),
    new ProgrammingLanguage("WebAssembly"),
    new ProgrammingLanguage("Sass"),
    new ProgrammingLanguage("Java"),
    new ProgrammingLanguage("C#"),
    new ProgrammingLanguage("C++"),
    new ProgrammingLanguage("Python"),
    new ProgrammingLanguage("PHP"),
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

  getProgrammingLanguages() {
    return this.#programmingLanguages;
  }

  addCompany(company) {
    this.#companies.push(company);
  }

  getCompanies() {
    return this.#companies;
  }
}
