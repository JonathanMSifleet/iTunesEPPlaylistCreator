/* 	Rename me to CreateEP.js
  Double Click in Explorer to run

Script based from Otto - http://ottodestruct.com       */

// put your playlist name here
var iTunesApp = WScript.CreateObject("iTunes.Application");
var mainLibrary = iTunesApp.LibraryPlaylist;

var tracks = mainLibrary.Tracks;
var numTracks = tracks.Count;
var albumArray = new Array();
var trackArray = new Array();
var currTrack;
var itunesAlbum;
var albumName;
var albumObject;
var albumMatch;
var i;
var j;
var k;
var l;

EPPlaylist = iTunesApp.CreatePlaylist("EPs");

for (i = 1; i <= numTracks; i++) {
  currTrack = tracks.Item(i);
  itunesAlbum = currTrack.Album;

  // if album is valid then:
  if ((itunesAlbum != undefined) && (itunesAlbum != "")) {
    // if album doesn't already exist in array create new album:

     albumName = itunesAlbum.toString();
     albumObject = {album: itunesAlbum, numTracks: 1};
     albumMatch = false;

    for (i = 1; i <= albumArray.length; i++) {
      if(albumArray[i] !== undefined) {
        if(albumArray[i].album === albumObject.album) {
          albumMatch = true;
        }
      }
    }

    if(albumMatch === true) {
      WScript.Echo("Matching album" + albumObject.album + albumObject.numTracks);
      for( l = 1; l <= albumArray.length; l++) {
        if(albumArray[l] !== undefined) {
          if(albumArray[l].album === albumObject) {
            albumArray[l].numTracks = albumArray[l].numTracks + 1;
          }
        }
      }
    } else {
      WScript.Echo("New album" + albumObject.album + albumObject.numTracks);
      albumArray.push(albumObject);
    }
  }
}

for( k = 1; k <=  albumArray.length; k++) {
  try{
    if(albumArray[k] != undefined) {
      addToPlaylist(albumArray[k]);
    }
  } catch (e) {
    WScript.Echo(e);
  }
}

var addToPlaylist = function (element) {
 if(element.numTracks > 7) {
     trackArray = element.album;
     numTracks = trackArray.length;
    for( j = 1; j <= numTracks; j++) {
      currTrack = trackArray[j];
      EPPlaylist.AddTrack(currTrack);
    }
  }
  return;
}
