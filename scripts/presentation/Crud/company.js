function handleCreateCompany(storage) {
  const newCompany = {
    name: getInputForProperty("name"),
    developerIds: [],
  };

  storage.addCompany(newCompany);
}

function handleUpdateCompany(storage) {
  companyId = getInputForProperty("id");
  const legacyCompanyData = storage
    .getCompanies()
    .find((companyData) => companyId == companyData.id);

  if (!legacyCompanyData) {
    displayMessage(`Company with id: ${companyId} was not found!`);

    return;
  }

  const { id, company } = legacyCompanyData;

  const newCompany = Object.assign(company, {
    name: getInputForProperty("company"),
  });

  storage.updateCompany(companyId, newCompany);
}

function handleDeleteCompany(storage) {
  companyId = getInputForProperty("id");
  const legacyCompanyData = storage
    .getCompanies()
    .find((companyData) => companyId == companyData.id);

  if (!legacyCompanyData) {
    displayMessage(`Company with id: ${companyId} was not found!`);

    return;
  }

  storage.deleteCompany(companyId);
}
