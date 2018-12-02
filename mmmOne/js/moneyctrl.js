

$(function(){


  // 传入的页数
   var currentpage = 0;
  //  总页数
   var pagenum;
  
  // 1.主要菜单产品区域动态渲染
  render();
  
  // 封装的渲染的函数
  function render(){
    $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getmoneyctrl',
      data:{
        pageid:currentpage,
      },
      dataType:'json',
      success:function(info){
        console.log(info);   
        pagenum = Math.ceil(info.totalCount / info.pagesize);
        info.pagenum = pagenum;
        info.currentpage = +currentpage;
  
  
        var htmlStr = template("mctrTpl",info);
        $('.main_list').html(htmlStr);
      }
    });
  
  }
  
     //  3.点击切换页数
        // 上一页
        $('.main_list').on("click",".up",function(){
          // alert("11");
          currentpage--;
          console.log(currentpage);
          
          if(currentpage == 0){
            currentpage = 1;
            // render(currentpage);
            return;
          }
  
          render();
        });
  
        // 下一页
        $('.main_list').on("click",".down",function(){
          // alert("11");
           currentpage++;
          console.log(currentpage);
          
          if(currentpage > pagenum){
            currentpage = pagenum;
            // render(currentpage);
            return;
          }
  
          render();
        });
  
      // 点击选择框，选择对应渲染 
     $('.main_list').on("change","#selectPage",function(){
        currentpage = $(this).find("option:selected").val();
        render();
              
      });
  
  
})