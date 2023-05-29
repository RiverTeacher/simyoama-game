gdjs.serviceendCode = {};
gdjs.serviceendCode.GDbgredObjects1= [];
gdjs.serviceendCode.GDbgredObjects2= [];
gdjs.serviceendCode.GDNewTextObjects1= [];
gdjs.serviceendCode.GDNewTextObjects2= [];
gdjs.serviceendCode.GDNewText2Objects1= [];
gdjs.serviceendCode.GDNewText2Objects2= [];
gdjs.serviceendCode.GDBlueButtonWithShadowObjects1= [];
gdjs.serviceendCode.GDBlueButtonWithShadowObjects2= [];


gdjs.serviceendCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14846180);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title", false);
}}

}


};gdjs.serviceendCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BlueButtonWithShadow"), gdjs.serviceendCode.GDBlueButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.serviceendCode.GDBlueButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.serviceendCode.GDBlueButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.serviceendCode.GDBlueButtonWithShadowObjects1[k] = gdjs.serviceendCode.GDBlueButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.serviceendCode.GDBlueButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.serviceendCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.serviceendCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.serviceendCode.GDbgredObjects1.length = 0;
gdjs.serviceendCode.GDbgredObjects2.length = 0;
gdjs.serviceendCode.GDNewTextObjects1.length = 0;
gdjs.serviceendCode.GDNewTextObjects2.length = 0;
gdjs.serviceendCode.GDNewText2Objects1.length = 0;
gdjs.serviceendCode.GDNewText2Objects2.length = 0;
gdjs.serviceendCode.GDBlueButtonWithShadowObjects1.length = 0;
gdjs.serviceendCode.GDBlueButtonWithShadowObjects2.length = 0;

gdjs.serviceendCode.eventsList1(runtimeScene);

return;

}

gdjs['serviceendCode'] = gdjs.serviceendCode;
