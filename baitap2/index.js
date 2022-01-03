var xTxtEl=document.getElementById("xTxt")
var nTxtEl=document.getElementById("nTxt")
var ketQuaEl=document.getElementById("ketQua")
var xTxtValue=xTxtEl.value*1
var nTxtValue=nTxtEl.value*1
var s=0
 
var t= 1
ketQuaEl.addEventListener("click",function(){

    for( i = 1; i <= nTxtValue; i++){
        t = t * xTxtValue;
        s += t;
    }
console.log({nTxtValue},{xTxtValue});
})
    
