import { setUpAttacks, characters } from './js/app';

const attacks = setUpAttacks(characters);
attacks[0]('маг', 25);

console.table(characters);
