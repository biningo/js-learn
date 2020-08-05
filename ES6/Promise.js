function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, "icepan") //一秒后执行resolve 然后就会触发then的执行
    })
}

timeout(1000).then(val => { //val就是后面的参数
    console.log(val)
});

const flag = true;
let p = new Promise((resolve, reject) => {
    if (flag) {
        resolve("success")
    } else {
        reject("error") //失败调用这个方法
    }
});
p.then(value => {
    console.log(value)

}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log("finally")
});







