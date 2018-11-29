$(function(){
	var timer = null,
    index = 0,
    pics = $('#banner > div'),
    dots = $('#dots > span'),
    size = pics.length,
    prev = $("#prev"),
    next = $("#next");

    // 清除定时器,停止自动播放
	function stopAutoPlay(){
		if(timer){
	       clearInterval(timer);
		}
	}

	// 图片自动轮播
	function startAutoPlay(){
	   timer = setInterval(function(){
	       index++;
	       if(index >= size){
	          index = 0;
	       }
	       changeImg();
	   },2000)
	}

	// 切换，增加样式或类，遍历删除
	function changeImg(){
		pics.eq(index).css('display','block').siblings().css('display','none');
	    dots.eq(index).addClass('active').siblings().removeClass('active');
	}

	function slideImg(){
	    var bigbox = $("#bigbox");
	    bigbox.mouseover ( function(){
	    	stopAutoPlay();
	    }).mouseout ( function(){
	    	startAutoPlay();
	    }).mouseout();
	}

	//圆点点击
	    dots.click(function(){
	        index = $(this).index();
	        console.log(this);
	        changeImg();
	    })
 

	    // 下一张
	    next.click (function(){
	       index++;
	       if(index>=size) index=0;
	       changeImg();
	    });

	    // 上一张
	    prev.click (function(){
	       index--;
	       if(index<0) index=size-1;
	       changeImg();
	    });

	slideImg();
})