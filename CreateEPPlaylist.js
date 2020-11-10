/* 

Double Click in Explorer to run

Script based on One Hit Wonder by Otto:
http://ottodestruct.com / https://web.archive.org/web/20190329050207/http://ottodestruct.com/itunes/onehitwonders.txt

*/

var iTunesApp = WScript.CreateObject("iTunes.Application");
var mainLibrary = iTunesApp.LibraryPlaylist;

var tracks = mainLibrary.Tracks;
var numTracks = tracks.Count;
var albumArray;
var trackArray; 
var curTrack;
var albumName;
var albumKey;
var i;
var j;
var k;
var l;

albumArray = new Array();

for (i = 1; i <= numTracks; i++) {
  if(tracks.Item(i) !== undefined) {

    curTrack = tracks.Item(i);
    albumName = curTrack.Album.toString();

    albumKey = -1;
    if(albumArray.Count > 0) {
      albumKey = checkAlbumExists(albumName, albumArray);

      if(albumKey !== -1) {
        albumArray[albumKey].numTracks++;
      } else {
        // no album found
        albumArray.push({album: albumName, numTracks: 1});
      }
    } else {
      albumArray.push({album: albumName, numTracks: 1});
    }
  }
}

EPPlaylist = iTunespApp.CreatePlaylist("EPs");

for( k = 1; k <= albumArray.Count; k++) {
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
     trackArray = new Array();
     trackArray = element.album;
     numTracks = trackArray.Count;
    for( j = 1; j <= numTracks; j++) {
      curTrack = trackArray[j];
      EPPlaylist.AddTrack(curTrack);
    }
  }
  return;
}

var checkAlbumExists = function(needle, haystack) {
  for(j =1; j<= haystack.Count; j++) {
    if(haystack[j].album.toString() === needle) {
      return j;
    }
  }
  return -1;
}
