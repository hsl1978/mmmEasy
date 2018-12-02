

// 
$(function(){
   
  //1. 菜单导航渲染，发送ajax请求
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getsitenav',
    dataType:'json',
    success:function(info){
      console.log(info);
      
      var htmlStr = template("siteTpl",info);
      $('.sitenav ul').html(htmlStr);

      
    }
  });

})