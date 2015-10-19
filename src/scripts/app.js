
'use strict';

/**
 * Smash targets below this line
 * -----------------------------
 */

var Vec     = require('./modules/Vec'),
    PIXI    = require('pixi'),
    $       = require('jquery');

(function(win, doc, c) {

    var stage,
        renderer,
        w = win.innerWidth,
        h = win.innerHeight,

        graphics = new PIXI.Graphics(),

        // Some rad colours, should we need any.
        colours = [
            '#ed5565',
            '#da4453',
            '#fc6e51',
            '#e9573f',
            '#ffce54',
            '#fcbb42',
            '#a0d468',
            '#8cc152',
            '#48cfad',
            '#37bc9b',
            '#4fc1e9',
            '#3bafda',
            '#5d9cec',
            '#4a89dc',
            '#ac92ec',
            '#967adc',
            '#ec87c0',
            '#d770ad',
            '#f5f7fa',
            '#e6e9ed',
            '#ccd1d9',
            '#aab2bd',
            '#656d78',
            '#434a54'
        ];

    function randomColour() {
        return colours[Math.floor(Math.random() * colours.length)];
    }

    function dot(x,y,r, c){
        cx.translate(x, y);
        cx.strokeStyle = c;
        cx.fillStyle = c;
        cx.beginPath();
        cx.arc(0, 0, r*2, 0, 2 * Math.PI, false);
        cx.closePath();
        cx.fill();
        cx.setTransform(1, 0, 0, 1, 0, 0);
    }

    function line(x1, y1, x2, y2, c) {
        cx.strokeStyle = c;
        cx.beginPath();
        cx.moveTo(x1, y1);
        cx.lineTo(x2, y2);
        cx.stroke();
    }

    function render(){
        renderer.render(stage);
        window.requestAnimationFrame(render);
    }

    function init() {
        stage = new PIXI.Container();
        renderer = new PIXI.WebGLRenderer(w, h, { 
            view: c, 
            backgroundColor: 0xDDDDDD, 
            antialias: true 
        });

        // Add some bollocks to prove that it works.
        graphics.lineStyle(10, 0xFF0000, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.moveTo(210,300);
        graphics.lineTo(450,320);
        graphics.lineTo(570,350);
        graphics.quadraticCurveTo(600, 0, 480,100);
        graphics.lineTo(330,120);
        graphics.lineTo(410,200);
        graphics.lineTo(210,300);
        graphics.endFill();
        stage.addChild(graphics);

        // Start the rendering loop wahey oh yeah
        window.requestAnimationFrame(render);
    }

    $(init);

})(window,document,document.querySelectorAll('canvas')[0]);