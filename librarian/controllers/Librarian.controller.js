sap.ui.define([
	"./AbstractController",
	"sap/m/MessageToast"
], function(AbstractController, MessageToast) {
	"use strict";
	
	return AbstractController.extend("librarian.controllers.Librarian", {

		onInit: function() {
		},

		onSubmit: function() {
			// MessageToast.show("Sending to Stored Process");
			this.getRouter().navTo("Success");
		}

	});

});