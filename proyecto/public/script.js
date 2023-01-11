function verContenido(){
    const url = "http://localhost:8010/personas";
    const http = new XMLHttpRequest()

    http.open('GET',url);
    http.onreadystatechange = function(){
        var ciudades = JSON.parse(this.response);
    }

    http.send();
}