function genPass() {
	let passLength = document.getElementById('passLength').value;
	let passChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321';
	let userPass = '';
	for (let i = 0; i < passLength ; i++) {
		userPass += passChars.charAt(Math.floor(Math.random() * passChars.length));
	}
	document.getElementById('userPass').value = userPass;
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
