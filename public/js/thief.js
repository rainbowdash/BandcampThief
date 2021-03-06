var socket;

$(document).ready(function() {
  socket = io.connect();
  done = "<i class='icon-ok'></i>  ";

  socket.emit('catchup', { album_id: ID }, function(finished) {
    for (var i = 0, l = finished.length; i < l; i++) {
      track = details.finished[i];
      var li = $('li')[track.track.number - 1];
      li.innerHTML = done + li.innerHTML;
    }
  });

  socket.on(ID + ' progress', function(details) {
    //console.log(details);
    //$('#progressbar').css('width', Math.floor((details.tracksCompleted / details.totalTracks) * 100) + '%');
    $('#progressbar').css('width', details.progressSize + '%');
  });
  socket.on(ID + ' finished', function(track) {
    var li = $('li')[track.track.number - 1];
    li.innerHTML = done + li.innerHTML;
    //console.log(track.track.title);
  });
});
