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
	jQuery(function(){
		jQuery.ajax({
			url:"php/getGoodsList.php",
			type:"get",
			async:true,
			success:function(data){
				var obj=eval(data);
				for(var i=0;i<obj.length;i++){
					let goodsId=obj[i].goodsId;
					let goodsName=obj[i].goodsName;
					let goodsPrice=obj[i].goodsPrice;
					var goodsImg=obj[i].goodsImg;
					let goodsDesc=obj[i].goodsDesc;
					let beiyong1=obj[i].beiyong1;
					let beiyong2=obj[i].beiyong2;
					let beiyong3=obj[i].beiyong3;
					let beiyong4=obj[i].beiyong4;
					let beiyong5=obj[i].beiyong5;
					let beiyong6=obj[i].beiyong6;
					let beiyong7=obj[i].beiyong7;
					let beiyong8=obj[i].beiyong8;
					var str = "<li ord='"+goodsId+"'><div class='border'><div class='border_t'></div><div class='border_r'></div><div class='border_b'></div><div class='border_l'></div></div><a href='#' class='imgs'><img src='"+goodsImg+"'/></a><s>"+goodsName+"</s><p><a href='#' class='redT'>"+goodsDesc+"</a>"+beiyong1+"</p><div class='price'>"+goodsPrice+"</div><span><a href='#'>"+beiyong2+"</a></span></li>";
				jQuery(".mains").append(str);
				}
				//自动跳转到商品详情页
//				var liGoods = document.getElementById("mains").getElementsByTagName("li");
//				var number;
//				for(var k=0;k<liGoods.length;k++){
//					(function(k){
//						liGoods[k].onclick = function(){
//							number = liGoods[k].getAttribute("ord");
//							saveCookie("number",number,7);
//							location.href="tv.html";
//						}
//					})(k);
//				}
				jQuery("#mains li").on("click",function(){
					let number=jQuery(this).attr("ord");
					saveCookie("number",number,7);
					window.location.href="tv.html";				
				});
				
			}
			
			
		});
	})
	
	jQuery(function(){
	var strN =  getCookie("userName");   
	if(strN==""){
		jQuery("#denglu").text("亲，请登录");
		jQuery("#zhuce").text("注册");
	}else{
		jQuery("#denglu").text(strN+"，欢迎您！");
		jQuery("#zhuce").text("我的订单");
	}
});

//li的立即购买变背景色
jQuery("#mains li").delegate("span","mouseenter",function(){
	console.log(3);
	//jQuery(this).addClass("change").siblings().removeClass("change");
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

//1、保存cookie
//参数：
//键：
//值：
//有效期：

function saveCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key+"="+encodeURIComponent(value)+";expires="+d.toGMTString();	

}


//2、读取cookie
//参数：
//键
//返回值：值；  ""：表示没有找到对应的cookie；

//cssfile=red; aauserName=ttt; userName=jzm
function getCookie(key){	
	var str = decodeURIComponent(document.cookie);
	//1、转换成数组
	var arr = str.split("; ");
	//2、根据键找到对应的数组元素
	var index=-1;
	for(var i=0;i<arr.length;i++){
		if(arr[i].indexOf(key+"=")==0){
			index = i;
			break;
		}
	}
	//3、截取出值
	if(index==-1){
		return "";
	}else{
		return arr[index].substring(key.length+1);
	}
}

//3、删除cookie
//参数：
//键；
function removeCookie(key){
	saveCookie(key,"",-1);
}