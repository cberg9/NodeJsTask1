const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const readline = require('readline');
const data = require('./package.json')
const os = require('os')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Choose an option:');
console.log('1. Read package.json')
console.log('2. Display OS info')
console.log('3. Start HTTP server')

app.listen(port, () => {


  rl.question('Type a number:', (answer) => {

    if (answer === '1') {
      console.log('Reading package.json file')
      console.log(data)


    } else if (answer === '2') {
      console.log('Getting OS info...')
      console.log('SYSTEM MEMORY', (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + ' GB');
      console.log("FREE MEMORY", (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + ' GB');
      console.log('CPU CORES', (os.cpus().length));
      console.log('ARCH', (os.arch()));
      console.log('PLATFORM', (os.platform()));
      console.log('RELEASE', (os.release()));
      console.log('USER', (os.userInfo().username));


    } else if (answer === '3') {
      console.log('Starting HTTP server...')
      console.log('Listening on port 3000...')
      app.get('/', (req, res) => res.status(200).send('<h1>Hello World!</h1>'))


    } else {
      console.log('An invalid option has been chosen..')

    };

    rl.close();
  });
})
