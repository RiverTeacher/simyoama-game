gdjs.titleCode = {};
gdjs.titleCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.titleCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.titleCode.GDRedButtonWithGoldFrameObjects3= [];
gdjs.titleCode.GDRedButtonWithGoldFrameObjects4= [];
gdjs.titleCode.GDNewTextObjects1= [];
gdjs.titleCode.GDNewTextObjects2= [];
gdjs.titleCode.GDNewTextObjects3= [];
gdjs.titleCode.GDNewTextObjects4= [];
gdjs.titleCode.GDNewText2Objects1= [];
gdjs.titleCode.GDNewText2Objects2= [];
gdjs.titleCode.GDNewText2Objects3= [];
gdjs.titleCode.GDNewText2Objects4= [];
gdjs.titleCode.GDbgwhiteObjects1= [];
gdjs.titleCode.GDbgwhiteObjects2= [];
gdjs.titleCode.GDbgwhiteObjects3= [];
gdjs.titleCode.GDbgwhiteObjects4= [];
gdjs.titleCode.GDNewText3Objects1= [];
gdjs.titleCode.GDNewText3Objects2= [];
gdjs.titleCode.GDNewText3Objects3= [];
gdjs.titleCode.GDNewText3Objects4= [];
gdjs.titleCode.GDNewText32Objects1= [];
gdjs.titleCode.GDNewText32Objects2= [];
gdjs.titleCode.GDNewText32Objects3= [];
gdjs.titleCode.GDNewText32Objects4= [];
gdjs.titleCode.GDLoadingObjects1= [];
gdjs.titleCode.GDLoadingObjects2= [];
gdjs.titleCode.GDLoadingObjects3= [];
gdjs.titleCode.GDLoadingObjects4= [];


gdjs.titleCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("response")) == 200;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage1", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("response")) == 200);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "serviceend", false);
}}

}


};gdjs.titleCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11013348);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.titleCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.titleCode.asyncCallback11011956 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.titleCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.titleCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.network.sendAwaitableAsyncRequest("https://absorbed-prism-parsnip.glitch.me", "", "GET", "text/plain", runtimeScene.getScene().getVariables().get("response"), runtimeScene.getScene().getVariables().get("error")), (runtimeScene) => (gdjs.titleCode.asyncCallback11011956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.titleCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "connecttime");
}
{ //Subevents
gdjs.titleCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.titleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.titleCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.titleCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.titleCode.GDRedButtonWithGoldFrameObjects3.length = 0;
gdjs.titleCode.GDRedButtonWithGoldFrameObjects4.length = 0;
gdjs.titleCode.GDNewTextObjects1.length = 0;
gdjs.titleCode.GDNewTextObjects2.length = 0;
gdjs.titleCode.GDNewTextObjects3.length = 0;
gdjs.titleCode.GDNewTextObjects4.length = 0;
gdjs.titleCode.GDNewText2Objects1.length = 0;
gdjs.titleCode.GDNewText2Objects2.length = 0;
gdjs.titleCode.GDNewText2Objects3.length = 0;
gdjs.titleCode.GDNewText2Objects4.length = 0;
gdjs.titleCode.GDbgwhiteObjects1.length = 0;
gdjs.titleCode.GDbgwhiteObjects2.length = 0;
gdjs.titleCode.GDbgwhiteObjects3.length = 0;
gdjs.titleCode.GDbgwhiteObjects4.length = 0;
gdjs.titleCode.GDNewText3Objects1.length = 0;
gdjs.titleCode.GDNewText3Objects2.length = 0;
gdjs.titleCode.GDNewText3Objects3.length = 0;
gdjs.titleCode.GDNewText3Objects4.length = 0;
gdjs.titleCode.GDNewText32Objects1.length = 0;
gdjs.titleCode.GDNewText32Objects2.length = 0;
gdjs.titleCode.GDNewText32Objects3.length = 0;
gdjs.titleCode.GDNewText32Objects4.length = 0;
gdjs.titleCode.GDLoadingObjects1.length = 0;
gdjs.titleCode.GDLoadingObjects2.length = 0;
gdjs.titleCode.GDLoadingObjects3.length = 0;
gdjs.titleCode.GDLoadingObjects4.length = 0;

gdjs.titleCode.eventsList3(runtimeScene);

return;

}

gdjs['titleCode'] = gdjs.titleCode;
