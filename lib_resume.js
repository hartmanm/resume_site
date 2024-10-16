/*
Copyright (c) 2018 Michael Neill Hartman. All rights reserved.
mnh_license@proton.me
https://github.com/hartmanm
*/

var base = document.getElementById("base");

function generate_div(basename,innerhtml,id)
{
var base = document.getElementById(basename);
let ddiv = document.createElement("div");
ddiv.id = id;
ddiv.innerHTML = innerhtml;
base.appendChild(ddiv);
}

function generate_h1(basename,innerhtml)
{
var base = document.getElementById(basename);
let ddiv = document.createElement("h1");
ddiv.innerHTML = innerhtml;
base.appendChild(ddiv);
}

function lamda_link(basename,innerhtml,id,url,classname,infoid,infoclass,infoinnerhtml)
{
var base = document.getElementById(basename);
var ddiv = document.createElement("div");
ddiv.className = infoclass;
ddiv.id = infoid;
ddiv.innerHTML = infoinnerhtml;
ddiv.style = "visibility: hidden;";
base.appendChild(ddiv);
var ddiv = document.createElement("lamda_link");
ddiv.innerHTML = innerhtml;
ddiv.id = id;
ddiv.className = classname;
base.appendChild(ddiv);
function hover(infoid){
var out = document.getElementById(infoid);
out.style.display = "block";
out.style = "visibility: visible;";
var out2 = document.getElementById(id);
out2.style = "z-index: 999;transform: scale(2); transition: transform .2s; cursor: pointer; border-image-width:0";
}
function leave(infoid){
var out = document.getElementById(infoid);
out.style = "visibility: hidden;";
var out2 = document.getElementById(id);
out2.style = "z-index: 1;transform: scale(1);";
}
function execute_z(element,url){window.open(url);}
var lamdalink = document.getElementById(id);
lamdalink.addEventListener("mouseover", function(e){var target = e.target || e.srcElement; hover(infoid)}, false);
lamdalink.addEventListener("mouseleave", function(e){var target = e.target || e.srcElement; leave(infoid)}, false);
lamdalink.addEventListener("click", function(e){var target = e.target || e.srcElement; execute_z(target,url)}, false);
}
generate_h1('b1',resume_name);
generate_div('b1','<p>'+headline_under_name+'</p>','headline');
//"e r t"
//"a b c";}
lamda_link('base',img_row_1_a,name_row_1_a,url_row_1_a,'e','infoa','a','<br><br><br>'+name_row_1_a+'<br><br><br>');
lamda_link('base',img_row_1_b,name_row_1_b,url_row_1_b,'r','infob','b','<br><br><br>'+name_row_1_b+'<br><br><br>');
lamda_link('base',img_row_1_c,name_row_1_c,url_row_1_c,'t','infoc','c','<br><br><br>'+name_row_1_c+'<br><br><br>');
//"ee rr tt"
//"aa bb cc";}
lamda_link('base',img_row_2_d,name_row_2_d,url_row_2_d,'ee','infoaa','aa','<br><br><br>'+name_row_2_d+'<br><br><br>');
lamda_link('base',img_row_2_e,name_row_2_e,url_row_2_e,'rr','infobb','bb','<br><br><br>'+name_row_2_e+'<br><br><br>');
lamda_link('base',img_row_2_f,name_row_2_f,url_row_2_f,'tt','infovv','cc','<br><br><br>'+name_row_2_f+'<br><br><br>');
//"d y f"
//"kk vv jj";}
//'d','infokk','kk'
//'y','infovv','vv'
//'f','infojj','jj'
