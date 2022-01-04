var xTxtEl=document.getElementById("xTxt")
var nTxtEl=document.getElementById("nTxt")
var ketQuaEl=document.getElementById("ketQua")
ketQuaEl.addEventListener("click",function(){
    var x=xTxtEl.value*1
    var n=nTxtEl.value*1
    t=1
    s=0
    for( let i = 1; i <= n; i++){
        t = t * x;
        s = s+t;
    }
    document.getElementById("inKQ").innerHTML="Tổng S là: " + s
})
    
