//1、属性的简洁表示法
const name = 'bingo';
const  age = 18;
const  stu = {name,age}; //{name:bingo,age:18} 省略熟悉名字的话就是和变量名同名
console.log(stu);


// 2、属性表达式
var last_name = "last name";
var obj_age = "age";

var obj = {
  [last_name]:"bingo",
  [obj_age]:18,
  ['second-'+'name']:'biningo',
    ['say']:function () { //定义方法也可
        console.log("ok")
    }
};
console.log(obj);
console.log(obj['age'],obj['dd']); //18 undefined
obj.say();

console.log('------');
for (var i in obj){ //枚举所有属性名字
    console.log(i)
}

//3、对象新增加方法
var s1 ={
    name:"bingo"
};
var s2 = {
    name:"bingo"
};
var s3=s2;
console.log(Object.is(s1,s2),Object.is(s2,s3)); //是否严格相等=== false true


var s = {
    age:18,
    name:"biningo",
    hobby:['running','basketball']
};
console.log(Object.assign(s2, s)); //合并两个对象的属性 重叠会被后面的覆盖 浅拷贝

// 为对象添加属性
// 为对象添加方法
// 克隆对象
// 合并多个对象
// 为属性指定默认值



//values
console.log(Object.keys(s));
console.log(Object.values(s));
console.log(Object.entries(s)); //二维数组
var map = new Map(Object.entries(s)); //map结构
console.log(map);
console.log('----------------');
for(let i of map){
    console.log(i) //数组 包含两个元素 k v
}
for(let [k,v] of map){
    console.log(k,v) //数组 包含两个元素 k v
}

console.log('-----------');
for (let [k,v] of Object.entries(s)){
    console.log(k,v)
}




//node里面没有实现
//
// const entries = new Map([
//     ['foo', 'bar'],
//     ['baz', 42]
// ]);
//
// Object.fromEntries(entries);

