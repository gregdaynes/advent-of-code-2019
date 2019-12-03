const fs = require('fs');

readdir(__dirname)
  .then(filterFiles)
  .then(loadApps)
  .then(execute)
  .then(console.log);

function readdir(path) {
  return new Promise((res, reject) => {
    fs.readdir(path, (err, files) => (err) ? reject(err) : res(files))
  });
}

function filterFiles(files) {
  return new Promise((res, reject) => {
    res(files
      .filter(filename => filename.includes('day'))
      .filter(filename => !filename.includes('test'))
      .filter(filename => !filename.includes('data'))
    );
  });
}

function loadApps(files) {
  return new Promise((res, reject) => {
    const loaded = {};

    files.forEach(filename => {
      const dayNumber = filename.split('.')[0].slice(-2);
      loaded[dayNumber] = require(`${__dirname}/day${dayNumber}`);
    });

    res(loaded);
  });
}

function execute(apps) {
  const [dayNumber, part] = process.argv.slice(2);
  return apps[dayNumber][`part${part}`]();
}
