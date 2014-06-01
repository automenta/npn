var npm = require('npm');
var BitTorrentClient = require('bittorrent-client')


npm.load(function (er, npm) {

	var btclient = BitTorrentClient();

	/*
	//https://github.com/feross/bittorrent-client
	client.add('magnet:?xt=urn:btih:1e69917fbaa2c767bca463a96b5572785c6d8a12')

	client.on('torrent', function (torrent) {
	  // torrent metadata has been fetched
	  console.log(torrent.name)

	  torrent.files.forEach(function (file) {
		console.log(file.name)
		// get a readable stream of the file content
		var stream = file.createReadStream()
	  })
	})
	*/


  //npm.config.set(key, val)
  //val = npm.config.get(key)

  //console.log("prefix = %s", npm.prefix)

  //npm.commands.install(["package"], cb)


	npm.commands.list(function(err, res) {
		console.log(res, err);
	});

});
