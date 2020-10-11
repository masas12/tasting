// imageData is data written in a canvas
const code = jsQR( imageData.data, imageData.width, imageData.height, {
  inversionAttempts: "dontInvert",
} );
console.log( code.data );
