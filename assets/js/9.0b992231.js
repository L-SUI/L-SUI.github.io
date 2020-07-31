(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{357:function(s,n,t){"use strict";t.r(n);var a=t(42),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"jenkins笔记"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins笔记"}},[s._v("#")]),s._v(" Jenkins笔记")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.jenkins.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Jenkins官网：https://www.jenkins.io/"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"environmental-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environmental-support"}},[s._v("#")]),s._v(" Environmental support")]),s._v(" "),t("p",[s._v("JAVA 8 或者 JAVA  11")]),s._v(" "),t("h2",{attrs:{id:"download-and-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download-and-install"}},[s._v("#")]),s._v(" Download and install")]),s._v(" "),t("p",[s._v("长期支持版本 (LTS)。下载安装包，不要下载war格式的。")]),s._v(" "),t("p",[s._v("服务器可下载rpm格式的然后上传。用rpm命令直接解压完成即可。")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/djlsunshine/p/10249135.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载两种方式可以看这篇文章"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh jenkin-**.rpm\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa jenkins\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#会输出一个Jenkins**.noarch文件")]),s._v("\nsystemctl start jenkins\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动Jenkins 打开浏览区访问服务器域名8080端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Jenkins安装完成之后是一个服务，不用的时候可以关掉。")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将jenkins账号分别加入到root组中 ")]),s._v("\ngpasswd -a root jenkins \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#（还有一种说法是：gpasswd -a jenkins root）")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改/etc/sysconfig/jenkins文件中， # user id to be invoked as (otherwise will run as root; not wise!)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/jenkins\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_USER")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_GROUP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可以修改为root权限运行")]),s._v("\nsystemctl restart jenkins\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://img2018.cnblogs.com/blog/1482552/201901/1482552-20190110130516884-60157708.png",alt:""}})]),s._v(" "),t("p",[s._v("打开页面后复制 页面展示的路径然后")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" 复制的路径\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输出一串字符串，复制后粘贴")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("下一步安装插件：欢乐二选一（选择推荐或者自选安装）。两者皆可")]),s._v(" "),t("p",[t("img",{attrs:{src:"/automation/1595317649969_0AAF31D7-000E-4F7F-85F2-DBD83F185178.png",alt:""}})]),s._v(" "),t("p",[s._v("下一步顺着点下去就可以")]),s._v(" "),t("p",[t("img",{attrs:{src:"/automation/1595317673661_750DB53B-73DA-4370-AE58-A87FD23B120B.png",alt:"1595317673661_750DB53B-73DA-4370-AE58-A87FD23B120B"}})]),s._v(" "),t("h2",{attrs:{id:"pugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pugins"}},[s._v("#")]),s._v(" Pugins")]),s._v(" "),t("p",[s._v("必备插件：")]),s._v(" "),t("blockquote",[t("p",[s._v("NodeJS"),t("br"),s._v("\nGit PreBuildMerge Trait Plugin"),t("br"),s._v("\nGitHub Integration"),t("br"),s._v("\nPublish Over SSH"),t("br"),s._v("\nSSH Agent")])]),s._v(" "),t("h2",{attrs:{id:"newtask"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#newtask"}},[s._v("#")]),s._v(" NewTask")]),s._v(" "),t("p",[s._v("添加git仓库")]),s._v(" "),t("p",[t("img",{attrs:{src:"/automation/1595318873977_3FC88EB6-FA32-4DFB-A7EA-6A411BA92FDA.png",alt:""}})]),s._v(" "),t("p",[s._v("添加shell")]),s._v(" "),t("p",[t("img",{attrs:{src:"/automation/1595318986231_A4B2AC49-2E94-4C9E-875C-8DB56F09ED56.png",alt:"1595318986231_A4B2AC49-2E94-4C9E-875C-8DB56F09ED56"}})]),s._v(" "),t("p",[s._v("添加完成之后即可去构建")])])}),[],!1,null,null,null);n.default=e.exports}}]);