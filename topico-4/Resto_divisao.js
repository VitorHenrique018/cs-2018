function Mod(x,y){


if(y >= 0 && x > 0)

var s = x;

while(y<=s){
	s = s-y;
}
return s;
}

console.log(Mod(3,8));