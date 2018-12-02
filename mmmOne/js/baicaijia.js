

$(function(){
  var ul = document.querySelector('.tabs');
   
   
  var ul_wapper = document.querySelector('.ul_wapper');
  // console.log(ul,ul_wapper);
  var currentX = 0;
  
  var startX;

  var titleid;//标题的id


  render();

// 1.商品列表标题的渲染
$.ajax({
  type:'get',
  url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
  dataType:'json',
  success:function(info){
    console.log(info);
    var htmlStr = template("bcjnavTpl",info);
    $('.tabs').html(htmlStr);
  }
});

// 2.点击那个li给相应的li加上active类名
$(".tabs").on("click","li",function(){
   
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  // 拿到被点击元素的下标
  var index = $(this).data("index");

  // 拿到标题的id
  titleid = $(this).data("id");
  
  // console.log(titleid);
  
  // console.log(index);
  var liWidth = $(this).width();
  
  // console.log(liWidth);
  // 点击那个ul就向左移动li.width * index 的距离
  if(index < 3){
    ul.style.transition = "transform .5s";
    ul.style.transform = "translateX("+ -liWidth * index+  "px)";
  }


  render(titleid);
  

  
});


// 3.区域滚动



ul.addEventListener("touchstart",function(e){
  startX = e.touches[0].clientX;
})

ul.addEventListener("touchmove",function(e){
  // 求得手指的相对位移
  var distanceX = e.touches[0].clientX - startX;

  // 跟着手指动不要动画
  ul.style.transition = "none";
  ul.style.transform = "translateX("+(currentX + distanceX) +  "px)";
});


ul.addEventListener("touchend",function(e){
  var distanceX = e.changedTouches[0].clientX - startX;

  currentX += distanceX;

  if(currentX > 0){
    currentX = 0;
    ul.style.transition = "transform .5s";
    ul.style.transform = "translateX(0px)";

  }

  var minX = -(ul.offsetWidth - ul_wapper.offsetWidth);

   if(currentX < minX){
     currentX = minX;

     ul.style.transition = "transform .5s";
     ul.style.transform = "translateX("+(minX) +  "px)";
   }

})


// 4.列表渲染 封装渲染的函数

function render(titleid){

  $.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
    data:{
      titleid:titleid || 0,
    },
    dataType:'json',
    success:function(info){
      console.log(info);
      var htmlStr = template("bcjlistTpl",info);
      $('.cabbage_list ul').html(htmlStr);
    }
  });
}


// 5.返回顶部功能
$('#gotop').click(function(){


  $("html, body").animate({
    scrollTop: 0
}, 1000);

});




})