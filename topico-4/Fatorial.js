function Fatorial(n){
	if(n>=1){

		var i = 2;
		var f = 1;
			
	}
	while(i<=n){
		f = f * i;
		i = i + 1;
	}
return f;

}
console.log(Fatorial(5));