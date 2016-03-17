# JavaScript Introduce
Create by [huang.xinghui](http://huang-x-h.github.io/) / [@Github](https://github.com/huang-x-h)

---

# Agenda					
- Function 函数
- Feature 语言特性
- Module 模块化

---

# Function - Introduce					
`JavaScript` 是动态，无类型，解析性语言

函数在 `JavaScript` 里属于一等公民，基本所有特性都是基于 `Function` 展开的

高阶函数(Lambda)，函数也能当做参数进行传递和返回

---

# Function - Declaration

	function name([param[, param[, ... param]]]) {
	  statements
	}

- `name` 函数名称
- `param` 函数参数
- `statements` 函数体

---

# Function - Constructor

函数定义还可以通过构造函数

**不推荐**，因为函数体定义为字符串，会阻止浏览器优化处理

	new Function (arg1, arg2, ... argN, functionBody)

---

# Function - Example
					
	function foo() {}
	
	var foo = function() {}

	// 高阶函数
	function foo() {
	  function bar() {}
	  
	  return bar;
	}

---

# Function - Class 类

`JavaScript` 如何实行类？

	function Person() {
	  ...
	}

	var p1 = new Person();

`new` 关键字

[`ES6 Class`](http://exploringjs.com/es6/ch_classes.html) 

---

# Function - Currying 柯理化

什么是柯理化

柯理化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术 [Wiki](https://zh.wikipedia.org/wiki/%E6%9F%AF%E9%87%8C%E5%8C%96)

---

# Function - Currying Example

	var greet = function(greeting, name) {
	  console.log(greeting + ", " + name);
	}

	// 柯理化
	var greetCurried = function(greeting) {
	  return function(name) {
	    console.log(greeting + ", " + name);
	  };
	};

	var greetHello = greetCurried("Hello");
	greetHello("Han Meimei");

---

# Feature 语言特性
					
- Prototype 原型链
- Scope 作用域
- Closure 闭包

---

# Prototype - Introduce
					
`JavaScript` 不包含传统的类继承特性，而是使用原型继承

---

# Prototype - Example
					
	function Person(name) {
	  this.name = name;
	}
	
	Person.prototype.sayHello = function() {
	  console.log(this.name, 'say hello');
	}
	
	var p1 = new Person('Han Meimei');
	p1.sayHello();
	
	var p2 = new Person('Li Lei');
	p2.sayHello();

---

# Protype - Inherit
					
	function Person(name) {
	  this.name = name;
	}
	
	Person.prototype.sayHello = function() {
	  console.log(this.name, 'say hello');
	}
	
	function Police(name) {
	  this.career = 'Police';
	  Person(name);
	}
	
	Police.prototype = new Person();
	Police.prototype.constructor = Police;
	Police.prototype.sayCareer = function() {
	  console.log('I am a ', this.career);
	}
	
	var p = new Police('Han Meimei');
	p.sayHello();
	p.sayCareer();

---

# Prototype - Trap
					
原型链上定义的属性，都是可以实例继承的

一般原型链上定义方法函数，如果要在原型链上定义属性，一定要注意

---

# Prototype - Trap
					
	function Person() {
	}
	
	Person.prototype.name = 'Person';
	
	var p1 = new Person();
	var p2 = new Person();
	
	p1.name = 'Han Meimei';
	p2.name = 'Li Lei';
	
	console.log(p1.name);

---

# Scope - Introduce
					
在 `JavaScript` 作用域只有函数作用域和全局作用域，没有块作用域

但是 [ES6](http://es6-features.org/)提供 `let` 关键字支持块作用域

---

# Scope - Hosting
					
	function foo1() {
	  function foo2() {
		console.log(a);
	  }
	  
	  var a = 1;
	}

---

# Scope - this
					
`this` 工作情况常有以下6种

---

# Scope - this (1)
					
全局对象，比如在 `browser` 则为 `window`，在 `nodejs` 则为 `global`

	console.log(this);

---

# Scope - this (2)
					
函数调用，这时指全局对象 `window/global`

	function foo() {
	  console.log(this);
	}

---

# Scope - this (3)
					
方法调用，指向对象

	var o = {
	  foo: function() {
		console.log(this);
	  }
	};
	o.foo();
	// foo 函数里访问 `this` 则为 `o` 对象

---

# Scope - this (4)
					
构造方法调用，指向对象

	var p = new Person();
	p.sayHello();
	// sayHello 函数里访问 `this` 则为 `p` 对象

---

# Scope - this (5)
						
显示设置 `this`

	var foo = function(a, b, c){ console.log(this, a, b, c) };
	var bar = {};
	
	foo.apply(bar, [1, 2, 3]); // 参数数组传递
	foo.call(bar, 1, 2, 3);
	foo.bind(bar, 1, 2, 3)(); // ie9+ 支持
	
`Tips:` 方便记忆 `apply` 等同于 `array`, `call` 等同于 `comma` 

[Function Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)

---

# Scope - this (6)						
`Dom` 里使用函数监听回调方法，`this` 指向 `Dom` 元素

	var btn = document.querySelector('#btn');
	btn.addEventListener('click', function(e) {
	  console.log(this); // `this` 为 `btn` 元素
	});

---

# Closure - Introduce
闭包，简单的来说是内部函数里可以访问外部函数里定义的变量参数

---

# Closure - Example
					
	function sayHello(name) {
	  var text = 'Hello ' + name;
	  var say = function() { console.log(text); }
	  return say;
	}
	
	sayHello('Han Meimei')();
	
> [how-do-javascript-closures-work](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work)

---

# Closure - Usage
					
闭包，常用实现私有变量或者私有方法

	function Constructor(...) {
	  var memberfield = value;
	  function membermethod(...) {...}
	}

	// `memberfield` 为 `private` 变量
	// `membermethod` 为 `private` 方法

---

# Module - Introduce
					
模块的出现，让前端能够工业化开发，抛弃之前全局变量/函数满天飞，规范前端开发

`JavaScript` 世界中现在流行三种模块化

- ES6 Module
- CommonJS(NodeJS)
- AMD(Asynchronous Module Definition)

---

# Module - ES6 Module
					
	//------ lib.js ------
	export const sqrt = Math.sqrt;
	export function square(x) {
		return x * x;
	}
	export function diag(x, y) {
		return sqrt(square(x) + square(y));
	}

	//------ main.js ------
	import { square, diag } from 'lib';
	console.log(square(11)); // 121
	console.log(diag(4, 3)); // 5		

[ES6 Module Detail](http://www.2ality.com/2014/09/es6-modules-final.html)	

---

# Module - CommonJS
				
	var fs = require('fs'); // import 'fs' module
	var foo = function() {};
	module.exports = foo； // export module
	
[NodeJS Module](https://nodejs.org/docs/latest/api/modules.html)

---

# Module - AMD
				
- define
- require	

---

# AMD - Define
				
define(id?, dependencies?, factory);

- 模块名称，可选
- 依赖模块，可选
- 模块函数定义

		define("alpha", ["beta"], function (beta) {
		  return {
			verb: function() {
			  return beta.verb();
			}
		  }	 
		});

---

# AMD - Require
					
require(Array, Function)
- 模块名称，可选
- 执行函数

		require(['a', 'b'], function (a, b) {
		  //modules a and b are now available for use.
		});

---

# AMD - Tooling
					
主要使用[RequireJS](http://requirejs.org/)来实现模块定义和加载

---

# Resource
					
- [JavaScript Garden](http://bonsaiden.github.io/JavaScript-Garden/zh/)			
- [Learning Advanced JavaScript](http://ejohn.org/apps/learn/)
- [Speaking JavaScript](http://speakingjs.com/es5/index.html)
- [ES6-features](http://es6-features.org/)
- [Exploring ES6](http://exploringjs.com/es6/)
- [ES6 In Depth](https://hacks.mozilla.org/category/es6-in-depth/)
				
---

# THE END
						
谢谢