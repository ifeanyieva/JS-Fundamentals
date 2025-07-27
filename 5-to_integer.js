const got = process.argv.slice(2);

firstArg = got[0];
secondArg = got[1];

const number = Number(firstArg);

if (Number(firstArg)){
    console.log(`My number: ${number}`);
} else {
    console.log(`Not a number`);
}


