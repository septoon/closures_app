import setUpAttacks from './js/setUpAttacks';

const characters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];
const attacks = setUpAttacks(characters);
attacks[0]('маг', 33);

console.log(characters);
