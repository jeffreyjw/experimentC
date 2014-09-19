require([
	"maplib/MapDrawer"
], function (MapDrawer) {
	'use strict';
	var element = document.getElementById("map"),
			drawer = new MapDrawer(element);
	drawer.init();
});