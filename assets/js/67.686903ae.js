(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{420:function(t,a,s){"use strict";s.r(a);var e=s(25),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-初探"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-初探"}},[t._v("#")]),t._v(" Linux 初探")]),t._v(" "),s("p",[t._v("Linux，全称GNU/Linux，是一套免费使用和自由传播的类UNIX操作系统，其内核由林纳斯·本纳第克特·托瓦兹于1991年第一次释出，它主要受到Minix和Unix思想的启发，是一个基于POSIX和Unix的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的Unix工具软件、应用程序和网络协议。它支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。Linux有上百种不同的发行版，如基于社区开发的debian、archlinux，和基于商业开发的Red Hat Enterprise Linux、SUSE、oracle linux等")]),t._v(" "),s("h2",{attrs:{id:"体系架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#体系架构"}},[t._v("#")]),t._v(" 体系架构")]),t._v(" "),s("h3",{attrs:{id:"简要结构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简要结构图"}},[t._v("#")]),t._v(" 简要结构图")]),t._v(" "),s("p",[s("img",{attrs:{src:"/linux/linux.png",alt:"linux"}})]),t._v(" "),s("h3",{attrs:{id:"完整结构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整结构图"}},[t._v("#")]),t._v(" 完整结构图")]),t._v(" "),s("p",[s("img",{attrs:{src:"/linux/linux_1.png",alt:"linux"}})]),t._v(" "),s("h3",{attrs:{id:"系统体系结构图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统体系结构图"}},[t._v("#")]),t._v(" 系统体系结构图")]),t._v(" "),s("p",[s("img",{attrs:{src:"/linux/linux_system.png",alt:"linux"}})]),t._v(" "),s("h2",{attrs:{id:"常见目录含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见目录含义"}},[t._v("#")]),t._v(" 常见目录含义")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("目录")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("概述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/bin")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("存放⼆进制可执⾏⽂件(ls,cat,mkdir等)，常⽤命令⼀般都在这⾥。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/etc")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("存放系统管理和配置⽂件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/home")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("存放所有⽤户⽂件的根⽬录，是⽤户主⽬录的基点，⽐如⽤户user的主⽬录就是/home/user，可以⽤~user表示")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/usr")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("⽤于存放系统应⽤程序，⽐较重要的⽬录/usr/local 本地系统管理员软件安装⽬录（安装系统级的应⽤）。这是最庞⼤的⽬录，要⽤到的应⽤程序和⽂件⼏乎都在这个⽬录。/usr/x11r6 存放x window的⽬录/usr/bin 众多的应⽤程序/usr/sbin超级⽤户的⼀些管理程序/usr/doc linux⽂档/usr/include linux下开发和编译应⽤程序所需要的头⽂件/usr/lib 常⽤的动态链接库和软件包的配置⽂件/usr/man 帮助⽂档/usr/src 源代码，linux内核的源代码就放在/usr/src/linux⾥/usr/local/bin本地增加的命令/usr/local/lib 本地增加的库")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/opt")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("额外安装的可选应⽤程序包所放置的位置。⼀般情况下，我们可以把tomcat等都安装到这⾥。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/proc")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("虚拟⽂件系统⽬录，是系统内存的映射。可直接访问这个⽬录来获取系统信息。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/root")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("超级⽤户（系统管理员）的主⽬录（特权阶级^o^）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/sbin")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("存放⼆进制可执⾏⽂件，只有root才能访问。这⾥存放的是系统管理员使⽤的系统级别的管理命令和程序。如ifconfig等。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/dev")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("⽤于存放设备⽂件。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/mnt")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("系统管理员安装临时⽂件系统的安装点，系统提供这个⽬录是让⽤户临时挂载其他的⽂件系统。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/boot")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("存放⽤于系统引导时使⽤的各种⽂件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/lib")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("存放跟⽂件系统中的程序运⾏所需要的共享库及内核模块。共享库⼜叫动态链接共享库，作⽤类似windows⾥的.dll⽂件，存放了根⽂件系统程序运⾏所需的共享⽂件。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/tmp")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("⽤于存放各种临时⽂件，是公⽤的临时⽂件存储点。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/var")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("⽤于存放运⾏时需要改变数据的⽂件，也是某些⼤⽂件的溢出区，⽐⽅说各种服务的⽇志⽂件（系统启动⽇志等。）等。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("/lost+found")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("这个⽬录平时是空的，系统⾮正常关机⽽留下“⽆家可归”的⽂件（windows下叫什么.chk）就在这⾥")])])])]),t._v(" "),s("h2",{attrs:{id:"通用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用命令"}},[t._v("#")]),t._v(" 通用命令")]),t._v(" "),s("h3",{attrs:{id:"认识终端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识终端"}},[t._v("#")]),t._v(" 认识终端")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@travis ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("概述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("root")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("为当前登录用户")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("travis")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("主机名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("~")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当前⼯作⽬录,默认是当前⽤户的家⽬录，root就是/root,普通⽤户是 /home/⽤户名")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("#、$")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("提示符超级⽤户是 #,普通⽤户是$")])])])]),t._v(" "),s("h3",{attrs:{id:"一般命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一般命令格式"}},[t._v("#")]),t._v(" 一般命令格式")]),t._v(" "),s("p",[t._v("命令 [选项] [参数]")]),t._v(" "),s("p",[t._v("当有多个选项时，可以写在⼀起")]),t._v(" "),s("p",[t._v("⼀般参数有简化和完整写法两种 -a 与 --all 等效")]),t._v(" "),s("h3",{attrs:{id:"ls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ls"}},[t._v("#")]),t._v(" ls")]),t._v(" "),s("p",[t._v("查询⽬录中的内容")]),t._v(" "),s("p",[t._v("ls [选项] [⽂件或者⽬录]")]),t._v(" "),s("p",[t._v("选项")]),t._v(" "),s("ul",[s("li",[t._v("-a 显示所有⽂件，包括隐藏⽂件")]),t._v(" "),s("li",[t._v("-l 显示详细信息")]),t._v(" "),s("li",[t._v("-d 查看⽬录本身的属性⽽⾮⼦⽂件 ls /etc/")]),t._v(" "),s("li",[t._v("-h ⼈性化的⽅式显示⽂件⼤⼩")]),t._v(" "),s("li",[t._v("-i 显示inode,也就是i节点")])]),t._v(" "),s("p",[t._v("默认当前⽬录下的⽂件列表")]),t._v(" "),s("p",[t._v("-l 显示详细信息")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("drwxr-xr-x "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" root root "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),t._v(" Sep "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" 00:19 logs\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("drwxr-xr-x")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v(".")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("root")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("root")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("800")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Sep 16 00:19")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("logs")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("⽂件类型和权限")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("ACL 权限")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("硬链接引⽤计数")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("所有者")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("所属组")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("文件大小")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("最后修改时间")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("文件名")])])])]),t._v(" "),s("h4",{attrs:{id:"⽂件类型和权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⽂件类型和权限"}},[t._v("#")]),t._v(" ⽂件类型和权限")]),t._v(" "),s("p",[s("code",[t._v("-rw-r--r--")])]),t._v(" "),s("ul",[s("li",[t._v("⽂件类型 - ⽂件、d ⽬录、l 软链接⽂件")]),t._v(" "),s("li",[t._v("u(所有者)、g(所属组)、o(其他⼈)")]),t._v(" "),s("li",[t._v("r(read) 读取、w(write) 写⼊、x(execute) 执⾏")])]),t._v(" "),s("h2",{attrs:{id:"文件处理命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件处理命令"}},[t._v("#")]),t._v(" 文件处理命令")]),t._v(" "),s("h3",{attrs:{id:"mkdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mkdir"}},[t._v("#")]),t._v(" mkdir")]),t._v(" "),s("p",[t._v("建⽴⽬录 mkdir")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("make directory")])]),t._v(" "),s("li",[s("p",[t._v("mkdir -p [⽬录名]")]),t._v(" "),s("ul",[s("li",[t._v("-p 递归创建")])])])]),t._v(" "),s("h3",{attrs:{id:"cd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cd"}},[t._v("#")]),t._v(" cd")]),t._v(" "),s("p",[t._v("切换所在⽬录 change directory")]),t._v(" "),s("ul",[s("li",[t._v("cd [⽬录]\n"),s("ul",[s("li",[t._v("~ 家⽬录")]),t._v(" "),s("li",[t._v("家⽬录")]),t._v(" "),s("li",[t._v("-上次⽬录")]),t._v(" "),s("li",[t._v(". 当前⽬录")]),t._v(" "),s("li",[t._v(".. 上级⽬录")])])]),t._v(" "),s("li",[t._v("相对路径是参照当前所在⽬录")]),t._v(" "),s("li",[t._v("绝对路径是从根⽬录开始")]),t._v(" "),s("li",[t._v("按TAB键可以补全命令和⽬录")])]),t._v(" "),s("h3",{attrs:{id:"pwd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pwd"}},[t._v("#")]),t._v(" pwd")]),t._v(" "),s("p",[t._v("显示当前⽬录 pwd")]),t._v(" "),s("h3",{attrs:{id:"rmdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rmdir"}},[t._v("#")]),t._v(" rmdir")]),t._v(" "),s("p",[t._v("删除目录 rmdir")]),t._v(" "),s("ul",[s("li",[t._v("删除⽬录 remove empty directory")]),t._v(" "),s("li",[t._v("rmdir [⽬录名]")])]),t._v(" "),s("h3",{attrs:{id:"rm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rm"}},[t._v("#")]),t._v(" rm")]),t._v(" "),s("p",[t._v("删除⽂件或者⽬录 remove")]),t._v(" "),s("ul",[s("li",[t._v("删除⽂件或者⽬录 remove\n"),s("ul",[s("li",[t._v("rm [⽂件或者⽬录]")]),t._v(" "),s("li",[t._v("-r 删除⽬录")]),t._v(" "),s("li",[t._v("-f 强制删除")])])]),t._v(" "),s("li",[t._v("rm -rf [⽂件或者⽬录] 递归强制删除所有⽬录")])]),t._v(" "),s("h3",{attrs:{id:"cp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cp"}},[t._v("#")]),t._v(" cp")]),t._v(" "),s("p",[t._v("copy 复制命令")]),t._v(" "),s("ul",[s("li",[t._v("copy 复制命令")]),t._v(" "),s("li",[t._v("copy [源⽂件或者⽬录] [⽬标⽂件]\n"),s("ul",[s("li",[t._v("-r 复制⽬录,默认是复制⽂件")]),t._v(" "),s("li",[t._v("-p 连带⽂件属性复制")]),t._v(" "),s("li",[t._v("-d 若源⽂件是链接⽂件，则复制连接属性")]),t._v(" "),s("li",[t._v("-a 相当于 -rpd")])])])]),t._v(" "),s("h3",{attrs:{id:"mv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mv"}},[t._v("#")]),t._v(" mv")]),t._v(" "),s("ul",[s("li",[t._v("移动⽂件或者改名 move")]),t._v(" "),s("li",[t._v("mv [源⽂件或者⽬录] [⽬标⽂件]")])]),t._v(" "),s("h3",{attrs:{id:"in"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in"}},[t._v("#")]),t._v(" in")]),t._v(" "),s("p",[t._v("链接命令,⽣成链接⽂件 link")]),t._v(" "),s("h4",{attrs:{id:"硬连接特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#硬连接特征"}},[t._v("#")]),t._v(" 硬连接特征")]),t._v(" "),s("ul",[s("li",[t._v("拥有相同的i节点和存储block块，可以看作是同⼀个⽂件")]),t._v(" "),s("li",[t._v("可以通过i节点访问")]),t._v(" "),s("li",[t._v("不能跨分区")]),t._v(" "),s("li",[t._v("不能针对⽬录使⽤")]),t._v(" "),s("li",[t._v("⼀般不使⽤")])]),t._v(" "),s("h4",{attrs:{id:"软链接特征"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#软链接特征"}},[t._v("#")]),t._v(" 软链接特征")]),t._v(" "),s("ul",[s("li",[t._v("ln -s [源⽂件] [⽬标⽂件]\n"),s("ul",[s("li",[t._v("-s 创建软链接")])])]),t._v(" "),s("li",[t._v("类似Windows快捷⽅式")]),t._v(" "),s("li",[t._v("软链接拥有⾃⼰的i节点和Block块，但是数据块中只保存源⽂件的⽂件名和i节点号，并没有实际的⽂件数据")]),t._v(" "),s("li",[t._v("lrwxrwxrwx l 软链接 软链接的⽂件权限都是 777")]),t._v(" "),s("li",[t._v("修改任意⼀个⽂件，另⼀个都会改变")]),t._v(" "),s("li",[t._v("删除源⽂件，软链接不能使⽤")]),t._v(" "),s("li",[t._v("软链接源⽂件必须写绝对路径")])]),t._v(" "),s("h2",{attrs:{id:"⽂件搜索命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#⽂件搜索命令"}},[t._v("#")]),t._v(" ⽂件搜索命令")]),t._v(" "),s("h3",{attrs:{id:"locate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#locate"}},[t._v("#")]),t._v(" locate")]),t._v(" "),s("ul",[s("li",[t._v("在后台数据库中按⽂件名搜索，速度⽐较快")]),t._v(" "),s("li",[t._v("数据保存在 /var/lib/mlocate 后台数据库，每天更新⼀次")]),t._v(" "),s("li",[t._v("可以 updatedb 命令⽴刻更新数据库")]),t._v(" "),s("li",[t._v("只能搜索⽂件名")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("/etc/updatedb.conf\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("建⽴索引的配置⽂件")]),t._v(" "),s("ul",[s("li",[t._v('PRUNE_BIND_MOUNTS = "yes" 全部⽣效，开启搜索限制')]),t._v(" "),s("li",[t._v("PRUNEFS 不搜索的⽂件系统")]),t._v(" "),s("li",[t._v("PRUNENAMES 忽略的⽂件类型")]),t._v(" "),s("li",[t._v("PRUNEPATHS 忽略的路径 /tmp")])]),t._v(" "),s("h3",{attrs:{id:"whereis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#whereis"}},[t._v("#")]),t._v(" whereis")]),t._v(" "),s("ul",[s("li",[t._v("搜索命令所在路径以及帮助⽂档所在位置")]),t._v(" "),s("li",[t._v("whereis 命令名")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whereis")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("-b 只查找可执⾏⽂件")]),t._v(" "),s("li",[t._v("-m 只查找帮助⽂件")])]),t._v(" "),s("h3",{attrs:{id:"which"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#which"}},[t._v("#")]),t._v(" which")]),t._v(" "),s("ul",[s("li",[t._v("可以看到别名 "),s("code",[t._v("which ls")])]),t._v(" "),s("li",[t._v("能看到的都是外部安装的命令")]),t._v(" "),s("li",[t._v("⽆法查看Shell⾃带的命令，如 "),s("code",[t._v("which cd")])])]),t._v(" "),s("h3",{attrs:{id:"echo-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#echo-path"}},[t._v("#")]),t._v(" echo $PATH")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("定义的是系统搜索命令的路径")]),t._v(" "),s("li",[t._v("echo $PATH")])]),t._v(" "),s("h3",{attrs:{id:"find"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[t._v("#")]),t._v(" find")]),t._v(" "),s("ul",[s("li",[t._v("⽂件搜索命令")]),t._v(" "),s("li",[t._v("find [搜索范围] [搜索条件]")])]),t._v(" "),s("h4",{attrs:{id:"按名称搜索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按名称搜索"}},[t._v("#")]),t._v(" 按名称搜索")]),t._v(" "),s("p",[t._v("避免⼤范围的搜索，会⾮常消耗系统资源")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" / -name aaa.log\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"通配符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通配符"}},[t._v("#")]),t._v(" 通配符")]),t._v(" "),s("ul",[s("li",[t._v("find是在系统当中搜索符合条件的⽂件名，如果需要匹配，使⽤通配符匹配，通配符是完全匹配")]),t._v(" "),s("li",[t._v("通配符\n"),s("ul",[s("li",[t._v("*匹配任意内容")]),t._v(" "),s("li",[t._v("? 匹配任意⼀个字符")]),t._v(" "),s("li",[t._v("[] 匹配任意⼀个中括号内的字符")])])])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ab[cdef]"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"不区分⼤⼩写-i"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不区分⼤⼩写-i"}},[t._v("#")]),t._v(" 不区分⼤⼩写 -i")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" / -iname "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ab[cdef]"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"按所有者进⾏搜索-u"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按所有者进⾏搜索-u"}},[t._v("#")]),t._v(" 按所有者进⾏搜索 -u")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" /root -user root\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" /root -nouser\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h4",{attrs:{id:"grep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[t._v("#")]),t._v(" grep")]),t._v(" "),s("ul",[s("li",[t._v("在⽂件当中匹配符合条件的字符串")]),t._v(" "),s("li",[t._v('grep "10" access.log\n'),s("ul",[s("li",[t._v("-i 忽略⼤⼩写")]),t._v(" "),s("li",[t._v("-v 排除指定字符串")])])]),t._v(" "),s("li",[t._v("find命令，在系统当中搜索符合条件的⽂件名，如果需要匹配，使⽤通配符匹配，通配符是完全匹配")]),t._v(" "),s("li",[t._v("grep命令 在⽂件当中搜索符合条件的字符串，如果需要匹配，使⽤正则表达式进⾏匹配，正则表达式时包含匹配")])]),t._v(" "),s("h2",{attrs:{id:"网络管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络管理"}},[t._v("#")]),t._v(" 网络管理")]),t._v(" "),s("h3",{attrs:{id:"ifconfig-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ifconfig-ip"}},[t._v("#")]),t._v(" ifconfig & ip")]),t._v(" "),s("p",[t._v("查看和配置网络基本信息")]),t._v(" "),s("h3",{attrs:{id:"tracerout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tracerout"}},[t._v("#")]),t._v(" tracerout")]),t._v(" "),s("p",[t._v("排查网络故障")]),t._v(" "),s("h3",{attrs:{id:"ss-netstat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ss-netstat"}},[t._v("#")]),t._v(" ss | netstat")]),t._v(" "),s("p",[t._v("找到占用网络端口的进程")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -an "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("':80'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"nslookup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nslookup"}},[t._v("#")]),t._v(" nslookup")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nslookup")]),t._v(" www.baidu.com\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#压缩"}},[t._v("#")]),t._v(" 压缩")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v(".zip"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(".gz"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(".bz2"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(".tar.gz"),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(".tar.bz2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"zip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zip"}},[t._v("#")]),t._v(" zip")]),t._v(" "),s("ul",[s("li",[t._v("压缩⽂件 zip 压缩⽂件名 源⽂件")]),t._v(" "),s("li",[t._v("压缩⽬录 zip -r 压缩⽂件名 源⽬录")]),t._v(" "),s("li",[t._v("解压 unzip 压缩⽂件名")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" book\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" book/1.txt\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" book/2.txt\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" -r book.zip book\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" book.zip\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"gzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[t._v("#")]),t._v(" gzip")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("示例")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("gzip 源⽂件")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("gzip a.txt")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("压缩为.gz格式的压缩⽂件，源⽂件会消失")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("gzip -c 源⽂件 > 压缩⽂件")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("gzip -c  yum.txt >yum.txt.gz")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("压缩为.gz格式的压缩⽂件，源⽂件不会消失")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("gzip -r ⽬录")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("gzip -r xx")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("压缩⽬录下的所有⼦⽂件，但是不压缩⽬录")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("gzip -d 压缩⽂件名")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("gzip -d yum.txt.gz")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("解压缩⽂件,不保留压缩包")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("gunzip 压缩⽂件")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("gunzip yum.txt.gz")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("解压缩⽂件,不保留压缩包")])])])]),t._v(" "),s("ul",[s("li",[t._v("压缩是压缩⽬录下的⽂件")])]),t._v(" "),s("h3",{attrs:{id:"bz2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bz2"}},[t._v("#")]),t._v(" bz2")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("示例")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("bzip2 源⽂件")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("bzip2 1.txt")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("压缩为.bz2格式的⽂件，不保留源⽂件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("bzip2 -k 源⽂件")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("zip2 -k 1.txt")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("压缩为.bz2格式的⽂件，保留源⽂件")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("bzip2 -d 压缩⽂件名")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("bzip2 -d 1.txt.bz2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("解压压缩包")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("bunzip2 压缩⽂件名")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("bunzip2 1.txt.bz2")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("解压压缩包")])])])]),t._v(" "),s("ul",[s("li",[t._v("bzip2 不能压缩⽬录")])]),t._v(" "),s("h3",{attrs:{id:"tar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tar"}},[t._v("#")]),t._v(" tar")]),t._v(" "),s("ul",[s("li",[t._v("打包命令")]),t._v(" "),s("li",[t._v("tar -cvf 打包⽂件名 源⽂件\n"),s("ul",[s("li",[t._v("-c 打包")]),t._v(" "),s("li",[t._v("-v 显示过程")]),t._v(" "),s("li",[t._v("-f 指定打包后的⽂件名")])])])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -cvf book.tar book\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" book.tar\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bzip2")]),t._v(" book.tar\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("x 解打包")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xvf book.tar\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"关机重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关机重启"}},[t._v("#")]),t._v(" 关机重启")]),t._v(" "),s("h3",{attrs:{id:"w"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#w"}},[t._v("#")]),t._v(" w")]),t._v(" "),s("p",[t._v("查看登录⽤户信息")]),t._v(" "),s("ul",[s("li",[t._v("USER 登录的⽤户名")]),t._v(" "),s("li",[t._v("TTY 登录的终端 tty1 本地终端 pts/0远程终端")]),t._v(" "),s("li",[t._v("FROM 登录的IP")]),t._v(" "),s("li",[t._v("LOGIN 登录时间")]),t._v(" "),s("li",[t._v("IDLE ⽤户闲置时间")]),t._v(" "),s("li",[t._v("JCPU 该终端所有进程占⽤的时间")]),t._v(" "),s("li",[t._v("PCPU 当前进程所占⽤的时间")]),t._v(" "),s("li",[t._v("WHAT 正在执⾏的命令")])]),t._v(" "),s("h3",{attrs:{id:"who"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#who"}},[t._v("#")]),t._v(" who")]),t._v(" "),s("p",[t._v("查看登录⽤户信息")]),t._v(" "),s("ul",[s("li",[t._v("USER 登录的⽤户名")]),t._v(" "),s("li",[t._v("TTY 登录的终端 tty1 本地终端 pts/0远程终端")]),t._v(" "),s("li",[t._v("LOGIN 登录时间（登录的IP）")])]),t._v(" "),s("h3",{attrs:{id:"last"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#last"}},[t._v("#")]),t._v(" last")]),t._v(" "),s("p",[t._v("查看当前登录和过去登录的⽤户信息 默认读取 /var/log/wtmp ⽂件")]),t._v(" "),s("ul",[s("li",[t._v("⽤户名")]),t._v(" "),s("li",[t._v("登录终端")]),t._v(" "),s("li",[t._v("登录IP")]),t._v(" "),s("li",[t._v("登录时间")]),t._v(" "),s("li",[t._v("退出时间(在线时间)")])]),t._v(" "),s("h3",{attrs:{id:"lastlog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lastlog"}},[t._v("#")]),t._v(" lastlog")]),t._v(" "),s("p",[t._v("查看所有⽤户的最后⼀次登录时间")]),t._v(" "),s("ul",[s("li",[t._v("⽤户名")]),t._v(" "),s("li",[t._v("登录终端")]),t._v(" "),s("li",[t._v("登录IP")]),t._v(" "),s("li",[t._v("最后⼀次登录时间")])]),t._v(" "),s("h2",{attrs:{id:"vi常用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vi常用"}},[t._v("#")]),t._v(" vi常用")]),t._v(" "),s("ul",[s("li",[t._v("[Esc] 退出编辑模式，回到一般模式中(常用)")]),t._v(" "),s("li",[t._v(":w 保存")]),t._v(" "),s("li",[t._v(":w! 若文件属性为『只读』时，强制写入该档案。不过，到底能不能写入， 还是跟你对该档案的档案权限有关啊！")]),t._v(" "),s("li",[t._v(":q 退出")]),t._v(" "),s("li",[t._v(":q! 若曾修改过档案，又不想储存，使用 ! 为强制离开不储存档案。")]),t._v(" "),s("li",[t._v(":! 强制保存")]),t._v(" "),s("li",[t._v(":ls 列出所有的⽂件")]),t._v(" "),s("li",[t._v(":n 下⼀个")]),t._v(" "),s("li",[t._v(":N 上⼀个")]),t._v(" "),s("li",[t._v(":15 跳转到指定⾏")]),t._v(" "),s("li",[t._v("/xxx 从光标位置开始向后搜索 xxx 字符串")]),t._v(" "),s("li",[t._v("?xxx 从光标位置开始向前搜索")]),t._v(" "),s("li",[t._v("h 前移光标")]),t._v(" "),s("li",[t._v("l 左移光标")]),t._v(" "),s("li",[t._v("j 下移光标")]),t._v(" "),s("li",[t._v("k 上移光标")])]),t._v(" "),s("p",[s("a",{attrs:{href:"/linux/vim_hotkey.png"}},[t._v("全部快捷键")])]),t._v(" "),s("h2",{attrs:{id:"切换用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换用户"}},[t._v("#")]),t._v(" 切换用户")]),t._v(" "),s("h3",{attrs:{id:"su"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#su"}},[t._v("#")]),t._v(" su")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" root\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"安装文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装文件"}},[t._v("#")]),t._v(" 安装文件")]),t._v(" "),s("h3",{attrs:{id:"rpm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpm"}},[t._v("#")]),t._v(" rpm")]),t._v(" "),s("p",[t._v("rpm命令是RPM软件包的管理工具。rpm原本是Red Hat Linux发行版专门用来管理Linux各项套件的程序，由于它遵循GPL规则且功能强大方便，因而广受欢迎。逐渐受到其他发行版的采用。RPM套件管理方式的出现，让Linux易于安装，升级，间接提升了Linux的适用度。")]),t._v(" "),s("p",[t._v("用法: rpm [选项...]")]),t._v(" "),s("ul",[s("li",[t._v("-a：查询所有套件；")]),t._v(" "),s("li",[t._v("-b<完成阶段><套件档>+或-t <完成阶段><套件档>+：设置包装套件的完成阶段，并指定套件档的文件名称；")]),t._v(" "),s("li",[t._v('-c：只列出组态配置文件，本参数需配合"-l"参数使用；')]),t._v(" "),s("li",[t._v('-d：只列出文本文件，本参数需配合"-l"参数使用；')]),t._v(" "),s("li",[t._v("-e<套件档>或--erase<套件档>：删除指定的套件；")]),t._v(" "),s("li",[t._v("-f<文件>+：查询拥有指定文件的套件；")]),t._v(" "),s("li",[t._v("-h或--hash：套件安装时列出标记；")]),t._v(" "),s("li",[t._v("-i：显示套件的相关信息；")]),t._v(" "),s("li",[t._v("-i<套件档>或--install<套件档>：安装指定的套件档；")]),t._v(" "),s("li",[t._v("-l：显示套件的文件列表；")]),t._v(" "),s("li",[t._v("-p<套件档>+：查询指定的RPM套件档；")]),t._v(" "),s("li",[t._v("-q：使用询问模式，当遇到任何问题时，rpm指令会先询问用户；")]),t._v(" "),s("li",[t._v("-R：显示套件的关联性信息；")]),t._v(" "),s("li",[t._v('-s：显示文件状态，本参数需配合"-l"参数使用；')]),t._v(" "),s("li",[t._v("-U<套件档>或--upgrade<套件档>：升级指定的套件档；")]),t._v(" "),s("li",[t._v("-v：显示指令执行过程；")]),t._v(" "),s("li",[t._v("-vv：详细显示指令执行过程，便于排错。")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v(" -ivh your-package                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接安装")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v(" --force -ivh your-package.rpm "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 忽略报错，强制安装")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"查看进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看进程"}},[t._v("#")]),t._v(" 查看进程")]),t._v(" "),s("h3",{attrs:{id:"ps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ps"}},[t._v("#")]),t._v(" ps")]),t._v(" "),s("ul",[s("li",[t._v("-e 显示所有进程")]),t._v(" "),s("li",[t._v("-f 全格式")]),t._v(" "),s("li",[t._v("-u 不显示标题")]),t._v(" "),s("li",[t._v("-l 长格式")]),t._v(" "),s("li",[t._v("-w 宽输出")]),t._v(" "),s("li",[t._v("a 显示终端上所有进程，包含其他用户的进程")]),t._v(" "),s("li",[t._v("r 只显示正在运行的进程")]),t._v(" "),s("li",[t._v("u 以用户为主的格式来显示程序的状况")]),t._v(" "),s("li",[t._v("x 显示所有程序，不以终端机来区分")])]),t._v(" "),s("h4",{attrs:{id:"查看进程-ps-ef"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看进程-ps-ef"}},[t._v("#")]),t._v(" 查看进程: "),s("code",[t._v("ps -ef")])]),t._v(" "),s("p",[t._v("ps -ef 是用标准的格式显示进程的、其格式如下")]),t._v(" "),s("ul",[s("li",[t._v("UID    //用户ID、但输出的是用户名")]),t._v(" "),s("li",[t._v("PID    //进程的ID")]),t._v(" "),s("li",[t._v("PPID    //父进程ID")]),t._v(" "),s("li",[t._v("C      //进程占用CPU的百分比")]),t._v(" "),s("li",[t._v("STIME  //进程启动到现在的时间")]),t._v(" "),s("li",[t._v("TTY    //该进程在那个终端上运行，若与终端无关，则显示? 若为pts/0等，则表示由网络连接主机进程")]),t._v(" "),s("li",[t._v("CMD    //命令的名称和参数")])]),t._v(" "),s("h4",{attrs:{id:"查看进程-ps-aux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看进程-ps-aux"}},[t._v("#")]),t._v(" 查看进程: "),s("code",[t._v("ps aux")])]),t._v(" "),s("p",[t._v("ps aux 是用BSD的格式来显示、其格式如下")]),t._v(" "),s("p",[t._v("同ps -ef 不同的有列有")]),t._v(" "),s("ul",[s("li",[t._v("USER      //用户名")]),t._v(" "),s("li",[t._v("%CPU      //进程占用的CPU百分比")]),t._v(" "),s("li",[t._v("%MEM      //占用内存的百分比")]),t._v(" "),s("li",[t._v("VSZ      //该进程使用的虚拟內存量（KB）")]),t._v(" "),s("li",[t._v("RSS      //该进程占用的固定內存量（KB）（驻留中页的数量）")]),t._v(" "),s("li",[t._v("STAT      //进程的状态")]),t._v(" "),s("li",[t._v("START    //该进程被触发启动时间")]),t._v(" "),s("li",[t._v("TIME      //该进程实际使用CPU运行的时间")])]),t._v(" "),s("p",[t._v("其中STAT状态位常见的状态字符有")]),t._v(" "),s("ul",[s("li",[t._v("D      //无法中断的休眠状态（通常 IO 的进程)")]),t._v(" "),s("li",[t._v("R      //正在运行可中在队列中可过行的")]),t._v(" "),s("li",[t._v("S      //处于休眠状态")]),t._v(" "),s("li",[t._v("T      //停止或被追踪")]),t._v(" "),s("li",[t._v("W      //进入内存交换 （从内核2.6开始无效")]),t._v(" "),s("li",[t._v("X      //死掉的进程 （基本很少见）")]),t._v(" "),s("li",[t._v("Z      //僵尸进程")]),t._v(" "),s("li",[t._v("<      //优先级高的进程")]),t._v(" "),s("li",[t._v("N      //优先级较低的进程")]),t._v(" "),s("li",[t._v("L      //有些页被锁进内存")]),t._v(" "),s("li",[t._v("s      //进程的领导者（在它之下有子进程）")]),t._v(" "),s("li",[t._v("l      //多线程，克隆线程（使用 CLONE_THREAD, 类似 NPTL pthreads）")]),t._v(" "),s("li",[t._v("[+]      //位于后台的进程组")])]),t._v(" "),s("h2",{attrs:{id:"传输文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传输文件"}},[t._v("#")]),t._v(" 传输文件")]),t._v(" "),s("h3",{attrs:{id:"scp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scp"}},[t._v("#")]),t._v(" scp")]),t._v(" "),s("p",[t._v("可以简单用scp 命令来实现")]),t._v(" "),s("p",[t._v("查看scp帮助：sup -h")]),t._v(" "),s("p",[t._v("输出信息如下")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("scp: illegal option -- h\nusage: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-346BCpqrTv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-c cipher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-F ssh_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-i identity_file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-J destination"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-l limit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-o ssh_option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-P port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-S program"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". target\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("option")]),t._v(" "),s("ol",[s("li",[t._v("-v 显示进度")]),t._v(" "),s("li",[t._v("-r 递归处理")]),t._v(" "),s("li",[t._v("-C 压缩选项")]),t._v(" "),s("li",[t._v("-P 选择端口")])]),t._v(" "),s("h3",{attrs:{id:"macos-上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-上传"}},[t._v("#")]),t._v(" macos 上传")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -r local_folder remote_username@remote_ip:remote_folder\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"macos-下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-下载"}},[t._v("#")]),t._v(" macos 下载")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -r remote_username@remote_ip:remote_folder local_folder\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"更多参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多参数"}},[t._v("#")]),t._v(" 更多参数")]),t._v(" "),s("p",[t._v("更多参数可以通过命令 "),s("code",[t._v("man scp")]),t._v(" 来查看")])])}),[],!1,null,null,null);a.default=v.exports}}]);