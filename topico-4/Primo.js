function primo (n){

	if( n < 1){
		return false;
	}

var i = 2;


while(i<n){
	if(n % i == 0)
		return false;

	i = i + 1;
}

return true;

}
console.log(primo(11));
