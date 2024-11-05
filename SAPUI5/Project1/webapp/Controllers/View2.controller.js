sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/Button"
], function (Controller, Button) {
  "use strict";
  return Controller.extend("SAPUI5.Project1.Views.View2", {
    onGoToView2: function () {
      console.log("go to View1")
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("view1");

    },
    onInit: function (){
      var oView2 = this.getView().byId("page2");
      var oButton = new Button("B2", {
        text: " Click me ",
      press : this.onGoToView2.bind(this)
      });

      oView2.addContent(oButton);
      console.log("view2 controller ");
    }


  });
});