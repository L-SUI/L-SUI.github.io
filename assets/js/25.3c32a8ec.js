(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{378:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#husky"}},[s._v("#")]),s._v(" husky")]),s._v(" "),a("blockquote",[a("p",[s._v("本文中使用的 husk 是 v6 版本")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"}},[s._v("husky"),a("OutboundLink")],1),s._v(" 可以做什么，可以规范前端代码提交的规范，我们可以在 git 提交的时候做一些事情，比如代码 eslint 检查，使用 prettier 对代码格式修复。因为在多人开发项目的时候，仅仅只是开发可不够，还需要一些方便快捷的工具，强大的 husky 集成了 githook，更加方便的使用 githooks")]),s._v(" "),a("p",[s._v("类似的工具还有")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/yyx990803/yorkie",target:"_blank",rel:"noopener noreferrer"}},[s._v("yorkie 尤雨溪 vue项目中使用的"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D husky @commitlint/cli @commitlint/config-conventional\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("为什么会有 "),a("code",[s._v("@commitlint/cli")]),s._v(" 和 "),a("code",[s._v("@commitlint/config-conventional")]),s._v(" ?")]),s._v(" "),a("ul",[a("li",[s._v("因为这两个可以对我们提交的 msg 进行检测，用处就不言而喻了吧，当然也可以使用 yorkie 中的特定验证配置")])]),s._v(" "),a("p",[s._v("在项目脚本里追加 "),a("a",{attrs:{href:"https://docs.npmjs.com/cli/v7/using-npm/scripts",target:"_blank",rel:"noopener noreferrer"}},[s._v("prepare"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("为什么需要 "),a("a",{attrs:{href:"https://typicode.github.io/husky/#/?id=install",target:"_blank",rel:"noopener noreferrer"}},[s._v("husky install"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"script"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"prepare"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"husky install"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"接下来配置-commitlint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接下来配置-commitlint"}},[s._v("#")]),s._v(" 接下来配置 commitlint")]),s._v(" "),a("p",[s._v("详细参数参考: https://commitlint.js.org/")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// package.json 同层级 commitlint.config.js")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@commitlint/config-conventional"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type-enum"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"always"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chore"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ci"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"feat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fix"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"perf"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"refactor"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"revert"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"style"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"record"')]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type-empty"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"type-case"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scope-empty"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"header-max-length"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'always'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("72")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"初始化-husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化-husky"}},[s._v("#")]),s._v(" 初始化 husky")]),s._v(" "),a("p",[s._v("先初始化")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" prepare\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("会得到这样一个目录结构，在项目根目录下")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".husky/\n  ├── _\n  │   └── husky.sh\n  └── .gitignore\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("我们只需要创建一个 sh 文件，"),a("strong",[s._v("注意")]),s._v(" 别加后缀 "),a("code",[s._v(".sh")])]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v(".husky")]),s._v(" 文件下建立一个无后缀文件 "),a("code",[s._v("commit-msg")]),s._v(" (这个就是 "),a("a",{attrs:{href:"https://www.git-scm.com/docs/githooks",target:"_blank",rel:"noopener noreferrer"}},[s._v("git hooks"),a("OutboundLink")],1),s._v(")")]),s._v(" "),a("p",[s._v("在其中追加如下代码，因为默认使用的 "),a("code",[s._v("yarn")]),s._v(" 环境，所以这里使用的是 "),a("code",[s._v("yarn")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh # 指定 shell 环境")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dirname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('/_/husky.sh"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# refer1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" commitlint --edit "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v(":::note $0, $1 是什么\n$0: 就是该 sh 文件名\n$1: 值得是传递的第一个参数")]),s._v(" "),a("p",[s._v("所以上述 refer1 指的就是执行当前目录下的 "),a("code",[s._v("./_/husky.sh")]),s._v(" 脚本文件")]),s._v(" "),a("p",[s._v("然后执行 "),a("code",[s._v("yarn commitlint --edit [传递的参数]")]),s._v("\n:::")]),s._v(" "),a("h3",{attrs:{id:"okk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#okk"}},[s._v("#")]),s._v(" okk")]),s._v(" "),a("p",[s._v("大功告成，🍺")]),s._v(" "),a("p",[s._v("测试一下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxx'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("不出意外的话，将会报如下错误，并且提交中断")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("⧗   input: xxxx\n✖   subject may not be empty "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("subject-empty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n✖   found "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" problems, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" warnings\nⓘ   Get help: https://github.com/conventional-changelog/commitlint/"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#what-is-commitlint")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("然后将提交的内容修改正确便可以提交了")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'feat: husky so cool~'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://github.com/HondryTravis/inkstone/tree/beta-cli@0.0.1",target:"_blank",rel:"noopener noreferrer"}},[s._v("可以查看 Demo 连接"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);