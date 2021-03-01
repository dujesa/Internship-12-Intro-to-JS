function handleCreateDeveloper(storage) {
  const newDeveloper = {
    fullName: sanitizeName(getInputForProperty("name")),
    employmentStatus: getEmploymentStatusFromInput(),
    company: getInputtedCompany(storage.getCompanies()),
    developerType: getDeveloperTypeFromInput(),
    programmingLanguages: getInputtedLanguages(
      storage.getProgrammingLanguages()
    ),
  };

  storage.addDeveloper(newDeveloper);
}

function handleUpdateDeveloper(storage) {
  developerId = getInputForProperty("id");
  const legacyDeveloperData = storage
    .getDevelopers()
    .find((developerData) => developerId == developerData.id);

  if (!legacyDeveloperData) {
    displayMessage(`Developer with id: ${developerId} was not found!`);

    return;
  }

  const { id, developer } = legacyDeveloperData;

  const newDeveloper = Object.assign(developer, {
    employmentStatus: getEmploymentStatusFromInput(),
    company: getInputForProperty("company"),
    developerType: getDeveloperTypeFromInput(),
  });

  storage.updateDeveloper(developerId, newDeveloper);
}

function handleDeleteDeveloper(storage) {
  developerId = getInputForProperty("id");
  const legacyDeveloperData = storage
    .getDevelopers()
    .find((developerData) => developerId == developerData.id);

  if (!legacyDeveloperData) {
    displayMessage(`Developer with id: ${developerId} was not found!`);

    return;
  }

  storage.deleteDeveloper(developerId);
}

function handleReadDevelopers(storage) {
  filterType = getFilterType();
  let developersForDisplay = [];

  switch (filterType) {
    case developersFilter.TYPE_FILTER:
      developersForDisplay = storage.getDevelopersByType(
        getDeveloperTypeFromInput()
      );
      break;
    case developersFilter.LANGUAGE_FILTER:
      developersForDisplay = storage.getDevelopersByProgrammingLanguages(
        getInputtedLanguages(storage.getProgrammingLanguages())
      );
      break;
    case developersFilter.EMPLOYMENT_FILTER:
      developersForDisplay = storage.getDevelopersByEmploymentStatus(
        getEmploymentStatusFromInput()
      );
      break;
    case developersFilter.NO_FILTER:
    default:
      developersForDisplay = storage.getDevelopers();
      break;
  }

  if (!developersForDisplay) {
    displayMessage(`No developers found.`);

    return;
  }

  developersNames = developersForDisplay.map((developerData) => {
    return developerData.developer ? developerData.developer.fullName : null;
  });

  displayMessage(`Developers: ${developersNames.join(", ")}`);
}
