
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
            0xed5565,
            0xda4453,
            0xfc6e51,
            0xe9573f,
            0xffce54,
            0xfcbb42,
            0xa0d468,
            0x8cc152,
            0x48cfad,
            0x37bc9b,
            0x4fc1e9,
            0x3bafda,
            0x5d9cec,
            0x4a89dc,
            0xac92ec,
            0x967adc,
            0xec87c0,
            0xd770ad,
            0xf5f7fa,
            0xe6e9ed,
            0xccd1d9,
            0xaab2bd,
            0x656d78,
            0x434a54
        ];

    function randomColour() {
        return colours[Math.floor(Math.random() * colours.length)];
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

        // Draw some bollocks to prove that it works.
        for ( var i = 1, l = 8; i <= l; i++ ) {
            graphics.lineStyle(0);
            graphics.beginFill(colours[i], 0.1);
            graphics.drawCircle(w/2, h/2, i * 40);
            graphics.endFill();
        }

        stage.addChild(graphics);

        // Start the rendering loop wahey oh yeah
        window.requestAnimationFrame(render);
    }

    $(init);

})(window,document,document.querySelectorAll('canvas')[0]);
