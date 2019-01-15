let link_login = document.getElementsByClassName("link-login").item(0);
let login_wrap = document.getElementsByClassName("ptlogin-wrap").item(0);
let login_box = document.getElementsByClassName("login-tab").item(0);
link_login.onclick = function (){
    login_wrap.style.display = "block";
}
login_wrap.onclick = function () {
    login_wrap.style.display = "none";
}
login_box.onclick = function (event) {
    login_wrap.style.display = "block";
    event.stopPropagation();
}