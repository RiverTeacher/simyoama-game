gdjs.stageselectCode = {};
gdjs.stageselectCode.GDNewSpriteObjects1= [];
gdjs.stageselectCode.GDNewSpriteObjects2= [];
gdjs.stageselectCode.GDNewTextObjects1= [];
gdjs.stageselectCode.GDNewTextObjects2= [];
gdjs.stageselectCode.GDRedButtonObjects1= [];
gdjs.stageselectCode.GDRedButtonObjects2= [];
gdjs.stageselectCode.GDRedButton2Objects1= [];
gdjs.stageselectCode.GDRedButton2Objects2= [];
gdjs.stageselectCode.GDNewText2Objects1= [];
gdjs.stageselectCode.GDNewText2Objects2= [];
gdjs.stageselectCode.GDNewText3Objects1= [];
gdjs.stageselectCode.GDNewText3Objects2= [];
gdjs.stageselectCode.GDNewText4Objects1= [];
gdjs.stageselectCode.GDNewText4Objects2= [];
gdjs.stageselectCode.GDNewSprite2Objects1= [];
gdjs.stageselectCode.GDNewSprite2Objects2= [];


gdjs.stageselectCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.stageselectCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stageselectCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.stageselectCode.GDRedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.stageselectCode.GDRedButtonObjects1[k] = gdjs.stageselectCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.stageselectCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton2"), gdjs.stageselectCode.GDRedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stageselectCode.GDRedButton2Objects1.length;i<l;++i) {
    if ( gdjs.stageselectCode.GDRedButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.stageselectCode.GDRedButton2Objects1[k] = gdjs.stageselectCode.GDRedButton2Objects1[i];
        ++k;
    }
}
gdjs.stageselectCode.GDRedButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "stage2", false);
}}

}


};

gdjs.stageselectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stageselectCode.GDNewSpriteObjects1.length = 0;
gdjs.stageselectCode.GDNewSpriteObjects2.length = 0;
gdjs.stageselectCode.GDNewTextObjects1.length = 0;
gdjs.stageselectCode.GDNewTextObjects2.length = 0;
gdjs.stageselectCode.GDRedButtonObjects1.length = 0;
gdjs.stageselectCode.GDRedButtonObjects2.length = 0;
gdjs.stageselectCode.GDRedButton2Objects1.length = 0;
gdjs.stageselectCode.GDRedButton2Objects2.length = 0;
gdjs.stageselectCode.GDNewText2Objects1.length = 0;
gdjs.stageselectCode.GDNewText2Objects2.length = 0;
gdjs.stageselectCode.GDNewText3Objects1.length = 0;
gdjs.stageselectCode.GDNewText3Objects2.length = 0;
gdjs.stageselectCode.GDNewText4Objects1.length = 0;
gdjs.stageselectCode.GDNewText4Objects2.length = 0;
gdjs.stageselectCode.GDNewSprite2Objects1.length = 0;
gdjs.stageselectCode.GDNewSprite2Objects2.length = 0;

gdjs.stageselectCode.eventsList0(runtimeScene);

return;

}

gdjs['stageselectCode'] = gdjs.stageselectCode;
