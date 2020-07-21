//1、箭头函数
//返回对象时符号冲突，需要包一层小括号
let getTempItem = id => ({ id: id, name: "Temp" });
arr = [1,2,3];

//箭头函数操作数组
arr.map(x=>x*x);
console.log(arr);


//rest结合箭头函数
const numbers = (...values)=>{
    console.log(values)
};

numbers(1,2,3,4,5);


//this的指向
var id=8;
function foo(id) {
    setTimeout(()=>{
        console.log(this.id) //输出9
    },1000)
}

foo(9);

function foo2(id) {
    setTimeout(function () {
        console.log(this.id)
    },1000)
}


foo2.call({id:99});

