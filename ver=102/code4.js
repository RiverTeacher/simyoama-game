gdjs.syoutenCode = {};
gdjs.syoutenCode.GDNewSpriteObjects1= [];
gdjs.syoutenCode.GDNewSpriteObjects2= [];
gdjs.syoutenCode.GDNewTextObjects1= [];
gdjs.syoutenCode.GDNewTextObjects2= [];
gdjs.syoutenCode.GDNewText2Objects1= [];
gdjs.syoutenCode.GDNewText2Objects2= [];
gdjs.syoutenCode.GDRedButtonObjects1= [];
gdjs.syoutenCode.GDRedButtonObjects2= [];
gdjs.syoutenCode.GDRedButton2Objects1= [];
gdjs.syoutenCode.GDRedButton2Objects2= [];


gdjs.syoutenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButton2"), gdjs.syoutenCode.GDRedButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.syoutenCode.GDRedButton2Objects1.length;i<l;++i) {
    if ( gdjs.syoutenCode.GDRedButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.syoutenCode.GDRedButton2Objects1[k] = gdjs.syoutenCode.GDRedButton2Objects1[i];
        ++k;
    }
}
gdjs.syoutenCode.GDRedButton2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButton"), gdjs.syoutenCode.GDRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.syoutenCode.GDRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.syoutenCode.GDRedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.syoutenCode.GDRedButtonObjects1[k] = gdjs.syoutenCode.GDRedButtonObjects1[i];
        ++k;
    }
}
gdjs.syoutenCode.GDRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "title", false);
}}

}


};

gdjs.syoutenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.syoutenCode.GDNewSpriteObjects1.length = 0;
gdjs.syoutenCode.GDNewSpriteObjects2.length = 0;
gdjs.syoutenCode.GDNewTextObjects1.length = 0;
gdjs.syoutenCode.GDNewTextObjects2.length = 0;
gdjs.syoutenCode.GDNewText2Objects1.length = 0;
gdjs.syoutenCode.GDNewText2Objects2.length = 0;
gdjs.syoutenCode.GDRedButtonObjects1.length = 0;
gdjs.syoutenCode.GDRedButtonObjects2.length = 0;
gdjs.syoutenCode.GDRedButton2Objects1.length = 0;
gdjs.syoutenCode.GDRedButton2Objects2.length = 0;

gdjs.syoutenCode.eventsList0(runtimeScene);

return;

}

gdjs['syoutenCode'] = gdjs.syoutenCode;
