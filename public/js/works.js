var xmlhttp = new XMLHttpRequest();
var url = "data/works.json";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var worksArr = JSON.parse(xmlhttp.responseText);
        myFunction(worksArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<div class="row"><div class="col-sm-4"><h3>Город</h3><p>' + arr[i].city +
        '</p></br><h3>Дата</h3><p>' + arr[i].date +
        '</p></br><h3>Материалы</h3><p>' + arr[i].materials +
        '</p></div><div class="col-sm-8"><img src="' +arr[i].src +
        '"></div></div>';
    }
    document.getElementById("worksBlock").innerHTML = out;
}