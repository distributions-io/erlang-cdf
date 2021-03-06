'use strict';

// MODULES //

var partial = require( './partial.js' );


// CDF //

/**
* FUNCTION: cdf( out, arr, k, lambda, accessor )
*	Evaluates the cumulative distribution function (CDF) for a Erlang distribution with shape parameter `k` and rate parameter `lambda` using an accessor function.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} out - output array
* @param {Array} arr - input array
* @param {Number} k - shape parameter
* @param {Number} lambda - rate parameter
* @param {Function} accessor - accessor function for accessing array values
* @returns {Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function cdf( y, x, k, lambda, clbk ) {
	var len = x.length,
		fcn,
		v, i;

	fcn = partial( k, lambda );
	for ( i = 0; i < len; i++ ) {
		v = clbk( x[ i ], i );
		if ( typeof v === 'number' ) {
			y[ i ] = fcn( v );
		} else {
			y[ i ] = NaN;
		}
	}
	return y;
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
