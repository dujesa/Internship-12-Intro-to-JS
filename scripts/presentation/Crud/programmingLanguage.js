function handleCreateProgrammingLanguage(storage) {
  const newProgrammingLanguage = {
    name: getInputForProperty("name"),
  };

  storage.addProgrammingLanguage(newProgrammingLanguage);
}

function handleUpdateProgrammingLanguage(storage) {
  programmingLanguageId = getInputForProperty("id");
  const legacyProgrammingLanguage = storage.getDevelopers()[
    programmingLanguageId
  ];

  if (!legacyProgrammingLanguage) {
    displayMessage(
      `Programming language with id: ${programmingLanguageId} was not found!`
    );

    return;
  }

  const newProgrammingLanguage = Object.assign({}, legacyProgrammingLanguage, {
    name: getInputForProperty("name"),
  });

  storage.updateProgrammingLanguage(
    programmingLanguageId,
    newProgrammingLanguage
  );
}
