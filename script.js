$(document).ready(function () {
    $("#table").hide();
});

function onSubmit(){

    var artistName = document.getElementById("artist").value;
    var numSongs = document.getElementById("numSongs").value;


    $.ajax({
        url: "http://itunes.apple.com/search?term=" + artistName + "&limit=" + numSongs,
        dataType: "jsonp",
        success: callBack
    });

}

function callBack(data) {
    $("#table").show();
    console.log(data);
    var x = "";
    var numSongs = document.getElementById("numSongs").value;

    for(var i =0; i<data.results.length; i++) {
        x += "<tr><td><img src='" + data.results[i].artworkUrl100  + "'></td>";
        x += "<td>"+ data.results[i].trackName + "</td>";
        x +="<td>"+ data.results[i].collectionName + "</td>";
        x +="<td><audio controls src='" + data.results[i].previewUrl + "'></audio></td></<tr>";

    }

    document.getElementById("table").innerHTML = x;
}

