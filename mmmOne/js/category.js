

$(function(){
   
  // 1.商品分类标题渲染
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getcategorytitle',
    dataType:'json',
    success:function(info){
      // console.log(info);
      var htmlStr = template("cateTitleTpl",info);
      $('.category_title').html(htmlStr);

    }
  });

  // 为每个category_title下面的li注册点击事件，
  $('.category_title').on("click",'li>a',function(){
    var id = $(this).data("id");
    // console.log(id);
    // 点击的时候下面的category_content显示隐藏
    $(this).siblings().toggle();
    // 保存id
    var $that = $(this);

    // 点击的时候发送ajax请求，渲染二级列表
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getcategory',
      data:{
        titleid:id,
      },
      dataType:'json',
      success:function(info){
        console.log(info);
        var htmlStr = template("cateContentTpl",info);
        $that.siblings().html(htmlStr);
        
      }
    })
    
  })



})