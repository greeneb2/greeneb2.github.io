var shown = false;
function showhideEmail(){
	if (shown){
		document.getElementById('email').innerHTML = "Show my email";
		shown = false;
	}else{
		var myemail = "<i class='fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right' ></i>" +
					  "Email: greeneb2@mail.uc.com";
		document.getElementById('email').innerHTML= myemail;
		shown = true;
	}
}