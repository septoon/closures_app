function setUpAttacks(item, shield = true) {
  function damageHero(damageToHero, integer) {
    const oneOfItem = damageToHero;
    // if (integer < 0) throw new Error('Атака не может быть отрицательной!');
    if (oneOfItem.health >= integer) {
      oneOfItem.health -= integer;
    } else {
      oneOfItem.health = 0;
    }
  }
  // eslint-disable-next-line func-names
  const result = item.map(damageToHero => (function (integer) {
    if (shield) {
      const itemHealth = item.filter(once => once.health > 0);
      const calculationDemage = (integer - (integer % itemHealth.length)) / itemHealth.length;
      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < itemHealth.length; index++) {
        if (damageToHero.name === itemHealth[index].name) {
          damageHero(itemHealth[index], calculationDemage + (integer % itemHealth.length));
        } else {
          damageHero(itemHealth[index], calculationDemage);
        }
      }
    } else damageHero(damageToHero, integer);
  }
  ));
  return result;
}

export default setUpAttacks;
