(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{417:function(s,a,t){"use strict";t.r(a);var e=t(25),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-7"}},[s._v("#")]),s._v(" CentOS 7")]),s._v(" "),t("p",[s._v("常用于服务端的 linux 发行版，基于其稳定的性能")]),s._v(" "),t("h2",{attrs:{id:"添加-删除用户和用户组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加-删除用户和用户组"}},[s._v("#")]),s._v(" 添加/删除用户和用户组")]),s._v(" "),t("h3",{attrs:{id:"新建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建用户"}},[s._v("#")]),s._v(" 新建用户")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -------------------------记得要在root用户下-------------------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建testuser 用户")]),s._v("\nadduser testuser\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给testuser 用户设置密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" testuser\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"建工作组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建工作组"}},[s._v("#")]),s._v(" 建工作组")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建test工作组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" testgroup\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"新建用户同时增加工作组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建用户同时增加工作组"}},[s._v("#")]),s._v(" 新建用户同时增加工作组")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建testuser用户并增加到testgroup工作组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -g testgroup testuser\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注：：-g 所属组 -d 家目录 -s 所用的SHELL")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"给已有的用户增加工作组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#给已有的用户增加工作组"}},[s._v("#")]),s._v(" 给已有的用户增加工作组")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -G groupname username\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"临时关闭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#临时关闭"}},[s._v("#")]),s._v(" 临时关闭")]),s._v(" "),t("p",[s._v("在/etc/shadow文件中属于该用户的行的第二个字段（密码）前面加上"),t("em",[s._v("就可以了。想恢复该用户，去掉")]),s._v("即可")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者使用如下命令关闭用户账号：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" testuser –l\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新释放：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" testuser –u\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"永久性删除用户账号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#永久性删除用户账号"}},[s._v("#")]),s._v(" 永久性删除用户账号")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" testuser 不删除 home 目录\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("userdel")]),s._v(" -r testuser 删除 home 目录\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupdel")]),s._v(" testgroup\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 强制删除该用户的主目录和主目录下的所有文件和子目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" –G testgroup testuser\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"显示用户信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#显示用户信息"}},[s._v("#")]),s._v(" 显示用户信息")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" user\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"补充-查看用户和用户组的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#补充-查看用户和用户组的方法"}},[s._v("#")]),s._v(" 补充:查看用户和用户组的方法")]),s._v(" "),t("ul",[t("li",[s._v("用户列表文件："),t("code",[s._v("/etc/passwd")])]),s._v(" "),t("li",[s._v("用户组列表文件："),t("code",[s._v("/etc/group")])]),s._v(" "),t("li",[s._v("查看系统中有哪些用户："),t("code",[s._v("cut -d : -f 1 /etc/passwd")])]),s._v(" "),t("li",[s._v("查看可以登录系统的用户："),t("code",[s._v("cat /etc/passwd | grep -v /sbin/nologin | cut -d : -f 1")])]),s._v(" "),t("li",[s._v("查看用户操作："),t("code",[s._v("w命令(需要root权限)")])]),s._v(" "),t("li",[s._v("查看某一用户："),t("code",[s._v("w 用户名")])]),s._v(" "),t("li",[s._v("查看登录用户："),t("code",[s._v("who")])]),s._v(" "),t("li",[s._v("查看用户登录历史记录："),t("code",[s._v("last")])])]),s._v(" "),t("h2",{attrs:{id:"修改主机名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改主机名"}},[s._v("#")]),s._v(" 修改主机名")]),s._v(" "),t("h3",{attrs:{id:"hostnamectl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hostnamectl"}},[s._v("#")]),s._v(" hostnamectl")]),s._v(" "),t("p",[s._v("永久生效")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("hostnamectl set-hostname "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'you name'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看主机名等信息")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("hostnamectl\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);