# Node Introduce
Create by [huang.xinghui](http://huang-x-h.github.io/) / [@Github](https://github.com/huang-x-h)

---

# Agenda

- 什么是 Node.js 
- Node.js 能做什么
- Node.js 特性
- Node.js 生态环境

---

## 什么是 Node.js

---

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. 

Open-source, cross-plaform JavaScript runtime environment.

---

简单来说，Node.js 就是服务端 JavaScript

---

## Backgroud

- 2009年由 Ryan Dahl 创建
- 目前由 Node.js Foundation 维护
- 开源在 [github](https://github.com/nodejs/node)

> [Wiki Detail](https://en.wikipedia.org/wiki/Node.js)

---

## Node.js 能做什么

---

## 读写文件 File System

```js
const fs = require('fs');
fs.readFile('/etc/password', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

## 创建 HTTP Server

```js
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000);  
```

---

## 创建 TCP Server

```js
const net = require('net');
net.createServer((socket) => {
  socket.write('Echo Server');
  socket.on('data', function(data) {
    socket.write(data);
  });
}).listen(3000);
```

---

## 访问数据库 mongodb

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/node_chat', function (error) {
  if (error) {
    console.log(error);
  }
});

// Mongoose Schema definition
const Schema = mongoose.Schema;
var UserSchema = new Schema({
  username: String,
  password: String
});

// Mongoose Model definition
var User = mongoose.model('users', UserSchema);

User.find({}, function (err, users) {
  console.log(users);
});
```

---

## 创建一系列编译工具

yo/grunt/gulp/browserify/webpack 等等

---

## Node.js 有哪些特性

---

## 程序性能耗费大部分是等待IO处理上
![](https://raw.githubusercontent.com/huang-x-h/slides/gh-pages/node-introduce/images/io-cost.png)

---

## 处理方式大致有如下几种

- synchronous 同步处理 (这样处理某个请求会阻塞其他请求)
- fork a new process 多进程处理 (新起进程处理请求，太耗资源)
- threads 多线程处理 (新起线程处理请求，也耗资源，多线程时常要考虑资源抢占)

---

那么 Node.js 是怎么处理的呢

---

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 

---

## Node.js 特性
- event-driven 事件驱动
- non-blocking I/O 非阻塞 I/O
- single-threaded 单线程

---

![](https://raw.githubusercontent.com/huang-x-h/slides/gh-pages/node-introduce/images/non-blocking.png)

---

看看 Node.js 的架构设计图
![](https://raw.githubusercontent.com/huang-x-h/slides/gh-pages/node-introduce/images/architecture.png)

---

- v8 高性能JavaScript引擎，Google出品
- [libev](http://software.schmorp.de/pkg/libev.html) C语言库，提供异步特性，包含事件轮询/文件处理/网络处理/线程池等
- Application/Modules Node.js核心模块 (fs/path等)
- Bindings 提供JavaScript和Node.js里C/C++代码交互
- C/C++ Addons Node.js内部核心库 (zlib/OpenSSL等)

---

Node.js 

擅长于处理I/O密集型任务和实时性的任务

不擅长处理CPU密集型任务

---

## Node.js 生态系统

[npm](https://www.npmjs.com/) (Node Package Manager)模块包管理，是世界上最大开源库生态系统

方便发布/下载Node模块，如 express.js/socket.io

---

Node.js 目前版本维护情况
![](https://raw.githubusercontent.com/huang-x-h/slides/gh-pages/node-introduce/images/schedule.png)
https://github.com/nodejs/LTS

---

Node.js 对ECMAScript2015的特性支持很好
![](images/es2015-support.png)
http://node.green/

---

使用Node.js的公司有 GoDaddy, Groupon, IBM, LinkedIn, Microsoft, Netflix, PayPal, Walmart, Alibaba 等等.

https://github.com/nodejs/node/wiki/Projects,-Applications,-and-Companies-Using-Node

---

Jeff Atwood, co-founder of Stack Overflow 曾写过这样一句话

> any application that can be written in JavaScript, will eventually be written in JavaScript

---

## Any Questions?

---

## Resource

- [Node.js官网](https://nodejs.org/en/)
- [NodeSchool.io](http://nodeschool.io/)
- [Node入门](http://www.nodebeginner.org/index-zh-cn.html)
- [Understanding the Node.js Event Loop](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)
- [Architecture of Node.js’ Internal Codebase](https://medium.com/yet-another-node-js-blog/architecture-of-node-js-internal-codebase-57cd8376b71f)

---

## THE END
						
谢谢