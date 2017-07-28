//开启桌面提醒
function openNotify()
{
      window.Notification.requestPermission(function(status){
          if(status === 'granted'){

               //如果开启了  则...
          }
      });
}
//myNotification(Object options,String title,Number time)功能桌面提醒功能,只支持高版本chrome和firefox
//参数：options 为对象{} 属性有body、icon、newUrl(跳转URL)
//参数：title 为标题部分, 有默认值
//参数：time 毫秒  默认：5秒
//
/*
*jyNotification(noteStructure)功能桌面提醒功能,只支持高版本chrome和firefox
*noteStructure object {}对象
* options: {}对象
*     dir : 文字的方向；它的值可以是 auto（自动）, ltr（从左到右）, or rtl（从右到左）
*     lang: 指定通知中所使用的语言。这个字符串必须在 BCP 47 language tag 文档中是有效的。
*     body: 通知中额外显示的字符串
*     tag: 赋予通知一个ID，以便在必要的时候对通知进行刷新、替换或移除。
*     icon: 一个图片的URL，将被用于显示通知的图标。
* title:  String  提示标题，默认:系统消息
* time:   Number  毫秒，提示展示时间，默认：2秒
* callback: Fun   点击触发方法
*/
function jyNotification(noteStructure){
  this.noteStructure = noteStructure;
  this.init();
}
jyNotification.prototype = {
  init:function(){},
  create:function(){},
  open:function(){},
}


function jyNotification(title,body,icon,time,callback){
  var options = {body:body,icon:icon,tag:"cgner"};
  if(window.Notification && window.Notification.permission === "granted"){//支持Notification且开启桌面提醒
      var notify=new Notification(title,options);
      notify.onshow = function(){
          setTimeout(function(){
              notify.close();
          }, time);
      };
      notify.onclick = function(){
        if(callback&&typeof(callback) === 'function'){
          callback();
        }
      };
      notify.onerror = function(){alert(消息提示出错！)}
  }else if(window.Notification && window.Notification.permission !== "denied"){//支持Notification但未开启桌面提醒（默认情况）
      window.Notification.requestPermission(function(status){
          if(window.Notification.permission !== status){
              window.Notification.permission = status;
          }
          jyNotification(title,body,icon,time,callback);
          return false
      });
  }else{
    return false
  };
};
