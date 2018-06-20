function MDC (a,b){

	if( a < b || b < 0){
		return false;
	}


while(b != 0){
	var m = a % b
		a = b
		b = m
}

return a;

}
console.log(MDC(81,54));
