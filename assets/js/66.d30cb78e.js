(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{419:function(s,n,e){"use strict";e.r(n);var t=e(25),a=Object(t.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"linux免密远程登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux免密远程登录"}},[s._v("#")]),s._v(" Linux免密远程登录")]),s._v(" "),e("h2",{attrs:{id:"免密登陆的原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#免密登陆的原理"}},[s._v("#")]),s._v(" 免密登陆的原理")]),s._v(" "),e("ol",[e("li",[s._v("走SSL协议，ssh包含了SSL协议，ssh前身telnet协议，电话拨号。ssh为加密的telnet。（类似于https和http的区别）")]),s._v(" "),e("li",[s._v("telnet时期需要modem（接入设备）。之前传输最快56K。传输为音频信号。未加密，传输为明文。")]),s._v(" "),e("li",[s._v("SSL协议需要交换密钥，使用不对称加密方式。生成两个密钥，一个公钥，一个私钥。")]),s._v(" "),e("li",[s._v("登录过程需要建立TLS加密链接，服务器传过来一个公钥加密后的，传给客户端，客户端用私钥加密。")])]),s._v(" "),e("h2",{attrs:{id:"配置免密登陆的步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置免密登陆的步骤"}},[s._v("#")]),s._v(" 配置免密登陆的步骤")]),s._v(" "),e("ol",[e("li",[s._v("生成秘钥对")])]),s._v(" "),e("blockquote",[e("p",[s._v('ssh-keygen -t rsa -C "你自己的名字" -f "你自己的名字_rsa"')])]),s._v(" "),e("p",[s._v("生成过程中会询问问题，第一个询问是否使用密钥时候输入密码，第二次再次输入，两次回车跳过")]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v('上传配置公钥\n上传公钥到服务器对应账号的home路径下的.ssh/中 ( ssh-copy-id -i "公钥文件名" 用户名@服务器ip或域名 ) 配置公钥文件访问权限为 600')])]),s._v(" "),e("blockquote",[e("p",[s._v('ssh-copy-id -i "公钥文件名" 用户名@服务器ip或域名\n-i指定你的密钥文件  共钥名字')])]),s._v(" "),e("ul",[e("li",[s._v("添加到的位置\n->> 服务器下的.ssh文件夹下面 authorized.keys")])]),s._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[s._v("配置本地私钥")])]),s._v(" "),e("ul",[e("li",[s._v("把第一步生成的私钥复制到你的home目录下的.ssh/ 路径下")]),s._v(" "),e("li",[s._v("配置你的私钥文件访问权限为 600")])]),s._v(" "),e("p",[s._v("这时候已经可以使用你的私钥进行免密登陆了")]),s._v(" "),e("blockquote",[e("p",[s._v("ssh -i 私钥名字 root@服务器地址")])]),s._v(" "),e("p",[s._v("但是显得过于长了")]),s._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[s._v("免密登陆功能的本地配置文件")])]),s._v(" "),e("ul",[e("li",[s._v("编辑自己home目录的.ssh/ 路径下的config文件")]),s._v(" "),e("li",[s._v("配置config文件的访问权限为 644")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 多主机配置\nHost gateway-produce\nHostName IP或绑定的域名\nPort 22\nHost node-produce\nHostName IP或绑定的域名\nPort 22\nHost java-produce\nHostName IP或绑定的域名\nPort 22\n\nHost *-produce\nUser root\nIdentityFile ~/.ssh/produce_key_rsa\nProtocol 2\nCompression yes\nServerAliveInterval 60\nServerAliveCountMax 20\nLogLevel INFO\n\n#单主机配置\nHost evil-cloud\nUser root\nHostName IP或绑定的域名\nIdentityFile ~/.ssh/evilboy_rsa\nProtocol 2\nCompression yes\nServerAliveInterval 60\nServerAliveCountMax 20\nLogLevel INFO\n\n#单主机配置\nHost git.yideng.site\nUser git\nIdentityFile ~/.ssh/evilboy_rsa\nProtocol 2\nCompression yes\nServerAliveInterval 60\nServerAliveCountMax 20\nLogLevel INFO\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);