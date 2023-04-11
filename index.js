function findMatching(collection, str) {
  const match = collection.filter(
    (el) => el.toLowerCase() === str.toLowerCase()
  );
  return match;
}

// findMatching(["Marty", "Mary", "mary", "marty"], "Marty");
function fuzzyMatch(collection, str) {
  const match = collection.filter((el) => el.startsWith(str));
  return match;
}

function matchName(collection, str) {
  const match = collection.filter((el) => el.name === str);
  return match;
}
