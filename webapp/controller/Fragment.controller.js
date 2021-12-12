sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Fragment) {
		"use strict";

		return Controller.extend("fragment.fragment.controller.Fragment", {
			onInit: function () {

            },
            onViewFragment: function() {
                   var oView = this.getView();
                   var name = this.getView().byId('inp_nameID');
                  var mail = this.getView().byId('inp_emailID');
                   if(!this.byId('dialogID')) {
                       Fragment.load({
                          name:"fragment.fragment.fragments.frag",
                          controller:this,
                          id:oView.getId()
                       }).then(function(oDialog){
                           oDialog.open();
                           var content = oDialog.getContent();
                           content[1].setValue(name.getValue());
                           content[3].setValue(mail.getValue());
                       });
                   }
                    else{
                       this.byId('dialogID').open();
                       var content = oDialog.getContent();
                           content[1].setValue(name.getValue());
                           content[3].setValue(mail.getValue());
                   }
                },
                onCloseDialog: function()
               {
                   this.byId('dialogID').close();
               }
		});
	});
