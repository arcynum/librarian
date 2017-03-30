sap.ui.define([
	"./AbstractController",
	"sap/ui/model/json/JSONModel"
], function(AbstractController, JSONModel) {
	"use strict";
	
	return AbstractController.extend("librarian.controllers.Home", {

		onInit: function() {
			console.log("Home controller init");

			// Bind the JSON object.
			let roles = new JSONModel("librarian/models/roles.json");
			this.getView().setModel(roles, "RoleModel");
		},

		onTilePress: function(event) {
			let path = event.getSource().getBindingContext("RoleModel").getPath();
			let value = this.getView().getModel("RoleModel").getProperty(path);

			console.log(path);
			console.log(value);
			console.log("I was pressed");

			this.getRouter().navTo(value.href, {}, true);
		},

	});

});