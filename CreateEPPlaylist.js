/* 	Rename me to CreateEP.js
  Double Click in Explorer to run

Script based from Otto - http://ottodestruct.com       */

// put your playlist name here
var PlaylistName = "EPs";
var	iTunesApp = WScript.CreateObject("iTunes.Application");
var	mainLibrary = iTunesApp.LibraryPlaylist;

var	tracks = mainLibrary.Tracks;
var	numTracks = tracks.Count;
var i;
var j;
var	albumArray = new Array();
var trackArray = new Array();

EPPlaylist = iTunesApp.CreatePlaylist(PlaylistName);

for (i = 0; i <= numTracks; i++) {
  var itunesAlbum = currTrack.Album
  // if album is valid then:
  if ((itunesAlbum !== undefined) && (itunesAlbum !== "")) {
    // if album doesn't already exist in array create new album:
    var albumObject = {album: itunesAlbum, numTracks: 0};
    if (albumArray[albumObject] === undefined) {
      var albumObject = {album: itunesAlbum, numTracks: 1};
      albumArray.push(albumObject);
    } else {
      albumArray[albumObject].numTracks = albumArray[albumObject].numTracks++;
    }
  }
}

var arraySize = albumArray.length;
for (i = 1; i <= arraySize; i++) {
  if(albumArray[i].numTracks > 7) {
    var trackArray = albumArray[i].album;
    var numTracks = trackArray.length;
    for(j = 1; j <= numTracks; j++) {
      var	currTrack = trackArray[j]
      EPPlaylist.AddTrack(track);
  }
}
