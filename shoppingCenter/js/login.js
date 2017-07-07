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


$("user").onblur = function(){
	let str = $("user").value;
	let reg = /^\w+@\w(\.\w+)+$/;
	let reg1 = /^1\d{10}$/;
	if((reg.test(str)) || (reg1.test(str))){
		
	}else{
		$("mail1").innerHTML = "您好，请检查您的邮箱号或手机号格式是否正确";
		return;
	}
};


$("psw").onblur = function(){
	let str1 = $("psw").value;
	if(str1.length>0){
		
	}else{
		$("psw1").innerHTML = "密码不能为空";
		return;
	}
};
//保存cookie（新建cookie）
//功能：保存cookie
//参数：
//key：键
//value：值
//dayCount有效期:(单位是天) 如：7天

//返回值：
//无
function saveCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key+"="+encodeURIComponent(value)+";expires="+d.toGMTString();
}
//点击登录，跳转到首页
jQuery("#btn1").click(function(){
	jQuery.ajax({
		url:"login.php",
		async:true,
		data:"userName="+jQuery('#user').val()+"&userPass="+jQuery("#psw").val(),
		type:"post",
		success:function(data){
			if(data>="1"){
				//保存cookie
				//saveCookie("user",$("#psw").val(),7);
				location.href="index.html";
			}else{
				alert("亲，用户名或者密码错误，登录失败，请想好再输！");
			}
		}		
	});	
});
