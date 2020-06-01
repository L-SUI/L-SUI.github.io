1. 请解释弹出值并解释为什么(6分)
```javascript
    alert(a)   
    a(); 
    var a=3; 
    function a(){ 
        alert(10) 
    } 
    alert(a) 
    a=6; 
    a(); 
```
--- 
```javascript
undefind                fn a
a is not function       10  
3                       3
a is not function       a is not function 
```
---
```javascript
    var x = 1, 
    y = 0, 
    z = 0; 
    function add(x) { 
    return (x = x + 1); 
    } 
    y = add(x); 
    console.log(y) 
    function add(x) { 
    return (x = x + 3);
    } 
    z = add(x); 
    console.log(z)
```
---
```javascript
    4     4
    4     4
```
2. 
```javascript
    this.a = 20; 
    function go() { 
        console.log(this.a); 
        this.a = 30; 
    } 
    go.prototype.a = 40; 
    var test = { 
        a: 50, 
        init: function(fn) { 
            fn(); 
            console.log(this.a); 
            return fn; 
        } 
    }; 
    console.log((new go()).a); 
    test.init(go); 
    var p = test.init(go); 
    p();
```
---
```javascript
    40  40
    30  30
    20  20
    50  50
    20  30
    50  50
    20  30
```
---
```javascript
    var num = 1;
    function yideng() {
        "use strict";
        console.log(this.num++);
    }
    function yideng2() {
        console.log(++this.num);
    }
    (function() {
        "use strict";
        yideng2();
    })();
    yideng();
```
---
```javascript
    let reportErrors = Uncaught TypeError: Cannot read property 'num' of undefined
    reportErrors  2
    1             reportErrors
``` 
---
3.  
```javascript
    function C1(name) { 
        if (name) this.name = name; 
    } 
    function C2(name) { 
        this.name = name; 
    } 
    function C3(name) { 
        this.name = name || 'fe'; 
    } 
    C1.prototype.name = "yideng"; 
    C2.prototype.name = "lao"; 
    C3.prototype.name = "yuan"; 
    console.log((new C1().name) + (new C2().name) + (new C3().name));
```
---
```javascript
    yidengundefinedfe  yidengundefinedfe
```
---
3. 写出li的输出值，并且写出三种正确输出的方式
```javascript
    <ul> 
        <li>1</li> 
        <li>2</li> 
        <li>3</li> 
        <li>4</li> 
        <li>5</li> 
        <li>6</li> 
    </ul> 
    <script type="text/javascript"> 
        var list_li = document.getElementsByTagName("li"); 
        for (var i = 0; i < list_li.length; i++) { 
            list_li[i].onclick = function() { 
                console.log(i); 
            } 
        } 
    </script>
```
---
```javascript
    6
    //1
    var list_li = document.getElementsByTagName("li"); 
    for (let i = 0; i < list_li.length; i++) { 
        list_li[i].onclick = function() { 
            console.log(i); 
        } 
    } 
    //2
    var list_li = document.getElementsByTagName("li"); 
    for (let i = 0; i < list_li.length; i++) { 
        (function (index) {
            list_li[index].onclick = function() { 
                console.log(index); 
            } 
        })(i)
    } 
    //3

```