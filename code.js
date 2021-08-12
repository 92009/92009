var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e74a4578-b40c-49d1-9955-7a5147943f00","0af70ceb-c4e0-40a1-8c91-5e83ce9ddcd0","5ca7e759-7792-44d2-ba7f-073ce2e846a8","fab6ea28-054d-410d-b59f-1f1660f8741a","5470eb68-22ac-4308-96ee-02ae8ee499ec","7aa07b48-27f2-4c2a-b865-125fa543b083","634b6e52-01d9-430e-85ec-446f38dcec90","eec768ef-6a89-47f8-9974-69c043b35916","3f2f2533-4c08-4b9c-b74b-2b81db138daa","96c89b42-531b-453d-bd36-93623459c853","ab954f20-c8cb-438c-86a5-30938b390842","168bf365-28c3-44f4-97d0-b3734dabea9c","f4496ad8-f28d-41db-b227-cf9f2e42a13e","fa1dbfb3-29f5-4b57-8eda-ef069519bf37","e48ba5e3-3732-4fa3-a762-d88d13b416dd"],"propsByKey":{"e74a4578-b40c-49d1-9955-7a5147943f00":{"name":"roy","sourceUrl":"assets/api/v1/animation-library/gamelab/n0ZKL7BCk7DR.V7XB_SckQwGDUU4SyDZ/category_emoji/emoji_12.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"n0ZKL7BCk7DR.V7XB_SckQwGDUU4SyDZ","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/n0ZKL7BCk7DR.V7XB_SckQwGDUU4SyDZ/category_emoji/emoji_12.png"},"0af70ceb-c4e0-40a1-8c91-5e83ce9ddcd0":{"name":"entry","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ySxACvQEWu1oZG9jtC6QIQsHH0DKLb5e","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0af70ceb-c4e0-40a1-8c91-5e83ce9ddcd0.png"},"5ca7e759-7792-44d2-ba7f-073ce2e846a8":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/oTNwnsLVLz3wkMc0j5T3tmQGOJKl3BLk/category_backgrounds/texture_19.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"oTNwnsLVLz3wkMc0j5T3tmQGOJKl3BLk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oTNwnsLVLz3wkMc0j5T3tmQGOJKl3BLk/category_backgrounds/texture_19.png"},"fab6ea28-054d-410d-b59f-1f1660f8741a":{"name":"brick","sourceUrl":"assets/api/v1/animation-library/gamelab/t6ZXIA9ZZwQBwBG1_IGVA8bCZXZ_nlf_/category_video_games/ground_stone_small_broken.png","frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":2,"version":"t6ZXIA9ZZwQBwBG1_IGVA8bCZXZ_nlf_","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/api/v1/animation-library/gamelab/t6ZXIA9ZZwQBwBG1_IGVA8bCZXZ_nlf_/category_video_games/ground_stone_small_broken.png"},"5470eb68-22ac-4308-96ee-02ae8ee499ec":{"name":"police","sourceUrl":null,"frameSize":{"x":116,"y":157},"frameCount":2,"looping":true,"frameDelay":12,"version":"q7JNL8IpPVPyx8NkpNLZRulML_RZTW2t","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":232,"y":157},"rootRelativePath":"assets/5470eb68-22ac-4308-96ee-02ae8ee499ec.png"},"7aa07b48-27f2-4c2a-b865-125fa543b083":{"name":"gold","sourceUrl":"assets/api/v1/animation-library/gamelab/sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX/category_video_games/goldbar.png","frameSize":{"x":282,"y":238},"frameCount":1,"looping":true,"frameDelay":2,"version":"sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":238},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX/category_video_games/goldbar.png"},"634b6e52-01d9-430e-85ec-446f38dcec90":{"name":"gold2","sourceUrl":"assets/api/v1/animation-library/gamelab/sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX/category_video_games/goldbar.png","frameSize":{"x":282,"y":238},"frameCount":1,"looping":true,"frameDelay":2,"version":"sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":238},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX/category_video_games/goldbar.png"},"eec768ef-6a89-47f8-9974-69c043b35916":{"name":"gold3","sourceUrl":"assets/api/v1/animation-library/gamelab/sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX/category_video_games/goldbar.png","frameSize":{"x":282,"y":238},"frameCount":1,"looping":true,"frameDelay":2,"version":"sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":238},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX/category_video_games/goldbar.png"},"3f2f2533-4c08-4b9c-b74b-2b81db138daa":{"name":"gold4","sourceUrl":"assets/api/v1/animation-library/gamelab/sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX/category_video_games/goldbar.png","frameSize":{"x":282,"y":238},"frameCount":1,"looping":true,"frameDelay":2,"version":"sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":238},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX/category_video_games/goldbar.png"},"96c89b42-531b-453d-bd36-93623459c853":{"name":"gold5","sourceUrl":"assets/api/v1/animation-library/gamelab/sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX/category_video_games/goldbar.png","frameSize":{"x":282,"y":238},"frameCount":1,"looping":true,"frameDelay":2,"version":"sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":238},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sLgI9NxdTa92vCBbCzGgfzporKQ3vDVX/category_video_games/goldbar.png"},"ab954f20-c8cb-438c-86a5-30938b390842":{"name":"ds","sourceUrl":"assets/api/v1/animation-library/gamelab/RRiS7_ZpJqUKLcKyqkX1dWntLv3vqDGq/category_buildings/commercial_30.png","frameSize":{"x":316,"y":181},"frameCount":1,"looping":true,"frameDelay":2,"version":"RRiS7_ZpJqUKLcKyqkX1dWntLv3vqDGq","categories":["buildings"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":316,"y":181},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RRiS7_ZpJqUKLcKyqkX1dWntLv3vqDGq/category_buildings/commercial_30.png"},"168bf365-28c3-44f4-97d0-b3734dabea9c":{"name":"gr","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"iJc9905GEgvnja.XYT_gXoFj10Pv5KRq","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/168bf365-28c3-44f4-97d0-b3734dabea9c.png"},"f4496ad8-f28d-41db-b227-cf9f2e42a13e":{"name":"gr2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"NclGgkoWe5cYs43GYkCPUvH827DeI65j","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f4496ad8-f28d-41db-b227-cf9f2e42a13e.png"},"fa1dbfb3-29f5-4b57-8eda-ef069519bf37":{"name":"police1","sourceUrl":"assets/api/v1/animation-library/gamelab/M8Y91EzwkcCZWKVg.hbGwle5Xo_m7C.w/category_robots/robot_01.png","frameSize":{"x":310,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"M8Y91EzwkcCZWKVg.hbGwle5Xo_m7C.w","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":310,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/M8Y91EzwkcCZWKVg.hbGwle5Xo_m7C.w/category_robots/robot_01.png"},"e48ba5e3-3732-4fa3-a762-d88d13b416dd":{"name":"happy","sourceUrl":"assets/api/v1/animation-library/gamelab/xP.DHAVGqF_lL_bupFzFaHUVvURu1Esg/category_emoji/emoji_03.png","frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"xP.DHAVGqF_lL_bupFzFaHUVvURu1Esg","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xP.DHAVGqF_lL_bupFzFaHUVvURu1Esg/category_emoji/emoji_03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundary1 = createSprite(1,5,20,900);
var boundary2 = createSprite(400,50,20,900);
var boundary3 = createSprite(1,5,900,20);
var boundary4 = createSprite(400,395,900,20);


var roy = createSprite(195,383);
roy.setAnimation("roy")
roy.scale=0.1
var entry = createSprite(195,400)
entry.setAnimation("entry")
entry.scale=2

var stopper = createSprite(50,117,250,10)
var stopper2 = createSprite(350,261,250,10)
var brick = createSprite(220,220,250,10)
brick.setAnimation("brick")
brick.scale=0.3

var police = createSprite(198,165)
police.setAnimation("police")
police.scale=0.4


var achievment1 = createSprite(221,200)
achievment1.setAnimation("gold")
achievment1.scale=0.1
var achievment2 = createSprite(201,200)
achievment2.setAnimation("gold2")
achievment2.scale=0.1
var destination = createSprite(40,42);
destination.setAnimation("ds")
destination.scale=0.2
var grass = createSprite(75,244);
grass.setAnimation("gr")
grass.scale=1
var grass2 = createSprite(320,248);
grass2.setAnimation("gr2")
grass2.scale=1
police.velocityX=10
var gold=0;
var life=0;
stopper.velocityX=-5
stopper2.velocityX=-5
var achievment3 = createSprite(72,232);
achievment3.setAnimation("gold3")
achievment3.scale=0.1
var police1 = createSprite(313,225);
police1.setAnimation("police1")
police1.scale=0.1
var achievment4 = createSprite(80,42);
achievment4.setAnimation("gold4")
achievment4.scale=0.1
var achievment5 = createSprite(328,236);
achievment5.setAnimation("gold5")
achievment5.scale=0.1




function draw() {
background("red");
 police.bounceOff(boundary1)
 police.bounceOff(boundary2)
 police.bounceOff(boundary3)
 police.bounceOff(boundary4)
 stopper.bounceOff(boundary1)
 stopper.bounceOff(boundary2)
 stopper.bounceOff(boundary3)
 stopper.bounceOff(boundary4)
 stopper2.bounceOff(boundary1)
 stopper2.bounceOff(boundary2)
 stopper2.bounceOff(boundary3)
 stopper2.bounceOff(boundary4)
 if (keyDown(UP_ARROW))
 {
   roy.y=roy.y-3
 }
 
 if(keyDown(DOWN_ARROW)){
  roy.y=roy.y+3
}

if(keyDown(LEFT_ARROW)){
  roy.x=roy.x-3
}

if(keyDown(RIGHT_ARROW)){
  roy.x=roy.x+3
}
 if (police.isTouching(roy))
 
 { life=life+1
   police.velocityX=0 
   roy.y=366;
    police.velocityX=10 
   playSound("assets/category_hits/vibrant_game_game_touch_5.mp3",false)
  roy.setAnimation("roy")
   
 }
 if (roy.isTouching(achievment1))
 { gold=gold+1;
   achievment1.destroy()
   playSound("assets/category_instrumental/trumpet.mp3")
   roy.setAnimation("happy")
   
 }
 if (roy.isTouching(achievment2))
 { gold=gold+1;
   achievment2.destroy()
     playSound("assets/category_instrumental/trumpet.mp3")
   roy.setAnimation("happy")

 }
 if (roy.isTouching(achievment3))
 { gold=gold+1;
   achievment3.destroy()
    playSound("assets/category_instrumental/trumpet.mp3")
   roy.setAnimation("happy")
 }
 if (roy.isTouching(achievment4))
 { gold=gold+1;
   achievment4.destroy()
    playSound("assets/category_instrumental/trumpet.mp3")
   roy.setAnimation("happy")
 }
 if (roy.isTouching(achievment5))
 { gold=gold+1;
   achievment5.destroy()
    playSound("assets/category_instrumental/trumpet.mp3")
   roy.setAnimation("happy")
 }
if (police1.isTouching(roy))
{
   life=life+1
   roy.y=366;
   playSound("assets/category_hits/vibrant_game_game_touch_5.mp3",false)
  roy.setAnimation("roy")
}
 if (stopper.isTouching(roy))
 {
    life=life+1
   stopper.velocityX=0; 
   
    stopper.velocityX=6; 
    roy.y=366;
   playSound("assets/category_hits/vibrant_game_game_touch_5.mp3",false)
  roy.setAnimation("roy")
 }
  if (stopper2.isTouching(roy))
 {
    life=life+1
   stopper2.velocityX=0;
   
    stopper2.velocityX=5;
    roy.y=366;
   playSound("assets/category_hits/vibrant_game_game_touch_5.mp3",false)
  roy.setAnimation("roy")
 }
 if (life==10)
 {
   textSize(30)
   fill("maroon")
   strokeWeight(2)
   text("GAME OVER",126,105)
   stopper.velocityX=0;
   stopper2.velocityX=0;
   police.velocityX=0;
   roy.x=roy.x=0;
   roy.y=roy.y=0;
    
 }
 if (gold==5)
 {
    textSize(20)
   fill(rgb(255,215,0))
   strokeWeight(2)
   text("WINNER",126,105)
 }
textSize(19)
fill(rgb,127,0,255)
stroke("black")
textFont("castellar");
text("WELCOME",143,346)
police.bounceOff(brick);
textSize(20)
fill("yellow")
text("life:"+life,329,34)
text("gold"+gold,329,54)

createEdgeSprites()
  drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
