/* 	Rename me to CreateEP.js
  Double Click in Explorer to run

Script based from Otto - http://ottodestruct.com       */

// put your playlist name here
var PlaylistName = "EPs";
var	iTunesApp = WScript.CreateObject("iTunes.Application");
var	mainLibrary = iTunesApp.LibraryPlaylist;

var	tracks = mainLibrary.Tracks;
var	numTracks = tracks.Count;
var 	i;
var	albumArray = new Array();
var trackArray = new Array();

EPPlaylist = iTunesApp.CreatePlaylist(PlaylistName);

for (i = 1; i <= numTracks; i++) {
  var	currTrack = tracks.Item(i);
  var	album = currTrack.Album;

  if ((album !== undefined) && (album !== "")) {

    // if album is valid then:
    if (albumArray[album] == undefined) {
      // if valbum doesn't already exist
      albumArray[album, 1] = new Array();
    } else {
      albumArray[1] = albumArray[1]++;
    }
  }
}

var arraySize = albumArray.length;
for (i = 1; i <= arraySize; i++) {
  if(albumArray[1] > 7) {
    var track = albumArray[i];
    EPPlaylist.AddTrack(track);
  }
}