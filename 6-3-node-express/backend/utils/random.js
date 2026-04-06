// TODO 2: Create & Implement getRandomInt function
function getRandomInt(min, max) {
  min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}