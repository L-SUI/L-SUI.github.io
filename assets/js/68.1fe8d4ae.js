(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{421:function(s,n,t){"use strict";t.r(n);var a=t(25),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nginx-初探"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-初探"}},[s._v("#")]),s._v(" Nginx 初探")]),s._v(" "),t("h2",{attrs:{id:"配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),t("p",[s._v("配置文件在 "),t("code",[s._v("/usr/local/etc/nginx")]),s._v(" 中设置 "),t("code",[s._v("config")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For more information on configuration, see:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   * Official English Documentation: http://nginx.org/en/docs/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   * Official Russian Documentation: http://nginx.org/ru/docs/")]),s._v("\n\nuser nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 工作进程=>一般是 cpu 有几核就写几,可以最大限度的去发挥它的性能")]),s._v("\nworker_processes auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 错误日志路径")]),s._v("\nerror_log /var/log/nginx/error.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一般不动它,给守护进程用的")]),s._v("\npid /run/nginx.pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.")]),s._v("\ninclude /usr/share/nginx/modules/*.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并发连接数=>最大并发数:一个工作进程下的最大连接;默认 1024 个")]),s._v("\nevents "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    worker_connections "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http 配置")]),s._v("\nhttp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志格式")]),s._v("\n    log_format  main  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_user")]),s._v(" ["),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$time_local")]),s._v('] "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request")]),s._v("\" '")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$body_bytes_sent")]),s._v(' "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_referer")]),s._v("\" '")]),s._v("\n                      "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\""),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_user_agent")]),s._v('" "'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_x_forwarded_for")]),s._v("\"'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    access_log  /var/log/nginx/access.log  main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否允许上传文件")]),s._v("\n    sendfile            on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 能不能推送")]),s._v("\n    tcp_nopush          on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gzip 压缩")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("gzip")]),s._v("                on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    tcp_nodelay         on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 长连接多长时间没有通信自动断开")]),s._v("\n    keepalive_timeout   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    types_hash_max_size "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    include             /etc/nginx/mime.types"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认的 http 头")]),s._v("\n    default_type        application/octet-stream"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Load modular configuration files from the /etc/nginx/conf.d directory.")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# See http://nginx.org/en/docs/ngx_core_module.html#include")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# for more information.")]),s._v("\n    include /etc/nginx/conf.d/*.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义反向代理服务器")]),s._v("\n    upstream web"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:8080"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里的 server 如果只写一个就是单纯的额外网发布,如果写 n 个就是负载均衡  ")]),s._v("\n        server "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:8888 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加权重")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一个 server 对应一个网站")]),s._v("\n    server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 端口")]),s._v("\n        listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" default_server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        listen       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":80 default_server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# server域名")]),s._v("\n        server_name  _"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        root         /usr/share/nginx/html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Load configuration files for the default server block.")]),s._v("\n        include /etc/nginx/default.d/*.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 站点根目录")]),s._v("\n        location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            root    html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            index   index.html  index.htm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 反向代理")]),s._v("\n        location /xxx/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过来的请求代理到哪里")]),s._v("\n            proxy_pass http://web"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 前面upstream定义的")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果需要客户端 ip,这个开关可能会重写为反向代理的 ip")]),s._v("\n            proxy_redirect off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nginx 可能会改写头,用原来的值再把它改回来")]),s._v("\n            proxy_set_header Hose "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代理服务器转发请求的时候用的协议版本")]),s._v("\n            proxy_http_version "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            proxy_set_header Upgrade "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_upgrade")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_set_header Connection "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'upgrade'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_cache_bypass "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_upgrade")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取客户端真实 ip")]),s._v("\n            proxy_set_header X-Real-IP "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_set_header X-Forwarded-For "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 超时")]),s._v("\n            proxy_connect_timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            proxy_read_timeout "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 https")]),s._v("\n        server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一定要带上 ssl 标记,默认 443 端口")]),s._v("\n            listen       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            server_name  work.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            ssl                  on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 证书")]),s._v("\n            ssl_certificate      /etc/nginx/server.crt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 密钥")]),s._v("\n            ssl_certificate_key  /etc/nginx/server.key"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 超时")]),s._v("\n            ssl_session_timeout  5m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                root   /usr/local/web/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                add_header "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Cache-Control'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'no-store'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            error_page "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(" /404.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /40x.html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n            error_page "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v(" /50x.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        error_page "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(" /404.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /40x.html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        error_page "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v(" /50x.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Settings for a TLS enabled server.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    server {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        listen       443 ssl http2 default_server;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        listen       [::]:443 ssl http2 default_server;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        server_name  _;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        root         /usr/share/nginx/html;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        ssl_certificate "/etc/pki/nginx/server.crt";')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#        ssl_certificate_key "/etc/pki/nginx/private/server.key";')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        ssl_session_cache shared:SSL:1m;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        ssl_session_timeout  10m;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        ssl_ciphers HIGH:!aNULL:!MD5;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        ssl_prefer_server_ciphers on;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        # Load configuration files for the default server block.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        include /etc/nginx/default.d/*.conf;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        location / {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        }")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        error_page 404 /404.html;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#            location = /40x.html {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        }")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        error_page 500 502 503 504 /50x.html;")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#            location = /50x.html {")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        }")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    }")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br"),t("span",{staticClass:"line-number"},[s._v("96")]),t("br"),t("span",{staticClass:"line-number"},[s._v("97")]),t("br"),t("span",{staticClass:"line-number"},[s._v("98")]),t("br"),t("span",{staticClass:"line-number"},[s._v("99")]),t("br"),t("span",{staticClass:"line-number"},[s._v("100")]),t("br"),t("span",{staticClass:"line-number"},[s._v("101")]),t("br"),t("span",{staticClass:"line-number"},[s._v("102")]),t("br"),t("span",{staticClass:"line-number"},[s._v("103")]),t("br"),t("span",{staticClass:"line-number"},[s._v("104")]),t("br"),t("span",{staticClass:"line-number"},[s._v("105")]),t("br"),t("span",{staticClass:"line-number"},[s._v("106")]),t("br"),t("span",{staticClass:"line-number"},[s._v("107")]),t("br"),t("span",{staticClass:"line-number"},[s._v("108")]),t("br"),t("span",{staticClass:"line-number"},[s._v("109")]),t("br"),t("span",{staticClass:"line-number"},[s._v("110")]),t("br"),t("span",{staticClass:"line-number"},[s._v("111")]),t("br"),t("span",{staticClass:"line-number"},[s._v("112")]),t("br"),t("span",{staticClass:"line-number"},[s._v("113")]),t("br"),t("span",{staticClass:"line-number"},[s._v("114")]),t("br"),t("span",{staticClass:"line-number"},[s._v("115")]),t("br"),t("span",{staticClass:"line-number"},[s._v("116")]),t("br"),t("span",{staticClass:"line-number"},[s._v("117")]),t("br"),t("span",{staticClass:"line-number"},[s._v("118")]),t("br"),t("span",{staticClass:"line-number"},[s._v("119")]),t("br"),t("span",{staticClass:"line-number"},[s._v("120")]),t("br"),t("span",{staticClass:"line-number"},[s._v("121")]),t("br"),t("span",{staticClass:"line-number"},[s._v("122")]),t("br"),t("span",{staticClass:"line-number"},[s._v("123")]),t("br"),t("span",{staticClass:"line-number"},[s._v("124")]),t("br"),t("span",{staticClass:"line-number"},[s._v("125")]),t("br"),t("span",{staticClass:"line-number"},[s._v("126")]),t("br"),t("span",{staticClass:"line-number"},[s._v("127")]),t("br"),t("span",{staticClass:"line-number"},[s._v("128")]),t("br"),t("span",{staticClass:"line-number"},[s._v("129")]),t("br"),t("span",{staticClass:"line-number"},[s._v("130")]),t("br"),t("span",{staticClass:"line-number"},[s._v("131")]),t("br"),t("span",{staticClass:"line-number"},[s._v("132")]),t("br"),t("span",{staticClass:"line-number"},[s._v("133")]),t("br"),t("span",{staticClass:"line-number"},[s._v("134")]),t("br"),t("span",{staticClass:"line-number"},[s._v("135")]),t("br"),t("span",{staticClass:"line-number"},[s._v("136")]),t("br"),t("span",{staticClass:"line-number"},[s._v("137")]),t("br"),t("span",{staticClass:"line-number"},[s._v("138")]),t("br"),t("span",{staticClass:"line-number"},[s._v("139")]),t("br"),t("span",{staticClass:"line-number"},[s._v("140")]),t("br"),t("span",{staticClass:"line-number"},[s._v("141")]),t("br"),t("span",{staticClass:"line-number"},[s._v("142")]),t("br"),t("span",{staticClass:"line-number"},[s._v("143")]),t("br"),t("span",{staticClass:"line-number"},[s._v("144")]),t("br"),t("span",{staticClass:"line-number"},[s._v("145")]),t("br"),t("span",{staticClass:"line-number"},[s._v("146")]),t("br"),t("span",{staticClass:"line-number"},[s._v("147")]),t("br"),t("span",{staticClass:"line-number"},[s._v("148")]),t("br"),t("span",{staticClass:"line-number"},[s._v("149")]),t("br"),t("span",{staticClass:"line-number"},[s._v("150")]),t("br"),t("span",{staticClass:"line-number"},[s._v("151")]),t("br"),t("span",{staticClass:"line-number"},[s._v("152")]),t("br"),t("span",{staticClass:"line-number"},[s._v("153")]),t("br"),t("span",{staticClass:"line-number"},[s._v("154")]),t("br"),t("span",{staticClass:"line-number"},[s._v("155")]),t("br"),t("span",{staticClass:"line-number"},[s._v("156")]),t("br"),t("span",{staticClass:"line-number"},[s._v("157")]),t("br"),t("span",{staticClass:"line-number"},[s._v("158")]),t("br"),t("span",{staticClass:"line-number"},[s._v("159")]),t("br"),t("span",{staticClass:"line-number"},[s._v("160")]),t("br")])]),t("h2",{attrs:{id:"启动配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动配置"}},[s._v("#")]),s._v(" 启动配置")]),s._v(" "),t("p",[s._v("启动目录在 "),t("code",[s._v("/usr/local/bin")]),s._v(" 目录下启动")]),s._v(" "),t("h2",{attrs:{id:"常用-bash-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用-bash-命令"}},[s._v("#")]),s._v(" 常用 bash 命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动命令")]),s._v("\n    nginx\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止命令")]),s._v("\n    nginx -s quit\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看进程")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#终止进程")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("进程命令"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);