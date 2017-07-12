<?php
	header("Content-type: text/html; charset=utf-8");
	//1.接受客户端的输入数据
	$name = $_POST['username'];
	$mima = $_POST['userPass'];

	//2.保存到数据库
		//1)连接到数据库
	$con = mysql_connect("localhost","root","root");
		
	if(!$con){
		
		echo "注册失败：服务器连接有问题".mysql.error();
	}else{
		//2)执行SQL语句
		mysql_select_db("dbweixin",$con);
		$str="insert into userTable(userName,userPass) values('".$name."','".$mima."')";
		//echo $str;
		$count = mysql_query($str,$con);
		
		//3）关闭数据库
		mysql_close($con);
				
	
	//3.响应
		if($count==1){
//			sleep(2);
//			header('Location: login.html');
			echo "1";//注册成功
		}else{
			echo "0";
		}
    }
?>