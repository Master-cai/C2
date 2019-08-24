function login() {
	if($("#userAccount").val() == "") {
		$("#showMsg").text("请输入账号");
		$("#userAccount").focus();
		return false;
	}
	if($("#userPassword").val() == "") {
		$("#showMsg").text("请输入密码");
		$("#userPassword").focus();
		return false;
	}
	
	var strUrl = "/Logon.do?method=logon&flag=sess";
	$.ajax( {    
		url:strUrl,   
  		type:"post",    
  		cache:false,    
		dataType:"text", 
		success:function(dataStr) {  
			if(dataStr=="no"){
				return false;
	 		}else{
	 			var scode=dataStr.split("#")[0];
		     	var sxh=dataStr.split("#")[1];
		     	var code=document.getElementById("userAccount").value+"%%%"+document.getElementById("userPassword").value;
			 	var encoded="";
				for(var i=0;i<code.length;i++){
					if(i<20){
						encoded=encoded+code.substring(i,i+1)+scode.substring(0,parseInt(sxh.substring(i,i+1)));
					    scode = scode.substring(parseInt(sxh.substring(i,i+1)),scode.length);
					}else{
					    encoded=encoded+code.substring(i,code.length);
					    i=code.length; 
					}
				} 
				document.getElementById("encoded").value=encoded; 
				document.getElementById("loginForm").submit();
	 		}	
		},    
		error:function() {       
	 		alert("计算异常！");
		}         
  	});
}
$(function(){
	$(document).on("keyup", function(e){
		if(e.keyCode == 13) {
			login();
		}
	});
});
