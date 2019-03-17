function setUpAttacks(item, shield = true) {
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
    Object.keys(item.values()).forEach(i => {
      isNull = !!(item[i].name === name && item[i].health === 0);
    });
    return isNull;
  };

  const calculationLife = (index, whoAttack) => {
    if ((item[index].health - whoAttack) < 0 || item[index].health === 0) {
      item[index].health = 0;
    } else if (item[index].health > 0) {
      item[index].health -= whoAttack;
    }
  };

  const damage = (name, integer) => {
    if (ifNull(name)) { return console.log('Game over'); }
    if (shield) {
      const doDamage = damageHero(integer);
      const { damageToThisHero, damageToAnyHero } = doDamage;
      Object.keys(item).forEach(index => {
        item[index].name === name ? calculationLife(index, damageToThisHero) : calculationLife(index, damageToAnyHero);
      });
    } else {
      Object.keys(item).forEach(index => {
        item[index].name === name ? calculationLife(index, integer) : '';
      });
    }
  };
  result.push(damage);

  return result;
}

export default setUpAttacks;
