const a = [1, 2, 34, "ramesh", null];
console.log(a);
console.log(a[4]);

a.push(10);
a.pop();
a.shift();
a.unshift(30);
a.splice(3, 1, "javascript");
console.log(a);

for (let item of a) {
  console.log(item);
}
