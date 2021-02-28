function handleCreateCompany(storage) {
  const newCompany = {
    name: getInputForProperty("name"),
    //developers: getInputForProperty("developers"),
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
    //developers: getDeveloperTypeFromInput(),
  });

  storage.updateCompany(companyId, newCompany);
}
