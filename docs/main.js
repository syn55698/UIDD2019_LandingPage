(function($,window){
    $(function(){
        function resize_window(){
            var w_h = $(window).height()
            // 已有 CSS Grid ，就不需這兩行
            /*
            $("#header").height(100)
            $("#main").height(w_h-100)
            */
            var w_w = $(window).width()
            
            // 手動控制 float right
            $("#signup_area").css({left:((w_w - 500)+"px")})
            $("#login_area").css({left:((w_w - 300)+"px")})
            
            var left_show_h = $("#left_show").height()
            // 手動控制 #learn_more 位置
            $("#learn_more").css({top:((150)+"px")})
            console.log("SSS")
        }
        resize_window()
        $(window).resize(function(){
            resize_window()
        })


        // 開場時，左右合併特效
        function twin_close(){
            var w_w2 = $(window).width()
            
            
            $("#left_show").css({left:("-"+(w_w2/4)+"px")})
            $("#main_right").css({left:((w_w2/4)+"px")})

            $("#left_show,#main_right").animate({left:"0px"},1000)
        }

        
        twin_close()


    })
}(jQuery,window))