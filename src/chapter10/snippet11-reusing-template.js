// tagged template literals，重复使用
const formatUser = (firstName, lastName, handle) =>
    `${firstName} ${lastName} (${handle})`;
console.log(formatUser("Joe", "Bloggs", "@joebloggs"));
