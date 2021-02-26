function sanitizeName(name) {
  let lowerCasedName = name.toLowerCase();
  let names = lowerCasedName.split(" ");
  let validNames = names.filter((name) => name.length > 0);

  let capitalizedNames = validNames.map(
    (name) => name[0].toUpperCase() + name.slice(1)
  );

  return capitalizedNames.join(" ");
}
