function setup() {
  createCanvas(1920 / 1, 1200 / 1);
  //   createCanvas(1920 * 4, 1200 * 4);
  //   createCanvas(windowWidth / 1, windowHeight / 1);

  pixelDensity(1);
  loadPixels();

  noLoop();
}
let maxIterations = 1000;
let counter = 0;
let scale = 2.2;

function draw() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let a = map(x, 0, width, -2, 2);
      let b = map(y, 0, height, -2, 2);
      //   let scale = 5000000000;
      a /= 9 * scale;
      b /= 16 * scale;

      a += 0.0001;

      let ca = a / 2;
      let cb = b / 2;

      let n = 0;
      let z = 0;
      while (n < maxIterations) {
        let aa = a * a - b * b;
        let bb = 2 * a * b;

        a = aa - 0.81;
        b = bb - 0.17;

        // a = aa - 0.81;
        // b = bb + 0.16;

        if (a + b > 16) {
          break;
        }

        n++;
      }
      let brightness = map(n, 0, maxIterations, 0, 255);
      //   brightness = map(brightness, 0, 1, 0, 255);
      if (n >= maxIterations) {
        brightness = 0;
      }

      let pix = (x + y * width) * 4;
      pixels[pix + 0] = brightness;
      pixels[pix + 1] = brightness;
      pixels[pix + 2] = brightness;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
  saveCanvas("myCanvas", "png");
}
