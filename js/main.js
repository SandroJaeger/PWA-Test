setTimeout(function(){
    document.getElementById("logo-img").trigger = "click";
},2000);



let parameters = new URLSearchParams(window.location.search);

alert(parameters.get("accountid"));

// setTimeout(function(){
//     window.location.search = "?accountid=moinmeister";
//     alert(parameters.get("accountid"));
// },3000);