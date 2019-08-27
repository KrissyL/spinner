process.stdout.write('hello from spinner1.js... \rheyyy\n');

const characters = ["|", "/", "-", "\\"];
const delay = 200;

const spinner = function(i) {
  process.stdout.write(`\r${characters[i % characters.length]}`);  if (i < 10) {
    setTimeout(() => {
      spinner(i + 1);
    }, delay);
  } else {
    process.stdout.write(`\r\n`);
  }
};

spinner(0);