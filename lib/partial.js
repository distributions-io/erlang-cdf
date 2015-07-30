'use strict';

// MODULES //

var partialGamma = require( 'distributions-gamma-cdf/lib/partial.js' );


// PARTIAL //

/**
* FUNCTION: partial( k, lambda )
*	Partially applies shape parameter `k` and rate parameter `lambda` and returns a function for evaluating the cumulative distribution function (CDF) for a Erlang distribution.
*
* @param {Number} k - shape parameter
* @param {Number} lambda - rate parameter
* @returns {Function} CDF
*/
function partial( k, lambda ) {
	return partialGamma( k, lambda );
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
