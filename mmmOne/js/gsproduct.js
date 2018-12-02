

$(function(){

  var shopid;
  var areaid;

  
  // 2.获取地区的信息。渲染到店铺的下拉列表
  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getgsshoparea',
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr = template("areaTpl",info);
      $('.popcat ul').html(htmlStr);
    }
  })

// 1.导航列表的每一个要注册点击事件
  $('.filter li.jd').one("click",function(){
     // 2.获取店铺的信息。渲染到店铺的下拉列表
     $.ajax({
       type:'get',
       url:'http://127.0.0.1:9090/api/getgsshop',
       dataType:'json',
       success:function(info){
         console.log(info);
            $ul = $('.second_ul');
         var htmlStr = template("shopTpl",{result:info.result});
           $ul.html(htmlStr);
          
         $ul.css({
           "display":"none",
         });
         $ul.slideDown();
         $('.filter li.jd').on("click",function(){
          $ul.next().stop(true).hide();
          $ul.stop(true).slideToggle();     
        });

        // 给ul下面的所有的li注册点击事件
        $lis = $('.second_ul li');
        $lis.each(function(){
          $(this).on("click",function(){
              // 添加right类
              $(this).addClass("right").siblings().removeClass("right");

              //获取参数shopid
              shopid = $(this).data("shopid");

              // 修改nav导航的值
              var shopName = $(this).data("name");
              $(".nav_name_jd span").text(shopName);

              // 隐藏掉ul
              $(this).parent().hide();

              // 重新渲染
              render(shopid,areaid);
          })
        })


       }
    })
     
     
    
  });



  //  2.导航列表的每一个要注册点击事件
  $('.filter li.tm').one("click",function(){
     // 2.获取店铺的信息。渲染到店铺的下拉列表
     $.ajax({
       type:'get',
       url:'http://127.0.0.1:9090/api/getgsshoparea',
       dataType:'json',
       success:function(info){
         console.log(info);
            $ul1 = $('.second_ul_hb');
         var htmlStr = template("areaTpl",{result:info.result});
           $ul1.html(htmlStr);
          
         $ul1.css({
           "display":"none",
         });
         $ul1.slideDown();
         $('.filter li.tm').on("click",function(){
          $ul1.prev().stop(true).hide();
          $ul1.stop().slideToggle();     
        });

        // 给ul下面的所有的li注册点击事件
        $lis = $('.second_ul_hb li');
        $lis.each(function(){
          $(this).on("click",function(){
              // 添加right类
              $(this).addClass("right").siblings().removeClass("right");

              //获取参数shopid
              areaid = $(this).data("areaid");

              // 修改nav导航的值
              var areaName = $(this).data("name");
              areaName = areaName.split("（")[0];
              $(".hb_name span").text(areaName);

              // 隐藏掉ul
              $(this).parent().hide();

              // 重新渲染
              render(shopid,areaid);
          })
        })


       }
    })
     
     
    
  });
// 渲染列表
  render(shopid,areaid);

  // 3.列表区域的渲染

  function render(shopid,areaid) {

    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getgsproduct',
      data:{
        shopid:shopid || 0 ,
        areaid:areaid || 0,
      },
      dataType:'json',
      success:function(info){
        console.log(info);
        var htmlStr = template("gspTpl",info);
        $('.gs-product-list ul').html(htmlStr);
      }
    });
  }




})