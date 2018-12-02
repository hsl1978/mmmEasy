$(function(){

 // 1.根据分类id获取分类名称
      //  获取分类id
      // var categoryid =+ getSearch("categoryId");
      var category = getSearch("category");
      var pageId = +getSearch("pageId");
      // console.log(category);
      
      // 得到上一个页面传过来的具体哪一个商品的id
      var productid = getSearch("productId");

      $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproduct',
        data:{
          productid:productid,
        },
        dataType:'json',
        success:function(info){
          info.category = category;
          // info.categoryid = categoryid;
          info.pageId = pageId;
          console.log(info);
          var htmlStr = template("threeTpl",info);
          $('#product-list').html(htmlStr);
        }
      });

  //2.评论区域渲染
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getproductcom',
      data:{
        productid:productid,
      },
      dataType:'json',
      success:function(info){
      console.log(info);
      var htmlStr = template("comTpl",info);
      $('.product_com_list ul').html(htmlStr);
     }
   });


})