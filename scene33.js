const teste = localStorage.getItem('escolha');
alert("Reporte bugs para uma melhor experiência no game!!");
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
  player.y = -20;
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
  player.initBody("dynamic", true, false);
player.type = b5.Shape.TypeCircle;
 player.width = 500;
  player.addFixture({width:10, height:20, type:b5.Shape.TypeCircle});
  player.body.SetLinearVelocity(new vec(0,1));
    player.onCollisionStart = function () {
      player.body.SetLinearVelocity(new vec(0,3))
      pulo = true;
      };
  //objetos 
  player.onTick = function(){
    if(pontos==100){
      alert("Voce coletou todas as moedas");
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
 };
 
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
*/
//Mapas
function mapa(){
var actor1 = new b5.Actor();actor1.x = 33;actor1.y = 31;actor1.h = 32;actor1.w = 32;actor1.bitmap = new b5.Bitmap("background", "gramaMeio.png", true); scene.addActor(actor1);actor1.initBody("static", false, true);actor1.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor2 = new b5.Actor();actor2.x = 64;actor2.y = 31;actor2.h = 32;actor2.w = 32;actor2.bitmap = new b5.Bitmap("background", "gramaMeio.png", true); scene.addActor(actor2);actor2.initBody("static", false, true);actor2.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor3 = new b5.Actor();actor3.x = 96;actor3.y = 31;actor3.h = 32;actor3.w = 32;actor3.bitmap = new b5.Bitmap("background", "gramaMeio.png", true); scene.addActor(actor3);actor3.initBody("static", false, true);actor3.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor4 = new b5.Actor();actor4.x = 1;actor4.y = 31;actor4.h = 32;actor4.w = 32;actor4.bitmap = new b5.Bitmap("background", "gramaMeio.png", true); scene.addActor(actor4);actor4.initBody("static", false, true);actor4.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor5 = new b5.Actor();actor5.x = -30;actor5.y = 31;actor5.h = 32;actor5.w = 32;actor5.bitmap = new b5.Bitmap("background", "gramaMeio.png", true); scene.addActor(actor5);actor5.initBody("static", false, true);actor5.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor6 = new b5.Actor();actor6.x = -60;actor6.y = 31;actor6.h = 32;actor6.w = 32;actor6.bitmap = new b5.Bitmap("background", "gramaFimCaida.png", true); scene.addActor(actor6);actor6.initBody("static", false, true);actor6.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor7 = new b5.Actor();actor7.x = 68;actor7.y = -15;actor7.h = 32;actor7.w = 32;actor7.bitmap = new b5.Bitmap("background", "gramaFimCaida.png", true); scene.addActor(actor7);actor7.initBody("static", false, true);actor7.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor8 = new b5.Actor();actor8.x = 120;actor8.y = 31;actor8.h = 32;actor8.w = 32;actor8.bitmap = new b5.Bitmap("background", "gramaFimCaidaD.png", true); scene.addActor(actor8);actor8.initBody("static", false, true);actor8.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor9 = new b5.Actor();actor9.x = 99;actor9.y = -15;actor9.h = 32;actor9.w = 32;actor9.bitmap = new b5.Bitmap("background", "gramaFimCaidaD.png", true); scene.addActor(actor9);actor9.initBody("static", false, true);actor9.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor10 = new b5.Actor();actor10.x = 67;actor10.y = -1;actor10.h = 32;actor10.w = 32;actor10.bitmap = new b5.Bitmap("background", "lateralGramaE.png", true); scene.addActor(actor10);actor10.initBody("static", false, true);actor10.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor11 = new b5.Actor();actor11.x = 97;actor11.y = -1;actor11.h = 32;actor11.w = 32;actor11.bitmap = new b5.Bitmap("background", "lateralGramaD.png", true); scene.addActor(actor11);actor11.initBody("static", false, true);actor11.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor12 = new b5.Actor();actor12.x = 176;actor12.y = -18;actor12.h = 32;actor12.w = 32;actor12.bitmap = new b5.Bitmap("background", "miniPlataforma.png", true); scene.addActor(actor12);actor12.initBody("static", false, true);actor12.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor13 = new b5.Actor();actor13.x = 176;actor13.y = 14;actor13.h = 32;actor13.w = 32;actor13.bitmap = new b5.Bitmap("background", "MiniPlataformaMeio.png", true); scene.addActor(actor13);actor13.initBody("static", false, true);actor13.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor14 = new b5.Actor();actor14.x = 177;actor14.y = 38;actor14.h = 32;actor14.w = 32;actor14.bitmap = new b5.Bitmap("background", "MiniPlataformaMeio.png", true); scene.addActor(actor14);actor14.initBody("static", false, true);actor14.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor15 = new b5.Actor();actor15.x = 233;actor15.y = -28;actor15.h = 32;actor15.w = 32;actor15.bitmap = new b5.Bitmap("background", "MiniPlataformaMeio.png", true); scene.addActor(actor15);actor15.initBody("static", false, true);actor15.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor16 = new b5.Actor();actor16.x = 234;actor16.y = 4;actor16.h = 32;actor16.w = 32;actor16.bitmap = new b5.Bitmap("background", "MiniPlataformaMeio.png", true); scene.addActor(actor16);actor16.initBody("static", false, true);actor16.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor17 = new b5.Actor();actor17.x = 235;actor17.y = 36;actor17.h = 32;actor17.w = 32;actor17.bitmap = new b5.Bitmap("background", "MiniPlataformaMeio.png", true); scene.addActor(actor17);actor17.initBody("static", false, true);actor17.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor18 = new b5.Actor();actor18.x = 232;actor18.y = -51;actor18.h = 32;actor18.w = 32;actor18.bitmap = new b5.Bitmap("background", "miniPlataforma.png", true); scene.addActor(actor18);actor18.initBody("static", false, true);actor18.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor19 = new b5.Actor();actor19.x = 232;actor19.y = -51;actor19.h = 32;actor19.w = 32;actor19.bitmap = new b5.Bitmap("background", "miniPlataforma.png", true); scene.addActor(actor19);actor19.initBody("static", false, true);actor19.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor20 = new b5.Actor();actor20.x = 232;actor20.y = -51;actor20.h = 32;actor20.w = 32;actor20.bitmap = new b5.Bitmap("background", "miniPlataforma.png", true); scene.addActor(actor20);actor20.initBody("static", false, true);actor20.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor21 = new b5.Actor();actor21.x = 293;actor21.y = 33;actor21.h = 32;actor21.w = 32;actor21.bitmap = new b5.Bitmap("background", "MiniPlataformaMeio.png", true); scene.addActor(actor21);actor21.initBody("static", false, true);actor21.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor22 = new b5.Actor();actor22.x = 357;actor22.y = 0;actor22.h = 32;actor22.w = 32;actor22.bitmap = new b5.Bitmap("background", "gramaFimCaida.png", true); scene.addActor(actor22);actor22.initBody("static", false, true);actor22.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor23 = new b5.Actor();actor23.x = 389;actor23.y = 0;actor23.h = 32;actor23.w = 32;actor23.bitmap = new b5.Bitmap("background", "gramaFimCaidaD.png", true); scene.addActor(actor23);actor23.initBody("static", false, true);actor23.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor24 = new b5.Actor();actor24.x = 359;actor24.y = 32;actor24.h = 32;actor24.w = 32;actor24.bitmap = new b5.Bitmap("background", "lateralGramaE.png", true); scene.addActor(actor24);actor24.initBody("static", false, true);actor24.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor25 = new b5.Actor();actor25.x = 391;actor25.y = 32;actor25.h = 32;actor25.w = 32;actor25.bitmap = new b5.Bitmap("background", "lateralGramaD.png", true); scene.addActor(actor25);actor25.initBody("static", false, true);actor25.addFixture({width:32, height:32, type:b5.Shape.TypeBox}); var actor26 = new b5.Actor();actor26.x = 292;actor26.y = 24;actor26.h = 32;actor26.w = 32;actor26.bitmap = new b5.Bitmap("background", "MiniPlataformaMeio.png", true); scene.addActor(actor26);actor26.initBody("static", false, true);actor26.addFixture({width:32, height:32, type:b5.Shape.TypeBox});
var actorkdkdkdks1 = new b5.Actor();actorkdkdkdks1.x = 292;actorkdkdkdks1.y = -7;actorkdkdkdks1.h = 32;actorkdkdkdks1.w = 32;actorkdkdkdks1.bitmap = new b5.Bitmap("background", "miniPlataforma.png", true); scene.addActor(actorkdkdkdks1);actorkdkdkdks1.initBody("static", false, true);actorkdkdkdks1.addFixture({width:32, height:32, type:b5.Shape.TypeBox});
}

function moedas(){
//Moedas
var moedas2 = new b5.RectActor();moedas2.x = 14;moedas2.y = -1;moedas2.h = 20;moedas2.w = 20;moedas2.fill_style = "#f6b351";scene.addActor(moedas2);moedas2.corner_radius = 10;moedas2.initBody("static", false, true);moedas2.addFixture({width:20, height:20, type:b5.Shape.TypeBox});moedas2.onCollisionStart = function (contact) {moedas2.destroy(); pontos+=10;}; var moedas3 = new b5.RectActor();moedas3.x = -54;moedas3.y = -1;moedas3.h = 20;moedas3.w = 20;moedas3.fill_style = "#f6b351";scene.addActor(moedas3);moedas3.corner_radius = 10;moedas3.initBody("static", false, true);moedas3.addFixture({width:20, height:20, type:b5.Shape.TypeBox});moedas3.onCollisionStart = function (contact) {moedas3.destroy(); pontos+=10;}; var moedas4 = new b5.RectActor();moedas4.x = 81;moedas4.y = -49;moedas4.h = 20;moedas4.w = 20;moedas4.fill_style = "#f6b351";scene.addActor(moedas4);moedas4.corner_radius = 10;moedas4.initBody("static", false, true);moedas4.addFixture({width:20, height:20, type:b5.Shape.TypeBox});moedas4.onCollisionStart = function (contact) {moedas4.destroy(); pontos+=10;}; var moedas5 = new b5.RectActor();moedas5.x = 177;moedas5.y = -55;moedas5.h = 20;moedas5.w = 20;moedas5.fill_style = "#f6b351";scene.addActor(moedas5);moedas5.corner_radius = 10;moedas5.initBody("static", false, true);moedas5.addFixture({width:20, height:20, type:b5.Shape.TypeBox});moedas5.onCollisionStart = function (contact) {moedas5.destroy(); pontos+=10;}; var moedas6 = new b5.RectActor();moedas6.x = 231;moedas6.y = -89;moedas6.h = 20;moedas6.w = 20;moedas6.fill_style = "#f6b351";scene.addActor(moedas6);moedas6.corner_radius = 10;moedas6.initBody("static", false, true);moedas6.addFixture({width:20, height:20, type:b5.Shape.TypeBox});moedas6.onCollisionStart = function (contact) {moedas6.destroy(); pontos+=10;}; var moedas7 = new b5.RectActor();moedas7.x = 291;moedas7.y = -46;moedas7.h = 20;moedas7.w = 20;moedas7.fill_style = "#f6b351";scene.addActor(moedas7);moedas7.corner_radius = 10;moedas7.initBody("static", false, true);moedas7.addFixture({width:20, height:20, type:b5.Shape.TypeBox});moedas7.onCollisionStart = function (contact) {moedas7.destroy(); pontos+=10;};
}
//finall
function final(){
var final8 = new b5.Actor();final8.x = 393;final8.y = -26;final8.h = 32;final8.w = 32;final8.bitmap = new b5.Bitmap("background", "Plaquinha.png", true); scene.addActor(final8);final8.initBody("static", false, true);final8.addFixture({width:32, height:32, type:b5.Shape.TypeBox});final8.onCollisionStart = function (contact){if(pontos==60){alert("obrigado por finalizar meu game, deu muito trabalho para fazer")}}
};

mapa();
moedas();
final();
valuemoedas = document.getElementById("moedasColetadas");
valuemoedas.innerHTML = "Moedas "+pontos

carregamento = 30;
element = document.getElementById("header");
element.innerHTML = "Carregado %"+ carregamento
/////////////////
 scene.onTick=function(){
 scene.camera_x=player.x;
 scene.camera_y=player.y+20;
 buttonLeft.x = player.x-80;
 buttonLeft.y = player.y+40;
 buttonRight.x = player.x-140;
 buttonRight.y = player.y+40;
 labelPontos.x = player.x-120;
 labelPontos.y = player.y-20;
 buttonUp.y=player.y+40;
 buttonUp.x=player.x+120;
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
