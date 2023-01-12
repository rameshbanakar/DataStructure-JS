const a = { name: "Ramesh", age: 22 };
console.log(a["name"]);
a["ph"] = 9108911421;
console.log(a);
delete a["age"];
console.log(a.name);
console.log(a);
