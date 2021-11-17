(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{420:function(s,a,n){"use strict";n.r(a);var e=n(25),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"linux-部署-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#linux-部署-配置"}},[s._v("#")]),s._v(" Linux 部署/配置")]),s._v(" "),n("h2",{attrs:{id:"免密登录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#免密登录"}},[s._v("#")]),s._v(" 免密登录")]),s._v(" "),n("h3",{attrs:{id:"免密登陆的原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#免密登陆的原理"}},[s._v("#")]),s._v(" 免密登陆的原理")]),s._v(" "),n("p",[s._v("通过 ssh 协议，生成的 "),n("strong",[s._v("非对称加密秘钥")]),s._v(" 进行连接，同步公钥到服务端，每次请求的服务器时，服务器验证是否存在公钥，会使用公钥加密一段信息传输到客户端，客户端在使用配对的私钥解密进行验证，从而验证客户端登录。")]),s._v(" "),n("p",[s._v("详细流程：")]),s._v(" "),n("ul",[n("li",[s._v("在客户端使用ssh-keygen生成一对密钥：公钥+私钥")]),s._v(" "),n("li",[s._v("将客户端公钥追加到服务端的authorized_key文件中，完成公钥认证操作")]),s._v(" "),n("li",[s._v("认证完成后，客户端向服务端发起登录请求，并传递公钥到服务端")]),s._v(" "),n("li",[s._v("服务端检索authorized_key文件，确认该公钥是否存在")]),s._v(" "),n("li",[s._v("如果存在该公钥，则生成随机数R，并用公钥来进行加密，生成公钥加密字符串pubKey(R)")]),s._v(" "),n("li",[s._v("将公钥加密字符串传递给客户端")]),s._v(" "),n("li",[s._v("客户端使用私钥解密公钥加密字符串，得到R")]),s._v(" "),n("li",[s._v("服务端和客户端通信时会产生一个会话ID(sessionKey)，用MD5对R和SessionKey进行加密，生成摘要（即MD5加密字符串）")]),s._v(" "),n("li",[s._v("客户端将生成的MD5加密字符串传给服务端")]),s._v(" "),n("li",[s._v("服务端同样生成MD5(R,SessionKey)加密字符串")]),s._v(" "),n("li",[s._v("如果客户端传来的加密字符串等于服务端自身生成的加密字符串，则认证成功")]),s._v(" "),n("li",[s._v("此时不用输入密码，即完成建连，可以开始远程执行shell命令了")])]),s._v(" "),n("h3",{attrs:{id:"生成秘钥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生成秘钥"}},[s._v("#")]),s._v(" 生成秘钥")]),s._v(" "),n("p",[s._v("ssh-genkey是生成密钥的工具，执行完成后生成公钥和密钥，这两个文件会默认保存在~/.ssh/路径下。常用的参数为：")]),s._v(" "),n("ul",[n("li",[s._v("-t: 指定生成密钥类型（rsa、dsa）。默认为rsa")]),s._v(" "),n("li",[s._v("-f: 指定存放私钥的文件，公钥文件名为私钥文件名加.pub后缀。默认为id_rsa")]),s._v(" "),n("li",[s._v("-P: 指定passphrase（私钥的密码），用于确保私钥的安全。默认为空")]),s._v(" "),n("li",[s._v("-C: 备注。默认为user@hostname")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成秘钥")]),s._v("\nssh-keygen -t rsa -C "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you_set_name"')]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you_set_name_rsa"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"上传公钥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#上传公钥"}},[s._v("#")]),s._v(" 上传公钥")]),s._v(" "),n("p",[s._v("ssh-copy-id - 将你的公共密钥填充到一个远程机器上的authorized_keys文件中。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上传公钥")]),s._v("\nssh-copy-id -i you_set_nae_rsa.pub root@服务器ip/域名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("不要带协议"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[n("strong",[s._v("配置登录一定要设置公钥权限为 600")]),s._v(".")]),s._v(" "),n("h3",{attrs:{id:"配置本地私钥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置本地私钥"}},[s._v("#")]),s._v(" 配置本地私钥")]),s._v(" "),n("ul",[n("li",[s._v("把第一步生成的私钥复制到你的home目录下的.ssh/ 路径下")])]),s._v(" "),n("p",[n("strong",[s._v("配置你的私钥文件访问权限为 600")]),s._v(".")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" 你的私钥文件名\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"免密登陆功能的本地配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#免密登陆功能的本地配置文件"}},[s._v("#")]),s._v(" 免密登陆功能的本地配置文件")]),s._v(" "),n("ul",[n("li",[s._v("编辑自己home目录的.ssh/ 路径下的config文件")])]),s._v(" "),n("p",[s._v("(没有就自己生成一个,"),n("code",[s._v("touch config")]),s._v(")")]),s._v(" "),n("p",[n("strong",[s._v("配置config文件的访问权限为 644")]),s._v(".")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 多主机配置")]),s._v("\nHost gateway-produce\nHostName IP或绑定的域名\nPort "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\nHost node-produce\nHostName IP或绑定的域名\nPort "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\nHost java-produce\nHostName IP或绑定的域名\nPort "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# * 为通配符，匹配所有-produce 的服务器")]),s._v("\nHost *-produce\nUser root\nIdentityFile ~/.ssh/produce_key_rsa\nProtocol "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nCompression "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nServerAliveInterval "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\nServerAliveCountMax "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\nLogLevel INFO\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#单主机配置")]),s._v("\nHost 别名\nUser 用户名\nHostName IP或绑定的域名\nIdentityFile ~/.ssh/私钥名字\nProtocol "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nCompression "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nServerAliveInterval "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\nServerAliveCountMax "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\nLogLevel INFO\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);