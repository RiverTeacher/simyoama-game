gdjs.stage1Code = {};
gdjs.stage1Code.GDbgObjects1= [];
gdjs.stage1Code.GDbgObjects2= [];
gdjs.stage1Code.GDPlayerObjects1= [];
gdjs.stage1Code.GDPlayerObjects2= [];
gdjs.stage1Code.GDFlatLightJoystickObjects1= [];
gdjs.stage1Code.GDFlatLightJoystickObjects2= [];
gdjs.stage1Code.GDNewTiledSpriteObjects1= [];
gdjs.stage1Code.GDNewTiledSpriteObjects2= [];
gdjs.stage1Code.GDNewTextObjects1= [];
gdjs.stage1Code.GDNewTextObjects2= [];
gdjs.stage1Code.GDjumpObjects1= [];
gdjs.stage1Code.GDjumpObjects2= [];
gdjs.stage1Code.GDenemyObjects1= [];
gdjs.stage1Code.GDenemyObjects2= [];
gdjs.stage1Code.GDenemy2Objects1= [];
gdjs.stage1Code.GDenemy2Objects2= [];
gdjs.stage1Code.GDRedButtonWithMetalFrameObjects1= [];
gdjs.stage1Code.GDRedButtonWithMetalFrameObjects2= [];
gdjs.stage1Code.GDNewText2Objects1= [];
gdjs.stage1Code.GDNewText2Objects2= [];
gdjs.stage1Code.GDNewText3Objects1= [];
gdjs.stage1Code.GDNewText3Objects2= [];
gdjs.stage1Code.GDNewText4Objects1= [];
gdjs.stage1Code.GDNewText4Objects2= [];
gdjs.stage1Code.GDNewText5Objects1= [];
gdjs.stage1Code.GDNewText5Objects2= [];


gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.stage1Code.GDPlayerObjects1});
gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.stage1Code.GDenemyObjects1});
gdjs.stage1Code.asyncCallback11058148 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "syouten", false);
}}
gdjs.stage1Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.stage1Code.asyncCallback11058148(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.stage1Code.GDPlayerObjects1});
gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.stage1Code.GDenemyObjects1});
gdjs.stage1Code.asyncCallback11061132 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "syouten", false);
}}
gdjs.stage1Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.stage1Code.asyncCallback11061132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.stage1Code.GDPlayerObjects1});
gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDenemy2Objects1Objects = Hashtable.newFrom({"enemy2": gdjs.stage1Code.GDenemy2Objects1});
gdjs.stage1Code.asyncCallback11059700 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "syouten", false);
}}
gdjs.stage1Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.stage1Code.asyncCallback11059700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.stage1Code.GDPlayerObjects1});
gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDenemy2Objects1Objects = Hashtable.newFrom({"enemy2": gdjs.stage1Code.GDenemy2Objects1});
gdjs.stage1Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11029220);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.stage1Code.GDNewText5Objects1);
{for(var i = 0, len = gdjs.stage1Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.stage1Code.GDNewText5Objects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "bgm.mp3", true, 100, 1);
}{runtimeScene.getScene().getVariables().get("killedenemy").setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, 1, "Primary", "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerObjects1[i].getX() > 640 - 64 ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDPlayerObjects1[k] = gdjs.stage1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.stage1Code.GDPlayerObjects1 */
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.stage1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.stage1Code.GDPlayerObjects1[0].getPointX("")) + 64, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick"), gdjs.stage1Code.GDFlatLightJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDFlatLightJoystickObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDFlatLightJoystickObjects1[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDFlatLightJoystickObjects1[k] = gdjs.stage1Code.GDFlatLightJoystickObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDFlatLightJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick"), gdjs.stage1Code.GDFlatLightJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDFlatLightJoystickObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDFlatLightJoystickObjects1[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDFlatLightJoystickObjects1[k] = gdjs.stage1Code.GDFlatLightJoystickObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDFlatLightJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDPlayerObjects1[k] = gdjs.stage1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11054068);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "puyon.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.stage1Code.GDjumpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDjumpObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDjumpObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDjumpObjects1[k] = gdjs.stage1Code.GDjumpObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDjumpObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11054604);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.stage1Code.GDenemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDenemyObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDenemyObjects1[k] = gdjs.stage1Code.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDenemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.stage1Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs.stage1Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDenemyObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.stage1Code.GDenemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDenemyObjects1[i].getY() > 720 ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDenemyObjects1[k] = gdjs.stage1Code.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDenemyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.stage1Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs.stage1Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDenemyObjects1[i].setY(0);
}
}{for(var i = 0, len = gdjs.stage1Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDenemyObjects1[i].setX(gdjs.stage1Code.GDenemyObjects1[i].getX() + (600));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.stage1Code.GDenemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDenemyObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDPlayerObjects1[k] = gdjs.stage1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11056932);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.stage1Code.GDPlayerObjects1 */
{gdjs.evtTools.sound.playMusic(runtimeScene, "nc219363.wav", false, 30, 1);
}{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.stage1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.stage1Code.GDenemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDenemyObjects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDPlayerObjects1[k] = gdjs.stage1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.stage1Code.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.stage1Code.GDNewText5Objects1);
/* Reuse gdjs.stage1Code.GDPlayerObjects1 */
/* Reuse gdjs.stage1Code.GDenemyObjects1 */
{gdjs.evtTools.sound.playMusic(runtimeScene, "koto.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.stage1Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDenemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getScene().getVariables().get("killedenemy").add(1);
}{for(var i = 0, len = gdjs.stage1Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.stage1Code.GDNewText4Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("killedenemy"))));
}
}{for(var i = 0, len = gdjs.stage1Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.stage1Code.GDNewText5Objects1[i].setOpacity(255);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerObjects1[i].getY() > 720 ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDPlayerObjects1[k] = gdjs.stage1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11060612);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.stage1Code.GDPlayerObjects1 */
{gdjs.evtTools.sound.playMusic(runtimeScene, "nc219363.wav", false, 30, 1);
}{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.stage1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithMetalFrame"), gdjs.stage1Code.GDRedButtonWithMetalFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDRedButtonWithMetalFrameObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDRedButtonWithMetalFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDRedButtonWithMetalFrameObjects1[k] = gdjs.stage1Code.GDRedButtonWithMetalFrameObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDRedButtonWithMetalFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "clear", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.stage1Code.GDenemy2Objects1);
{for(var i = 0, len = gdjs.stage1Code.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.stage1Code.GDenemy2Objects1[i].setX(gdjs.stage1Code.GDenemy2Objects1[i].getX() - (8));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.stage1Code.GDenemy2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDenemy2Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDPlayerObjects1[k] = gdjs.stage1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10502740);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.stage1Code.GDPlayerObjects1 */
{gdjs.evtTools.sound.playMusic(runtimeScene, "nc219363.wav", false, 50, 1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "happy.mp3", false, 80, 1);
}{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.stage1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.stage1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy2"), gdjs.stage1Code.GDenemy2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDPlayerObjects1Objects, gdjs.stage1Code.mapOfGDgdjs_46stage1Code_46GDenemy2Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.stage1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.stage1Code.GDPlayerObjects1[k] = gdjs.stage1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.stage1Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.stage1Code.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs.stage1Code.GDNewText5Objects1);
/* Reuse gdjs.stage1Code.GDPlayerObjects1 */
/* Reuse gdjs.stage1Code.GDenemy2Objects1 */
{gdjs.evtTools.sound.playMusic(runtimeScene, "koto.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.stage1Code.GDenemy2Objects1.length ;i < len;++i) {
    gdjs.stage1Code.GDenemy2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.stage1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.stage1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{runtimeScene.getScene().getVariables().get("killedenemy").add(1);
}{for(var i = 0, len = gdjs.stage1Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.stage1Code.GDNewText4Objects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("killedenemy"))));
}
}{for(var i = 0, len = gdjs.stage1Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs.stage1Code.GDNewText5Objects1[i].setOpacity(255);
}
}}

}


};

gdjs.stage1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.stage1Code.GDbgObjects1.length = 0;
gdjs.stage1Code.GDbgObjects2.length = 0;
gdjs.stage1Code.GDPlayerObjects1.length = 0;
gdjs.stage1Code.GDPlayerObjects2.length = 0;
gdjs.stage1Code.GDFlatLightJoystickObjects1.length = 0;
gdjs.stage1Code.GDFlatLightJoystickObjects2.length = 0;
gdjs.stage1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.stage1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.stage1Code.GDNewTextObjects1.length = 0;
gdjs.stage1Code.GDNewTextObjects2.length = 0;
gdjs.stage1Code.GDjumpObjects1.length = 0;
gdjs.stage1Code.GDjumpObjects2.length = 0;
gdjs.stage1Code.GDenemyObjects1.length = 0;
gdjs.stage1Code.GDenemyObjects2.length = 0;
gdjs.stage1Code.GDenemy2Objects1.length = 0;
gdjs.stage1Code.GDenemy2Objects2.length = 0;
gdjs.stage1Code.GDRedButtonWithMetalFrameObjects1.length = 0;
gdjs.stage1Code.GDRedButtonWithMetalFrameObjects2.length = 0;
gdjs.stage1Code.GDNewText2Objects1.length = 0;
gdjs.stage1Code.GDNewText2Objects2.length = 0;
gdjs.stage1Code.GDNewText3Objects1.length = 0;
gdjs.stage1Code.GDNewText3Objects2.length = 0;
gdjs.stage1Code.GDNewText4Objects1.length = 0;
gdjs.stage1Code.GDNewText4Objects2.length = 0;
gdjs.stage1Code.GDNewText5Objects1.length = 0;
gdjs.stage1Code.GDNewText5Objects2.length = 0;

gdjs.stage1Code.eventsList3(runtimeScene);

return;

}

gdjs['stage1Code'] = gdjs.stage1Code;
