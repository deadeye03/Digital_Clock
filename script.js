setInterval(() => {
    let a = new Date()
    let h=a.getHours()
    let m=a.getMinutes()
    let s=a.getSeconds()
    let d=a.getDate()
    let mnth = a.getMonth();
    
    let date=document.getElementsByClassName("date")[0]
    date.innerHTML=`${d}    /    ${mnth+1}`
    let time=document.getElementsByClassName("time")[0]
    time.innerHTML=`${h}  : ${m}  : ${s}`
    // location.reload();
}, 1000);