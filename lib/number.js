'use strict';

// MODULES //

var cdfGamma = require( 'distributions-gamma-cdf/lib/number.js' );


// CDF //

/**
* FUNCTION: cdf( x, k, lambda )
*	Evaluates the cumulative distribution function (CDF) for a Erlang distribution with shape parameter `k` and rate parameter `lambda` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} k - shape parameter
* @param {Number} lambda - rate parameter
* @returns {Number} evaluated CDF
*/
function cdf( x, k, lambda ) {
	return cdfGamma( x, k, lambda );
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
