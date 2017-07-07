function $(id){
	return document.getElementById(id);
}
function $create(tagName){
	return document.createElement(tagName);
}



window.onscroll = function () { 
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	if (t > 200) { 
		$("right").style.display="block" ;
	} else { 
		$("right").style.display="none" ;
	} 
	if (t > 700 && t<=5500) { 
		$("left").style.display="block" ;
	} else { 
		$("left").style.display="none" ;
	} 
	if ((t > 600) && (t<=1500)){
		console.log(333)
		$("li1") .style.cssText = "color:red";
	}else{
		$("li1") .style.cssText = "color:#9f9f9f";
	}
	if ((t > 1500) && (t<=2100)){
		$("li2") .style.cssText = "color:red";
	}else{
		$("li2") .style.cssText = "color:#9f9f9f";
	}
	if ((t > 2100) && (t<=2800)){
		$("li3") .style.cssText = "color:red";
	}else{
		$("li3") .style.cssText = "color:#9f9f9f";
	}
	if ((t > 2800) && (t<=3400)){
		$("li4") .style.cssText = "color:red";
	}else{
		$("li4") .style.cssText = "color:#9f9f9f";
	}
	if ((t > 3400) && (t<=4200)){
		$("li5") .style.cssText = "color:red";
	}else{
		$("li5") .style.cssText = "color:#9f9f9f";
	}
	if ((t > 4200) && (t<=4900)){
		$("li6") .style.cssText = "color:red";
	}else{
		$("li6") .style.cssText = "color:#9f9f9f";
	}
	if ((t > 4900) && (t<=5500)){
		$("li7") .style.cssText = "color:red";
	}else{
		$("li7") .style.cssText = "color:#9f9f9f";
	}
};


//回到顶部
/*
$("toTop").onclick(function(){ 
 $('body,html').animate({ scrollTop: 0 }, 100); 
 return false; 
});
*/
$("toTop").onclick = function(){ 
	document.documentElement.scrollTop = document.body.scrollTop = 0;
};

	
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

 
