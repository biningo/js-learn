//1、Set

const s  = new Set();
[1,2,2,2,3,3,3,4,5,5].forEach(x=>s.add(x));
console.log(s);

const s2 = new Set([3,4,5,1,1,2]);
console.log(s2,s2.size);



//2、Map
var map = new Map();
map.set("name","icepan");
console.log(map.get("name"));


const items = [
    ['name', '张三'],
    ['title', 'Author']
];
var map = new Map(items);

for (let [key,val] of map) {
    console.log(key,val)
}




