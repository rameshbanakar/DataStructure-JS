//sets-- As et is data struture that can hold a collection of values. the values however must be unique.
//sets are iterable 
//set do not maintaine an insetion order
// sets can store mixed collection of data types


//searching and deleting the elements is faster in sets as compare to Arrays

const set=new Set([1,2,3,4])
console.log(set)
set.add(10)
set.add(10);
console.log(set)
console.log(set.has(3))
set.delete(4)
console.log(set);
console.log(set.size())
set.clear()