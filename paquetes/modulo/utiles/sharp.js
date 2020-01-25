const sharp = require('sharp');

sharp('./original.png')
  .resize(80)
  .grayscale()
  .toFile('grayScale.png');