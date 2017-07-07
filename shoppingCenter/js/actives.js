//滑动，出现toTop
window.onscroll = function(){
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	if (t > 200) { 
		document.getElementById("right").style.display="block" ;
	} else { 
		document.getElementById("right").style.display="none" ;
	}
}
	
	
//回到顶部	
	jQuery("#toTop").click(function(){
	
		jQuery("body").animate({"scrollTop":"0px"})
	})
	
	
//导航出现红杠
	var ul = document.getElementById("lineul");
	var li = ul.children;
	var line = document.getElementById("line");
  //alert(ul.children[1].offsetLeft)
 // console.log(li)
    for (var i=0;i<li.length;i++) {
  	    li[i].index=i;
  	
  	    li[i].onmouseover = function(){
	  	    var num=li[this.index].offsetLeft
	  	  	//console.log(num)
	  	  	if(this.index==5){
	  	  		num += 10;
	  	  	}
	  	  	if(this.index==6){
	  	  		num += 15;
	  	  	}
	  	  	
	  	  	jQuery("#line").animate({left:num+"px"},10);
	  	  
  		}
	}
    
//倒计时

function ShowCountDown(year,month,day,divname){ 
	var now = new Date(); 
	var endDate = new Date(year, month-1, day); 
	var leftTime=endDate.getTime()-now.getTime(); 
	var leftsecond = parseInt(leftTime/1000); 
	//var day1=parseInt(leftsecond/(24*60*60*6)); 
	var day1=Math.floor(leftsecond/(60*60*24)); 
	var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
	var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
	var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
	var cc = document.getElementById(divname); 
	cc.innerHTML = "距离抢购剩余："+year+"年"+month+"月"+day+"日还有："+day1+"天"+hour+"小时"+minute+"分"+second+"秒"; 
} 
window.setInterval(function(){ShowCountDown(2017,7,15,'divdown1');}, 1000); 

//li的立即购买变背景色
jQuery("#mains li").delegate("span","mouseenter",function(){
	
	jQuery(this).addClass("change").siblings().removeClass("change");
});
jQuery("#mains li").delegate("span","mouseleave",function(){
	
	jQuery(this).removeClass("change");
});

//li鼠标进入，出现边框
jQuery("#mains").delegate("li","mouseenter",function(){

	jQuery(this).find(".border").children(".border_t").stop(true,true).animate({width:"400px"},500);
	jQuery(this).find(".border").children(".border_r").stop(true,true).animate({height:"360px"},500);
	jQuery(this).find(".border").children(".border_b").stop(true,true).animate({width:"400px"},500);
	jQuery(this).find(".border").children(".border_l").stop(true,true).animate({height:"360px"},500);
});

jQuery("#mains").delegate("li","mouseleave",function(){

	jQuery(this).find(".border").children(".border_t").stop(true,true).animate({width:"0px"},500);
	jQuery(this).find(".border").children(".border_r").stop(true,true).animate({height:"0px"},500);
	jQuery(this).find(".border").children(".border_b").stop(true,true).animate({width:"0px"},500);
	jQuery(this).find(".border").children(".border_l").stop(true,true).animate({height:"0px"},500);
});

//分页变色
jQuery("#pages").delegate("span","click",function(){
	
	jQuery(this).addClass("change").siblings().removeClass("change");
});