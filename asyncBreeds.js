const fs = require('fs');

const breedDetailsFromFile = function (breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callback(data);
  });
};

const thisIsCallBackFunction = (data) => {
  console.log(data)
}

const bombay = breedDetailsFromFile('Bombay', (bombay) => {
  console.log('Return Value: ', bombay);
});