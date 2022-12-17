import Bowman from '../src/Bowman';
import Swordsman from '../src/Swordsman';
import Magician from '../src/Magician';
import Undead from '../src/Undead';
import Zombie from '../src/Zombie';
import Daemon from '../src/Daemon';

test('should make new Bowman', () => {
  const realBowman = new Bowman({ name: 'Clark', type: 'Bowman' });
  const expectedBowman = {
    name: 'Clark',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(realBowman).toEqual(expectedBowman);
});

test('should not make new Bowman', () => {
  expect(() => new Bowman({ name: 'Clark', type: 'Bowmans' })).toThrow(new Error('Неверно выбран тип героя'));
});

test('should not make new Bowman as well', () => {
  expect(() => new Bowman({ name: 'C', type: 'Bowman' })).toThrow(new Error('Неверное количество букв в имени!'));
});

test('should make new Swordsman', () => {
  const realSwordsman = new Swordsman({ name: 'Ben', type: 'Swordsman' });
  const expectedSwordsman = {
    name: 'Ben',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(realSwordsman).toEqual(expectedSwordsman);
});

test('should make new Magician', () => {
  const realMagician = new Magician({ name: 'Max', type: 'Magician' });
  const expectedMagician = {
    name: 'Max',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(realMagician).toEqual(expectedMagician);
});

test('should make new Undead', () => {
  const realUndead = new Undead({ name: 'Lex', type: 'Undead' });
  const expectedUndead = {
    name: 'Lex',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(realUndead).toEqual(expectedUndead);
});

test('should make new Zombie', () => {
  const realZombie = new Zombie({ name: 'Beast', type: 'Zombie' });
  const expectedZombie = {
    name: 'Beast',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(realZombie).toEqual(expectedZombie);
});

test('should make new Daemon', () => {
  const realDaemon = new Daemon({ name: 'Andres', type: 'Daemon' });
  const expectedDaemon = {
    name: 'Andres',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(realDaemon).toEqual(expectedDaemon);
});
