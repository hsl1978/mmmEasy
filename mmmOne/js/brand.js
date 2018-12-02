

// 
 $(function(){

    // 1.动态获取，渲染

    // 获取brandtitleid和brandtitle
    var brandtitleid = +getSearch("brandtitleid");
    var brandTitle = getSearch("brandTitle");

    // console.log(typeof(brandtitleid));
    
   $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getbrand',
      data:{
        brandtitleid:brandtitleid,
      },
      dataType:'json',
      success:function(info){
        info.brandTitle = brandTitle;
        console.log(info);
        var htmlStr = template("brandTpl",info);
        $('.brandmain').html(htmlStr);
  
      }
    });


    // 2.产品销量，发送请求，渲染
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getbrandproductlist',
      data:{
        brandtitleid:brandtitleid,
        pagesize:4,
      },
      dataType:'json',
      success:function(info){
        console.log(info);
        var htmlStr = template("brandcomTpl",info);
        $('.productlist_content').html(htmlStr);
  
      }
    });

    // 拿到productId
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getproductcom',
      data:{
        productid:1,
      },
      dataType:'json',
      success:function(info){
        console.log(info);
        var htmlStr = template("bdcomTpl",info);
        $('.brandcom').html(htmlStr);
  
      }
    });


 })