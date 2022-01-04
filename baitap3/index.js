var nEl=document.getElementById("nTxt")
var ketQuaEl=document.getElementById("ketQua")
ketQuaEl.addEventListener("click",function(){
    gt=1
    n=nEl.value*1
    for(let i = 1; i <= n; i++) {
        gt = gt * i;
    }
    document.getElementById("inKQ").innerHTML="N = "+n+" giai thừa = "+gt
})