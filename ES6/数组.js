//1、数组解构
var arr = [1,2,3];
var arr2 = [4,5,6];
arr2.unshift(...arr); //数组解构 1 2 3 4 5 6

//2、复制数组
var arr3 = arr.concat(); //不是指针是copy了

//3、与变量结构合并
[one,...other] = arr; //...只能放在最后一位
console.log(one);
console.log(other);
console.log([...'abc']); //转化字符串为数组

//4、与生成器结合
const go = function*() {
    yield 1;
    yield 2;
};
console.log(...go()); //1 2

