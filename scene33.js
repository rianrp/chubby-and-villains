var teste = "teste3.png";
alert("foto", teste);
var carregamento = 0;
var element = document.getElementById("header");

var i = setInterval(function () {
    clearInterval(i);
    // O código desejado é apenas isto:
    document.getElementById("divCarregamento").style.display = "none";
    document.getElementById("divgame").style.display = "inline";
    element = document.getElementById("header");
element.innerHTML = "Carregado %"+ carregamento;
    console.log(carregamento)
}, 5000);

window.onload = function()
{
    // Create the app
    var app = new b5.App(document.getElementById('gamecanvas'), true);
    app.debug = false;
    app.clear_canvas = true;
    // Tell Booty5 to scale canvas to best fit window
    app.setCanvasScalingMethod(b5.App.FitBest);
    var vec = Box2D.Common.Math.b2Vec2;
    var vec2 = Box2D.Common.Math.b2Vec2;
    // Create a scene
    var scene = new b5.Scene();
    // Add scene to the app
    app.addScene(scene);
    scene.name = "my_scene";     // Name the scene
    b5.app.addScene(scene);      // Add the scento the app for processing
    b5.app.focus_scene = scene;
    app.touch_focus = scene;
    scene.initWorld( 0, 20, false );
    scene.fillStyle = "#383a3e"; 
 //PULO TA AQUI///
    var pulo;
 ////////////////
    var posY = 0;
    var posX = 0;
    var posDetalhesY = 0;
    var posDetalhesX = 0;
    
    var pontos = 0;
    var liberaBotao = false;
    carregamento = 10;
    element = document.getElementById("header");
element.innerHTML = "Carregado %"+ carregamento
var player = new b5.Actor();
  player.fill_style = "#f06965"; 
  player.x = 10;
  player.y = -10;
  player.w = 20;
  player.h= 20;
  scene.addActor(player);
  player.atlas = new b5.ImageAtlas("sheep", new b5.Bitmap("sheep", teste, true));
 player.ignore_atlas_size = true;
 player.atlas.addFrame(0,0,32,32);
 player.atlas.addFrame(32,0,32,32);
 player.atlas.addFrame(64,0,32,32);
 player.atlas.addFrame(96,0,32,32);
 player.atlas.addFrame(0,32,32,32);
 player.atlas.addFrame(32,32,32,32);
 player.atlas.addFrame(64,32,32,32);
 player.atlas.addFrame(92,32,32,32);
 player.atlas.addFrame(128,32,32,32);
 player.atlas.addFrame(160,32,32,32);
 player.atlas.addFrame(0,64,32,32);
 player.atlas.addFrame(64,65,32,32);
 player.atlas.addFrame(92,65,32,32);
 player.atlas.addFrame(128,65,32,32);
 player.atlas.addFrame(160,65,32,32);
 player.atlas.addFrame(192,65,32,32);
 player.atlas.addFrame(224,65,32,32);
 player.atlas.addFrame(256,65,32,32);
 //left
 
 player.current_frame = 0;             // Set initial animation frame
 player.atlas.addAnim("idle", [0,1,2,3], 05);
 player.atlas.addAnim("run",[4,5,6,7,8,9],05);
 player.atlas.addAnim("jump",[11,12,13,14,15],05)
 //player.atlas.addAnim("idleD", [18,19,20,19],05);
  player.playAnim("idle")
  player.initBody("dynamic", false, true);
  player.addFixture({width:player.w, height:player.h, type:b5.Shape.TypeBox});
  player.body.SetLinearVelocity(new vec(0,0));
    player.onCollisionStart = function (gramameio) {
      player.body.SetLinearVelocity(new vec(0,01))
      pulo = true;
      };
  //objetos 
  const Void = {
  desenhar(){
   var Vazio = new b5.Actor();
   Vazio.fill_style = "#6abe82";
   Vazio.x = posX;
   Vazio.y = posY;
   Vazio.w = 32;
   Vazio.h = 32;
   scene.addActor(Vazio);
   Vazio.bitmap = new b5.Bitmap("background", "Plataformas/void.png", true);
}
}
  
const gramaMeio = {
  desenhar(){
    var gramameio = new b5.Actor();
    gramameio.fill_style = "#6abe82";
    gramameio.x = posX;
    gramameio.y = posY;
    gramameio.w = 32;
    gramameio.h = 32;
    scene.addActor(gramameio);
    gramameio.bitmap = new b5.Bitmap("background", "Plataformas/gramaMeio.png", true);
    gramameio.initBody("static", false, true)
    gramameio.addFixture({width:32, height:32, type:b5.Shape.TypeBox});
  }
}
const gramaFimE = {
  desenhar(){
   var plataformaFimE= new b5.Actor();
   plataformaFimE.fill_style = "#6abe82";
   plataformaFimE.x = posX;
   plataformaFimE.y = posY;
   plataformaFimE.w = 32;
   plataformaFimE.h = 32;
   
   scene.addActor(plataformaFimE);
   plataformaFimE.bitmap = new b5.Bitmap("background", "Plataformas/GramaFimCaida.png", true);
   plataformaFimE.initBody("static", false, true)
  plataformaFimE.addFixture({width:plataformaFimE.w, height:plataformaFimE.h, type:b5.Shape.TypeBox});
  }
}
const gramaFimD = {
  desenhar(){
   var plataformaFimD= new b5.Actor();
   plataformaFimD.fill_style = "#6abe82";
   plataformaFimD.x = posX;
   plataformaFimD.y = posY;
   plataformaFimD.w = 32;
   plataformaFimD.h = 32;
   scene.addActor(plataformaFimD);
   plataformaFimD.bitmap = new b5.Bitmap("background", "Plataformas/GramaFimCaidaD.png", true);
   plataformaFimD.initBody("static", false, false)
  plataformaFimD.addFixture({width:plataformaFimD.w, height:plataformaFimD.h, type:b5.Shape.TypeBox});
  }
}
const LateraisGramaE = {
  desenhar(){
   var lateraisGramaE= new b5.Actor();
   lateraisGramaE.fill_style = "#6abe82";
   lateraisGramaE.x = posX;
   lateraisGramaE.y = posY;
   lateraisGramaE.w = 32;
   lateraisGramaE.h = 32;
   scene.addActor(lateraisGramaE);
   lateraisGramaE.bitmap = new b5.Bitmap("background", "Plataformas/lateralGramaE.png", true);
   lateraisGramaE.initBody("static", false, false)
  lateraisGramaE.addFixture({width:lateraisGramaE.w, height:lateraisGramaE.h, type:b5.Shape.TypeBox});
  }
}
const LateralGramaD = {
  desenhar(){
   var lateraisGramaD= new b5.Actor();
   lateraisGramaD.fill_style = "#6abe82";
   lateraisGramaD.x = posX;
   lateraisGramaD.y = posY;
   lateraisGramaD.w = 32;
   lateraisGramaD.h = 32;
   scene.addActor(lateraisGramaD);
   lateraisGramaD.bitmap = new b5.Bitmap("background", "Plataformas/lateralGramaD.png", true);
   lateraisGramaD.initBody("static", false, false)
  lateraisGramaD.addFixture({width:lateraisGramaD.w, height:lateraisGramaD.h, type:b5.Shape.TypeBox});
  }
}
const MiniPlataforma = {
  desenhar(){
   var miniplataforma= new b5.Actor();
   miniplataforma.fill_style = "#6abe82";
   miniplataforma.x = posX;
   miniplataforma.y = posY;
   miniplataforma.w = 32;
   miniplataforma.h = 32;
   scene.addActor(miniplataforma);
   miniplataforma.bitmap = new b5.Bitmap("background", "Plataformas/miniPlataforma.png", true);
   miniplataforma.initBody("static", false, false)
  miniplataforma.addFixture({width:miniplataforma.w, height:miniplataforma.h, type:b5.Shape.TypeBox});
  }
}
const MiniplataformaMeio = {
  desenhar(){
   var miniplataformaMeio= new b5.Actor();
   miniplataformaMeio.fill_style = "#6abe82";
   miniplataformaMeio.x = posX;
   miniplataformaMeio.y = posY;
   miniplataformaMeio.w = 32;
   miniplataformaMeio.h = 32;
   scene.addActor(miniplataformaMeio);
   miniplataformaMeio.bitmap = new b5.Bitmap("background", "Plataformas/miniplataformaMeio.png", true);
   miniplataformaMeio.initBody("static", false, false)
  miniplataformaMeio.addFixture({width:miniplataformaMeio.w, height:miniplataformaMeio.h, type:b5.Shape.TypeBox});
  }
}
const Moedas = {
  desenhar(){
   var moeda = new b5.RectActor();
 moeda.fill_style = "#ffc301";
 moeda.x = posX;
 moeda.y = posY;
 moeda.w = 10;
 moeda.h = 10;
 moeda.corner_radius = 4;
 scene.addActor(moeda);
 moeda.initBody("static", false, false)
 moeda.addFixture({width:10, height:10, type:b5.Shape.TypeBox})
 moeda.onCollisionStart = function (contact) {
      pontos+=10;
      scene.removeActor(moeda)
 };
  }
}
//detalhes
const plaquinha = {
  desenhar(){
   var Plaquinha = new b5.Actor();
   Plaquinha.fill_style = "#6abe82";
   Plaquinha.x = posX;
   Plaquinha.y = posY+8;
   Plaquinha.w = 16;
   Plaquinha.h = 16;
   scene.addActor(Plaquinha);
   Plaquinha.bitmap = new b5.Bitmap("background", "Plataformas/Plaquinha.png", true);
}
}

  carregamento = 20;
  element = document.getElementById("header");
element.innerHTML = "Carregado %"+ carregamento
 //plataforma////
   desenharMapa = [
        [0,0,0,2,0,0,7,0,21,1,1,1,12,0,7,0,7,0,7,0,7,0,0,0,7],
    [21,1,1,12,0,21,1,12,31,3,3,3,13,0,10,0,10,0,10,0,10,0,0,0,0,0,0],
    [31,3,3,13,0,31,3,13,31,3,3,3,13,0,11,0,11,0,11,0,11,0,21,1,1,12],
    ];
    
  /*var plataforma = new b5.Actor();
   plataforma.fill_style = "#6abe82";
   plataforma.x = 10;
   plataforma.y = 64;
   plataforma.w = 32;
   plataforma.h = 32;
   plataforma.corner_radius = 0;
   scene.addActor(plataforma);
   plataforma.bitmap = new b5.Bitmap("background", "gramaMeio.png", true);
   plataforma.initBody("static", false, false)
  plataforma.addFixture({width:plataforma.w, height:plataforma.h, type:b5.Shape.TypeBox});
  plataforma.body.SetLinearVelocity(new vec(0,0));
  plataforma.onCollisionEnd = function (contact) {
      console.log("Colisão com plataforma")
      pulo =false;
 };
  plataforma.onCollisionStart = function (contact) {
      console.log("Colisão com plataforma")
      pulo =true;
 };*/
 for(var i = 0; i < desenharMapa.length; i++){
  for(var f = 0; f < desenharMapa[i].length; f++){
    if(desenharMapa[i][f]==1){
      gramaMeio.desenhar();
    }
    if(desenharMapa[i][f]==3){
      Void.desenhar();
    }
    if(desenharMapa[i][f]==21){
      gramaFimE.desenhar();
    }
    if(desenharMapa[i][f]==12){
      gramaFimD.desenhar();
    }
    if(desenharMapa[i][f]==2){
      plaquinha.desenhar();
    }
    if(desenharMapa[i][f]==31){
      LateraisGramaE.desenhar();
    }
    if(desenharMapa[i][f]==13){
      LateralGramaD.desenhar();
    }
    if(desenharMapa[i][f]==10){
      MiniPlataforma.desenhar();
    }
    if(desenharMapa[i][f]==11){
      MiniplataformaMeio.desenhar();
    }
    if(desenharMapa[i][f]==7){
      Moedas.desenhar();
    }
    posX+=32;
  }
  posX =0;
  posY+=32;
}
carregamento = 30;
element = document.getElementById("header");
element.innerHTML = "Carregado %"+ carregamento
/////////////////
 scene.onTick=function(){
 scene.camera_x=player.x;
 scene.camera_y=player.y+20;
 buttonLeft.x = player.x-80;
 buttonLeft.y = player.y+40;
 buttonRight.x = player.x-160;
 buttonRight.y = player.y+40;
 labelPontos.x = player.x-160;
 labelPontos.y = player.y-20;
 buttonUp.y=player.y+40;
 buttonUp.x=player.x+140;
};
 var caixaDcair = new b5.Actor();
 caixaDcair.x = 50;
 caixaDcair.y = 150;
 caixaDcair.w = 10;
 caixaDcair.h = 10;
 caixaDcair.corner_radius = 4;
 scene.addActor(caixaDcair);
 caixaDcair.initBody("static", false, false)
 caixaDcair.addFixture({width:8000, height:10, type:b5.Shape.TypeBox})
 caixaDcair.onCollisionStart = function (contact) {
      window.location.href = "sceneJogo.html";
      alert("você caiu no void, olha por onde anda o '-'");
 };
// aqui sao os objetos abaixo sao os controles, pra vc q roubou o codigo kkkkk😜



 var buttonLeft = new b5.Actor();
 buttonLeft.fill_style = "#ec610b";
 buttonLeft.type = b5.Shape.TypeCircle;
 buttonLeft.width = 300;
 scene.clip_shape = buttonLeft;
 buttonLeft.x = 10;
 buttonLeft.y = 0;
 buttonLeft.h = 50;
 buttonLeft.w = 50;
 posY = 10;
 posX = 10;
 scene.addActor(buttonLeft);
 buttonLeft.bitmap = new b5.Bitmap("background", "botaoright.png", true);
 buttonLeft.active = true;
 buttonLeft.onTick=function(){
   buttonLeft.dirty();
 }
 var buttonRight = new b5.Actor();
 buttonRight.fill_style = "#ec610b";
 buttonRight.type = b5.Shape.TypeCircle;
 buttonRight.width = 300;
 scene.clip_shape = buttonLeft;
 buttonRight.x = 10;
 buttonRight.y = 0;
 buttonRight.h = 50;
 buttonRight.w =50;
 posY = 10;
 posX = 10;
 scene.addActor(buttonRight);
 buttonRight.bitmap = new b5.Bitmap("background", "botaoleft.png", true);
 buttonRight.active = true;
 buttonRight.onTick=function(){
   buttonRight.dirty();
 }
 var buttonUp = new b5.Actor();
 buttonUp.fill_style = "#ec610b";
 buttonUp.type = b5.Shape.TypeCircle;
 buttonUp.width = 300;
 scene.clip_shape = buttonUp;
 buttonUp.x = 10;
 buttonUp.y = 10;
 buttonUp.h = 50;
 buttonUp.w =50;
 posY = 10;
 posX = 10;
 scene.addActor(buttonUp);
 buttonUp.bitmap = new b5.Bitmap("background", "pulo.png", true);
 buttonUp.active = true;
 buttonUp.onTick=function(){
   buttonUp.dirty();
 }
 
 
 labelPontos = new b5.LabelActor();
 labelPontos.x = -80;
 labelPontos.y = -170;
 labelPontos.font = "10pt Calibri";  
 labelPontos.text_align = "center";     
 labelPontos.text_baseline = "middle";
 labelPontos.fill_style = "#a40a3b";    
 labelPontos.text = "Moeda: "+ pontos;
 scene.addActor(labelPontos)
 labelPontos.onTick=function(){
   labelPontos.dirty();
   labelPontos.text = "Moeda: "+ pontos;
 }
 scene.extents=[-1000,-1000,2000,2000];
 
 carregamenro = 50;
/* var clipper = new b5.Shape();
 clipper.type = b5.Shape.TypeCircle;
 clipper.width = 300;
 scene.clip_shape = clipper;
*/
var move = false;
var voltar = false;
 buttonLeft.touchable = true ; 
 buttonRight.touchable = true ;
 buttonUp.touchable = true;
 
 buttonLeft.onBeginTouch = function(touch_pos) {
   move = true
   player.setScale(1,1)
   player.playAnim("run")
   player.onTick=function(){
     if(move == true){
    player.body.SetLinearVelocity(new vec(2,player.body.m_linearVelocity.y))
     }
   }
 };
 buttonLeft.onEndTouch = function(touch_pos) {
    move = false;
    player.playAnim("idle")
    player.setScale(1,1)
 };
 buttonRight.onBeginTouch = function(touch_pos) {
     move = true;
     player.setScale(-1,1)
     player.playAnim("run")
   player.onTick=function(){
     if(move == true){
    player.body.SetLinearVelocity(new vec(-2,player.body.m_linearVelocity.y))
    
     }
   }
 };
 buttonRight.onEndTouch = function(touch_pos) {
    move = false;
    player.setScale(-1,1)
    player.playAnim("idle");
 };
 
 var bloqueia;
console.log("esta fora aqui ",bloqueia)
 buttonUp.onBeginTouch= function(touch_pos) {
   if(pulo == true){
    player.body.SetLinearVelocity(new vec(0,-10))
    player.playAnim("jump")
   }
    setTimeout(function(){
      if(move == true){
        player.playAnim("run");
      }else{
        player.playAnim("idle")
      }
      bloqueia = 9;
},500);
 };
 buttonUp.onEndTouch = function(touch_pos) {
   pulo = false;
   }
 carregamento = 100;
element = document.getElementById("header");
element.innerHTML = "Carregado %"+ carregamento
  app.start(); 
};