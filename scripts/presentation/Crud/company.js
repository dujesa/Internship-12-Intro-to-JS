function handleCreateCompany(storage) {
  const newCompany = {
    name: getInputForProperty("name"),
    //developers: getInputForProperty("developers"),
  };

  storage.addCompany(newCompany);
}

function handleUpdateCompany(storage) {
  companyId = getInputForProperty("id");
  const legacyCompany = storage.getCompanies()[companyId];

  if (!legacyCompany) {
    displayMessage(`Company with id: ${companyId} was not found!`);

    return;
  }

  const newCompany = Object.assign({}, legacyCompany, {
    name: getInputForProperty("company"),
    //developers: getDeveloperTypeFromInput(),
  });

  storage.updateCompany(companyId, newCompany);
}
