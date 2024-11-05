sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Button",
    "sap/m/Panel",
    "sap/m/VBox",
    "sap/m/Text",
    "sap/m/Input",
    "sap/ui/model/json/JSONModel"

], function (Controller, Button, Panel, VBox , Text , Input , JSONModel) {
    "use strict";
    return Controller.extend("SAPUI5.project2.Views.Welcome", {

        onInit: function () {

            var oPanel =
                new Panel("Pan1", {
                    headerText: "Welcome Please Login with User Name "
                });
            var oVBox = new VBox("VB1", {

                alignItems: "Center",
                justifyContent: "Center"

            });
            var oText = new Text("Text1", {
                text: "Login"
            });

            var oUsernameInput = new Input({
                placeholder: "Enter User Name" , 
                value : "{DataV1>/user/name}"
                
            });


            // Create a login button
            var oLoginButton = new Button({
                text: "Login",
              
                press: function () {
                    // Implement your login logic here
                    var oModel = this.getView().getModel("DataV1");
                    var userName = oModel.getProperty("/user/name");
                    var validUsers = oModel.getProperty("/ValidActor/user");
                    var userDetails = validUsers.find(user => user.name === userName);
                    sap.m.MessageToast.show("Login button pressed" + userName );
                     
                     console.log(userDetails);
                }.bind(this)
            });
      
            var oView = this.getView().byId("page1");
            oVBox.addItem(oText);
            // Add the input fields and button to the VBox
            oVBox.addItem(oUsernameInput);
            
            oVBox.addItem(oLoginButton);
            oVBox.addStyleClass("sapUiSmallMargin");
            

            oPanel.addContent(oVBox);
            oView.addContent(oPanel);
        }

    });
});