(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{411:function(s,n,t){"use strict";t.r(n);var a=t(25),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"一些-mac-常用的命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些-mac-常用的命令"}},[s._v("#")]),s._v(" 一些 mac 常用的命令")]),s._v(" "),t("p",[s._v("方便 mac 使用")]),s._v(" "),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找filename文件路径")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找pagename文件路径")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("pagename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除filename文件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制删除，有超级权限")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建文件夹")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建文本")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印环境变量")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示当前文件路径")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示系统详细信息")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示当前用户")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whoami")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示环境变量")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本机IP地址")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 精准匹配本机ip，显示本地wifi网线ip")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inet'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'inet6'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写入文件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hello world'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" xxx.txt\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看文件")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);