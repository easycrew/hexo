---
title: ajay-async 异步请求abort方法
date: 2017-09-01 17:04:58
tags: ajax js
---
# 应用场景
使用ajax调取接口实现前后端分离获取后台数据的时候，由于请求数据量大，会造成返回等待时间比较长，这时候就希望选用异步请求，不影响页面UI操作,但是也会出现一种问题：
同一个异步请求
发送了第一次的请求后，数据很久没有返回。
这时发送了第二次，并获得了响应。
页面被更改。
但不久后，第一次请求的数据返回又将页面再次更改。
这样肯定是不合理的。
# 解决思路
调用XMLHttpRequest对象上的abort方法，
1. $.ajax返回的**数据类型是XMLHttpRequest**，
2. XMLHttpRequest对象有abort()方法
3. 第二个请求发出并返回数据后，立即abort掉第一个请求。(禁止掉了第一个请求)
4. 设置一个flag，标识请求是否在进行中，还没有返回值，初始为false（正在请求中还没有返回值），在请求发出前判断该flag，如果为true，则忽略该次请求；如果为false，则abort掉前面正在运行的ajax请求，发送当前这次请求立并立即设置该flag为true，待该请求完成后(无论成功与否)，设置flag为false。
## 核心代码

```
// 用来标识某个异步函数以及成功回调
// false 为那个异步函数请求中还没有返回数据
// true 为那个异步函数已经返回数据
var flag = false;
var ajaxObj;

var success = function() {
    // 首先判断一下 flag 是否被前面的异步函数修改了
    // 没有的话就执行 if 语句里面的代码
    if (!flag) {
       // 执行你的代码
       // 最后再把标识改一下
       flag = true;
    }
};
ajaxObj = $.ajax({
  async:true,
  success:function(data){
    //判断flag当前值，ajaxObj对象存在
    if (!flag && ajaxObj) {
       // 禁止上一个ajax
       // 最后再把标识改一下
       // 处理获得data
       ajaxObj.abort();
       flag = true;

    }
  }
  })
```
