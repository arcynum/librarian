sap.ui.define([
	"./AbstractController",
	"sap/ui/model/json/JSONModel"
], function(AbstractController, JSONModel) {
	"use strict";
	
	return AbstractController.extend("librarian.controllers.Librarian", {

		onInit: function() {
			console.log("Librarian controller init");
		}

	});

});