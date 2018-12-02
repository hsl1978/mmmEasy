

$(function(){

  var couponid = getSearch("couponid");
  // console.log(couponid);

  var coupontitle = localStorage.getItem("coupontitle");
  
  var coupontitle = coupontitle + "优惠券";

  $('#sq_header h1').text(coupontitle);
  
  
// 1.列表区域的渲染

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getcouponproduct',
    data:{
      couponid:couponid,
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr = template("couproTpl",info);
      $('.coupon_list ul').html(htmlStr);
    }
  });


  // 2.遮眼罩功能实现
  // 获取所有的li点击展示遮眼罩
  $('.coupon_list ul').on("click","li",function(){
    // alert("11");
    $('.cover').show();
  })

  $('.close').click(function(){
     $('.cover').hide();
  })


  // 4.轮播图功能
 

  $(document).ready(function () {

    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
     autoplay: {
       delay: 1000,//1秒切换一次
       disableOnInteraction: false,
     },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
  
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      
    });

    
   })





})


