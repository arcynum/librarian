sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("librarian.controllers.Home", {

		onInit: function() {
			console.log("Home controller init");

			// Bind the JSON object.
			let roles = new JSONModel("librarian/models/roles.json");
			this.getView().setModel(roles, "RoleModel");
		}
		
	});

});