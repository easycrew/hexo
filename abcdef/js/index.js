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
