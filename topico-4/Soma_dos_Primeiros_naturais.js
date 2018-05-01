function SomaNaturais(n){

	if(n<1){
	  
	  return false;
}

		var i = 2;
		var s = 1;
	

while (i<=n){
	s = s + i;
	i = i + 1;
}
return s;

}
console.log(SomaNaturais(10));