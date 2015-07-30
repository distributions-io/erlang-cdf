options( digits = 16 )
library( jsonlite )

k = 2
lambda = 0.3
x = c( -5, -2.5, 0, 2.5, 5 )
y = pgamma( x, k, lambda )

cat( y, sep = ",\n" )

data = list(
	k = k,
	lambda = lambda,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/partial.json" )
