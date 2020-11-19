(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{387:function(t,_,v){"use strict";v.r(_);var s=v(25),a=Object(s.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"http-1-x"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-1-x"}},[t._v("#")]),t._v(" HTTP 1.x")]),t._v(" "),v("h2",{attrs:{id:"http-请求模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-请求模型"}},[t._v("#")]),t._v(" HTTP 请求模型")]),t._v(" "),v("p",[v("img",{attrs:{src:"/http/model.png",alt:"模型"}})]),t._v(" "),v("p",[t._v("http 之两个二:")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("客户端和服务端;")])]),t._v(" "),v("li",[v("p",[t._v("请求和响应:(request,response)")])])]),t._v(" "),v("h2",{attrs:{id:"浏览器行为与http协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器行为与http协议"}},[t._v("#")]),t._v(" 浏览器行为与HTTP协议")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("处理流程")]),t._v(" "),v("ol",[v("li",[t._v("输入网址并回车")]),t._v(" "),v("li",[t._v("解析域名")]),t._v(" "),v("li",[t._v("浏览器发送HTTP请求")]),t._v(" "),v("li",[t._v("服务器处理请求")]),t._v(" "),v("li",[t._v("服务器返回HTML响应")]),t._v(" "),v("li",[t._v("浏览器处理HTML页面")]),t._v(" "),v("li",[t._v("继续请求其他资源")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/http/request_step.png",alt:"处理流程"}})]),t._v(" "),v("h2",{attrs:{id:"什么是http协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是http协议"}},[t._v("#")]),t._v(" 什么是HTTP协议")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("HTTP是超文本传输协议，从www浏览器传输到本地浏览器的一种传输协\n议，网站是基于HTTP协议的，例如网站的图片、CSS、JS等都是基于\nHTTP协议进行传输的。")])]),t._v(" "),v("li",[v("p",[t._v("HTTP协议是由从客户机到服务器的请求(Request)和从服务器到客户机\n的响应(response)进行约束和规范。")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/http/version.png",alt:"版本历程"}})]),t._v(" "),v("h2",{attrs:{id:"了解tcp-ip协议栈"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#了解tcp-ip协议栈"}},[t._v("#")]),t._v(" 了解TCP/IP协议栈")]),t._v(" "),v("p",[v("img",{attrs:{src:"/http/tcp.png",alt:"协议流程"}})]),t._v(" "),v("p",[t._v("左边是 "),v("strong",[t._v("ISO/OSI标准协议")]),t._v("，右图是"),v("strong",[t._v("事实协议")]),t._v("， "),v("strong",[t._v("ISO/OSI 标准协议")]),t._v(" 是对"),v("strong",[t._v("事实协议")]),t._v("的一个补充，最初设计的不完整")]),t._v(" "),v("p",[v("strong",[t._v("应用层")]),t._v(":")]),t._v(" "),v("p",[t._v("为用户提供所需要的各种服务，例如：HTTP、FTP、DNS、SMTP等")]),t._v(" "),v("p",[v("strong",[t._v("传输层")]),t._v(":")]),t._v(" "),v("p",[t._v("为应用层实体提供端到端的通信功能，保证数据包的顺序传送及数\n据的完整性。")]),t._v(" "),v("p",[t._v("该层定义了两个主要的协议：传输控制协议（TCP）和用户数据报协议（UDP).")]),t._v(" "),v("p",[v("strong",[t._v("网络层")]),t._v(":")]),t._v(" "),v("p",[t._v("主要解决主机到主机的通信问题。IP协议是网际互联层最重要的协\n议。")]),t._v(" "),v("p",[v("strong",[t._v("网络接口层")]),t._v(":")]),t._v(" "),v("p",[t._v("负责监视数据在主机和网络之间的交换")]),t._v(" "),v("h2",{attrs:{id:"http在tcp-ip协议栈中的位置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http在tcp-ip协议栈中的位置"}},[t._v("#")]),t._v(" HTTP在TCP/IP协议栈中的位置")]),t._v(" "),v("p",[t._v("目前普遍应用版本HTTP 1.1, 正在逐步向HTTP 2迁移,HTTP默认端口号为80 ,HTTPS默认端口号为443。 如下图：")]),t._v(" "),v("p",[v("img",{attrs:{src:"/http/http_position.png",alt:"http 位置"}})]),t._v(" "),v("h2",{attrs:{id:"http的工作过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http的工作过程"}},[t._v("#")]),t._v(" HTTP的工作过程")]),t._v(" "),v("p",[t._v("一次HTTP操作称为一个事务，其工作过程可分为四步")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("首先客户机与服务器需要建立连接。只要单击某个超级链接，HTTP的工作开始")])]),t._v(" "),v("li",[v("p",[t._v("建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符(URL)、协议版本号后边是MIME信息包括请求修饰符、客户机信息和可能的内容。")])]),t._v(" "),v("li",[v("p",[t._v("服务器接到请求后，给予相应的响应信息，其格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码，后边是MIME信息包括服务器信息、实体信息和可能的内容。")])]),t._v(" "),v("li",[v("p",[t._v("客户端接收服务器所返回的信息通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。")])])]),t._v(" "),v("p",[v("em",[v("strong",[t._v("如果在以上过程中的某一步出现错误，那么产生错误的信息将返回到客户端，有显示屏输出。对于用户来说，这些过程是由HTTP自己完成的，用户只要用鼠标点击，等待信息显示就可以了。")])])]),t._v(" "),v("h2",{attrs:{id:"请求与响应"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求与响应"}},[t._v("#")]),t._v(" 请求与响应")]),t._v(" "),v("p",[t._v("HTTP请求组成：请求行、消息报头、请求正文")]),t._v(" "),v("p",[t._v("HTTP响应组成：状态行、消息报头、响应正文")]),t._v(" "),v("p",[t._v("请求行组成：以一个方法符号开头，后面跟着请求的URI和协议的版本")]),t._v(" "),v("p",[t._v("状态行组成：服务器HTTP协议的版本，服务器发回的响应状态代码和状\n态代码的文本描述。")]),t._v(" "),v("p",[v("strong",[t._v("请求")]),t._v(":")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("request")]),t._v(" "),v("p",[v("img",{attrs:{src:"/http/request_head_1.png",alt:"请求"}})])]),t._v(" "),v("p",[v("strong",[t._v("响应")]),t._v(":")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("response")]),t._v(" "),v("p",[v("img",{attrs:{src:"/http/response_head_1.png",alt:"响应"}})])]),t._v(" "),v("h2",{attrs:{id:"请求方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#请求方法"}},[t._v("#")]),t._v(" 请求方法")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("概述")]),t._v(" "),v("p",[t._v("GET： 请求获取Request-URI所标识的资源")]),t._v(" "),v("p",[t._v("POST： 在Request-URI所标识的资源后附加新的数据")]),t._v(" "),v("p",[t._v("HEAD： 请求获取由Request-URI所标识的资源的响应消息报头")]),t._v(" "),v("p",[t._v("PUT： 请求服务器存储一个资源，并用Request-URI作为其标识")]),t._v(" "),v("p",[t._v("DELETE： 请求服务器删除Request-URI所标识的资源")]),t._v(" "),v("p",[t._v("TRACE： 请求服务器回送收到的请求信息，主要用于测试或诊断")]),t._v(" "),v("p",[t._v("CONNECT：HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器")]),t._v(" "),v("p",[t._v("OPTIONS： 请求查询服务器的性能，或者查询与资源相关的选项和需求")])]),t._v(" "),v("h2",{attrs:{id:"http状态码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[t._v("#")]),t._v(" HTTP状态码")]),t._v(" "),v("p",[t._v("状态代码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值")]),t._v(" "),v("p",[v("strong",[t._v("1xx")]),t._v("：指示信息--表示请求已接收，继续处理")]),t._v(" "),v("p",[v("strong",[t._v("2xx")]),t._v("：成功--表示请求已被成功接收、理解、接受")]),t._v(" "),v("p",[v("strong",[t._v("3xx")]),t._v("：重定向--要完成请求必须进行更进一步的操作")]),t._v(" "),v("p",[v("strong",[t._v("4xx")]),t._v("：客户端错误--请求有语法错误或请求无法实现")]),t._v(" "),v("p",[v("strong",[t._v("5xx")]),t._v("：服务器端错误--服务器未能实现合法的请求")]),t._v(" "),v("h2",{attrs:{id:"常用的请求报头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用的请求报头"}},[t._v("#")]),t._v(" 常用的请求报头")]),t._v(" "),v("p",[v("strong",[t._v("Accept")]),t._v(" 请求报头域用于指定客户端接受哪些类型的信息。eg：Accept：image/gif，Accept：text/")]),t._v(" "),v("p",[v("strong",[t._v("htmlAccept-Charset")]),t._v(" 请求报头域用于指定客户端接受的字符集。Accept-Encoding：Accept-Encoding请求报头域类似于Accept，但是它是用于指定可接受的内容编码。")]),t._v(" "),v("p",[v("strong",[t._v("Accept-Language")]),t._v(" 请求报头域类似于Accept，但是它是用于指定一种自然语言")]),t._v(" "),v("p",[v("strong",[t._v("Authorization")]),t._v(" 请求报头域主要用于证明客户端有权查看某个资源。当浏览器访问一个页面时，如果收到服务器的响应代码为401（未授权），可以发送一个包含Authorization请求报头域的请求，要求服务器对其进行验证。")]),t._v(" "),v("p",[v("strong",[t._v("Host")]),t._v(" 请求报头域主要用于指定被请求资源的Internet主机和端口号，它通常从HTTP URL中提取出来的，发\n送请求时，该报头域是必需的。")]),t._v(" "),v("p",[v("strong",[t._v("User-Agent")]),t._v(" 请求报头域允许客户端将它的操作系统、浏览器和其它属性告诉服务器。")]),t._v(" "),v("h2",{attrs:{id:"常用的响应报头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用的响应报头"}},[t._v("#")]),t._v(" 常用的响应报头")]),t._v(" "),v("p",[v("strong",[t._v("Location")]),t._v(" 响应报头域用于重定向接受者到一个新的位置。Location响应\n报头域常用在更换域名的时候。")]),t._v(" "),v("p",[v("strong",[t._v("Server")]),t._v(" 响应报头域包含了服务器用来处理请求的软件信息。与UserAgent请求报头域是相对应的。")]),t._v(" "),v("p",[v("strong",[t._v("WWW-Authenticate")]),t._v(" 响应报头域必须被包含在401（未授权的）响应消息中，客户端收到401响应消息时候，并发送Authorization报头域请求服务器对其进行验证时，服务端响应报头就包含该报头域。")]),t._v(" "),v("h2",{attrs:{id:"实体报头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实体报头"}},[t._v("#")]),t._v(" 实体报头")]),t._v(" "),v("p",[v("strong",[t._v("请求")]),t._v("和"),v("strong",[t._v("响应")]),t._v("消息都可以传送一个实体。一个实体由实体报头域和实体正文组成，但并不是说实体报头域和实体正文要在一起发送，可以只发送实体报头域。实体报头定义了关于实体正文（eg：有无实体正文）和请求所标识的资源的元信息。")]),t._v(" "),v("h2",{attrs:{id:"常用的实体报头"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用的实体报头"}},[t._v("#")]),t._v(" 常用的实体报头")]),t._v(" "),v("p",[v("strong",[t._v("Content-Encoding")]),t._v(" 实体报头域被用作媒体类型的修饰符，它的值指示了已经被应用到实体正文的附加内容的编码，因而要获得Content-Type报头域中所引用的媒体类型，必须采用相应的解码机制。")]),t._v(" "),v("p",[v("strong",[t._v("Content-Language")]),t._v(" 实体报头域描述了资源所用的自然语言。")]),t._v(" "),v("p",[v("strong",[t._v("Content-Length")]),t._v(" 实体报头域用于指明实体正文的长度，以字节方式存储的十进制数字来表示。")]),t._v(" "),v("p",[v("strong",[t._v("Content-Type")]),t._v(" 实体报头域用语指明发送给接收者的实体正文的媒体类型。")]),t._v(" "),v("p",[v("strong",[t._v("Last-Modified")]),t._v(" 实体报头域用于指示资源的最后修改日期和时间。")]),t._v(" "),v("p",[v("strong",[t._v("Expires")]),t._v(" 实体报头域给出响应过期的日期和时间。")]),t._v(" "),v("h2",{attrs:{id:"cookies与session"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookies与session"}},[t._v("#")]),t._v(" cookies与session")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("Cookies是保存在客户端的小段文本，随客户端点每一个请求发送该url下的所有cookies到服务器端。")])]),t._v(" "),v("li",[v("p",[t._v("Session则保存在服务器端，通过唯一的值sessionID来区别每一个用户。SessionID随每个连接请求发送到服务器，服务器根据sessionID来识别客户端，再通过session 的key获取session值")])])]),t._v(" "),v("h2",{attrs:{id:"cookie使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie使用"}},[t._v("#")]),t._v(" Cookie使用")]),t._v(" "),v("p",[t._v("与Cookie相关的HTTP扩展头")]),t._v(" "),v("ol",[v("li",[t._v("Cookie：客户端将服务器设置的Cookie返回到服务器")]),t._v(" "),v("li",[t._v("Set-Cookie：服务器向客户端设置Cookie")])]),t._v(" "),v("p",[v("img",{attrs:{src:"/http/cookie_model.png",alt:"cookies"}})]),t._v(" "),v("p",[t._v("服务器在响应消息中用Set-Cookie头将Cookie的内容回送给客户端，客户端在新的请求中将相同的内容携带在Cookie头中发送给服务器。从而实现会话的保持")]),t._v(" "),v("h2",{attrs:{id:"session的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#session的使用"}},[t._v("#")]),t._v(" Session的使用")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("使用Cookie来实现")])]),t._v(" "),v("li",[v("p",[t._v("使用URL回显来实现")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/http/session_model.png",alt:"session"}})]),t._v(" "),v("h2",{attrs:{id:"http缓存机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http缓存机制"}},[t._v("#")]),t._v(" HTTP缓存机制")]),t._v(" "),v("p",[t._v("缓存会根据请求保存输出内容的副本，例如html页面，图片，文件，当下一个请求来到的时候：如果是相同的URL，缓存直接使用副本响应访问请求，而不是向源服务器再次发送请求。")]),t._v(" "),v("p",[t._v("缓存的优点：")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("减少相应延迟")])]),t._v(" "),v("li",[v("p",[t._v("减少网络带宽消耗")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"/http/http_cache.png",alt:"http_cache"}})]),t._v(" "),v("h2",{attrs:{id:"浏览器缓存机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存机制"}},[t._v("#")]),t._v(" 浏览器缓存机制")]),t._v(" "),v("h3",{attrs:{id:"没有缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#没有缓存"}},[t._v("#")]),t._v(" 没有缓存")]),t._v(" "),v("p",[v("img",{attrs:{src:"/http/browser_cache_1.png",alt:"browser_cache"}})]),t._v(" "),v("h3",{attrs:{id:"有缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#有缓存"}},[t._v("#")]),t._v(" 有缓存")]),t._v(" "),v("p",[v("img",{attrs:{src:"/http/browser_cache_2.png",alt:"browser_cache"}})]),t._v(" "),v("h2",{attrs:{id:"两种缓存策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#两种缓存策略"}},[t._v("#")]),t._v(" 两种缓存策略")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("强制缓存与对比缓存")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("强制缓存，服务器通知浏览器一个缓存时间，在缓存时间内，下次请求，直接用缓存，不在时间内，执行比较缓存策略")])]),t._v(" "),v("li",[v("p",[t._v("比较缓存，将缓存信息中的Etag和Last-Modified通过请求发送给服务器，由服务器校验，返回304状态码时，浏览器直接使用缓存")])])])]),t._v(" "),v("li",[v("p",[t._v("Etag/If-None-Match策略")])]),t._v(" "),v("li",[v("p",[t._v("Last-Modified/If-Modified-Since策略")])])])])}),[],!1,null,null,null);_.default=a.exports}}]);