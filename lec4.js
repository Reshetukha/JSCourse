let mybutton = document.querySelector("#countButton");
mybutton.addEventListener("click", event => {
    "use strict";
    myClear();
    let num1 = Number(document.querySelector("#n1").value);
    let num2 = Number(document.querySelector("#n2").value);
    if (Number.isNaN(num1)){
        firstIsNaN();
    }
    if (Number.isNaN(num2)){
        secondIsNaN();
    }
    if (Number.isNaN(num1) || Number.isNaN(num2)){
        return;
    }
    myCount(num1, num2);
});

function firstIsNaN(){
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "error-message");
    newDiv.innerText = "Это не число";
	document.querySelector("#err1container").appendChild(newDiv);
}

function secondIsNaN(){
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "error-message");
    newDiv.innerText = "Это не число";
	document.querySelector("#err2container").appendChild(newDiv);
}

function myClear(){
    document.querySelector("#err1container").innerHTML = "";
    document.querySelector("#err2container").innerHTML = "";
    document.querySelector("#resultContainer").innerHTML = "";
}

function myCount(arg1, arg2){
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "result");
    newDiv.innerText = arg1 + arg2;
	document.querySelector("#resultContainer").appendChild(newDiv);
}