

// 
$(function(){
   
  //1. 菜单导航渲染，发送ajax请求
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getindexmenu',
    dataType:'json',
    success:function(info){
      // console.log(info);
      
      var htmlStr = template("navTpl",info);
      $('.row').html(htmlStr);

      $('.more').nextAll().hide();
    }
  });


  // 2.获取点击更多按钮，显示隐藏图标 
  $('.row').on('click',".more",function(){
    $('.more').nextAll().toggle();
  });

  // 3.主要菜单产品区域动态渲染
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getmoneyctrl',
    dataType:'json',
    success:function(info){
      console.log(info);   
      var htmlStr = template("mainTpl",info);
      $('.main_list').html(htmlStr);
    }
  })




})