

$(function(){

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getcoupon',
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr = template("couponTpl",info);
      $('.coupon_list ul').html(htmlStr);

    }
  });


  // 点击事件，实现本地存储
  $('.coupon_list').on("click","li",function(){
    var coupontitle = $(this).data('coupontitle');
    localStorage.setItem("coupontitle",coupontitle);
     
  })


})


