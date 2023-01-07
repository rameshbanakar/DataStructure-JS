//map--A map is an unordered colletion of key-value paires.Both keys and values can be of any data type
//map are iterable
//map can retrieve a value by using the key

//obj vs maps
//------------
//objects are unorderd whereas map are oredred
//keys in objects can only be string or symbo; type whereas in maps they can be of any type
//oblects are not iterable but maps are iterables

const map=new Map([['a',1],['b',2]])
map.set('c',3)
console.log(map.has('c'))
map.delete("c")
for(const [key,value] of map){
    console.log(`${key}:${value}`)
}
map.clear()