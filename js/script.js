var songs = [ ];
var artistName = [];
var SongLength = [];
console.log("hi")
$("#add").click(function(){
    let newSong = $("#song").val();
    $("#song").push (songs);

    $("#artist").val();
    $("arist").push(artistName);

    $("#Length").val();
    $("#Length").push();

    songs.forEach(function(Songs){
        $("#songs").append(Songs);
    })
    
    artistName.forEach(function(artistName){
        $("#artist").append(artistName);
    })

    SongLength.forEach(function({

    })


});

