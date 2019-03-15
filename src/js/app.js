export const characters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

export function setUpAttacks(item, shield = true) {
  const result = [];

  const damageHero = (integer) => {
    const count = item.filter(x => x.health === 0);
    const divider = item.length - count.length;
    const damageToHero = (((integer - (integer % divider)) / divider) + (integer % divider));
    const damageToAllHero = ((integer - (integer % divider)) / divider);
    const obj = { damageToThisHero: damageToHero, damageToAnyHero: damageToAllHero };
    return obj;
  };

  const ifNull = (name) => {
    let isNull = false;
    for (const i in item) {
      isNull = !!(item[i].name === name && item[i].health === 0);
    }
    return isNull;
  };

  const calculationLife = (index, whoAttack) => {
    if ((item[index].health - whoAttack) < 0 || item[index].health === 0) {
      item[index].health = 0;
    } else if (item[index].health > 0) {
      item[index].health -= whoAttack;
    }
    characters[index] = item[index];
  };

  const damage = (name, integer) => {
    if (ifNull(name)) { return console.log('Game over'); }
    if (shield) {
      const doDamage = damageHero(integer);
      const { damageToThisHero, damageToAnyHero } = doDamage;
      for (const index in item) {
        item[index].name === name ? calculationLife(index, damageToThisHero) : calculationLife(index, damageToAnyHero);
      }
    } else {
      for (const index in item) {
        item[index].name === name ? calculationLife(index, integer) : '';
      }
    }
  };
  result.push(damage);

  return result;
}
