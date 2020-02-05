var songs = [];
var artistName = [];
var SongLength = [];
var SongImage = [];
var SongLinks = [];

$("#add").click(function(){
 // following lines simply retrieve what is in said input and add them to the designated array 

    let song = $("#song").val();
    songs.push (song);
    

    let Name= $("#artist").val();
    artistName.push(Name);

    let Length = $('#length').val();
    SongLength.push(Length);

    let Image = $('#image').val();
    SongImage.push(Image);

    let Link = $('#link').val();
    SongLinks.push(Link);
// following lines of code append the retrieved information to the column that is assigned and allows then to show

    songs.forEach(function(Songs){
        $("#songs").append(Songs);
    });
    
    artistName.forEach(function(artistName){
        $("#artists").append(artistName);
    });

    SongLength.forEach(function(SongLength){
        $("#lengths").append(SongLength);
    });

    SongImage.forEach(function(SongImage){
        $("#images").append(SongImage)
    });

    SongLinks.forEach(function(SongLinks){
        $('#links').append(SongLinks);
    });
})