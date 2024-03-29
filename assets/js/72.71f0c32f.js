(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{424:function(a,s,t){"use strict";t.r(s);var e=t(25),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-初探"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-初探"}},[a._v("#")]),a._v(" Mysql 初探")]),a._v(" "),t("p",[a._v("开源免费的关系型数据库")]),a._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mysql\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("code",[a._v("mysql")]),a._v(" 密码")]),a._v(" "),t("p",[t("code",[a._v("123")])]),a._v(" "),t("p",[t("code",[a._v("mysql")]),a._v(" 连接数据库")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("  mysql -u root -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("123")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"忘记密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#忘记密码"}},[a._v("#")]),a._v(" 忘记密码")]),a._v(" "),t("h3",{attrs:{id:"第一步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步"}},[a._v("#")]),a._v(" 第一步")]),a._v(" "),t("p",[a._v("苹果->系统偏好设置->最下边点mysql 在弹出页面中 关闭mysql服务（点击stop mysql server）")]),a._v(" "),t("h3",{attrs:{id:"第二步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步"}},[a._v("#")]),a._v(" 第二步")]),a._v(" "),t("p",[a._v("进入终端输入: "),t("code",[a._v("cd /usr/local/mysql/bin/")]),a._v("\n回车后 登录管理员权限 sudo su\n回车后输入以下命令来禁止mysql验证功能 "),t("code",[a._v("./mysqld_safe --skip-grant-tables &")]),a._v("\n回车后mysql会自动重启（偏好设置中mysql的状态会变成running）")]),a._v(" "),t("h3",{attrs:{id:"第三步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三步"}},[a._v("#")]),a._v(" 第三步")]),a._v(" "),t("p",[a._v("输入命令 "),t("code",[a._v("./mysql")]),a._v("\n回车后，输入命令 FLUSH PRIVILEGES;\n回车后，输入命令 SET PASSWORD FOR 'root'@'localhost' = PASSWORD('你的新密码');")]),a._v(" "),t("p",[a._v("至此，密码修改完成，可以成功登陆。")]),a._v(" "),t("p",[a._v("常用database操作")]),a._v(" "),t("p",[a._v("创建一个名字为 "),t("code",[a._v("mydatabase")]),a._v(" 数据库:  "),t("code",[a._v("create database mydatabase")]),a._v(" ;\n可以用以下地命令来查看创建的数据库是否成功: show databases ;\n更改数据库名字: "),t("code",[a._v("alter databases Hdatabase")]),a._v(" ;\n更改数据库 "),t("code",[a._v("mydatabase")]),a._v(" 的字符集 :  "),t("code",[a._v("alter database mydatabase charset GBK")]),a._v(" ;\n进入数据库: "),t("code",[a._v("use mydatabase")]),a._v(" ;")]),a._v(" "),t("p",[a._v("用下面的命令来查看该数据库中的表:  "),t("code",[a._v("show tables")]),a._v(" ;")]),a._v(" "),t("p",[a._v("表操作\n用下面的命令来创建表")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("  create table student "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    name varchar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ,\n    gender varchar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" ,\n    sno    int    primary key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("charset utf8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("用下面的命令来检查表的创建是否成功:  "),t("code",[a._v("show tables")]),a._v(";")])])}),[],!1,null,null,null);s.default=n.exports}}]);