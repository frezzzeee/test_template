document.querySelector('.scrollDown').onclick = function() {
    ajaxGet("https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture"/*, function(data){
        document.querySelector('.companyName').innerHTML = data;
    }*/);
    //ajaxGet("https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture");
}

function ajaxGet(url, callback) {
    let f = callback || function(data) {console.log(data)}

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            let json = JSON.parse(xhr.responseText);
            f(json);
        }
    }
    xhr.open('GET', url);
    xhr.send();
}