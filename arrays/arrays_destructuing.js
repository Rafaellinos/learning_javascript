

const nameData = ['Rafael', 'Veloso', 'Mr', 30];

// const firstName = nameData[0];
// const lastName = nameData[1];

// mesma coisa que o exemplo acima

const [firstName, lastName] = nameData;

console.log(firstName);
console.log(lastName);

const [firstName, lastName, ...lastInformation] = nameData;

// spread operator o ultimo elemento vira uma lista
