(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{424:function(_,v,t){"use strict";t.r(v);var i=t(25),a=Object(i.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"性能优化篇-二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能优化篇-二"}},[_._v("#")]),_._v(" 性能优化篇(二)")]),_._v(" "),t("h2",{attrs:{id:"前端性能优化之服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端性能优化之服务器"}},[_._v("#")]),_._v(" 前端性能优化之服务器")]),_._v(" "),t("p",[t("img",{attrs:{src:"/optimization/A662317B-EE08-4A15-BF2C-6B725B8CC7EA.jpg",alt:"A662317B-EE08-4A15-BF2C-6B725B8CC7EA"}})]),_._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.w3.org/TR/navigation-timing/",target:"_blank",rel:"noopener noreferrer"}},[_._v("navigation-timing"),t("OutboundLink")],1)]),_._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Navigation_timing_API",target:"_blank",rel:"noopener noreferrer"}},[_._v("Navigation_timing_API"),t("OutboundLink")],1)])]),_._v(" "),t("p",[t("img",{attrs:{src:"/optimization/1595578492420_C1ADD2D1-6A2D-4CEF-8EEB-BF9E59EBFF3A.png",alt:"1595578492420_C1ADD2D1-6A2D-4CEF-8EEB-BF9E59EBFF3A"}})]),_._v(" "),t("p",[_._v("阶段一")]),_._v(" "),t("ol",[t("li",[_._v("准备卸载页面")]),_._v(" "),t("li",[_._v("重定向开始")]),_._v(" "),t("li",[_._v("卸载页面开始  2和3同时开始")]),_._v(" "),t("li",[_._v("卸载页面结束")]),_._v(" "),t("li",[_._v("重定向结束  （之前页面资源释放结束）")]),_._v(" "),t("li",[_._v("开始发起请求 （如果上一个页面为空则跳过之前）")]),_._v(" "),t("li",[_._v("查看本地缓存")])]),_._v(" "),t("p",[_._v("阶段二")]),_._v(" "),t("ol",[t("li",[_._v("查询域开始 （DNS）")]),_._v(" "),t("li",[_._v("这部分可以优化--下面介绍和cdn配合")]),_._v(" "),t("li",[_._v("查询域结束")]),_._v(" "),t("li",[_._v("建立连接（TCP）")]),_._v(" "),t("li",[_._v("加密（可选）")]),_._v(" "),t("li",[_._v("连接建立成功 （握手结束）--\x3e体现出网络质量")]),_._v(" "),t("li",[_._v("发起请求")]),_._v(" "),t("li",[_._v("服务器接收到请求，并发起相应")]),_._v(" "),t("li",[_._v("服务器处理")]),_._v(" "),t("li",[_._v("服务器发送数据结束 （可优化点服务器处理速度）")])]),_._v(" "),t("p",[_._v("阶段三")]),_._v(" "),t("ol",[t("li",[_._v("解析dom开始   (阶段三可优化)")]),_._v(" "),t("li",[_._v("解析dom结束")]),_._v(" "),t("li",[_._v("加载依赖")]),_._v(" "),t("li",[_._v("dom事件绑定")]),_._v(" "),t("li",[_._v("dom准备完成")]),_._v(" "),t("li",[_._v("dom渲染完毕")]),_._v(" "),t("li",[_._v("执行onload事件内的脚本")])]),_._v(" "),t("p",[t("strong",[_._v("主要优化的是阶段三")])]),_._v(" "),t("h2",{attrs:{id:"dns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[_._v("#")]),_._v(" DNS")]),_._v(" "),t("ul",[t("li",[_._v("DNS 是Domain Name System, 域名系统，用于将域名转换为IP。")]),_._v(" "),t("li",[_._v("顶级域名 --\x3e  baidu.com      (com根域名)")]),_._v(" "),t("li",[_._v("二级域名 --\x3e  www.baidu.com")]),_._v(" "),t("li",[_._v("域名资源记录   (域名和IP对应)")]),_._v(" "),t("li",[_._v("域名服务器")]),_._v(" "),t("li",[_._v("域名解析 （文本转换为域名）")])]),_._v(" "),t("h3",{attrs:{id:"域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[_._v("#")]),_._v(" 域名")]),_._v(" "),t("ul",[t("li",[_._v("x.x.x.x  文本   ipv4")]),_._v(" "),t("li",[_._v("x.x.x.x为int，4个字节。一个字节范围0~255。")]),_._v(" "),t("li",[_._v("F:F:F:F:F:F  文本    ipv6")]),_._v(" "),t("li",[_._v("ip域名其实就是一个编号")])]),_._v(" "),t("h3",{attrs:{id:"域名服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#域名服务器"}},[_._v("#")]),_._v(" 域名服务器")]),_._v(" "),t("p",[t("img",{attrs:{src:"/optimization/1595580943426_8BBBD7EA-BBDB-44CE-9F77-8D290A9D9774.png",alt:"1595580943426_8BBBD7EA-BBDB-44CE-9F77-8D290A9D9774"}})]),_._v(" "),t("ul",[t("li",[_._v("分级维护dns服务器")]),_._v(" "),t("li",[_._v("首先解析域名  先查看缓存（缓存高频域名）")]),_._v(" "),t("li",[_._v("请求根域名服务器 （目前全球13台，中国没有，只有镜像）直解析根域名，然后返回结果并告诉你请求的下一个服务器")]),_._v(" "),t("li",[_._v("请求TLD 服务器 解析顶级域名 然后返回结果并告诉你请求的下一个服务器")]),_._v(" "),t("li",[_._v("请求名称服务器  返回结果")])]),_._v(" "),t("p",[_._v("所以在访问高频服务器时候会快，低频的会慢。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("记录类型")]),_._v(" "),t("th",[_._v("含义")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("SOA:(StartOf Authority, 起始授权记录)")]),_._v(" "),t("td",[_._v("⼀一个区域解析库有且只能有⼀一个SOA记录，⽽而且必须放在第⼀一条")])]),_._v(" "),t("tr",[t("td",[_._v("A记录(主机记录) (ipv4域名对应ip)")]),_._v(" "),t("td",[_._v("⽤用于名称解析的重要记录，将特定的主机名映射到对应主机的IP地址上")])]),_._v(" "),t("tr",[t("td",[_._v("CNAME记录(别名记录) (指向A记录)")]),_._v(" "),t("td",[_._v("⽤用于 返回另⼀一个域名，即当前查询的域名是另⼀一个域名的跳转， 主要⽤用于域名的内部 跳转，为服务器器配置提供灵活性")])]),_._v(" "),t("tr",[t("td",[_._v("NS记录(域名服务器器记录) （名称服务器上图5）")]),_._v(" "),t("td",[_._v("⽤用于返回保存下⼀一级域名信息的服务器器地址。该记录只能设置为域名，不不能设置为IP地 址。")])]),_._v(" "),t("tr",[t("td",[_._v("MX(邮件记录)")]),_._v(" "),t("td",[t("code",[_._v("⽤用于返回接收电⼦子邮件的服务器器地址")])])]),_._v(" "),t("tr",[t("td",[_._v("IPv6主机记录(AAAA记录) (ipv4域名对应ip)")]),_._v(" "),t("td",[_._v("与A记录对应，⽤用于将特定的主机名映射到⼀一个主机的IPv6地址。")])])])]),_._v(" "),t("h2",{attrs:{id:"tcp三次握手与四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手与四次挥手"}},[_._v("#")]),_._v(" TCP三次握手与四次挥手")]),_._v(" "),t("p",[t("img",{attrs:{src:"/optimization/1595582117290_A5456349-81CC-4261-A6A2-9A5DAD95B9E1.png",alt:"1595582117290_A5456349-81CC-4261-A6A2-9A5DAD95B9E1"}})]),_._v(" "),t("p",[_._v("上图iso标准，应用层、表示层和会话层在TCP协议中为一层，应用层。")]),_._v(" "),t("p",[t("strong",[_._v("发起请求")])]),_._v(" "),t("p",[_._v("url--\x3e添加请求头等包装--\x3etcp协议进行打包--\x3e继续打包。。。")]),_._v(" "),t("p",[t("strong",[_._v("接受请求")])]),_._v(" "),t("p",[_._v("逐条解压--\x3e只留数据")]),_._v(" "),t("p",[t("img",{attrs:{src:"/optimization/1595582226820_DAC9A134-CAD4-47CA-9A9B-E9BDA505BFA2.png",alt:"1595582226820_DAC9A134-CAD4-47CA-9A9B-E9BDA505BFA2"}})]),_._v(" "),t("p",[_._v("TCP: 面向连接，比较稳定，基于数据报加了限制（保证接通）")]),_._v(" "),t("p",[_._v("UDP：不稳定，基于数据报，没有限制（只管发送）")]),_._v(" "),t("p",[t("img",{attrs:{src:"/optimization/1595582276032_81E3189E-A646-4198-B3C3-D099B4F4680B.png",alt:"1595582276032_81E3189E-A646-4198-B3C3-D099B4F4680B"}})]),_._v(" "),t("p",[_._v("源端口，应答端口")]),_._v(" "),t("p",[_._v("数据号，应答号，偏移量")]),_._v(" "),t("p",[_._v("offset告诉那些是正式数据")]),_._v(" "),t("p",[t("img",{attrs:{src:"/optimization/1595582345498_8743F569-5474-47B9-93A7-AB6120F4659A.png",alt:"1595582345498_8743F569-5474-47B9-93A7-AB6120F4659A"}})]),_._v(" "),t("p",[t("strong",[_._v("三次握手")])]),_._v(" "),t("p",[_._v("三次握手是为了建立连接，三次就建立成功了所以只有三次握手。")]),_._v(" "),t("p",[t("strong",[_._v("四次挥手")])]),_._v(" "),t("p",[_._v("四次挥手是为了断开连接")]),_._v(" "),t("ol",[t("li",[_._v("客户端请求断开连接")]),_._v(" "),t("li",[_._v("服务端发送收到请求")]),_._v(" "),t("li",[_._v("服务端处理完数据之后告诉客户端断开连接（这时候服务器有可能数据没有发送完毕）")]),_._v(" "),t("li",[_._v("客户端发送收到客户端已断开连接")])]),_._v(" "),t("h2",{attrs:{id:"cdn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[_._v("#")]),_._v(" CDN")]),_._v(" "),t("p",[t("img",{attrs:{src:"/optimization/1595583677386_9F7D269A-7B6F-48D5-9664-ABF4824E395A.png",alt:"1595583677386_9F7D269A-7B6F-48D5-9664-ABF4824E395A"}})]),_._v(" "),t("p",[_._v("网略优化的一种，CDN--\x3e数据分发网略")]),_._v(" "),t("p",[_._v("图左  非CDN")]),_._v(" "),t("p",[_._v("图右  CDN")]),_._v(" "),t("p",[_._v("给图左服务器建立若干个镜像。")]),_._v(" "),t("p",[_._v("镜像加DNS解析机制构成了CDN。")])])}),[],!1,null,null,null);v.default=a.exports}}]);