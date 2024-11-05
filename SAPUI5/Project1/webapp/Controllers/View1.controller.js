sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/Button"
], function (Controller, Button) {
  "use strict";
  return Controller.extend("SAPUI5.Project1.Views.View1", {
    onGoToView2: function () {
      console.log("goto view2 ");
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("view2");
    },
    onInit: function (){
      var oView = this.getView().byId("page1");
      var oButton = new Button(  {
        text: " Click me ",
       press : this.onGoToView2.bind(this)
      });

      oView.addContent(oButton);
      console.log("view1 controller ");
    },

  goto : function(){
  console.log("goto view2 ");
  }
 
  });
});