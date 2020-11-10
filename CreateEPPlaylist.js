/* 

Double Click in Explorer to run

Script based on One Hit Wonder by Otto:
http://ottodestruct.com / https://web.archive.org/web/20190329050207/http://ottodestruct.com/itunes/onehitwonders.txt

*/

var iTunesApp = WScript.CreateObject("iTunes.Application");
var mainLibrary = iTunesApp.LibraryPlaylist;

var tracks = mainLibrary.Tracks;
// var numTracks = tracks.Count;
// limit to 100 for testing
var numTracks = 100;

var albumArray = new Array();

for (var i = 1; i <= numTracks; i++) {
  // skip track if undefined:
  if(tracks.Item(i) !== undefined) {

    // get album title from track
    var curTrack = tracks.Item(i);
    var albumName = curTrack.Album.toString();

    var albumKey = -1;
    if(albumArray.length > 0) {
      albumKey = checkAlbumExists(albumName, albumArray);

      if(albumKey === undefined || albumKey === -1) {
        // no album found
        albumArray.push({album: albumName, numTracks: 1});
      } else {
        albumArray[albumKey].numTracks++;
      }
    } else {
      albumArray.push({album: albumName, numTracks: 1});
    }
  }
}

var checkAlbumExists = function(needle, haystack) {
  for(l =1; l<= haystack.length; l++) {
    if(haystack[l].album.toString() === needle) {
      return parseInt(l);
    }
  }
  return -1;
}

EPPlaylist = iTunesApp.CreatePlaylist("EPs");

for( var k = 1; k <= albumArray.length; k++) {
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
    var trackArray = new Array();
    trackArray = element.album;
    numTracks = trackArray.length;
    for(var l = 1; l <= numTracks; l++) {
      curTrack = trackArray[l];
      EPPlaylist.AddTrack(curTrack);
    }
  }
  return;
}
