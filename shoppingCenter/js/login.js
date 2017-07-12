function $(id){
	return document.getElementById(id);
}
function $create(tagName){
	return document.createElement(tagName);
}


/*
$(".nav_c").onmouseover = function(){
	let ulDOM = $create("ul");
	
	
}
*/


window.onscroll = function () { 
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	if (t > 100) { 
		$("right").style.display="block" ;
	} else { 
		$("right").style.display="none" ;
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


//$("user").onblur = function(){
//	let str = $("user").value;
//	let reg = /^\w+@\w+(\.\w+)+$/;
//	let reg1 = /^1\d{10}$/;
//	if((reg.test(str)) || (reg1.test(str))){
//		$("mail1").innerHTML ="";
//	}else{
//		$("mail1").innerHTML = "您好，请检查您的邮箱号或手机号格式是否正确";
//	}
//};


$("psw").onblur = function(){
	let str1 = $("psw").value;
	if(str1.length>0){
		$("psw1").innerHTML ="";
	}else{
		$("psw1").innerHTML = "密码不能为空";
	}
};
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
//点击登录，跳转到首页
jQuery("#btn1").click(function(){
	if($("user").value.length<=0 && $("psw").value.length<=0){
		$("warn1").innerHTML = "用户名和密码均不能为空";
	}else{
		jQuery.ajax({
			url:"php/login.php",
			async:true,
			data:"userName="+jQuery('#user').val()+"&userPass="+jQuery("#psw").val(),
			type:"post",
			success:function(data){
				console.log(data)
				if(data=="1"){
					//保存cookie
					saveCookie("userName",jQuery("#user").val(),7);
					saveCookie("userPass",jQuery("#psw").val(),7);
					location.href="index.html";
				}else{
					$("warn1").innerHTML = "亲，用户名或者密码错误，登录失败，请想好再输！";
				}
			}		
		});	
	}
});

