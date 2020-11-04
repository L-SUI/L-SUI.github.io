(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{405:function(t,a,r){"use strict";r.r(a);var s=r(25),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"基本命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[t._v("#")]),t._v(" 基本命令")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.runoob.com/linux/linux-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("linux教程"),r("OutboundLink")],1)]),t._v(" "),r("ol",[r("li",[t._v("查看目录")])]),t._v(" "),r("ul",[r("li",[t._v("ls      查看目录名字")]),t._v(" "),r("li",[t._v("ls -a   查看隐藏目录")])]),t._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[t._v("进入/退出下一级别")])]),t._v(" "),r("ul",[r("li",[t._v("cd 目录名")]),t._v(" "),r("li",[t._v("cd ..   退到上一级")]),t._v(" "),r("li",[t._v("cd ../..  退两级")])]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("创建文件")])]),t._v(" "),r("ul",[r("li",[t._v("mkdir 文件名")])]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("复制文件")])]),t._v(" "),r("ul",[r("li",[t._v("cp 文件名  路径/文件名")]),t._v(" "),r("li",[t._v("cp -R 目标文件夹名  复制后文件夹名")])]),t._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[t._v("显示当前路径")])]),t._v(" "),r("ul",[r("li",[t._v("pwd")])]),t._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[t._v("删除")])]),t._v(" "),r("ul",[r("li",[t._v("rm 文件名")]),t._v(" "),r("li",[t._v("rm -r 文件夹名")])]),t._v(" "),r("ol",{attrs:{start:"7"}},[r("li",[t._v("mv (移动文件与目录，或修改名称)\nmv bashrc mvtest")])]),t._v(" "),r("h1",{attrs:{id:"linux下目录的作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux下目录的作用"}},[t._v("#")]),t._v(" linux下目录的作用")]),t._v(" "),r("h2",{attrs:{id:"bin-存放⼆进制可执⾏⽂件-ls-cat-mkdir等-，常⽤命令⼀般都在这⾥。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bin-存放⼆进制可执⾏⽂件-ls-cat-mkdir等-，常⽤命令⼀般都在这⾥。"}},[t._v("#")]),t._v(" /bin 存放⼆进制可执⾏⽂件(ls,cat,mkdir等)，常⽤命令⼀般都在这⾥。")]),t._v(" "),r("p",[t._v("系统有很多放置执⾏档的⽬录，但/bin⽐较特殊。因为/bin放置的是在单⼈维护模式下\n还能够被操作的指令。在/bin底下的指令可以被root与⼀般帐号所使⽤，主要有：\ncat,chmod(修改权限), chown, date, mv, mkdir, cp, bash等等常⽤的指令。")]),t._v(" "),r("h2",{attrs:{id:"etc-存放系统管理和配置⽂件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#etc-存放系统管理和配置⽂件"}},[t._v("#")]),t._v(" /etc 存放系统管理和配置⽂件")]),t._v(" "),r("p",[t._v("/etc/sysconfig/network-scripts")]),t._v(" "),r("p",[t._v("ifcfg-lo    本地回环地址")]),t._v(" "),r("p",[t._v("ifcfg-eth0   配置网略")]),t._v(" "),r("p",[t._v("systemctl restart network  重启网略")]),t._v(" "),r("p",[t._v("ifconfig   查看（ip addr）")]),t._v(" "),r("p",[t._v("-- 文件详情")]),t._v(" "),r("ul",[r("li",[t._v("‘-’      文件")]),t._v(" "),r("li",[t._v("drwxr    目录（文件夹）")]),t._v(" "),r("li",[t._v("l        链接（快捷方式）")])]),t._v(" "),r("p",[t._v("系统主要的设定档⼏乎都放置在这个⽬录内，例如⼈员的帐号密码档、各种服务的启\n始档等等。 ⼀般来说，这个⽬录下的各档案属性是可以让⼀般使⽤者查阅的，但是只\n有root有权⼒修改。 FHS建议不要放置可执⾏档(binary)在这个⽬录中。 ⽐较重要的档\n案有：/etc/inittab, /etc/init.d/, /etc/modprobe.conf, /etc/X11/, /etc/fstab,\n/etc/sysconfig/等等。 另外，其下重要的⽬录有：/etc/init.d/ ：所有服务的预设启动\nscript都是放在这⾥的，例如要启动或者关闭iptables的话： /etc/init.d/iptables\nstart、/etc/init.d/ iptables stop/etc/xinetd.d/ ：这就是所谓的super daemon管理的\n各项服务的设定档⽬录。/etc/X11/ ：与X Window有关的各种设定档都在这⾥，尤其\n是xorg.conf或XF86Config这两个X Server的设定档。")]),t._v(" "),r("h2",{attrs:{id:"home-存放所有⽤户⽂件的根⽬录，是⽤户主⽬录的基点，⽐如⽤户user的主⽬录就是-home-user，可以⽤-user表示"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#home-存放所有⽤户⽂件的根⽬录，是⽤户主⽬录的基点，⽐如⽤户user的主⽬录就是-home-user，可以⽤-user表示"}},[t._v("#")]),t._v(" /home 存放所有⽤户⽂件的根⽬录，是⽤户主⽬录的基点，⽐如⽤户user的主⽬录就是/home/user，可以⽤~user表示")]),t._v(" "),r("p",[t._v("系统主要的设定档⼏乎都放置在这个⽬录内，例如⼈员的帐号密码档、各种服务的启\n始档等等。 ⼀般来说，这个⽬录下的各档案属性是可以让⼀般使⽤者查阅的，但是只\n有root有权⼒修改。 FHS建议不要放置可执⾏档(binary)在这个⽬录中。 ⽐较重要的档\n案有：/etc/inittab, /etc/init.d/, /etc/modprobe.conf, /etc/X11/, /etc/fstab,\n/etc/sysconfig/等等。 另外，其下重要的⽬录有：/etc/init.d/ ：所有服务的预设启动\nscript都是放在这⾥的，例如要启动或者关闭iptables的话： /etc/init.d/iptables\nstart、/etc/init.d/ iptables stop/etc/xinetd.d/ ：这就是所谓的super daemon管理的\n各项服务的设定档⽬录。/etc/X11/ ：与X Window有关的各种设定档都在这⾥，尤其\n是xorg.conf或XF86Config这两个X Server的设定档。")]),t._v(" "),r("h2",{attrs:{id:"库-lib-lib64-存放跟⽂件系统中的程序运⾏所需要的共享库及内核模块。共享库⼜叫动态链接共享库，作⽤类似windows⾥的-dll⽂件，存放了根⽂件系统程序运⾏所需的共享⽂件。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#库-lib-lib64-存放跟⽂件系统中的程序运⾏所需要的共享库及内核模块。共享库⼜叫动态链接共享库，作⽤类似windows⾥的-dll⽂件，存放了根⽂件系统程序运⾏所需的共享⽂件。"}},[t._v("#")]),t._v(" 库 lib  lib64 存放跟⽂件系统中的程序运⾏所需要的共享库及内核模块。共享库⼜叫动态链接共享库，作⽤类似windows⾥的.dll⽂件，存放了根⽂件系统程序运⾏所需的共享⽂件。")]),t._v(" "),r("p",[t._v("系统的函式库⾮常的多，⽽/lib放置的则是在开机时会⽤到的函式库，以及在/bin\n或/sbin底下的指令会呼叫的函式库⽽已 。 什么是函式库呢？妳可以将他想成是外挂，\n如果状态为“未启⽤”，按照如下步骤操作\n1、重启电脑，在主板显示画⾯，快速寻找进⼊BIOS的按键。根据品牌不同，可能是F2、Del\n或其他键。 2、进⼊BIOS后，寻找进⼊“System Configuration”。 3、找到“Virtualization\nTechnology”，按回⻋键。 4、选择“Enabled”，按Enter回⻋键。 5、然后保存重启即可。\n2.2 安装过程\n⻅直播视频\n2.3 配置过程\n⻅直播视频\n3、 认识 Linux 环境\nLinux下的⽬录都是做什么⽤的\n/lib 某些指令必须要有这些外挂才能够顺利完成程式的执⾏之意。 尤其重要的\n是/lib/modules/这个⽬录，因为该⽬录会放置核⼼相关的模组(驱动程式)。")]),t._v(" "),r("h2",{attrs:{id:"srv-服务程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#srv-服务程序"}},[t._v("#")]),t._v(" srv 服务程序")]),t._v(" "),r("p",[t._v("srv可以视为service的缩写，是⼀些⽹路服务启动之后，这些服务所需要取⽤的资料⽬\n录。 常⻅的服务例如WWW, FTP等等。 举例来说，WWW伺服器需要的⽹⻚资料就可\n以放置在/srv/www/⾥⾯。呵呵，看来平时我们编写的代码应该放到这⾥了。")]),t._v(" "),r("h2",{attrs:{id:"usr-用户的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usr-用户的"}},[t._v("#")]),t._v(" USR  用户的")]),t._v(" "),r("h2",{attrs:{id:"boot-存放linux内核"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#boot-存放linux内核"}},[t._v("#")]),t._v(" boot  存放Linux内核")]),t._v(" "),r("p",[t._v("主要放置开机会使⽤到的档案，包括Linux核⼼档案以及开机选单与开机所需设定档等\n等。Linux kernel常⽤的档名为：vmlinuz ，如果使⽤的是grub这个开机管理程式，则\n还会存在/boot/grub/这个⽬录")]),t._v(" "),r("h2",{attrs:{id:"opt-额外安装的可选应⽤程序包所放置的位置。⼀般情况下，我们可以把tomcat等都安装到这⾥。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#opt-额外安装的可选应⽤程序包所放置的位置。⼀般情况下，我们可以把tomcat等都安装到这⾥。"}},[t._v("#")]),t._v(" opt 额外安装的可选应⽤程序包所放置的位置。⼀般情况下，我们可以把tomcat等都安装到这⾥。")]),t._v(" "),r("p",[t._v("这个是给第三⽅协⼒软体放置的⽬录 。 什么是第三⽅协⼒软体啊？举例来说，KDE这\n个桌⾯管理系统是⼀个独⽴的计画，不过他可以安装到Linux系统中，因此KDE的软体\n就建议放置到此⽬录下了。 另外，如果妳想要⾃⾏安装额外的软体(⾮原本的\ndistribution提供的)，那么也能够将你的软体安装到这⾥来。 不过，以前的Linux系统\n中，我们还是习惯放置在/usr/local⽬录下。")]),t._v(" "),r("h2",{attrs:{id:"proc-虚拟目录（存在内存）-虚拟⽂件系统⽬录，是系统内存的映射。可直接访问这个⽬录来获取系统信息。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#proc-虚拟目录（存在内存）-虚拟⽂件系统⽬录，是系统内存的映射。可直接访问这个⽬录来获取系统信息。"}},[t._v("#")]),t._v(" proc 虚拟目录（存在内存） 虚拟⽂件系统⽬录，是系统内存的映射。可直接访问这个⽬录来获取系统信息。")]),t._v(" "),r("p",[t._v("运行的时候才有内容")]),t._v(" "),r("h2",{attrs:{id:"sys-系统相关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sys-系统相关"}},[t._v("#")]),t._v(" sys 系统相关")]),t._v(" "),r("h2",{attrs:{id:"mnt-系统管理员安装临时⽂件系统的安装点，系统提供这个⽬录是让⽤户临时挂载其他的⽂件系统。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mnt-系统管理员安装临时⽂件系统的安装点，系统提供这个⽬录是让⽤户临时挂载其他的⽂件系统。"}},[t._v("#")]),t._v(" /mnt 系统管理员安装临时⽂件系统的安装点，系统提供这个⽬录是让⽤户临时挂载其他的⽂件系统。")]),t._v(" "),r("h2",{attrs:{id:"var"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#var"}},[t._v("#")]),t._v(" var")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("目录下的log 存放日志文件\n")])])]),r("h2",{attrs:{id:"dev-设备文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dev-设备文件"}},[t._v("#")]),t._v(" dev 设备文件")]),t._v(" "),r("p",[t._v("在Linux系统上，任何装置与周边设备都是以档案的型态存在于这个⽬录当中。 只要通\n过存取这个⽬录下的某个档案，就等于存取某个装置。⽐要重要的档案有/dev/null,\n/dev/zero, /dev/tty , /dev/lp, / dev/hd, /dev/sd*等等")]),t._v(" "),r("h2",{attrs:{id:"media-优盘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#media-优盘"}},[t._v("#")]),t._v(" media 优盘")]),t._v(" "),r("p",[t._v("media是媒体的英⽂，顾名思义，这个/media底下放置的就是可移除的装置。 包括软\n碟、光碟、DVD等等装置都暂时挂载于此。 常⻅的档名有：/media/floppy,\n/media/cdrom等等。")]),t._v(" "),r("h2",{attrs:{id:"tmp-临时目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tmp-临时目录"}},[t._v("#")]),t._v(" tmp 临时目录")]),t._v(" "),r("p",[t._v("正常情况下重启会清空目录")]),t._v(" "),r("h2",{attrs:{id:"网略"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网略"}},[t._v("#")]),t._v(" 网略")]),t._v(" "),r("ul",[r("li",[t._v("netstat -an  查看端口")]),t._v(" "),r("li",[t._v("netstat -anp  查看哪个进程用的端口")])])])}),[],!1,null,null,null);a.default=e.exports}}]);