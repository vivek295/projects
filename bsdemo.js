
$(document).ready(function(){
	$("#fName").on("blur",function(){validateFname();});
	$("#lName").on("blur",function(){validateLname();});
	$("#dob").on("blur",function(){validateDOB();});
	$("#mob").on("blur",function(){validateMob();});
	$("#address").on("blur",function(){validateAddress();});
	$("#message").on("blur",function(){validateMessage();});
	$("#myForm").on("submit",function(e){isValid();});
});

var isValid = function(e){

	if(validateFname() && validateLname() && validateDOB() && validateMob() && validateAddress() && validateMessage() )
	{
		alert("Form Submitted Successfully");
	}
	else{
		e.preventDefault();
		alert("Please Coorect Errors");
			
	}
};

var validateFname = function(){
	if($.trim($("#fName").val()).length <= 5){
		$("#errFname").text("Must Be Greater Than 5 Character");
		return false;
	}
	else{
		$("#errFname").text("ok");
		return true;
	}

};
var validateLname = function(){
	if($.trim($("#lName").val()).length == 0){
		$("#errLname").text("Can't be blank");
		return false;
	}
	else{
		$("#errLname").text("ok");
		return true;
	}

};
var validateDOB = function(){
	return true;
};
var validateMob = function(){
	if($.trim($("#mob").val()).length != 10){
		$("#errMob").text("Not a Valid Number");
		return false;
	}
	else{
		$("#errAddress").text("ok");
		return true;
	}

};
var validateAddress = function(){
	if($.trim($("#address").val()).length == 0){
		$("#errAddress").text("Can't be blank");
		return false;
	}
	else{
		$("#errAddress").text("ok");
		return true;
	}

};
var validateMessage = function(){
	if($.trim($("#message").val()).length == 0){
		$("#errMessage").text("Can't be blank");
		return false;
	}
	else{
		$("#errMessage").text("ok");
			return true;
	}

};