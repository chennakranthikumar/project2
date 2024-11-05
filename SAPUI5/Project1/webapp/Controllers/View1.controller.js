sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/Button"
], function (Controller, Button) {
  "use strict";
  return Controller.extend("SAPUI5.Project1.Views.View1", {
    onGoToView2: function () {
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("RouteView2");
    },
    onInit: function (){
      var oView = this.getView().byId("page1");
      var oButton = new Button("B1", {
        text: " Click me "

      });

      oView.addContent(oButton);
      console.log("view1 controller ");
    }


  });
});