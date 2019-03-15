import { setUpAttacks } from '../src/js/app';

test('demageHero', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters);
  attacks[0]('маг', 25);

  expect(characters).toEqual([
    { name: 'маг', health: 91 },
    { name: 'лучник', health: 72 },
    { name: 'мечник', health: 2 },
  ]);
});
