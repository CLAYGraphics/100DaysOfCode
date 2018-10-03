var playList = [
  [ 'Can I Kick It?', 'A Tribe Called Quest' ],
  [ 'Runnin', 'The Pharcyde' ],
  [ 'All The Places', 'Pete Rock' ],
  [ 'Heavy, California', 'Jungle' ],
  [ 'Unifinished Sympathy', 'Massive Attack' ]
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);


















