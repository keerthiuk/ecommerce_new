function clickevent() {
    document.write("Clicked");
}

function mouseoverevent() {
    alert("mouse over me");
}

function focusevent() {
    document.getElementById("input1").style.background = " aqua";
}

function keydownevent() {
    document.getElementById("input1");
    alert("Pressed a key");
}

//document.write("The page is loaded successfully");

function onchangeevent(val) {
    alert("The input value has changed. The new value is: " + val);
}

function myFunction(val) {
    var x = document.getElementById('show');
    x.innerHTML = "Entered Value is: " + val;
}
