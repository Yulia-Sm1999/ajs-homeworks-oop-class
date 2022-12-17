export default class Character {
  constructor(playerData) {
    if ((playerData.name.length > 2) && (playerData.name.length < 10)) {
      this.name = playerData.name;
    } else {
      throw new Error('Неверное количество букв в имени!');
    }

    const options = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (options.some((el) => el === playerData.type)) {
      this.type = playerData.type;
    } else {
      throw new Error('Неверно выбран тип героя');
    }

    this.attack = playerData.attack;
    this.defence = playerData.defence;
  }

  getHealthAndLevel() {
    this.health = 100;
    this.level = 1;
  }
}
