const fs = require('fs');
const input = fs.readFileSync('../inputs/2021-02.txt', 'utf-8').split('\n');

const test = [
  'forward 5',
  'down 5',
  'forward 8',
  'up 3',
  'down 8',
  'forward 2',
];

// horizontal * vertical position at end, starting at 0, 0

const formatInput = input => {
  return input.reduce((instructions, curr) => {
    const instruction = curr.split(' ');
    instructions.push({ dir: instruction[0], dist: parseInt(instruction[1]) });
    return instructions;
  }, [])
};

// slightly altered for part 2

const findWhere = input => {
  const location = input.reduce((coords, instruction) => {
    if (instruction.dir === 'forward') {
      coords.x += instruction.dist;
      coords.y += coords.aim * instruction.dist;
    } else if (instruction.dir === 'up') {
      coords.aim -= instruction.dist;
    } else if (instruction.dir === 'down') {
      coords.aim += instruction.dist;
    };
    console.log(coords);
    return coords;
  }, { x: 0, y: 0, aim: 0 })

  return location.x * location.y;
};

console.log(findWhere(formatInput(input)));