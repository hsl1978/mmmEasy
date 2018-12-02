

$(function(){
    
    // 1.根据分类id获取分类名称
      //  获取分类id
      var categoryid = getSearch("categoryId");
      // 当前页
      var currentpage= +getSearch("pageId");
      var category = getSearch("category");
      // 总页数
      var pagenum;
    
       

       
      
      // console.log(id);
        // 面包屑导航
      $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        data:{
          categoryid:categoryid,
        },
        dataType:'json',
        success:function(info){
          // console.log(info);
          var htmlStr = template("threeTpl",info);
          $('.product-list-title').html(htmlStr);
        }
      });


      //  2.商品列表渲染
      render();


    

      
      
      // 4.分装的渲染的方法
      function render(){
        $.ajax({
          type:'get',
          url:'http://127.0.0.1:9090/api/getproductlist',
          data:{
            categoryid:categoryid,
            pageid:currentpage,
          },
          dataType:'json',
          success:function(info){
            pagenum =Math.ceil(info.totalCount / info.pagesize);
            info.pagenum = pagenum
            info.currentpage = +currentpage;
            info.category = category;
            console.log(info);
            
            var htmlStr = template("product-listTpl",info);
            $('.productlist_content').html(htmlStr);    
          }
        });
        
      }
      
      
      //  3.点击切换页数
      // 上一页
        $('.productlist_content').on("click",".up",function(){
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
        $('.productlist_content').on("click",".down",function(){
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
  $('.productlist_content').on("change","#selectPage",function(){
    currentpage = $(this).find("option:selected").val();
    render();
              
})



})