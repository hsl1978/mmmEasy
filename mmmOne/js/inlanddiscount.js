

$(function(){
   
  $('.recommont_list ul').html('<div class="loading"></div>');
  //  1.发送ajax请求。渲染页面
 setTimeout(function(){

   $.ajax({
     type:'get',
     url:'http://127.0.0.1:9090/api/getinlanddiscount',
     dataType:'json',
     success:function(info){
       
       // 准备懒加载工作
       var src = "./images/timg.gif";
       var loading = "<img src='./images/timg.gif' alt=''>";
       var trueImg;
       
       info.result.forEach(function(e,i){
         e.loading = loading;
         e.src = src;
         e.trueImgSrc = e.productImg.split(' ')[1].split('src=')[1].slice(1).slice(0,-1);
         
        });
        
        
        console.log(info);
        var htmlStr = template("recomTpl",{result:info.result});
        $('.recommont_list ul').html(htmlStr);
        

        $lazyLoad = $(".recommont_list .img_box");
        // console.log($lazyLoad);
        
        // var lazyLoad = (function(){
        //   // 初始化函数

        //   var timer;
        //   function init(){
        //     $(window).on("scroll",function(){
        //       if(timer){
        //         clearTimeout(timer);
        //       }
        //       timer = setTimeout(function(){
        //         checkShow();

        //       },200);
        //     });
        //   }
        // //  触发监听事件的时候会执行
        //   function checkShow(){
        //     $lazyLoad.each(function(){
        //       $cur = $(this);
        //       if($cur.attr('isLoaded')){
        //         return;
        //       }
        //       if(shouldShow($cur)){
        //         showImg($cur);
        //       }
        //     });
        //   }


        //   function shouldShow ($node){
        //     var scrollH = $(window).scrollTop();
        //         windowH = $(window).height();
        //         top = $node.offset().top;
        //     if(top < windowH + scrollH){
        //       return true;
        //     }else{
        //       return false;
        //     }

        //   }


        //   function showImg($node){
        //     $node.find("img").attr("src",$node.data("src"));
        //     $node.attr("isLoaded",true);
            
            
        //   }


        //   return {
        //     init :init,
        //   }


        // })();

        // lazyLoad.init();

        var lazyLoad = (function(){
          //初始化函数  由于滚动事件太消耗性能，
          //所以用定时器替换,不是滚动就触发,而是滚动后200毫秒后触发;
          var timer;
          function init(){
              $(window).on("scroll",function(){
                  if(timer){
                      clearTimeout(timer);
                  }
                  timer = setTimeout(function(){
                      checkShow();  // 
                  },200);
              });
          }
          // 判断'图片是否加载'(checkShow) 函数,如果图片含有'isLoaded'属性，证明图片已经加载过了,直接return;
          // 如果图片没有'isLoaded'属性,进入 '将要展示图片'(shouldShow) 函数。
          function checkShow(){
              $lazyLoad.each(function(){
                  $cur = $(this);
                  if($cur.attr('isLoaded')){
                      return;
                  }
                  if(shouldShow($cur)){
                      showImg($cur);
                  }
              });
          }
          //'将要展示图片'(shouldShow)函数,获取屏幕可是高度,滚动高度,要展示的元素到文档的高度,
          // 如果元素到文档的高度小于屏幕的可视高度加上滚动高度,说明元素已经在可视区内,返回true;
          // 否则返回false;   top < windowH + scrollH
          function shouldShow ($node){
              var scrollH = $(window).scrollTop(),
                  windowH = $(window).height(),
                  top = $node.offset().top;
              if(top < windowH + scrollH){
                  return true;
              } else {
                  return false;
              }
          }


          //'展示图片'函数, 将元素的src替换为自定义属性data-src(真正的图片地址);
          function showImg ($node){
              $node.find("img").attr("src",$node.data("src"));
              $node.attr("isLoaded",true);
          }
          //函数返回一个对象
          return {
              init : init
          }
      })();
      //执行函数
      lazyLoad.init();
     }
   });

 },2000)

 
  





})