(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{426:function(t,_,v){"use strict";v.r(_);var r=v(25),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"性能优化篇-三"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能优化篇-三"}},[t._v("#")]),t._v(" 性能优化篇(三)")]),t._v(" "),v("h2",{attrs:{id:"现代浏览器渲染过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#现代浏览器渲染过程"}},[t._v("#")]),t._v(" 现代浏览器渲染过程")]),t._v(" "),v("p",[v("strong",[t._v("本篇主要讲了这个阶段，如下图：")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/optimization/1595736591934_A0A6842B-9DCA-4627-A916-B9BFB093A75A.png",alt:"1595736591934_A0A6842B-9DCA-4627-A916-B9BFB093A75A"}})]),t._v(" "),v("h2",{attrs:{id:"现代浏览器的进化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#现代浏览器的进化"}},[t._v("#")]),t._v(" 现代浏览器的进化")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("1990年，蒂姆·伯纳斯·李开发了第一个网页浏览器WorldWideWeb，后改名为Nexus。WorldWideWeb浏览器支持早期的HTML标记 语言，功能比较简单，只能支持文本、简单的样式表、电影、声音、图片等资源的显示。")])]),t._v(" "),v("li",[v("p",[t._v("1993年，马克·安德森领导的团开发了一个真正有影响力的浏览器Mosaic，这就是后来世界上最流行的浏览器Netscape Navigator。")])]),t._v(" "),v("li",[v("p",[t._v("1995年，微软推出了闻名于世的浏览器Internet Explorer。第一次浏览器大战开始，持续两年")])]),t._v(" "),v("li",[v("p",[t._v("1998年，Netscape公司开放Netscape Navigator源代码，成立了Mozilla基金会。第二次浏览器大战开始，持续八年")])]),t._v(" "),v("li",[v("p",[t._v("2003年，苹果公司发布了Safari浏览器。")])]),t._v(" "),v("li",[v("p",[t._v("2004年，Netscape公司发布了著名的开源浏览器Mozilla Firefox")])]),t._v(" "),v("li",[v("p",[t._v("2005年，苹果公司开源了浏览器中的核心代码，基于此发起了一个新的开源项目WebKit(Safari浏览器的内核)。")])]),t._v(" "),v("li",[v("p",[t._v("2008年， Google公司已WebKit为内核，创建了一个新的浏览器项目Chromium。以Chromium为基础，谷歌发布了Chrome浏览器。 至于这两者的关系，可以简单地理解为:Chromium为实验版，具有众多新特性;Chrome为稳定版。")])])]),t._v(" "),v("h2",{attrs:{id:"现代浏览器的特征"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#现代浏览器的特征"}},[t._v("#")]),t._v(" 现代浏览器的特征")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("网络")]),t._v(" "),v("ul",[v("li",[t._v("支持多种网络协议")])])]),t._v(" "),v("li",[v("p",[t._v("资源管理")])]),t._v(" "),v("li",[v("p",[t._v("网页浏览 （前三个是早期浏览器必备的）")])]),t._v(" "),v("li",[v("p",[t._v("多页面管理")]),t._v(" "),v("ul",[v("li",[t._v("ie5先出 （多线程维护）（缺点，一崩全崩 ）")]),t._v(" "),v("li",[t._v("google后出 （基于进程，域）（崩只崩一个域）")])])]),t._v(" "),v("li",[v("p",[t._v("插件和扩展 （谷歌和火狐）")])]),t._v(" "),v("li",[v("p",[t._v("账户和同步 （火狐）")])]),t._v(" "),v("li",[v("p",[t._v("安全机制 （现在浏览器的重要特征）")])]),t._v(" "),v("li",[v("p",[t._v("开发者工具")])])]),t._v(" "),v("h2",{attrs:{id:"现代浏览器的结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#现代浏览器的结构"}},[t._v("#")]),t._v(" 现代浏览器的结构")]),t._v(" "),v("ul",[v("li",[t._v("用户界面(User Interface)")]),t._v(" "),v("li",[t._v("浏览器引擎(Browser Engine)")]),t._v(" "),v("li",[t._v("渲染引擎(Rendering Engine)")]),t._v(" "),v("li",[t._v("网络(Networking)")]),t._v(" "),v("li",[t._v("XML解析器(XML Parser)")]),t._v(" "),v("li",[t._v("显示后端(Display Backend)")]),t._v(" "),v("li",[t._v("数据持久层(Data Persistence)")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/optimization/1595747953306_9B92783C-659A-4BAE-97E6-E298FB37435C.png",alt:"1595737621547_D178E006-5E21-4FE9-BD1D-696DC78ADCE1"}})]),t._v(" "),v("p",[t._v("Networking--\x3e处理字符集")]),t._v(" "),v("p",[t._v("数据持久层--\x3e 内存数据存到硬盘")]),t._v(" "),v("p",[t._v("显示后端--\x3e字体等等")]),t._v(" "),v("h2",{attrs:{id:"常见的渲染引擎"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见的渲染引擎"}},[t._v("#")]),t._v(" 常见的渲染引擎")]),t._v(" "),v("ul",[v("li",[t._v("渲染引擎:能够能够将HTML/CSS/JavaScript文本及相应的资源文件转换成图像结果。")]),t._v(" "),v("li",[t._v("渲染引擎的种类:")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("渲染引擎")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("浏览器")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Trident")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("IE、Edge(旧)")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Gecko")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Firefox")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("WebKit")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Safari")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Blink(WebKit fork)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Chromium/Chrome，Opera，Edge(新)")])])])]),t._v(" "),v("h2",{attrs:{id:"渲染引擎结构与工作流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#渲染引擎结构与工作流程"}},[t._v("#")]),t._v(" 渲染引擎结构与工作流程")]),t._v(" "),v("p",[v("strong",[t._v("以HTML/JavaScript/CSS等文件作为输入，以可视化内容作为输出")]),t._v("（最先可能有wasm）")]),t._v(" "),v("p",[v("img",{attrs:{src:"/optimization/1595748825620_7AF0F530-76DB-4505-8ED2-C36D1D650D29.png",alt:"1595748825620_7AF0F530-76DB-4505-8ED2-C36D1D650D29"}})]),t._v(" "),v("p",[t._v("解析文件--\x3edom树--\x3e渲染树--\x3e布局--\x3e绘制（调用显示后端）--\x3e展示")]),t._v(" "),v("p",[t._v("三个点：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("- 数据流\n- 依赖关系\n- 控制流程\n")])])]),v("p",[v("img",{attrs:{src:"/optimization/1595749136489_0C67915C-30BE-4BAD-AC4A-3DCA3962B908.png",alt:"1595749136489_0C67915C-30BE-4BAD-AC4A-3DCA3962B908"}})]),t._v(" "),v("ul",[v("li",[t._v("布局模块在渲染树上操作")]),t._v(" "),v("li",[t._v("GPU负责部分为Display，所以在第一篇中介绍的css部分性能优化是可以调用GPU进行硬件加速，直接跳过了之前的流程。"),v("RouterLink",{attrs:{to:"/note/optimization/性能优化一.html#渲染中性能优化"}},[t._v("点击查看")])],1)]),t._v(" "),v("h2",{attrs:{id:"chrome-架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chrome-架构"}},[t._v("#")]),t._v(" Chrome 架构")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("Browser:控制程序的“chrome”部分，包括地 址栏，书签，后退和前进按钮。还处理Web浏 览器的不可见的，和特权部分，例如网络请求 和文件访问。")])]),t._v(" "),v("li",[v("p",[t._v("Renderer:负责显示网站的选项卡内的所有内 容。")])]),t._v(" "),v("li",[v("p",[t._v("Plugin:控制网站使用的所有插件，例如 flash。")])]),t._v(" "),v("li",[v("p",[t._v("GPU:独立于其他进程的GPU处理任务。 它被 分成多个不同的进程，因为GPU处理来自多个 程序的请求并将它们绘制在同一个面中。")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/optimization/1595750259949_6C45E58F-3F43-4401-8B2B-5832DA86CF43.png",alt:"1595750259949_6C45E58F-3F43-4401-8B2B-5832DA86CF43"}})]),t._v(" "),v("h3",{attrs:{id:"chrome-渲染器进程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chrome-渲染器进程"}},[t._v("#")]),t._v(" Chrome 渲染器进程")]),t._v(" "),v("p",[v("img",{attrs:{src:"/optimization/1595750367137_46D5C02F-1D52-4943-93BB-99290446598E.png",alt:"1595750367137_46D5C02F-1D52-4943-93BB-99290446598E"}})]),t._v(" "),v("ul",[v("li",[v("p",[t._v("渲染器进程负责选项卡内发生的所有事情。 在 渲染器进程中，主线程处理你为用户编写的大 部分代码。")])]),t._v(" "),v("li",[v("p",[t._v("如果你使用了web worker 或 service worker， 有时JavaScript代码的一部分将由工作线程处 理。 排版和栅格线程也在渲染器进程内运行， 以便高效、流畅地呈现页面。")])])]),t._v(" "),v("h3",{attrs:{id:"chrome-渲染过程-解析部分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chrome-渲染过程-解析部分"}},[t._v("#")]),t._v(" Chrome 渲染过程:解析部分")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("构建DOM")])]),t._v(" "),v("li",[v("p",[t._v("子资源加载")]),t._v(" "),v("ul",[v("li",[t._v("注意JavaScript可以阻止解析")])])]),t._v(" "),v("li",[v("p",[t._v("提示浏览器如何加载资源")])]),t._v(" "),v("li",[v("p",[t._v("样式表计算")])]),t._v(" "),v("li",[v("p",[t._v("布局")])]),t._v(" "),v("li",[v("p",[t._v("绘制")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/optimization/1595750747292_E9B2E6E5-CDB4-4C11-B489-8319D2F04C5E.png",alt:"1595750747292_E9B2E6E5-CDB4-4C11-B489-8319D2F04C5E"}})]),t._v(" "),v("p",[v("strong",[t._v("扫描到脚本会暂停")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/optimization/1595750757766_7F049ABA-3871-4CE4-88DB-E387FE9D875C.png",alt:"1595750757766_7F049ABA-3871-4CE4-88DB-E387FE9D875C"}})]),t._v(" "),v("p",[v("strong",[t._v("计算样式表")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/optimization/1595750766478_FD8D6E51-9FD8-4799-9FC2-BDC0797B8CE1.png",alt:"1595750766478_FD8D6E51-9FD8-4799-9FC2-BDC0797B8CE1"}})]),t._v(" "),v("p",[v("strong",[t._v("生成渲染树")])]),t._v(" "),v("h3",{attrs:{id:"chrome-渲染过程-合成部分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chrome-渲染过程-合成部分"}},[t._v("#")]),t._v(" Chrome 渲染过程:合成部分")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("把文档的结构、元素的样式、几何 形状和绘制顺序转换为屏幕上的像 素称为光栅化。")])]),t._v(" "),v("li",[v("p",[t._v("合成是一种将页面的各个部分分 层，分别栅格化，并在一个被称为 合成器线程的独立线程中合成为页 面的技术。")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/optimization/1595751111320_6F09B971-2BC4-442F-9B6A-1321EC7F0342.png",alt:"1595751111320_6F09B971-2BC4-442F-9B6A-1321EC7F0342"}})]),t._v(" "),v("p",[v("strong",[t._v("生成布局树")])]),t._v(" "),v("h3",{attrs:{id:"chrome-渲染过程-gpu渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chrome-渲染过程-gpu渲染"}},[t._v("#")]),t._v(" Chrome 渲染过程:GPU渲染")]),t._v(" "),v("p",[t._v("一旦创建了层树并确定了绘制顺序，主线程就会将该信息提交给合 成器线程。 合成器线程然后栅格化每个图层。 一个图层可能像页 面的整个长度一样大，因此合成器线程会将它们分成图块，并将每 个图块发送到光栅线程。 栅格线程栅格化每一个tile并将它们存储 在GPU内存中。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/optimization/1595751329247_E337D55E-F08E-4567-B05C-324823E4A7CE.png",alt:"1595751329247_E337D55E-F08E-4567-B05C-324823E4A7CE"}})]),t._v(" "),v("p",[t._v("通过IPC将合成器帧提交给浏览器进程。这时可以从UI线程添加另 一个合成器帧以用于浏览器UI更改，或者从其他渲染器进程添加扩 充数据。 这些合成器帧被发送到GPU用来在屏幕上显示。 如果发 生滚动事件，合成器线程会创建另一个合成器帧并发送到GPU。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/optimization/1595751388249_6E3EB5B2-AD41-40E6-A1ED-136A35EBA1AD.png",alt:"1595751388249_6E3EB5B2-AD41-40E6-A1ED-136A35EBA1AD"}})]),t._v(" "),v("p",[t._v("合成的好处是它可以在不涉及主线程的情况下完成。 合成线程不 需要等待样式计算或 JavaScript 执行。 这就是合成动画是平滑性 能的最佳选择的原因。 如果需要再次计算布局或绘图，则必须涉 及主线程。")]),t._v(" "),v("p",[t._v("CPU："),v("strong",[t._v("多核处理器")])]),t._v(" "),v("p",[t._v("GPU："),v("strong",[t._v("重核处理器")])]),t._v(" "),v("h2",{attrs:{id:"初窥webkit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#初窥webkit"}},[t._v("#")]),t._v(" 初窥WebKit")]),t._v(" "),v("p",[v("img",{attrs:{src:"/optimization/1595751529278_189AD725-69DF-423F-A549-934801F7606D.png",alt:"1595751529278_189AD725-69DF-423F-A549-934801F7606D"}})]),t._v(" "),v("ul",[v("li",[v("p",[t._v("WebKit 官网:"),v("a",{attrs:{href:"https://webkit.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://webkit.org/"),v("OutboundLink")],1)])]),t._v(" "),v("li",[v("p",[t._v("Blink 是未来")])]),t._v(" "),v("li",[v("p",[t._v("Blink官方文档:"),v("a",{attrs:{href:"http://www.chromium.org/blink",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.chromium.org/blink"),v("OutboundLink")],1)])])])])}),[],!1,null,null,null);_.default=a.exports}}]);