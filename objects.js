var playlist = {
  "Kygo": ["Firestorm", "We will rock you"]
}

function updatePlaylist(playlist, key, value) {
  var newObj = Object.assign({}, playlist);
  return Object.assign(newObj, {[key]: value});
}

function removeFromPlaylist(playlist, artistName) {
  var newObj = Object.assign({}, playlist);
  delete newObj[artistName];
  return newObj;
}
