


/*Very Easy Challegne*/
var num = 6;
var num1 = 2;
console.log( num-num1);
/*Very Easy Challegne*/


/*Easy*/
var nameLong = "Hignacio";
var nameShort = "Johns";
console.log( nameLong + " " + " is longer than " + nameShort + " by three letters. " )
/*Easy*/



 /* Medium challenge*/
let str = prompt("Type good , Good or GOOD?"); 
switch (str) {
      case 'good':
	alert( 'lowercase' ); 
      case 'GOOD': 
	alert( 'ALL CAPS' ); 
	break; 
     case 'Good': 
          alert( 'Niether' ); 
          break; 
     case 'No': 
	alert( 'Please?' );
	break; 
     default: 
          alert( 'You were supposed to type good , GOOD or Good' );}
 /* Medium challenge*/


 /*Hard*/
 function add(){

    var x = 2

    var y = 3

    console.log( x + y )
 }

 
 function subtract(){

    var a = 5 

    var b = 3

    console.log( a - b )
 }


 function divide(){

    var c = 10

    var d = 5 

    console.log( c / d )
 }

 
 function multiply(){

    var e = 5

    var d = 5

    console.log( e * d )

 }
 /*Hard*/




 /*Very Hard*/
const num1 = prompt('Enter 1st number');

const num2 = prompt('Enter 2nd number');

const operator = prompt('Enter operator ( + , - , / , * )');

let result = 0;
if (isNaN(num1) || isNaN(num2)){
    alert('Wrong input , refresh page and try again.');
}
else{

        if(operator == '+'){
            result = num1 + num2;
        }else if(operator == '-'){
            result = num1 -num2;
        }else if(operator == '*'){
            result = num1 * num2;
        }else if(operator == '/'){
            result = num1 /num2;
        }
        document.write(num1 + operator + num2 + ' = ' + result);
}
 /*Very Hard*/
