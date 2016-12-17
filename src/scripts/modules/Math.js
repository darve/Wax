
'use strict';

/**
 * Handy maths helper functions.
 */
module.exports = (function() {

    var api = {};

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    api.rand = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    /**
     * Return the difference between two numbers
     * @param  {Number} a First number
     * @param  {Number} b Second number
     * @return {Number}   Difference between first and second numbers
     */
    api.diff = function (a, b) {
        return Math.abs(a-b);
    };

    /**
     * Returns a number representing the scalar difference between
     * two numbers
     * @param  {Number} a First number
     * @param  {Number} b Second number
     * @return {Number}   Scalar difference between first and second numbers
     */
    api.scale = function (a, b) {
        if ( a < b ) {
            return b/a;
        } else {
            return a/b;
        }
    };

    /**
     * @param  {Object} a Vector object
     * @param  {Object} b Vector object
     * @return {Number}   Ratio of the two numbers
     */
    api.vecscale = function (a, b) {

        if ( b.x < b.y ) {
            return (b.x / a.x);
        } else {
            return (b.y / a.y);
        }
    };

    /**
     * QUICKSORT
     * @param  {[type]} arr   An array you want to sort
     * @param  {[type]} left  First element of the array
     * @param  {[type]} right Last element of the array
     * @return {[type]}       [description]
     */
    api.quicksort = function (arr, left, right) {
        var i = left,
            j = right,
            tmp,
            pivotidx = (left + right) / 2,
            pivot = parseInt(arr[pivotidx.toFixed()]);

        while (i <= j) {
            while (parseInt(arr[i]) < pivot)
               i++;
            while (parseInt(arr[j]) > pivot)
               j--;
            if (i <= j) {
               tmp = arr[i];
               arr[i] = arr[j];
               arr[j] = tmp;
               i++;
               j--;
            }
        }

        // Recursion
        if (left < j) api.quicksort(arr, left, j);
        if (i < right) api.quicksort(arr, i, right);
        return arr;
    };

    api.thumb = function (w, h) {

        var width, height;

        if ( w >= h ) {
            width = 320;
            height = 180 * (w/320);
        } else if ( w < h ) {
            height = 180;
            width = 320 * (h/180);
        }

        return {
            width: width,
            height: height
        };
    };

    return api;

})();
