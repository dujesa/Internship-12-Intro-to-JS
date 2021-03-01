function handleCreateProgrammingLanguage(storage) {
  const newProgrammingLanguage = {
    name: getInputForProperty("name"),
    developerIds: [],
  };

  storage.addProgrammingLanguage(newProgrammingLanguage);
}

function handleUpdateProgrammingLanguage(storage) {
  programmingLanguageId = getInputForProperty("id");
  const legacyProgrammingLanguageData = storage
    .getProgrammingLanguages()
    .find(
      (programmingLanguageData) =>
        programmingLanguageId == programmingLanguageData.id
    );

  if (!legacyProgrammingLanguageData) {
    displayMessage(
      `Programming language with id: ${programmingLanguageId} was not found!`
    );

    return;
  }

  const { id, programmingLanguage } = legacyProgrammingLanguageData;

  const newProgrammingLanguage = Object.assign(programmingLanguage, {
    name: getInputForProperty("name"),
  });

  storage.updateProgrammingLanguage(
    programmingLanguageId,
    newProgrammingLanguage
  );
}

function handleDeleteProgrammingLanguage(storage) {
  programmingLanguageId = getInputForProperty("id");
  const legacyProgrammingLanguageData = storage
    .getProgrammingLanguages()
    .find(
      (programmingLanguageData) =>
        programmingLanguageId == programmingLanguageData.id
    );

  if (!legacyProgrammingLanguageData) {
    displayMessage(
      `Programming language with id: ${programmingLanguageId} was not found!`
    );

    return;
  }

  storage.deleteProgrammingLanguage(programmingLanguageId);
}
