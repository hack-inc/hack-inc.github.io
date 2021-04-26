function lol(){
    document.getElementById('ahh').style.backgroundColor = "black";
    document.getElementById('ahh').style.color = "white";
    document.getElementById("lol").style.display = "none";
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function exploit(){
    document.getElementById("start").style.display = "none";
    alert("Jailbreaking Started!")
    document.getElementById("statuslol").innerHTML = "Status: Exploiting...";
    setTimeout(() => { document.getElementById("statuslol").innerHTML = "Status: Exploiting...(1/6)"; }, 10000);
    setTimeout(() => { document.getElementById("statuslol").innerHTML = "Status: getting r/w primitives...(2/6)"; }, 25000);
    setTimeout(() => { document.getElementById("statuslol").innerHTML = "Status: executing circuta_virosa.c...(3/6)"; }, 40000);
	setTimeout(() => { document.getElementById("statuslol").innerHTML = "Status: executing kernel_log.ds...(4/6)"; }, 55000);
	setTimeout(() => { document.getElementById("statuslol").innerHTML = "Status: Getting AMFI BYPASS!...(5/6)"; }, 70000);
	setTimeout(() => { document.getElementById("statuslol").innerHTML = "Status: Jailbreaking...(6/6)"; }, 85000);
	setTimeout(() => { document.getElementById("statuslol").innerHTML = "Status: Jailbroken!"; }, 115000);
    setTimeout(() => { alert("Jailbroken! The device will now reboot.") }, 115000);
    // document.getElementById("statuslol").innerHTML = "Status: Exploited!";
}