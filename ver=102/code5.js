gdjs.clearCode = {};
gdjs.clearCode.GDNewTextObjects1= [];
gdjs.clearCode.GDNewTextObjects2= [];
gdjs.clearCode.GDNewText2Objects1= [];
gdjs.clearCode.GDNewText2Objects2= [];
gdjs.clearCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.clearCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.clearCode.GDNewText3Objects1= [];
gdjs.clearCode.GDNewText3Objects2= [];


gdjs.clearCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.clearCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.clearCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.clearCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.clearCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.clearCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.clearCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.clearCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.clearCode.GDNewTextObjects1.length = 0;
gdjs.clearCode.GDNewTextObjects2.length = 0;
gdjs.clearCode.GDNewText2Objects1.length = 0;
gdjs.clearCode.GDNewText2Objects2.length = 0;
gdjs.clearCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.clearCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.clearCode.GDNewText3Objects1.length = 0;
gdjs.clearCode.GDNewText3Objects2.length = 0;

gdjs.clearCode.eventsList0(runtimeScene);

return;

}

gdjs['clearCode'] = gdjs.clearCode;
