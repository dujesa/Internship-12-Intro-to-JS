function seedData(storage) {
  const programmingLanguages = [
    {
      name: "JavaScript",
      developerIds: [],
    },
    {
      name: "WebAssembly",
      developerIds: [],
    },
    {
      name: "C#",
      developerIds: [],
    },
    {
      name: "PHP",
      developerIds: [],
    },
    {
      name: "Java",
      developerIds: [],
    },
    {
      name: "C++",
      developerIds: [],
    },
    {
      name: "Python",
      developerIds: [],
    },
    {
      name: "Sass",
      developerIds: [],
    },
  ];

  programmingLanguages.forEach((programmingLanguage) =>
    storage.addProgrammingLanguage(programmingLanguage)
  );

  const companies = [
    {
      name: "Dump",
      developerIds: [],
    },
    {
      name: "Google",
      developerIds: [],
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
      programmingLanguages: [{ id: 0 }, { id: 1 }],
    },
    {
      fullName: "Matija Luketin",
      employmentStatus: employmentStatus["EMPLOYED"],
      company: { id: 1 },
      developerType: developerType["FRONTEND"],
      programmingLanguages: [{ id: 0 }, { id: 1 }, { id: 3 }],
    },
    {
      fullName: "Ante Vuletić",
      employmentStatus: employmentStatus["EMPLOYED"],
      company: { id: 0 },
      developerType: developerType["BACKEND"],
      programmingLanguages: [{ id: 2 }, { id: 3 },  { id: 4 },  { id: 5 },  { id: 6 }],
    },
    {
      fullName: "Duje Šarić",
      employmentStatus: employmentStatus["UNEMPLOYED"],
      company: null,
      developerType: developerType["FULLSTACK"],
      programmingLanguages: [ { id: 3 }],
    },
  ];

  developers.forEach((developer) => storage.addDeveloper(developer));
}
