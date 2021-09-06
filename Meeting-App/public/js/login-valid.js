function validate() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("passwd").value;

    if (username == "co.fynd@gmail.com" && password == "fynd@123") {
        window.location = "/meeting-home.html";
        return false;
    }
    else {
        alert("Login fail");
        return true;
    }
}