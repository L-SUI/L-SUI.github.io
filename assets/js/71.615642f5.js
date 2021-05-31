(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{424:function(s,v,e){"use strict";e.r(v);var a=e(25),_=Object(a.a)({},(function(){var s=this,v=s.$createElement,e=s._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"nodejs-初探"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-初探"}},[s._v("#")]),s._v(" NodeJS 初探")]),s._v(" "),e("p",[s._v("根据 Node.js 官网的定义："),e("strong",[s._v("Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效")]),s._v("。")]),s._v(" "),e("p",[s._v("官网的定义言简意赅，但不容易理解，用白话解释一下：Node.js 不是一门语言也不是框架，它只是基于 Google V8 引擎的 JavaScript 运行时环境，同时结合 Libuv 扩展了 JavaScript 功能，使之支持 io、fs 等只有语言才有的特性，使得 JavaScript 能够同时具有 DOM 操作(浏览器)和 I/O、文件读写、操作数据库(服务器端)等能力，是目前最简单的全栈式语言。")]),s._v(" "),e("p",[s._v("Node.js 可用于多个领域的开发，例如：")]),s._v(" "),e("ul",[e("li",[s._v("客户端应用程序（nw.js/electron）")]),s._v(" "),e("li",[s._v("后端（webapi，网站等）")]),s._v(" "),e("li",[s._v("工具（gulp，webpack 等构架工具）")]),s._v(" "),e("li",[s._v("物联网，硬件（ruff）")])]),s._v(" "),e("h2",{attrs:{id:"知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[s._v("#")]),s._v(" 知识点")]),s._v(" "),e("ul",[e("li",[s._v("Node.js 基础")]),s._v(" "),e("li",[s._v("Node.js 异步编程")]),s._v(" "),e("li",[s._v("Node.js 内存管理与优化")]),s._v(" "),e("li",[s._v("Node.js 测试与部署")])]),s._v(" "),e("h2",{attrs:{id:"node-js-基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-基础"}},[s._v("#")]),s._v(" Node.js 基础")]),s._v(" "),e("p",[s._v("Node.js 是基于 Chrome V8 引擎构建的，由事件循环（Event Loop）分发 I/O 任务，最终工作线程（Work Thread）将任务丢到线程池（Thread Pool）里去执行，而事件循环只要等待执行结果就可以了。我们先来看一下 Node.js 早期的架构图。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://static.cnodejs.org/Fh2MIT1r4YStGl9ZEEzt7N4lEbqX",alt:"Node.js 基础"}})]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("Node.js Bindings 层")]),s._v(" 将 Chrome V8 等暴露的 C/C++ 接口转成 JavaScript Api，并且结合这些 Api 编写了 Node.js 标准库，所有这些 Api 统称为 Node.js SDK。")]),s._v(" "),e("li",[e("strong",[s._v("V8 层")]),s._v(" 是 Google 发布的开源 JavaScript 引擎，主要是将 JS 代码编译成原生机器码。")]),s._v(" "),e("li",[e("strong",[s._v("Thread Pool 层")]),s._v("：专门用来执行任务，执行完成后，将结果返回给 EventLoop 层。")]),s._v(" "),e("li",[e("strong",[s._v("EventLoop 层")]),s._v("：事件循环层，我们的代码在执行时，首先由 Event Loop 来接受处理，而真正执行操作的是具体的线程池（Thread Pool）里的 I/O 任务。之所以说 Node.js 是单线程，就是因为在接受任务的时候是单线程的，它无需进程/线程切换上下文的成本，非常高效，但它在执行具体任务的时候是多线程的。")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("Event Loop 事件循环，Thread Pool 线程池都是由 Libuv 提供，Libuv 是整个 Node.js 运行的核心。")])]),s._v(" "),e("h2",{attrs:{id:"异步编程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步编程"}},[s._v("#")]),s._v(" 异步编程")]),s._v(" "),e("p",[s._v("异步编程是 Node.js 的一大特色，掌握好 Node.js 的异步编程是每个 Node.js 开发者必备的技能。")]),s._v(" "),e("h3",{attrs:{id:"异步-io-的好处"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步-io-的好处"}},[s._v("#")]),s._v(" 异步 IO 的好处")]),s._v(" "),e("ul",[e("li",[s._v("前端通过异步 IO 可以消除阻塞。")]),s._v(" "),e("li",[s._v("请求耗时少，假如有两个请求 A 和 B，那么异步 IO 用时为：Max（A+B）。同步则为 A+B，请求越多差距越大。")]),s._v(" "),e("li",[s._v("IO 是昂贵的，分布式 IO 是更昂贵的。")]),s._v(" "),e("li",[s._v("Node.js 适用于 IO 密集型，而不适用于 CPU 密集型。")]),s._v(" "),e("li",[s._v("并不是所有都用异步任务好，遵循一个公式： s= (Ws+Wp)/(Ws+Wp/p) Ws 表示同步任务，Wp 表示异步任务，p 表示处理器的数量。")])]),s._v(" "),e("h3",{attrs:{id:"node-js-对异步-io-的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-对异步-io-的实现"}},[s._v("#")]),s._v(" Node.js 对异步 IO 的实现")]),s._v(" "),e("p",[s._v("我们来看一下 Node.js 异步 IO 实现图：")]),s._v(" "),e("p",[e("img",{attrs:{src:"/node/node_async.png",alt:"异步IO"}})]),s._v(" "),e("ul",[e("li",[s._v("应用程序先将 JS 代码经 V8 转换为机器码。")]),s._v(" "),e("li",[s._v("通过 Node.js Bindings 层，向操作系统 Libuv 的事件队列中添加一个任务。")]),s._v(" "),e("li",[s._v("Libuv 将事件推送到线程池中执行。")]),s._v(" "),e("li",[s._v("线程池执行完事件，返回数据给 Libuv。")]),s._v(" "),e("li",[s._v("Libuv 将返回结果通过 Node.js Bindings 返回给 V8。")]),s._v(" "),e("li",[s._v("V8 再将结果返回给应用程序。")])]),s._v(" "),e("p",[s._v("Libuv 实现了 Node.js 中的 Eventloop ，主要有以下几个阶段：")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("   ┌───────────────────────────┐\n┌─"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("│           timers          │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │     pending callbacks     │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │       idle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" prepare       │\n│  └─────────────┬─────────────┘      ┌───────────────┐\n│  ┌─────────────┴─────────────┐      │   incoming"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("   │\n│  │           poll            │"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("─────┤  connections"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" │\n│  └─────────────┬─────────────┘      │   data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" etc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("  │\n│  ┌─────────────┴─────────────┐      └───────────────┘\n│  │           check           │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n└──┤      close callbacks      │\n   └───────────────────────────┘\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("上图中每一个阶段都有一个先进先出的回调队列，只有当队列内的事件执行完成之后，才会进入下一个阶段。")]),s._v(" "),e("ul",[e("li",[s._v("timers：执行 "),e("code",[s._v("setTimeout")]),s._v(" 和 "),e("code",[s._v("setInterval")]),s._v(" 中到期的 callback。")]),s._v(" "),e("li",[s._v("pending callbacks：上一轮循环中有少数的 I/O callback 会被延迟到这一轮的这一阶段执行。\n"),e("ul",[e("li",[s._v("执行一些系统操作的回调，例如 tcp 连接发生错误。")])])]),s._v(" "),e("li",[s._v("idle, prepare：仅内部使用。")]),s._v(" "),e("li",[s._v("poll：最为重要的阶段，执行 I/O callback(node 异步 api 的回调，事件订阅回调等)，在适当的条件下会阻塞在这个阶段。\n"),e("ul",[e("li",[s._v("如果 poll 队列不为空，直接执行队列内的事件，直到队列清空。")]),s._v(" "),e("li",[s._v("如果 poll 队列为空。\n"),e("ul",[e("li",[s._v("如果有设置 setImmediate，则直接进入 check 阶段。")]),s._v(" "),e("li",[s._v("如果没有设置 setImmediate，则会检查是否有 timers 事件到期。\n"),e("ul",[e("li",[s._v("如果有 timers 事件到期，则执行 timers 阶段。")]),s._v(" "),e("li",[s._v("如果没有 timers 事件到期，则会阻塞在当前阶段，等待事件加入。")])])])])])])]),s._v(" "),e("li",[s._v("check：执行 "),e("code",[s._v("setImmediate")]),s._v(" 的 callback。")]),s._v(" "),e("li",[s._v('close callbacks：执行 close 事件的 callback，例如 socket.on("close",func)。')])]),s._v(" "),e("p",[e("strong",[s._v("除此之外，Node.js 提供了 process.nextTick(微任务，promise 也一样) 方法，在以上的任意阶段开始执行的时候都会触发。")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("小知识")]),s._v(" "),e("ul",[e("li",[s._v("Event Loop 是一个很重要的概念，指的是计算机系统的一种运行机制。")]),s._v(" "),e("li",[s._v("Libuv 在 Linux 下基于 Custom Threadpool 实现。")]),s._v(" "),e("li",[s._v("Libuv 在 Windows 下基于 IOCP 实现。")])])]),s._v(" "),e("h3",{attrs:{id:"常用的异步-io-使用方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用的异步-io-使用方式"}},[s._v("#")]),s._v(" 常用的异步 IO 使用方式")]),s._v(" "),e("ul",[e("li",[s._v("使用 step，q，async 等异步控制库。")]),s._v(" "),e("li",[s._v("使用 Promise 处理异步。")]),s._v(" "),e("li",[s._v("使用 EventEmitter，实现“发布/订阅”模式处理异步。")]),s._v(" "),e("li",[s._v("Node.js 暂不支持协程，可使用 Generator 代替。")]),s._v(" "),e("li",[s._v("终极解决方案：async、await。")])]),s._v(" "),e("h2",{attrs:{id:"node-js-内存管理与优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-内存管理与优化"}},[s._v("#")]),s._v(" Node.js 内存管理与优化")]),s._v(" "),e("p",[s._v("Node.js 是单线程的，所以必须保证这个线程持续稳定，最容易导致 Node.js 应用程序挂掉的因素是内存泄漏。常见的内存泄漏：")]),s._v(" "),e("ul",[e("li",[s._v("无限增长的数组。")]),s._v(" "),e("li",[s._v("无限制设置对象的属性和值。")]),s._v(" "),e("li",[s._v("任何模块的私有变量都是永驻的。")]),s._v(" "),e("li",[s._v("大循环，无 GC 机会。")]),s._v(" "),e("li",[s._v("队列消费不及时。")]),s._v(" "),e("li",[s._v("全局变量太多。")])]),s._v(" "),e("p",[s._v("Node.js 采用 V8 的 分代式垃圾回收策略，将内存分为"),e("strong",[s._v("新生代内存")]),s._v("和"),e("strong",[s._v("老生代内存")]),s._v("。")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("新生代内存")]),s._v("通过 Scavenge 算法，将内存分为 From 空间 和 To 空间，初始时 From 空间存放所有对象，To 空间空闲。在一次垃圾回收时，清除 From 空间中没有使用的对象，然后将 To 空间和 From 交换。")]),s._v(" "),e("li",[e("strong",[s._v("老生代内存")]),s._v("通过 Mark-Sweep 和 Mark-compact，标记清除和移动清除。标记没有使用的内存空间，标记完毕后进行统一清除，清除后为了避免内存空间不连续，会将已使用的内存连在一起，放在队列的一端，然后清除另一端的所有内存空间。")])]),s._v(" "),e("h2",{attrs:{id:"node-js-调试与部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-调试与部署"}},[s._v("#")]),s._v(" Node.js 调试与部署")]),s._v(" "),e("p",[s._v("由于 Node.js 单线层的原因，所以 Node.js 的调试和部署特别重要，因为一旦出错，整个应用程序就挂了。")]),s._v(" "),e("h3",{attrs:{id:"node-js-调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-调试"}},[s._v("#")]),s._v(" Node.js 调试")]),s._v(" "),e("ul",[e("li",[s._v("node --inspect app.js\n"),e("ul",[e("li",[s._v("打开浏览器进行调试：chrome://inspect/#devices")])])]),s._v(" "),e("li",[s._v("使用 vscode 自带的调试。")])]),s._v(" "),e("h3",{attrs:{id:"node-js-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-部署"}},[s._v("#")]),s._v(" Node.js 部署")]),s._v(" "),e("p",[s._v("Node.js 端一般不会直接当成项目后端来使用，而是当成一个 BFF 层来使用。具体要怎么架构呢？")]),s._v(" "),e("p",[s._v("这是一个 Node.js 项目架构。")]),s._v(" "),e("p",[e("img",{attrs:{src:"/node/node_backend.png",alt:"node后端"}})]),s._v(" "),e("ul",[e("li",[s._v("用户请求 Node.js 服务器。")]),s._v(" "),e("li",[s._v("经过 LVS 传输层负载均衡。")]),s._v(" "),e("li",[s._v("经过 Nginx 服务器，反向代理，负载均衡到多个 PM2 运行的机器上。\n"),e("ul",[e("li",[s._v("PM2 守护进程，保证 Node.js 进程永远都活着, Node.js 挂掉后自动 0 秒的重载。")])])]),s._v(" "),e("li",[s._v("配置 Varnish、Squid，实现服务器 HTTP 缓存。")]),s._v(" "),e("li",[s._v("Node.js 作为 Web 服务器层，会将请求转发给 Java 服务器。\n"),e("ul",[e("li",[s._v("配置心跳检测 Heartbeats，检测 Java 端是否挂掉。")])])]),s._v(" "),e("li",[s._v("Java 服务器根据请求，进行相应的处理，可能会对数据库进行读写操作。")]),s._v(" "),e("li",[s._v("读取或写入 Database。\n"),e("ul",[e("li",[s._v("只读数据库。")]),s._v(" "),e("li",[s._v("只写数据库。")])])]),s._v(" "),e("li",[s._v("Java 服务器将数据库访问结果返回给 Node.js 层。")]),s._v(" "),e("li",[s._v("Node.js 层将结果返回给用户。")])]),s._v(" "),e("h4",{attrs:{id:"node-js-web-端应用程序部署流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-web-端应用程序部署流程"}},[s._v("#")]),s._v(" Node.js Web 端应用程序部署流程")]),s._v(" "),e("ul",[e("li",[s._v("单元测试。")]),s._v(" "),e("li",[s._v("压力测试，性能分析工具找 Bug。\n"),e("ul",[e("li",[s._v("提前发现内存泄漏问题。")]),s._v(" "),e("li",[s._v("根据压力测试，准确计算 QPS ，推算出服务器性能。")])])]),s._v(" "),e("li",[s._v("静态资源上传到 CDN。")]),s._v(" "),e("li",[s._v("配置 Nginx 实现负载均衡和反向代理。")]),s._v(" "),e("li",[s._v("开启 PM2 守护进程，小流量灰度上线。")])]),s._v(" "),e("p",[s._v("剩下的工作交给运维和后端去完成，例如：配置 Web 服务器缓存 Varnish，心跳检测等。")])])}),[],!1,null,null,null);v.default=_.exports}}]);