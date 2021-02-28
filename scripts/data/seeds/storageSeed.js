function seedData(storage) {
  const developers = [
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

  developers.forEach((developer) => storage.addDeveloper(developer));

  const programmingLanguages = [
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

  programmingLanguages.forEach((programmingLanguage) =>
    storage.addProgrammingLanguage(programmingLanguage)
  );

  const companies = [
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

  companies.forEach((company) => storage.addCompany(company));
}
