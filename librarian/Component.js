sap.ui.define(["sap/ui/core/UIComponent"], function(UIComponent) {
	"use strict";

	return UIComponent.extend("librarian.Component", {

		metadata: {
			rootView: "librarian.views.home",
			manifest: "json"
		},

		init: function() {
			console.log("Starting the init function");
			UIComponent.prototype.init.apply(this, arguments);

			console.log("Intialize the router");
			this.getRouter().initialize();
		}

	});

});