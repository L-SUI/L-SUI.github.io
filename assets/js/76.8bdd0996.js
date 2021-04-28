(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{429:function(_,v,e){"use strict";e.r(v);var t=e(25),l=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"性能优化总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化总结"}},[_._v("#")]),_._v(" 性能优化总结")]),_._v(" "),e("ul",[e("li",[_._v("网络层面")]),_._v(" "),e("li",[_._v("构建层面")]),_._v(" "),e("li",[_._v("浏览器渲染层面")]),_._v(" "),e("li",[_._v("服务端层面")])]),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("深入理解 HTTP 请求是前端性能优化的核心")])])]),_._v(" "),e("h2",{attrs:{id:"一个网络请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一个网络请求"}},[_._v("#")]),_._v(" 一个网络请求")]),_._v(" "),e("p",[_._v("浏览器的一个请求从发送到返回都经历了什么？")]),_._v(" "),e("p",[e("img",{attrs:{src:"/optimization/summary/what_happen_when_url_send.png",alt:"what_happen_when_url_send"}})]),_._v(" "),e("p",[_._v("潜在的性能优化点：")]),_._v(" "),e("ul",[e("li",[_._v("是否可以通过缓存减少 DNS 查询时间？")]),_._v(" "),e("li",[_._v("是否网络请求的过程走最近的网络环境？")]),_._v(" "),e("li",[_._v("相同的静态资源是否可以缓存？")]),_._v(" "),e("li",[_._v("能否减少 HTTP 请求的大小？")]),_._v(" "),e("li",[_._v("减少 HTTP 请求次数")]),_._v(" "),e("li",[_._v("服务端渲染")])]),_._v(" "),e("h2",{attrs:{id:"需要优化的地方"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需要优化的地方"}},[_._v("#")]),_._v(" 需要优化的地方")]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("资源的合并与压缩")])]),_._v(" "),e("blockquote",[e("p",[_._v("减少 HTTP 请求数量 和 减少请求资源大小")])]),_._v(" "),e("ul",[e("li",[e("p",[_._v("HTML 压缩")]),_._v(" "),e("ul",[e("li",[_._v("NodeJS 提供的 "),e("code",[_._v("html-minifier")]),_._v(" 压缩")]),_._v(" "),e("li",[_._v("后端模板引擎渲染压缩")])])]),_._v(" "),e("li",[e("p",[_._v("CSS 压缩")]),_._v(" "),e("p",[_._v("压缩点：")]),_._v(" "),e("ul",[e("li",[_._v("删除无效代码")]),_._v(" "),e("li",[_._v("删除注释")]),_._v(" "),e("li",[_._v("CSS 语义合并")])]),_._v(" "),e("p",[_._v("压缩方法：")]),_._v(" "),e("ul",[e("li",[_._v("使用 "),e("code",[_._v("html-minifier")]),_._v(" 对 HTML 中的 CSS 进行压缩")]),_._v(" "),e("li",[_._v("使用 "),e("code",[_._v("clean-css")]),_._v(" 对 CSS 进行压缩")])])]),_._v(" "),e("li",[e("p",[_._v("JavaScript 压缩与混淆")]),_._v(" "),e("p",[_._v("压缩点：")]),_._v(" "),e("ul",[e("li",[_._v("删除无效字符")]),_._v(" "),e("li",[_._v("删除注释")]),_._v(" "),e("li",[_._v("代码语义的缩减和优化")]),_._v(" "),e("li",[_._v("代码保护（混淆代码，降低可读性，增加安全）")])]),_._v(" "),e("p",[_._v("压缩方法：")]),_._v(" "),e("ul",[e("li",[_._v("使用 "),e("code",[_._v("html-minifier")]),_._v(" 对 HTML 中的 js 进行压缩")]),_._v(" "),e("li",[_._v("使用 "),e("code",[_._v("uglifyjs2")]),_._v(" 对 js 进行压缩")])])])]),_._v(" "),e("p",[e("strong",[_._v("不进行文件合并带来的一些问题：")])]),_._v(" "),e("p",[e("img",{attrs:{src:"/optimization/summary/file_compress.png",alt:"file_compress"}})]),_._v(" "),e("ul",[e("li",[_._v("文件与文件之间有插入的上行请求，增加了网络请求")]),_._v(" "),e("li",[_._v("丢包问题可能会更严重")]),_._v(" "),e("li",[_._v("经过代理服务器时可能被断开")])]),_._v(" "),e("p",[e("strong",[_._v("文件合并存在的问题：")])]),_._v(" "),e("ul",[e("li",[_._v("首屏渲染时间延长")]),_._v(" "),e("li",[_._v("缓存失效（合并的文件有一个存在改动，都会使合并的大文件缓存失效）")])]),_._v(" "),e("p",[e("strong",[_._v("文件合并可取的办法：")])]),_._v(" "),e("ul",[e("li",[_._v("公共库合并")]),_._v(" "),e("li",[_._v("不同页面分别合并（按需加载）")])])]),_._v(" "),e("li",[e("p",[_._v("图片类型选择")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("jpg 压缩率高")])]),_._v(" "),e("li",[e("p",[_._v("png 浏览器兼容性好")]),_._v(" "),e("p",[e("img",{attrs:{src:"/optimization/summary/png_type.png",alt:"png_type"}})])]),_._v(" "),e("li",[e("p",[_._v("webp 压缩程度更好（在 iOS webview 有兼容问题）")]),_._v(" "),e("blockquote",[e("p",[_._v("如果可以，安卓端建议全部使用 webp")])])]),_._v(" "),e("li",[e("p",[_._v("svg 代码内嵌，相对较小，适用于图片样式简单的场景")])]),_._v(" "),e("li",[e("p",[_._v("CSS 雪碧图")]),_._v(" "),e("blockquote",[e("p",[_._v("优点：减少 HTTP 请求\n缺点：合成的图片可能会很大，如果合成图片加载失败，造成的应该比较大")]),_._v(" "),e("p",[e("strong",[_._v("实际中应该：在保证合成图片不过大的前提下使用")])]),_._v(" "),e("p",[_._v("在线获取雪碧图坐标数据："),e("a",{attrs:{href:"http://www.spritecow.com/",target:"_blank",rel:"noopener noreferrer"}},[_._v("http://www.spritecow.com/"),e("OutboundLink")],1)])])]),_._v(" "),e("li",[e("p",[_._v("图片转 base64 嵌入 HTML")]),_._v(" "),e("blockquote",[e("p",[_._v("减少 HTTP 请求")])])])])]),_._v(" "),e("li",[e("p",[_._v("浏览器渲染机制")]),_._v(" "),e("p",[e("img",{attrs:{src:"/optimization/summary/html_render_process.png",alt:"html_render_process"}})]),_._v(" "),e("ul",[e("li",[_._v("整个网页从上到下顺序加载解析")]),_._v(" "),e("li",[_._v("网络资源会并发请求（存在并发上限）")])]),_._v(" "),e("p",[_._v("CSS 阻塞：")]),_._v(" "),e("blockquote",[e("p",[_._v("如果 CSS 没有放在 head 标签中，可能会出现 DOM 结构加载完成之后，CSS 样式文件才加载完成，页面出现闪动，最终显示完整的页面布局。")])]),_._v(" "),e("ul",[e("li",[_._v("CSS 会阻塞 JS 脚本的 "),e("strong",[_._v("执行")]),_._v("（因为 JS 执行时可能会修改样式）")]),_._v(" "),e("li",[_._v("CSS 不会阻塞外部资源的 "),e("strong",[_._v("加载")])])]),_._v(" "),e("p",[_._v("JS 阻塞：")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("使用 src 普通引入的 JS（不用 async、defer）会阻塞页面加载（因为 JS 可能修改 DOM，和 CSS 阻塞 JS 执行原理一样）")])]),_._v(" "),e("li",[e("p",[_._v("JS 不会阻塞外部资源的 "),e("strong",[_._v("加载")])])])])]),_._v(" "),e("li",[e("p",[_._v("懒加载 / 预加载")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("懒加载")]),_._v(" "),e("p",[_._v("图片进入可视区再加载。")]),_._v(" "),e("blockquote",[e("p",[_._v("页面需要显示很多图片时，用户不一定都会看，如果一下子全部加载就会浪费很多的网络请求，这就需要用到懒加载。")])])]),_._v(" "),e("li",[e("p",[_._v("预加载")]),_._v(" "),e("p",[_._v("图片等静态资源提前请求，资源使用到时，从缓存中加载，提升用户体验。")]),_._v(" "),e("p",[_._v("预加载的几种方法：")]),_._v(" "),e("ul",[e("li",[_._v("使用 "),e("code",[_._v("img")]),_._v(" 标签，提前请求好，然后通过控制样式将其隐藏。")]),_._v(" "),e("li",[_._v("使用 JS 中的 "),e("code",[_._v("Image")]),_._v(" 对象。")])]),_._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("var")]),_._v(" img "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("new")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[_._v("Image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\nimg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("src "),e("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[_._v('"https://xxx.png"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v("\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br"),e("span",{staticClass:"line-number"},[_._v("2")]),e("br")])]),e("p",[_._v("通过这种方式，当请求 JS 脚本时，图片就会被请求。")]),_._v(" "),e("ul",[e("li",[_._v("使用 Ajax（存在跨域问题）")]),_._v(" "),e("li",[_._v("使用第三方库："),e("a",{attrs:{href:"https://www.createjs.com/preloadjs",target:"_blank",rel:"noopener noreferrer"}},[_._v("preload.js"),e("OutboundLink")],1)])]),_._v(" "),e("blockquote",[e("p",[_._v("一些图片等资源会在进入页面之后依次使用到（比如：进入页面之后的图片切换动画），这就需要用到预加载。")]),_._v(" "),e("p",[_._v("进行预加载资源时，显示 loading 动画，等到要用的资源预加载完成，再去渲染页面。")])])])])]),_._v(" "),e("li",[e("p",[_._v("回流与重绘")]),_._v(" "),e("p",[_._v("当浏览器进行回流与重绘时，会导致 UI 频繁渲染，从而进一步阻塞 JS。\n所以 "),e("strong",[_._v("注意 CSS 的性能也是提高网页访问速度的重要因素")]),_._v("。编写 CSS 代码时，要尽量减少 UI 的重绘与回流。")]),_._v(" "),e("p",[e("strong",[_._v("概念介绍：")])]),_._v(" "),e("ul",[e("li",[e("p",[_._v("回流")]),_._v(" "),e("p",[_._v("当页面中一些元素的尺寸，布局，隐藏等改变，需要重新构建 render tree。这就成为回流。")]),_._v(" "),e("p",[e("strong",[_._v("会触发回流的属性：")])]),_._v(" "),e("p",[e("img",{attrs:{src:"/optimization/summary/css_backflow.png",alt:"css_backflow"}})])]),_._v(" "),e("li",[e("p",[_._v("重绘")]),_._v(" "),e("p",[_._v("当页面中一些元素需要更新属性，这些属性只影响元素的外观和风格，不影响大小、布局。则就是重绘。")]),_._v(" "),e("blockquote",[e("p",[_._v("回流一定引起重绘，重绘不一定引起回流")]),_._v(" "),e("p",[_._v("通过添加合成层（并不是 "),e("code",[_._v("z-index")]),_._v(" 定位的层），让频繁回流和重绘的元素单独在一个合成层，以此来减少回流和重绘对整个页面的影响。但是合成层过多又会增加浏览器进行合成层合成的时间。所以两者要进行权衡。")]),_._v(" "),e("p",[_._v("改变元素合成层的方式：")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("transform: translateZ(0);")])]),_._v(" "),e("li",[e("code",[_._v("will-change: transform;")])])])])])]),_._v(" "),e("p",[e("strong",[_._v("flush 队列：")])]),_._v(" "),e("blockquote",[e("p",[_._v("其实浏览器自身是有优化策略的。浏览器会维护一个队列，把所有引起回流、重绘的操作放入这个队列，等队列中的操作达到一定数量或到了一定时间间隔，浏览器就会 flush 这个队列，进行一个批处理。这样就让多次回流和重绘变成了一次回流重绘。")])]),_._v(" "),e("p",[e("strong",[_._v("一些 CSS 属性优化点：")])]),_._v(" "),e("ul",[e("li",[e("p",[_._v("使用 "),e("code",[_._v("translate")]),_._v(" 代替 "),e("code",[_._v("top / bottom / left / right")])])]),_._v(" "),e("li",[e("p",[_._v("使用 "),e("code",[_._v("opacity")]),_._v(" 代替 "),e("code",[_._v("visibility")])])]),_._v(" "),e("li",[e("p",[_._v("不要单独的修改 CSS 样式，而是通过修改 class 来一次性修改")])]),_._v(" "),e("li",[e("p",[_._v("DOM 样式 "),e("strong",[_._v("离线修改")])]),_._v(" "),e("blockquote",[e("p",[_._v("先将 DOM 节点设为 "),e("code",[_._v("display: none")]),_._v("，然后进行频繁的样式修改，修改完成之后再进行 "),e("code",[_._v("display: block")])])])]),_._v(" "),e("li",[e("p",[_._v("对于那些会强制刷新浏览器 flush 队列的 CSS 属性，不要放在循环里。这些 CSS 属性如下：")]),_._v(" "),e("div",{staticClass:"language-CSS line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[_._v("offsetTop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" offsetLeft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" offsetWidth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" offsetHeight\nscrollTop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" scrollLeft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" scrollWidth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" scrollHeight\nclientTop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" clientLeft"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" clientWidth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" clientHeight\nwidth"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" height\ngetComputedStyle"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" currentStyle\n")])]),_._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[_._v("1")]),e("br"),e("span",{staticClass:"line-number"},[_._v("2")]),e("br"),e("span",{staticClass:"line-number"},[_._v("3")]),e("br"),e("span",{staticClass:"line-number"},[_._v("4")]),e("br"),e("span",{staticClass:"line-number"},[_._v("5")]),e("br")])]),e("blockquote",[e("p",[_._v("使用这些属性时，浏览器会强制刷新队列，使得回流重绘每次都要进行")])])]),_._v(" "),e("li",[e("p",[_._v("尽量不用 table 布局")]),_._v(" "),e("blockquote",[e("p",[_._v("如果使用 table 布局，只要 table 中有一个部分改变，就会引起整个 table 的回流或重绘")])])]),_._v(" "),e("li",[e("p",[_._v("动画的速度选择")]),_._v(" "),e("blockquote",[e("p",[_._v("由于 UI 渲染和 JS 脚本"),e("strong",[_._v("执行")]),_._v(" 会相互阻塞，所以如果动画频率太高，页面几乎一直处于重绘状态，那么就会影响 JS 执行")])])]),_._v(" "),e("li",[e("p",[_._v("动画部分新建合成层")])]),_._v(" "),e("li",[e("p",[_._v("使用 GPU 加速")])])])]),_._v(" "),e("li",[e("p",[_._v("浏览器储存")]),_._v(" "),e("ul",[e("li",[e("p",[e("code",[_._v("Cookie")])]),_._v(" "),e("blockquote",[e("p",[_._v("前后端都可以进行创建和获取")])]),_._v(" "),e("p",[e("img",{attrs:{src:"/optimization/summary/web_speed_cookie.png",alt:"web_speed_cookie"}})]),_._v(" "),e("ul",[e("li",[_._v("Cookie 的设计初衷是用来维护用户的状态")]),_._v(" "),e("li",[_._v("可以储存的大小 < 4KB")])]),_._v(" "),e("p",[_._v("Cookie 是"),e("strong",[_._v("域名")]),_._v("下的概念，所以可能带来"),e("strong",[_._v("CDN 的流量损耗")]),_._v("。解决的办法就是"),e("strong",[_._v("将 CDN 的域名和主站的域名分开")]),_._v("。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("LocalStorage")])]),_._v(" "),e("p",[_._v("LocalStorage 是 HTML5 中设计出来，专门用于浏览器储存的")]),_._v(" "),e("ul",[e("li",[_._v("可储存的大小 < 5M")]),_._v(" "),e("li",[_._v("可用于 "),e("strong",[_._v("实现简单的浏览器缓存机制")])])]),_._v(" "),e("blockquote",[e("p",[_._v("如果资源短时间内不会被更新，那么就可以将其缓存在 LocalStorage 中（例如：缓存 JQuery 文件）")])])]),_._v(" "),e("li",[e("p",[e("code",[_._v("SessionStorage")])]),_._v(" "),e("p",[_._v("会话级别的浏览器储存（页面关闭就会被清除）")]),_._v(" "),e("ul",[e("li",[_._v("可储存的大小 < 5M")]),_._v(" "),e("li",[_._v("可用于 "),e("strong",[_._v("表单信息的维持")])])]),_._v(" "),e("blockquote",[e("p",[_._v("当用户填写表单时，使用 SessionStorage 进行实时储存，如果用户不小心刷新了页面，填写的表单信息并不会丢失。由于 SessionStorage 是会话级别的储存，所以当用户关闭页面后再次打开时，表单信息就又为空了")])])]),_._v(" "),e("li",[e("p",[e("code",[_._v("IndexedDB")])]),_._v(" "),e("p",[_._v("用户储存客户端大量的结构化数据。IndexedDB 使用索引来实现对数据的高性能搜索。")])])])]),_._v(" "),e("li",[e("p",[_._v("PWA")]),_._v(" "),e("blockquote",[e("p",[_._v("PWA（Progressive Web Apps） 是一种 Web App 新模型，并不是具体指某一种具体的技术或知识点。")]),_._v(" "),e("p",[_._v("是否符合 PWA 模型，有几种评判方法：")]),_._v(" "),e("ul",[e("li",[_._v("在离线情况下，App 是否能够正常使用")]),_._v(" "),e("li",[_._v("弱网情况下，App 能否快速加载")]),_._v(" "),e("li",[_._v("正常网络下，App 又是怎样的表现")])])])]),_._v(" "),e("li",[e("p",[_._v("Service Worker")]),_._v(" "),e("p",[_._v("Service Worker 是一个脚本，浏览器将其放置在独立于当前页面的后台中运行。为实现一些"),e("strong",[_._v("不依赖于页面或用户交互的特性")]),_._v("奠定了基础。在未来这些特性将包括：推送消息、背景后台同步、地理定位。并且 Service Worker 可以主动与页面进行交互，这样可以实现："),e("strong",[_._v("几个 tag 页之间的相互通信")]),_._v("。")]),_._v(" "),e("p",[_._v("它的设计初衷是："),e("strong",[_._v("用于拦截和处理网络请求的能力，以及管理被缓存的响应")]),_._v("。")]),_._v(" "),e("p",[e("strong",[_._v("应用：")])]),_._v(" "),e("ul",[e("li",[_._v("使用 Service Worker 拦截网络请求，然后从缓存中取数据，来"),e("strong",[_._v("实现离线应用的能力")])]),_._v(" "),e("li",[_._v("将比较耗时的 JS 运算放入 Service Worker，来实现 "),e("strong",[_._v("大规模数据的处理")])])]),_._v(" "),e("p",[_._v("查看 Chrome 中 Service Worker 的使用情况：")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("chrome://serviceworker-internals")]),_._v(" 查看浏览过的网站中 Service Worker 的使用情况")]),_._v(" "),e("li",[e("code",[_._v("chrome://inspect/#service-workers")]),_._v(" 查看浏览器当前正在使用的 Service Worker")])])]),_._v(" "),e("li",[e("p",[_._v("缓存机制")]),_._v(" "),e("ul",[e("li",[_._v("理解 "),e("code",[_._v("Cache-Control")]),_._v(" 所控制的缓存策略")]),_._v(" "),e("li",[_._v("理解 "),e("code",[_._v("Last-Modified")]),_._v(" 和 "),e("code",[_._v("ETag")]),_._v(" 以及整个服务端浏览器端的缓存流程")])]),_._v(" "),e("p",[_._v("HTTP Header：")]),_._v(" "),e("p",[_._v("强缓存")]),_._v(" "),e("ul",[e("li",[e("p",[e("code",[_._v("Expires")])]),_._v(" "),e("blockquote",[e("p",[_._v("设置资源的过期时间。告诉浏览器：在过期时间前，可以从缓存中直接读取资源。")])])]),_._v(" "),e("li",[e("p",[e("code",[_._v("Cache-Control")])]),_._v(" "),e("ul",[e("li",[e("p",[e("code",[_._v("max-age")])]),_._v(" "),e("blockquote",[e("p",[_._v("在 max-age 设置的时间内，客户端请求的资源都会从浏览器缓存中读取。\n优先级大于 "),e("code",[_._v("expires")]),_._v("。")])])]),_._v(" "),e("li",[e("p",[e("code",[_._v("s-maxage")])]),_._v(" "),e("blockquote",[e("p",[_._v("是对公共缓存设备（如：CDN，代理服务器）进行缓存设置。\n如果设置了 "),e("code",[_._v("s-maxage")]),_._v("，并且没有过期，资源就会向公共缓存设备请求。\n优先级大于 "),e("code",[_._v("max-age")]),_._v("。")])])]),_._v(" "),e("li",[e("p",[e("code",[_._v("no-cache")])]),_._v(" "),e("blockquote",[e("p",[_._v("始终发送请求去判断浏览器里的缓存资源是否过期。如果过期就从服务器获取资源，否则返回 304（响应不带 body），并使用浏览器中的缓存。")]),_._v(" "),e("p",[_._v("另外，这个属性需要配合 "),e("code",[_._v("max-age=0")]),_._v(" 来使用。")])])]),_._v(" "),e("li",[e("p",[e("code",[_._v("no-store")])]),_._v(" "),e("blockquote",[e("p",[_._v("对指定的文件完全不使用缓存策略。")])])])])])]),_._v(" "),e("p",[_._v("协商缓存")]),_._v(" "),e("ul",[e("li",[e("p",[e("code",[_._v("Last-Modified")]),_._v(" / "),e("code",[_._v("If-Modified-Since")])]),_._v(" "),e("blockquote",[e("p",[_._v("其中 "),e("code",[_._v("Last-Modified")]),_._v(" 是 HTTP 响应头，"),e("code",[_._v("If-Modified-Since")]),_._v(" 是 HTTP 请求头。\n需要与 "),e("code",[_._v("cache-control")]),_._v(" 共同使用。")])]),_._v(" "),e("p",[_._v("使用这个 HTTP Header 的缺点：")]),_._v(" "),e("ul",[e("li",[_._v("某些服务端不能获取精确的修改时间")]),_._v(" "),e("li",[_._v("文件修改时间变了，文件内容却没有变")])])]),_._v(" "),e("li",[e("p",[e("code",[_._v("ETag")]),_._v(" / "),e("code",[_._v("If-None-Match")])]),_._v(" "),e("blockquote",[e("p",[_._v("这个 HTTP Header 用来解决 "),e("code",[_._v("Last-Modified")]),_._v(" / "),e("code",[_._v("If-Modified-Since")]),_._v(" 的缺点。\n它们的值是一个标识文件不同的 MD5 戳。如果 "),e("code",[_._v("ETag")]),_._v(" 和 "),e("code",[_._v("If-None-Match")]),_._v(" 的值相同，证明文件没有改变。\n优先级大于 "),e("code",[_._v("Last-Modified")]),_._v(" / "),e("code",[_._v("If-Modified-Since")])])])])]),_._v(" "),e("p",[e("strong",[_._v("浏览器分级缓存策略：")])]),_._v(" "),e("p",[e("img",{attrs:{src:"/optimization/summary/service_cache.png",alt:"service_cache"}})]),_._v(" "),e("blockquote",[e("p",[_._v("304 也可以同时更新缓存文件的过期时间。")])])])]),_._v(" "),e("p",[_._v("性能优化总结：")]),_._v(" "),e("p",[_._v("1、网络层面")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("减少资源的数量（多个资源尽可能合并为一个）")]),_._v(" "),e("p",[_._v("带来的问题：")]),_._v(" "),e("ul",[e("li",[_._v("首屏渲染时间增加")]),_._v(" "),e("li",[_._v("资源缓存的有效时间减小")])]),_._v(" "),e("p",[_._v("因此可取的办法是：公共库合并，不同页面的资源按需加载")])]),_._v(" "),e("li",[e("p",[_._v("减小资源的大小（尽可能的压缩）")])])]),_._v(" "),e("p",[_._v("2、构建层面")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("图片类型的选择")]),_._v(" "),e("ul",[e("li",[_._v("JPG")]),_._v(" "),e("li",[_._v("PNG")]),_._v(" "),e("li",[_._v("Webp")]),_._v(" "),e("li",[_._v("SVG")]),_._v(" "),e("li",[_._v("雪碧图")]),_._v(" "),e("li",[_._v("base64")])])])]),_._v(" "),e("p",[_._v("3、浏览器层面")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("CSS 虽然不会阻塞外部资源的加载，但是会阻塞 JS 脚本的执行")])]),_._v(" "),e("li",[e("p",[_._v("JS 虽然不会阻塞外部资源的加载，但是会阻塞页面的加载（未用 async、defer）")])]),_._v(" "),e("li",[e("p",[_._v("外部 CSS 文件放在 "),e("code",[_._v("<head>")]),_._v(" 中，涉及 DOM 的 JS 文件放在 "),e("code",[_._v("</body>")]),_._v(" 之前，不涉及 DOM 的 JS 文件可以放在 "),e("code",[_._v("<head>")]),_._v(" 中，但最好加上 async、defer 属性")])]),_._v(" "),e("li",[e("p",[_._v("懒加载、预加载")])]),_._v(" "),e("li",[e("p",[_._v("精简 CSS 选择器（CSS 样式渲染的 50% 时间都花费在了查找元素上）")])]),_._v(" "),e("li",[e("p",[_._v("减少页面绘制时的回流和重绘")])]),_._v(" "),e("li",[e("p",[_._v("CSS 属性的书写顺序")])]),_._v(" "),e("li",[e("p",[_._v("尽量避免使用“引起回流的属性”（如 transfrom 代替 left, top 等）")])]),_._v(" "),e("li",[e("p",[_._v("通过 CSS class 一次性修改多个样式")])]),_._v(" "),e("li",[e("p",[_._v("频繁的样式修改操作，使用 DOM 样式离线修改")])]),_._v(" "),e("li",[e("p",[_._v("减少使用 table 布局")])]),_._v(" "),e("li",[e("p",[_._v("动画速度的选择（UI 渲染和 JS 脚本执行会相互阻塞，所以动画频率太高，页面会一直重绘）")])]),_._v(" "),e("li",[e("p",[_._v("动画部分新建合成层")])]),_._v(" "),e("li",[e("p",[_._v("合理使用硬件加速")])]),_._v(" "),e("li",[e("p",[_._v("页面渲染时，浏览器自身有一定的优化。但是使用某些属性（如：offsetTop）会使浏览器的优化失效，因此减少使用。")])]),_._v(" "),e("li",[e("p",[_._v("在 requestAnimationFrame 中，样式先读取再修改（在 raf 中，元素的样式在上一帧中就计算好了，所以读取时不会强制触发样式计算。但如果先设置样式，再读取；为了确保获取正确的样式，浏览器会在读取和设置时都强制计算样式）")])]),_._v(" "),e("li",[e("p",[_._v("浏览器存储")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("将 CDN 域名和主站域名分开（防止主站域名下的 Cookie，浪费 CDN 的流量）")])]),_._v(" "),e("li",[e("p",[_._v("可以用 SessionStorage 维持表单信息")])]),_._v(" "),e("li",[e("p",[_._v("可以用 LocalStorage 缓存一些不常更改的资源（微信公众号文章页实现秒开，就是将一些 CSS，JS 文件缓存到了 LocalStorage）")])]),_._v(" "),e("li",[e("p",[_._v("Service Worker")]),_._v(" "),e("ul",[e("li",[_._v("使用 Service Worker 拦截网络请求，然后从缓存中读取数据，实现离线应用")]),_._v(" "),e("li",[_._v("将不涉及 DOM 的比较耗时的运算放入 Service Worker")])])])])]),_._v(" "),e("li",[e("p",[_._v("缓存机制")]),_._v(" "),e("p",[_._v("强缓存")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("Expires 资源的过期时间")])]),_._v(" "),e("li",[e("p",[_._v("Cache-Control")]),_._v(" "),e("ul",[e("li",[_._v("max-age 在设置的时间内，从缓存读取")]),_._v(" "),e("li",[_._v("s-maxage 一般用于公共缓存设备")]),_._v(" "),e("li",[_._v("no-cache 缓存，但始终请求，判断是否过期")]),_._v(" "),e("li",[_._v("no-store 不缓存")])])])]),_._v(" "),e("p",[_._v("协商缓存")]),_._v(" "),e("ul",[e("li",[e("p",[_._v("Last-Modified / If-Modified-Since")]),_._v(" "),e("p",[_._v("缺点如下：")]),_._v(" "),e("ul",[e("li",[_._v("服务端可能获取不到准确的修改时间")]),_._v(" "),e("li",[_._v("文件修改时间变了，内容却没变")])])]),_._v(" "),e("li",[e("p",[_._v("ETag / If-None-Match")]),_._v(" "),e("p",[_._v("用于解决 Last-Modified / If-Modified-Since 的缺点。")])])])])])])}),[],!1,null,null,null);v.default=l.exports}}]);