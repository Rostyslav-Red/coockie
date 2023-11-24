function saveNickname() {
    var nickname = document.getElementById('nickname').value;
    document.cookie = "nickname=" + nickname + ";path=/";
    displayWelcomeMessage();
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function checkNickname() {
    var nickname = getCookie("nickname");
    if (nickname) {
        document.getElementById('nicknameForm').style.display = 'none';
    }
    displayWelcomeMessage();
}

function displayWelcomeMessage() {
    var nickname = getCookie("nickname");
    if (nickname) {
        document.getElementById('welcomeMessage').innerText = "Hello, " + nickname;
    }
}

