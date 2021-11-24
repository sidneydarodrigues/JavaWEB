console.time('100-elements');
for (let i = 0; i < 1000000; i++) {}
console.timeEnd('100-elements');

console.log("deu erro");
console.error(new Error("deu erro"));