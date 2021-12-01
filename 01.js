const fs = require('fs');
const input = fs.readFileSync('../inputs/2021-01.txt', 'utf-8').split('\n');
const test = [
  '199',
  '200',
  '208',
  '210',
  '200',
  '207',
  '240',
  '269',
  '260',
  '263',
];

// Count how many times the depth measure increases

const howManyIncreases = depths => {
  return depths.reduce((increases, depth, index) => {
    // console.log(increases, depth, depths[index - 1]);
    if (parseInt(depth) > parseInt(depths[index - 1])) {
      increases++;
    }
    return increases;
  }, 0)
};

// console.log(howManyIncreases(test));
// console.log(howManyIncreases(input));

// Count how many times the window (curr + next + the one after that) increases

const howManyWindowIncreases = depths => {
  return depths.reduce((data, depth, index) => {
    // console.log(data);
    if (index >= depths.length - 2) {
      return data;
    } else if (index === 0) {
      return data;
    } else if ((depth + depths[index + 1] + depths[index + 2]) > data.lastWindow) {
      data.total++;
    }
    data.lastWindow = depth + depths[index + 1] + depths[index + 2];
    return data;
  }, { lastWindow: 0, total: 0 })
};

console.log(howManyWindowIncreases(input.map(depth => parseInt(depth))));
