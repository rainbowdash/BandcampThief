var spawn = require('child_process').spawn
  , resolve = require('path').resolve;

var id3_command = resolve(__dirname + '/../id3/bin/bin/id3v2')
  , ld_library_path = resolve(__dirname + '/../id3/bin/lib/');

var Tagger = function() {
  var self = this;

  function tagSong(path, params) {
    var args = ['-A', params.album, '-a', params.artist, '-t', params.title, '-T', params.trackNumber + '/' + params.totalTracks, path ];
    var child = spawn(
      id3_command,
      args,
      {
        cwd: resolve(__dirname + '/../'),
        env: { 'LD_LIBRARY_PATH': ld_library_path }
      }
    );
    //var s = '';
    //args.forEach(function(n) { s += (n + ' ') });
    //console.log(id3_command, s);

    child.on('close', function(code) {
      if (code !== 0) {
        console.log('Tagging of ' + params.title + ' exited with code ' + code);
      }
    });

    child.stdout.on('data', function(data) {
      console.log('stdout: ' + data);
    });

    child.stderr.on('data', function(data) {
      console.log('stderr: ' + data);
    });
  }
  
  self.tagSong = tagSong;
}

module.exports = new Tagger();

