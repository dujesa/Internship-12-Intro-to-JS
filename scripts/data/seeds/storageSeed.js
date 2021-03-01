function seedData(storage) {
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
      developerIds: [1, 3],
    },
    {
      name: "Google",
      developerIds: [2],
    },
    {
      name: "CompanyBankrupt",
      developerIds: [],
    },
  ];

  companies.forEach((company) => storage.addCompany(company));

  const developers = [
    {
      fullName: "Alex Amanzi",
      employmentStatus: employmentStatus["FREELANCER"],
      company: { id: 0 },
      developerType: developerType["FULLSTACK"],
      programmingLanguages: ["C#", "JS"],
    },
    {
      fullName: "Matija Luketin",
      employmentStatus: employmentStatus["EMPLOYED"],
      company: { id: 1 },
      developerType: developerType["FRONTEND"],
      programmingLanguages: ["WebAssembly", "JS", "Sass"],
    },
    {
      fullName: "Ante Vuletić",
      employmentStatus: employmentStatus["EMPLOYED"],
      company: { id: 0 },
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
}
