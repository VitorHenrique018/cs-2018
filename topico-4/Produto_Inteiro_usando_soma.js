function Produto(a,b){

if(a < 0 && b < 0){
	return false;
}
var totalParcelas = a;
var parcela = b;

if(b< a){
	totalParcelas = b;
	parcela = a
}
var i = 1;
var s = 0;

while(i <= totalParcelas){
	s = s + parcela;
	i = i + 1;

}

return s;
}
console.log(Produto(10,4));