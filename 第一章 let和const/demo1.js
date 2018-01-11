## let  和 const 命令
`学习文档` `es6|入门`

-------------------------------
### 块级元素
**语句块**是零条或多条语句并用`{}`包裹，在ES6之前并没有独立的作用域，因为语句块起不到独立作用域的功能，所以很容易全局污染。
[语句块](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)不是对象字面量；
```
// 执行错误
{
	标签: function() {return 'hello'}
}
//正确执行
{
	标签：function fn() {return 'hello'}
}
```
标签+语句块和对象字面量很像，但是这并不一样
```
var a = {};
({toString:function(){return 'hello'}})+'...'
//hello...
```
这是正常的执行对象字面量

```
//立即执行函数
(function(){
	var tem = ...
}())
//语句块
{
	//a 代码
	var tem1 = ... 
}
{
	//b 代码
	var tem2 = ... 
}
```
在es5标准的时候我们都是这么写函数，主要原因就是变量有独立的作用域，避免变量的污染
在es6的标准语句块也是具有作用域的，所以我们可以以这种方式来写代码了

如果在语句块中声明函数是存在一些弊端的，es6的环境中语句块中声明函数遵守三条规则：

>允许在块级作用域内声明函数。
>函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
>同时，函数声明还会提升到所在的块级作用域的头部。

```
//方法一
{
	let a = 10;
	let f = function () {console.log(a)}
}
a ;//undefined
f();//undefined
//方法二
{
	let a = 10;
	function f(){console.log(a)}
}
f(); //10
```
方法一是利用函数表达式的形式，这里的并没有把函数提升到全局作用域，方法二是以函数声明的方式，这样是可以全局调用的。之前提到的弊端就在这里
```
// 浏览器的 ES6 环境
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }
  f();
}());
// Uncaught TypeError: f is not a function
```
所以不建议使用方法二的方式

es6使用语句块一方面是内层变量覆盖外层变量，另一方面可以循环声明的临时变量的变量泄漏

> do 表达式只是提案为语句块有返回值

### let命令
-------------------------------
es6新增let命令类似于var声明变量，不同点在于:

- 不存在变量提升
```
console.log(bar); // 报错ReferenceError
let bar = 2;
```
- 暂时性死区
```
//情况一
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}

//情况二
typeof x; // ReferenceError
let x;

//情况三
function bar(x = y, y = 2) {
  return [x, y];
}
bar(); // 报错

//情况四
let x = x;
// ReferenceError: x is not defined
```
- 不允许重复声明
```
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}

function func(arg) {
  let arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}
```
***const 命令
const的是es6新增的声明常量的命令，其本质是保证指向内存的指针不变，所以对于复合类型（例如对象和数组）无法保证指针所指向的内存中存储的指针发生变化。
使用Object.freeze() 可以使对象或者数组常量不能更改

>Object.freeze() 方法可以冻结一个对象，冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。也就是说，这个对象永远是不可变的。该方法返回被冻结的对象。
```
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};
```

###ES6 声明变量的六种方法 

ES5 只有两种声明变量的方法：`var`命令和`function`命令。ES6 除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：`import`命令和`class`命令。所以，ES6 一共有 6 种声明变量的方法。

###global 对象