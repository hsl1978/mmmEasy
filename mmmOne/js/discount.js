

$(function(){
   
  var productid = getSearch("productid");
  // console.log(productId);

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getdiscountproduct',
    data:{
      productid:productid,
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr = template("discountTpl",info);
      $('.discount-content').html(htmlStr);
    }
  })
  





})