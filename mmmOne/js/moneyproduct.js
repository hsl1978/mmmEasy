

$(function(){
   
  var productId = getSearch("productId");
  // console.log(productId);

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
    data:{
      productid:productId,
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr = template("discountTpl",info);
      $('.discount-content').html(htmlStr);
    }
  });



  // 区域滚动
  mui('.mui-scroll-wrapper').scroll({
    // scrollY: true, //是否竖向滚动
    // bounce: true ,//是否启用回弹
    indicators: false, //是否显示滚动条
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  





})