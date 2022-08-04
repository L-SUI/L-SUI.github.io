(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{396:function(t,e,l){"use strict";l.r(e);var a=l(25),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"常用的http请求头与响应头"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常用的http请求头与响应头"}},[t._v("#")]),t._v(" 常用的HTTP请求头与响应头")]),t._v(" "),l("h2",{attrs:{id:"http消息头"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#http消息头"}},[t._v("#")]),t._v(" HTTP消息头")]),t._v(" "),l("p",[l("code",[t._v("HTTP消息头")]),t._v("是在，客户端请求（Request）或服务器响应（Response）时传递的，位请求或响应的第一行，"),l("code",[t._v("HTTP消息体")]),t._v("（请求或响应的内容）是其后传输。"),l("code",[t._v("HTTP消息头")]),t._v("，以明文的字符串格式传送，是以冒号分隔的键/值对，如："),l("code",[t._v("Accept-Charset: utf-8")]),t._v("，每一个消息头最后以回车符("),l("code",[t._v("CR")]),t._v(")和换行符("),l("code",[t._v("LF")]),t._v(")结尾。"),l("code",[t._v("HTTP消息头")]),t._v("结束后，会用一个空白的字段来标识，这样就会出现两个连续的"),l("code",[t._v("CR-LF")]),t._v("。")]),t._v(" "),l("p",[l("code",[t._v("HTTP消息头")]),t._v("由IANA（The Internet Assigned Numbers Authority，互联网数字分配机构）来整理和维护。其标准最早来源于"),l("a",{attrs:{href:"http://tools.ietf.org/html/rfc4229",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 4229"),l("OutboundLink")],1),t._v("。IANA将其整理到了"),l("a",{attrs:{href:"http://www.iana.org/assignments/message-headers/perm-headers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("消息头"),l("OutboundLink")],1),t._v("文档，文档中还包括了"),l("a",{attrs:{href:"http://www.iana.org/assignments/message-headers/message-headers.xhtml#prov-headersl",target:"_blank",rel:"noopener noreferrer"}},[t._v("一些新提出的信息头"),l("OutboundLink")],1),t._v("。")]),t._v(" "),l("p",[l("code",[t._v("HTTP消息头")]),t._v("支持自定义， 自定义的专用消息头一般会添加"),l("code",[t._v("'X-'")]),t._v("前缀。")]),t._v(" "),l("h2",{attrs:{id:"常用的http请求头"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常用的http请求头"}},[t._v("#")]),t._v(" 常用的"),l("code",[t._v("HTTP请求头")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("协议头")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("状态")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Accept")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可接受的响应内容类型（"),l("code",[t._v("Content-Types")]),t._v("）。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Accept: text/plain")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Accept-Charset")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可接受的字符集")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Accept-Charset: utf-8")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Accept-Encoding")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可接受的响应内容的编码方式。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Accept-Encoding: gzip, deflate")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Accept-Language")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可接受的响应内容语言列表。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Accept-Language: en-US")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Accept-Datetime")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("可接受的按照时间来表示的响应内容版本")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Accept-Datetime: Sat, 26 Dec 2015 17:30:00 GMT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("临时")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Authorization")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用于表示HTTP协议中需要认证资源的认证信息")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Authorization: Basic OSdjJGRpbjpvcGVuIANlc2SdDE==")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Cache-Control")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用来指定当前的请求/回复中的，是否使用缓存机制。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Cache-Control: no-cache")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Connection")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("客户端（浏览器）想要优先使用的连接类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Connection: keep-alive``Connection: Upgrade")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Cookie")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("由之前服务器通过"),l("code",[t._v("Set-Cookie")]),t._v("（见下文）设置的一个HTTP协议Cookie")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Cookie: $Version=1; Skin=new;")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定：标准")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Length")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("以8进制表示的请求体的长度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Content-Length: 348")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-MD5")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("请求体的内容的二进制 MD5 散列值（数字签名），以 Base64 编码的结果")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-MD5: oD8dH2sgSW50ZWdyaIEd9D==")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("废弃")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Type")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("请求体的MIME类型 （用于POST和PUT请求中）")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Type: application/x-www-form-urlencoded")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("发送该消息的日期和时间（以"),l("a",{attrs:{href:"http://tools.ietf.org/html/rfc7231#section-7.1.1.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 7231"),l("OutboundLink")],1),t._v('中定义的"HTTP日期"格式来发送）')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Date: Dec, 26 Dec 2015 17:30:00 GMT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Expect")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("表示客户端要求服务器做出特定的行为")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Expect: 100-continue")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("From")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("发起此请求的用户的邮件地址")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("From: user@itbilu.com")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Host")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("表示服务器的域名以及服务器所监听的端口号。如果所请求的端口是对应的服务的标准端口（80），则端口号可以省略。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Host: www.itbilu.com:80``Host: www.itbilu.com")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("If-Match")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("仅当客户端提供的实体与服务器上对应的实体相匹配时，才进行对应的操作。主要用于像 PUT 这样的方法中，仅当从用户上次更新某个资源后，该资源未被修改的情况下，才更新该资源。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('If-Match: "9jd00cdj34pss9ejqiw39d82f20d0ikd"')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("If-Modified-Since")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("允许在对应的资源未被修改的情况下返回304未修改")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("If-Modified-Since: Dec, 26 Dec 2015 17:30:00 GMT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("If-None-Match")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("允许在对应的内容未被修改的情况下返回304未修改（ 304 Not Modified ），参考 超文本传输协议 的实体标记")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('If-None-Match: "9jd00cdj34pss9ejqiw39d82f20d0ikd"')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("If-Range")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("如果该实体未被修改过，则向返回所缺少的那一个或多个部分。否则，返回整个新的实体")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('If-Range: "9jd00cdj34pss9ejqiw39d82f20d0ikd"')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("If-Unmodified-Since")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("仅当该实体自某个特定时间以来未被修改的情况下，才发送回应。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("If-Unmodified-Since: Dec, 26 Dec 2015 17:30:00 GMT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Max-Forwards")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("限制该消息可被代理及网关转发的次数。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Max-Forwards: 10")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Origin")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("发起一个针对"),l("a",{attrs:{href:"http://itbilu.com/javascript/js/VkiXuUcC.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨域资源共享"),l("OutboundLink")],1),t._v("的请求（该请求要求服务器在响应中加入一个"),l("code",[t._v("Access-Control-Allow-Origin")]),t._v("的消息头，表示访问控制所允许的来源）。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Origin: http://www.itbilu.com")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定: 标准")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Pragma")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("与具体的实现相关，这些字段可能在请求/回应链中的任何时候产生。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Pragma: no-cache")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Proxy-Authorization")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用于向代理进行认证的认证信息。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Proxy-Authorization: Basic IOoDZRgDOi0vcGVuIHNlNidJi2==")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Range")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("表示请求某个实体的一部分，字节偏移以0开始。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Range: bytes=500-999")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Referer")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("表示浏览器所访问的前一个页面，可以认为是之前访问页面的链接将浏览器带到了当前页面。"),l("code",[t._v("Referer")]),t._v("其实是"),l("code",[t._v("Referrer")]),t._v("这个单词，但RFC制作标准时给拼错了，后来也就将错就错使用"),l("code",[t._v("Referer")]),t._v("了。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Referer: http://itbilu.com/nodejs")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("TE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("浏览器预期接受的传输时的编码方式：可使用回应协议头"),l("code",[t._v("Transfer-Encoding")]),t._v('中的值（还可以使用"trailers"表示数据传输时的分块方式）用来表示浏览器希望在最后一个大小为0的块之后还接收到一些额外的字段。')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("TE: trailers,deflate")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("User-Agent")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("浏览器的身份标识字符串")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("User-Agent: Mozilla/……")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Upgrade")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("要求服务器升级到一个高版本协议。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Via")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("告诉服务器，这个请求是由哪些代理发出的。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Via: 1.0 fred, 1.1 itbilu.com.com (Apache/1.1)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Warning")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("一个一般性的警告，表示在实体内容体中可能存在错误。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Warning: 199 Miscellaneous warning")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])])])]),t._v(" "),l("h2",{attrs:{id:"常用的http响应头"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常用的http响应头"}},[t._v("#")]),t._v(" 常用的"),l("code",[t._v("HTTP响应头")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("响应头")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("示例")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("状态")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Access-Control-Allow-Origin")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("指定哪些网站可以"),l("code",[t._v("跨域源资源共享")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Access-Control-Allow-Origin: *")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("临时")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Accept-Patch")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("指定服务器所支持的文档补丁格式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Accept-Patch: text/example;charset=utf-8")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Accept-Ranges")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("服务器所支持的内容范围")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Accept-Ranges: bytes")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Age")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("响应对象在代理缓存中存在的时间，以秒为单位")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Age: 12")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Allow")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("对于特定资源的有效动作;")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Allow: GET, HEAD")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Cache-Control")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("通知从服务器到客户端内的所有缓存机制，表示它们是否可以缓存这个对象及缓存有效时间。其单位为秒")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Cache-Control: max-age=3600")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Connection")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("针对该连接所预期的选项")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Connection: close")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Disposition")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("对已知MIME类型资源的描述，浏览器可以根据这个响应头决定是对返回资源的动作，如：将其下载或是打开。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('Content-Disposition: attachment; filename="fname.ext"')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Encoding")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("响应资源所使用的编码类型。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Content-Encoding: gzip")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Language")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("响就内容所使用的语言")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Content-Language: zh-cn")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Length")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("响应消息体的长度，用8进制字节表示")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Content-Length: 348")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Location")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("所返回的数据的一个候选位置")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Content-Location: /index.htm")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-MD5")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("响应内容的二进制 MD5 散列值，以 Base64 方式编码")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-MD5: IDK0iSsgSW50ZWd0DiJUi==")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("已淘汰")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Range")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("如果是响应部分消息，表示属于完整消息的哪个部分")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Range: bytes 21010-47021/47022")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Type")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("当前内容的"),l("code",[t._v("MIME")]),t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Content-Type: text/html; charset=utf-8")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("此条消息被发送时的日期和时间(以"),l("a",{attrs:{href:"http://tools.ietf.org/html/rfc7231#section-7.1.1.1",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 7231"),l("OutboundLink")],1),t._v('中定义的"HTTP日期"格式来表示)')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Date: Tue, 15 Nov 1994 08:12:31 GMT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ETag")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("对于某个资源的某个特定版本的一个标识符，通常是一个 消息散列")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('ETag: "737060cd8c284d8af7ad3082f209582d"')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Expires")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("指定一个日期/时间，超过该时间则认为此回应已经过期")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Expires: Thu, 01 Dec 1994 16:00:00 GMT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定: 标准")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Last-Modified")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("所请求的对象的最后修改日期(按照 RFC 7231 中定义的“超文本传输协议日期”格式来表示)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Last-Modified: Dec, 26 Dec 2015 17:30:00 GMT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Link")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用来表示与另一个资源之间的类型关系，此类型关系是在"),l("a",{attrs:{href:"https://tools.ietf.org/html/rfc5988",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 5988"),l("OutboundLink")],1),t._v("中定义")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Link:")]),t._v('; rel="alternate"')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Location")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用于在进行重定向，或在创建了某个新资源时使用。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Location: http://www.itbilu.com/nodejs")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("P3P")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("P3P策略相关设置")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('P3P: CP="This is not a P3P policy!')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Pragma")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("与具体的实现相关，这些响应头可能在请求/回应链中的不同时候产生不同的效果")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Pragma: no-cache")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Proxy-Authenticate")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("要求在访问代理时提供身份认证信息。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Proxy-Authenticate: Basic")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Public-Key-Pins")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用于防止中间攻击，声明网站认证中传输层安全协议的证书散列值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('Public-Key-Pins: max-age=2592000; pin-sha256="……";')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Refresh")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用于重定向，或者当一个新的资源被创建时。默认会在5秒后刷新重定向。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Refresh: 5; url=http://itbilu.com")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Retry-After")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("如果某个实体临时不可用，那么此协议头用于告知客户端稍后重试。其值可以是一个特定的时间段(以秒为单位)或一个超文本传输协议日期。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("示例1:Retry-After: 120示例2: Retry-After: Dec, 26 Dec 2015 17:30:00 GMT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Server")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("服务器的名称")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Server: nginx/1.6.3")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Set-Cookie")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置"),l("code",[t._v("HTTP cookie")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Set-Cookie: UserID=itbilu; Max-Age=3600; Version=1")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定: 标准")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Status")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("通用网关接口的响应头字段，用来说明当前HTTP连接的响应状态。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Status: 200 OK")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Trailer")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Trailer")]),t._v("用户说明传输中分块编码的编码信息")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Trailer: Max-Forwards")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Transfer-Encoding")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用表示实体传输给用户的编码形式。包括："),l("code",[t._v("chunked")]),t._v("、"),l("code",[t._v("compress")]),t._v("、 "),l("code",[t._v("deflate")]),t._v("、"),l("code",[t._v("gzip")]),t._v("、"),l("code",[t._v("identity")]),t._v("。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Transfer-Encoding: chunked")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Upgrade")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("要求客户端升级到另一个高版本协议。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Vary")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("告知下游的代理服务器，应当如何对以后的请求协议头进行匹配，以决定是否可使用已缓存的响应内容而不是重新从原服务器请求新的内容。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("Vary: *")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Via")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("告知代理服务器的客户端，当前响应是通过什么途径发送的。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Via: 1.0 fred, 1.1 itbilu.com (nginx/1.6.3)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("Warning")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("一般性警告，告知在实体内容体中可能存在错误。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Warning: 199 Miscellaneous warning")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("WWW-Authenticate")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("表示在请求获取这个实体时应当使用的认证模式。")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("WWW-Authenticate: Basic")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("固定")])])])]),t._v(" "),l("h2",{attrs:{id:"状态码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#状态码"}},[t._v("#")]),t._v(" 状态码")]),t._v(" "),l("p",[t._v("返回的状态码和状态不一致的情况是有可能发生得\n比如Web应用程序内部错误，但仍然返回 200 OK")]),t._v(" "),l("ul",[l("li",[t._v("200 OK\n请求正常处理完毕")]),t._v(" "),l("li",[t._v("204 No Content\n请求成功处理，没有实体的主体返回")]),t._v(" "),l("li",[t._v("206 Partial Content\nGET范围请求已成功处理")]),t._v(" "),l("li",[t._v("301 Moved Permanently\n永久重定向，资源已永久分配新URI")]),t._v(" "),l("li",[t._v("302 Found\n临时重定向，资源已临时分配新URI")]),t._v(" "),l("li",[t._v("303 See Other\n临时重定向，期望使用GET定向获取")]),t._v(" "),l("li",[t._v("304 Not Modified\n发送的附带条件请求未满足")]),t._v(" "),l("li",[t._v("307 Temporary Redirect\n临时重定向，POST不会变成GET")]),t._v(" "),l("li",[t._v("400 Bad Request\n请求报文语法错误或参数错误")]),t._v(" "),l("li",[t._v("401 Unauthorized\n需要通过HTTP认证，或认证失败")]),t._v(" "),l("li",[t._v("403 Forbidden\n请求资源被拒绝")]),t._v(" "),l("li",[t._v("404 Not Found\n无法找到请求资源（服务器无理由拒绝）")]),t._v(" "),l("li",[t._v("500 Internal Server Error\n服务器故障或Web应用故障")]),t._v(" "),l("li",[t._v("503 Service Unavailable\n服务器超负载或停机维护")])])])}),[],!1,null,null,null);e.default=i.exports}}]);