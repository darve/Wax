
'use strict';

/**
 * Smash targets below this line
 * -----------------------------
 */

var
    Vec         = require('./modules/Vec'),
    Graphics    = require('./modules/Graphics'),

    PIXI        = require('pixi'),
    $           = require('jquery');

(function(win, doc, c) {

    var
        stage,
        renderer,

        w = win.innerWidth,
        h = win.innerHeight,

        // These are all used for the main rendering loop
        now,
        then = Date.now(),
        interval = 1000/60,
        delta;

    function render() {

        requestAnimationFrame(render);
        now = Date.now();
        delta = now - then;

        if (delta > interval) {

            then = now - (delta % interval);
            renderer.render(stage);

        }

    }
    function init() {

        stage = new PIXI.Container();
        renderer = new PIXI.WebGLRenderer(w, h, {
            view: c,
            backgroundColor: 0xDDDDDD,
            antialias: true
        });

        // Start the rendering loop wahey oh yeah
        window.requestAnimationFrame(render);
    }

    $(init);

})(window,document,document.querySelectorAll('canvas')[0]);
