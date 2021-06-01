// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const patten = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']
for (let i  = 0; i < 10; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100 + i * 800);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300 + i * 800);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500 + i * 800);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 700 + i * 800);
}


// setTimeout(() => {
//   process.stdout.write(patten[0]);
// }, i * 200)

// setTimeout(() => {
//   process.stdout.write(patten[1]);
// }, i * 200)

// setTimeout(() => {
//   process.stdout.write(patten[2]);
// }, i * 200)

// setTimeout(() => {
//   process.stdout.write(patten[3]);
// }, i * 200)