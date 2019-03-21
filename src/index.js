import setUpAttacks from './js/setUpAttacks';

const characters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 3 },
  { name: 'мечник', health: 10 },
];
const attacks = setUpAttacks(characters);
attacks[1](10);
/* eslint-disable no-console */
console.log(characters);
