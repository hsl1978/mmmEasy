 

// 公共的功能

// 1.返回顶部的功能
$('#droup').click(function(){


  $("html, body").animate({
    scrollTop: 0
}, 1000);

})

// 2.封装的地址栏的解析方法
// 解析地址栏参数的功能的方法
function getSearch(k){
  // 拿到地址栏中的？号后面的数据
  var str = location.search;
  
  // 进行中文转码
  str = decodeURI(str);

  // 去掉第一个问号
  str = str.slice(1);

  // 根据&符号分割成数组
  var arr = str.split('&');

  var obj = {};

  arr.forEach(function(v,i){
    // 根据=号分割成键和值
    var key = v.split('=')[0];//键
    var value = v.split('=')[1];//值

    obj[key] = value;

  });

  return obj[ k ];

   


}


 