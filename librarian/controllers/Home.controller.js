sap.ui.define(["./AppController"], function(AppController) {
	"use strict";

	return AppController.extend("librarian.controllers.Home", {
		onInit: function() {
			console.log("Home controller init");
		}
	});
	
});