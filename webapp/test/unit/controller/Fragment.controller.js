/*global QUnit*/

sap.ui.define([
	"fragment/fragment/controller/Fragment.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Fragment Controller");

	QUnit.test("I should test the Fragment controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
