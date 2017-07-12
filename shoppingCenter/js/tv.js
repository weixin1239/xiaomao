//var box = document.getElementById( "main2" ); 
//var box1 = document.getElementById( "main3" ); 

window.onscroll = function () {
	var t=document.documentElement.scrollTop + document.body.scrollTop;


//	var h = box.getBoundingClientRect().top+t;
//	var h1 = box1.getBoundingClientRect().top+t;
//	console.log("main2:"+$("#main2").offset().top)
//	console.log("main3:"+$("#main3").offset().top)
//	console.log(t)
	if((t>=$("#main1").offset().top) &&(t<=$("#main2").offset().top-200) ){
		console.log(1)
		$("#red").animate({top:"10px"},10);
	}else if((t>=$("#main2").offset().top-200) && t <($("#main3").offset().top-200)){
		console.log(2)
		$("#red").animate({top:"55px"},10);
	}else if((t>=$("#main3").offset().top-200) && t <($("#main4").offset().top-200)){
		console.log(3)
		$("#red").animate({top:"100px"},10);
	}else if((t>=$("#main4").offset().top-200) && t <($("#main5").offset().top-400)){
		console.log(4)
		$("#red").animate({top:"150px"},10);
	}else if(t>=$("#main5").offset().top-400){
		console.log(5)
		$("#red").animate({top:"200px"},10);
	}
	
	
	if (t > 200) { 
		$("#right").show("slow");
	} else { 
		$("#right").hide("slow");
	} 
	
	if (t > 700) { 
		$("#top").css("margin-top","0px");
		$("#rigthL").css("margin-top","0px");
	} else { 
		$("#top").css("margin-top","-60px");
		$("#rigthL").css("margin-top","-1000px");
	} 
	/*
	if((t > 600) && (t<=26200)){
		$("#red").css("top","10px");
		//Query("#red").animate({"top":"10px"})
	}else if((t > 26200) && (t<=27150)){
		$("#red").css("top","55px");
		//$("#red").animate({"top":"55px"})
	} else if((t > 27150) && (t<=28200)){
		$("#red").css("top","100px");
		//$("#red").animate({"top":"100px"})
	}else if((t > 28200) && (t<=28600)){
		$("#red").css("top","150px");
		//$("#red").animate({"top":"150px"})
	}else if((t > 28600) && (t<=29000)){
		$("#red").css("top","200px");
		//$("#red").animate({"top":"200px"})
}else{
	$("#red").css("top","10px");
	}
	
*/

};


//红色花括号
var red= document.getElementById("red");
var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

    document.onmousemove = function(){
//console.log(scrollHeight)
  	    var n=red.offsetTop+scrollHeight;
  	  	//console.log(n)

  	  	$("#red").css("top","n"+"px");
  	  
	}



//回到顶部
/*
$("toTop").onclick(function(){ 
 $('body,html').animate({ scrollTop: 0 }, 100); 
 return false; 
});
*/
$("#toTop").click(function(){ 
	document.documentElement.scrollTop = document.body.scrollTop = 0;
});

//商品简介的淡入淡出
$("#smallImgsId").delegate("li","click",function(){
	$(this).addClass("active").siblings().removeClass("active");
	var currIndex = 0;
	currIndex = $(this).index();
	
	$(this).parent().prev().children().eq(currIndex).fadeIn();
	$(this).parent().prev().children().eq(currIndex).siblings().fadeOut();
});

//页面中的选项卡
function xuan(data){
	//点击li,改变li的样式
	ul1 = document.getElementById("titleId");
	var lis = ul1.children;
	for(var i in lis){
		lis[i].className="";
		
	}
	lis[data-1].className="active1";
	
	//改变图片
	var arr=document.getElementById("detailId");
	var arr1=[];
	for(var i in arr.childNodes){
		if(arr.childNodes[i].nodeType==1){
			arr.childNodes[i].className="hideD";
			arr1.push(arr.childNodes[i]);
		}
	}
	arr1[data-1].className="";
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
	  	  	
	  	  	$("#line").animate({left:num+"px"},10);
	  	  
  		}
	}




//省市联动
let cityObj={
	"城市代码": [
        {
            "省": "北京",
            "市": [
                {
                    "市名": "北京",
                    "编码": "101010100"
                },
                {
                    "市名": "朝阳",
                    "编码": "101010300"
                },
                {
                    "市名": "顺义",
                    "编码": "101010400"
                }
            ]
            
        },
        {
            "省": "天津市",
            "市": [
                {
                    "市名": "天津",
                    "编码": "101030100"
                },
                {
                    "市名": "宝坻",
                    "编码": "101030300"
                },
                {
                    "市名": "东丽",
                    "编码": "101030400"
                }
            ]
          	 
        },
        {
            "省": "上海",
            "市": [
                {
                    "市名": "上海",
                    "编码": "101020100"
                },
                {
                    "市名": "宝山",
                    "编码": "101020300"
                },
                {
                    "市名": "嘉定",
                    "编码": "101020500"
                }
            ]
        }
	]
}

//显示省
function showProvince(){
	document.getElementById("provinceSelect").innerHTML="";
	for(let i=0;i<cityObj.城市代码.length;i++){
		let option = document.createElement("option");
		option.innerHTML = cityObj.城市代码[i].省;
		option.value = cityObj.城市代码[i].省;
		document.getElementById("provinceSelect").appendChild(option);
	}
}

//显示城市（参数：省）
function showCity(provinceName){
	document.getElementById("citySelect").innerHTML="";
//1.先在json中查找对应的省
	let citys = null;
	for(let i=0;i<cityObj.城市代码.length;i++){
		if(cityObj.城市代码[i].省==provinceName){
			citys = cityObj.城市代码[i].市;
			break;
		}
	}
//2.把该省的市循环显示出来
	for(let i=0;i<citys.length;i++){
		let option = document.createElement("option");
		option.innerHTML = citys[i].市名;
		option.value = citys[i].编码;
		document.getElementById("citySelect").appendChild(option);
	}
}


window.onload=function(){
	showProvince();
	showCity(document.getElementById("provinceSelect").value);
	
	document.getElementById("provinceSelect").onchange = function(){
		showCity(this.value);
	}
}

function saveCookie(name,value,d)//两个参数，一个是cookie的名子，一个是值
{
	var Days = d; //此 cookie 将被保存 30 天
	var exp = new Date(); //new Date("December 31, 9998");
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)//取cookies函数
{
	var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
	if(arr != null) return unescape(arr[2]); return null;

}
function delCookie(name)//删除cookie
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

jQuery(function(){
	var strN =  getCookie("userName");  
	console.log(strN)
	if(strN==""){
		jQuery("#denglu").text("登录");
		jQuery("#zhuce").text("注册");
	}else{
		jQuery("#denglu").text(strN+"，TCL欢迎您！");
		jQuery("#zhuce").text("我的订单");
		jQuery(".sittings").hover(
			function () {
		    	jQuery(".hideSittings").show();
			},
			function () {
		    	jQuery(".hideSittings").hide();
			}
		);
	}
	
	jQuery(".tuiChu").click(function(){
		location.href = "login.html";
		delCookie("userName");
		if(strN!=""){
			jQuery("#denglu").text("登录");
			jQuery("#zhuce").text("注册");
		}
	})
});


