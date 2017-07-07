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
    
//子导航选择后变红	
	jQuery("#navS1_1").delegate("dd","click",function(){
		jQuery(this).addClass("redB").siblings().removeClass("redB");
	});

	jQuery("#navS1_2").delegate("dd","click",function(){
		jQuery(this).addClass("redB").siblings().removeClass("redB");
	});

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