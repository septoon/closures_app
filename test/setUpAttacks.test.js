import setUpAttacks from '../src/js/setUpAttacks';

test('with shield on', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters);
  attacks[1](9);

  expect(characters).toEqual([
    { name: 'маг', health: 97 },
    { name: 'лучник', health: 77 },
    { name: 'мечник', health: 7 },
  ]);
});

test('with shield off', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters, false);
  attacks[1](9);

  expect(characters).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 71 },
    { name: 'мечник', health: 10 },
  ]);
});

test('with zero attack', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters, false);
  attacks[1](0);

  expect(characters).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('with zero health', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 0 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters);
  attacks[1](10);

  expect(characters).toEqual([
    { name: 'маг', health: 95 },
    { name: 'лучник', health: 0 },
    { name: 'мечник', health: 5 },
  ]);
});

test('with all zero health', () => {
  const characters = [
    { name: 'маг', health: 0 },
    { name: 'лучник', health: 0 },
    { name: 'мечник', health: 0 },
  ];
  const attacks = setUpAttacks(characters);
  attacks[1](10);

  expect(characters).toEqual([
    { name: 'маг', health: 0 },
    { name: 'лучник', health: 0 },
    { name: 'мечник', health: 0 },
  ]);
});


test('with remainder of the division', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters);
  attacks[1](10);

  expect(characters).toEqual([
    { name: 'маг', health: 97 },
    { name: 'лучник', health: 76 },
    { name: 'мечник', health: 7 },
  ]);
});

test('one of health is zero', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 0 },
  ];
  const attacks = setUpAttacks(characters);
  attacks[1](10);

  expect(characters).toEqual([
    { name: 'маг', health: 95 },
    { name: 'лучник', health: 75 },
    { name: 'мечник', health: 0 },
  ]);
});

test('one of health is zero', () => {
  const characters = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 3 },
    { name: 'мечник', health: 10 },
  ];
  const attacks = setUpAttacks(characters);
  attacks[1](10);

  expect(characters).toEqual([
    { name: 'маг', health: 97 },
    { name: 'лучник', health: 0 },
    { name: 'мечник', health: 7 },
  ]);
});

// test('with a negative attack', () => {
//   const characters = [
//     { name: 'маг', health: 100 },
//     { name: 'лучник', health: 80 },
//     { name: 'мечник', health: 10 },
//   ];
//   const attacks = setUpAttacks(characters);
//   attacks[1](-5);

//   expect(characters).toThrow();
// });
