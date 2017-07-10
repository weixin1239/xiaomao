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
	let reg = /^\w+@\w+(\.\w+)+$/;
	let reg1 = /^1\d{10}$/;
	if((reg.test(str)) || (reg1.test(str))){
		$("mail1").innerHTML ="";
	}else{
		$("mail1").innerHTML = "您好，请检查您的邮箱号或手机号格式是否正确";
	}
};


$("psw").onblur = function(){
	let str1 = $("psw").value;
	if(str1.length>0){
		$("psw1").innerHTML ="";
	}else{
		$("psw1").innerHTML = "密码不能为空";
	}
};
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

