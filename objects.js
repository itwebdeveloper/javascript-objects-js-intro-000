var playlist = {
  "Kygo": ["Firestorm", "We will rock you"]
}

function updatePlaylist(playlist, key, value) {
  return Object.assign(playlist, {[key]: value});
}

function removeFromPlaylist(playlist, artistName) {
  var newObj = Object.assign({}, playlist);
  delete newObj[artistName];
  return newObj;
}
