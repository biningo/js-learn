//1、遍历数组
let names = ["one","tow","three"];
for (var name of names){ //name就是值
    console.log(name)
}
for(var i in names){
    console.log(i) //索引
}

//2、遍历对象
let Student = {
    Name:"icepan",
    Age:18
};
for (var s in Student){ //不能使用for-of  s就是对象的属性名字 Name、Age
    console.log(s,Student[s])
}



//3、遍历字符串
for (var s of "abcdefg"){
    console.log(s) //每个字母   in的话就是索引
}


//4、遍历Map
const map = new Map([['name','bingo'],['age',18]]);
for (var [k,v] of map){
    console.log(k,v)
}
