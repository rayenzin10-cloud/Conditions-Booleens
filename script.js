//ex1
function returnTrue(){
    return "true";
}

//ex2
function returnFalse(){
    return "false";
}
//ex3
function isEven(nombre){
    if(nombre%2===0){
        return "true";
    }
    return "false";
}
isEven(2);
isEven(3);
//ex4
function isOdd(nombre){
    if(nombre%2!==0){
        return "true";
    }else{
        return "false";
    }
}
isOdd(3);
isOdd(2);
//ex5
function isGreaterThan10(number){
    if(number>10){
        return "true";
    }else{
        return "false";
    }
}
isGreaterThan10(5) 
isGreaterThan10(10) 
isGreaterThan10(11) 
//ex6
function isLessThan30(number){
    if(number<30){
        return "true";
    }else{
        return "false";
    }
}
isLessThan30(5) 
isLessThan30(30) 
isLessThan30(32) 
//ex7
function isEqualTo10(number){
    if(number===10){
        return "true";
    }else{
        return "false";
    }}
    isEqualTo10(1) 
isEqualTo10(10) 
isEqualTo10(15) 
//ex8
function isGreaterOrEqualTo15(number){
    if(number>=15){
        return "true";
    }else{
        return "false";
    }
}
isGreaterOrEqualTo15(0) 
isGreaterOrEqualTo15(15) 
isGreaterOrEqualTo15(20) 
//ex9
function isLessOrEqualTo8(number){
    if(number<=8){
        return "true";
    }else{
        return "false";
    }}
    isLessOrEqualTo8(2) 
isLessOrEqualTo8(8) 
isLessOrEqualTo8(12) 
//ex10
function isLessThan(number1,number2){
    if(number1<number2){
        return "true";
    }else{
        return "false";
    }
}
isLessThan(2, 3) 
isLessThan(3, 2) 
isLessThan(3, 3) 
//ex11
function isEqualTo(number1,number2){
    if(number1===number2){
        return "true";
    }else{
        return "false";
    }
}
isEqualTo(3, 3)
isEqualTo(3, 2) 
//ex12
function isOldEnoughToDrive(age){
    if(age>=18){
        return "true";
    }else{
        return "false";
    }
}
isOldEnoughToDrive(12) 
isOldEnoughToDrive(18) 
isOldEnoughToDrive(20) 
//ex13
function isValidPassword(password){
    if(password.length>=8){
        return "true";
    }else{
        return "false";
    }
}
isValidPassword("hello") 
isValidPassword("password") 
isValidPassword("strongPassword") 
//ex14
function longerString(chaine1,chaine2){
    if(chaine1.length>chaine2.length){
        return chaine1;
    }else if(chaine1.length<chaine2.length){
        return chaine2;
    }else{
        return "both";
    }
}
longerString("cat", "kitty") 
longerString("Hello", "Hi") 
longerString("Hello", "World") 
//ex15
function opposite(boolean){
    if(boolean==="true"){
        return "false";
    }else if(boolean==="false"){
        return "true";
    }
}
opposite(true) 
opposite(false) 
//ex16
function rectAreaGreaterThan50(length,width){
    if((length*width)>=50){
        return "true";
    }else{
        return "false";
    }
}
rectAreaGreaterThan50(10, 6) 
rectAreaGreaterThan50(10, 5) 
rectAreaGreaterThan50(2, 3) 
//ex17
function budgetStatus(number){
    if(number>250){
        return "over budget";
    }else{
        return "under budget";
    }
}
budgetStatus(260) 
budgetStatus(250) 
budgetStatus(240)






















