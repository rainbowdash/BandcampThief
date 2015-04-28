[![Code Climate](https://codeclimate.com/github/rainbowdash/BandcampThief/badges/gpa.svg)](https://codeclimate.com/github/rainbowdash/BandcampThief)

BandcampThief
=============
Bandcamp revoked api keys so this app basically does nothing.

# Todo list of things todo
- [x] added basic album handeling and downloading
- [x] added things to the readme
- [x] added urlInfo helper function
- [x] optimise query route
- [x] create build script
- [x] add id3v2 tagger build script
- [x] create discography helper function
- [x] show discography when users gives an artist url
- [ ] improve album downloading with zip files and id3v2 tagging
- [ ] plan the progress bar things possibly using mongodb or redis. I would prefer mongodb.
- [ ] make site look badass
- [ ] add caching
- [ ] download the songs
- [ ] add socket.io for progress bar

# How this thing is supposed to work
The idea is that a user can give either a artist url or album url. The Node app will display the results. When the person downloads an album, the server creats a folder in a directory. Then the server then downloads all of the files. After the files are downloaded, node runs the command line id3 tagger. The album directory is then zipped and the original directory is moved to a plex server directory(optional) or deleted. While this process is runing a progress bar of the serverside download is placed on the homepage.
