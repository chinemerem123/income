let depBtn=document.querySelector("#dep-btn");
let wldBtn=document.querySelector("#wld-btn");

let rDepName1,rDepName2,rDepName3,rDepName4,rDepName5,rDepName6,rDepName7,rDepName8;
let rDepAmt1,rDepAmt2,rDepAmt3,rDepAmt4,rDepAmt5,rDepAmt6,rDepAmt7,rDepAmt8;
let rWldName1,rWldName2,rWldName3,rWldName4,rWldName5,rWldName6,rWldName7,rWldName8;
let rWldAmt1,rWldAmt2,rWldAmt3,rWldAmt4,rWldAmt5,rWldAmt6,rWldAmt7,rWldAmt8;
let depName1,depName2,depName3,depName4,depName5,depName6,depName7,depName8;
let depAmt1,depAmt2,depAmt3,depAmt4,depAmt5,depAmt6,depAmt7,depAmt8;
let wldName1,wldName2,wldName3,wldName4,wldName5,wldName6,wldName7,wldName8;
let wldAmt1,wldAmt2,wldAmt3,wldAmt4,wldAmt5,wldAmt6,wldAmt7,wldAmt8;


rWldAmt1=document.querySelector(".r-wld-amt1");
rWldAmt2=document.querySelector(".r-wld-amt2");
rWldAmt3=document.querySelector(".r-wld-amt3");
rWldAmt4=document.querySelector(".r-wld-amt4");
rWldAmt5=document.querySelector(".r-wld-amt5");
rWldAmt6=document.querySelector(".r-wld-amt6");
rWldAmt7=document.querySelector(".r-wld-amt7");
rWldAmt8=document.querySelector(".r-wld-amt8");

rWldName1=document.querySelector(".r-wld-name1");
rWldName2=document.querySelector(".r-wld-name2");
rWldName3=document.querySelector(".r-wld-name3");
rWldName4=document.querySelector(".r-wld-name4");
rWldName5=document.querySelector(".r-wld-name5");
rWldName6=document.querySelector(".r-wld-name6");
rWldName7=document.querySelector(".r-wld-name7");
rWldName8=document.querySelector(".r-wld-name8");


rDepName1=document.querySelector(".r-dep-name1");
rDepName2=document.querySelector(".r-dep-name2");
rDepName3=document.querySelector(".r-dep-name3");
rDepName4=document.querySelector(".r-dep-name4");
rDepName5=document.querySelector(".r-dep-name5");
rDepName6=document.querySelector(".r-dep-name6");
rDepName7=document.querySelector(".r-dep-name7");
rDepName8=document.querySelector(".r-dep-name8");


rDepAmt1=document.querySelector(".r-dep-amt1");
rDepAmt2=document.querySelector(".r-dep-amt2");
rDepAmt3=document.querySelector(".r-dep-amt3");
rDepAmt4=document.querySelector(".r-dep-amt4");
rDepAmt5=document.querySelector(".r-dep-amt5");
rDepAmt6=document.querySelector(".r-dep-amt6");
rDepAmt7=document.querySelector(".r-dep-amt7");
rDepAmt8=document.querySelector(".r-dep-amt8");



wldAmt1=document.querySelector(".wld-amt1");
wldAmt2=document.querySelector(".wld-amt2");
wldAmt3=document.querySelector(".wld-amt3");
wldAmt4=document.querySelector(".wld-amt4");
wldAmt5=document.querySelector(".wld-amt5");
wldAmt6=document.querySelector(".wld-amt6");
wldAmt7=document.querySelector(".wld-amt7");
wldAmt8=document.querySelector(".wld-amt8");

wldName1=document.querySelector(".wld-name1");
wldName2=document.querySelector(".wld-name2");
wldName3=document.querySelector(".wld-name3");
wldName4=document.querySelector(".wld-name4");
wldName5=document.querySelector(".wld-name5");
wldName6=document.querySelector(".wld-name6");
wldName7=document.querySelector(".wld-name7");
wldName8=document.querySelector(".wld-name8");


depName1=document.querySelector(".dep-name1");
depName2=document.querySelector(".dep-name2");
depName3=document.querySelector(".dep-name3");
depName4=document.querySelector(".dep-name4");
depName5=document.querySelector(".dep-name5");
depName6=document.querySelector(".dep-name6");
depName7=document.querySelector(".dep-name7");
depName8=document.querySelector(".dep-name8");


depAmt1=document.querySelector(".dep-amt1");
depAmt2=document.querySelector(".dep-amt2");
depAmt3=document.querySelector(".dep-amt3");
depAmt4=document.querySelector(".dep-amt4");
depAmt5=document.querySelector(".dep-amt5");
depAmt6=document.querySelector(".dep-amt6");
depAmt7=document.querySelector(".dep-amt7");
depAmt8=document.querySelector(".dep-amt8");

depBtn.addEventListener("click", ()=>{
rDepName1.innerText=depName1.value + "**";
rDepName2.innerText=depName2.value + "**";
rDepName3.innerText=depName3.value + "**";
rDepName4.innerText=depName4.value + "**";
rDepName5.innerText=depName5.value + "**";
rDepName6.innerText=depName6.value + "**";
rDepName7.innerText=depName7.value + "**";
rDepName8.innerText=depName8.value + "**";

rDepAmt1.innerText= "$" + depAmt1.value + ".00";
rDepAmt2.innerText= "$" + depAmt2.value + ".00";
rDepAmt3.innerText= "$" + depAmt3.value + ".00";
rDepAmt4.innerText= "$" + depAmt4.value + ".00";
rDepAmt5.innerText= "$" + depAmt5.value + ".00";
rDepAmt6.innerText= "$" + depAmt6.value + ".00";
rDepAmt7.innerText= "$" + depAmt7.value + ".00";
rDepAmt8.innerText= "$" + depAmt8.value + ".00";

    })


wldBtn.addEventListener("click", ()=>{
   rWldName1.innerText =wldName1.value + "**";
   rWldName2.innerText =wldName2.value + "**";
   rWldName3.innerText =wldName3.value + "**";
   rWldName4.innerText =wldName4.value + "**";
   rWldName5.innerText =wldName5.value + "**";
   rWldName6.innerText =wldName6.value + "**";
   rWldName7.innerText =wldName7.value + "**";
   rWldName8.innerText =wldName8.value + "**";


   rWldAmt1.innerText = "$" + wldAmt1.value + ".00";
   rWldAmt2.innerText = "$" + wldAmt2.value + ".00";
   rWldAmt3.innerText = "$" + wldAmt3.value + ".00";
   rWldAmt4.innerText = "$" + wldAmt4.value + ".00";
   rWldAmt5.innerText = "$" + wldAmt5.value + ".00";
   rWldAmt6.innerText = "$" + wldAmt6.value + ".00";
   rWldAmt7.innerText = "$" + wldAmt7.value + ".00";
   rWldAmt8.innerText = "$" + wldAmt8.value + ".00";


   
    })