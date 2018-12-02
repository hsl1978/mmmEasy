

$(function(){
   
  // 1.商品分类标题渲染
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getbrandtitle',
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr = template("brandTitleTpl",info);
      $('.brandTitle_title').html(htmlStr);

    }
  });
})