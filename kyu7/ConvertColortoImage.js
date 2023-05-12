var color2grey = function (image /* this is the image in color*/) {
    for (let y = 0; y < image.length; y++) {
        let row = image[y];
        for (let x = 0; x < row.length; x++) {
            let pixel = row[x];
            let grayValue = Math.round((pixel[0] + pixel[1] + pixel[2]) / 3);
            pixel[0] = pixel[1] = pixel[2] = grayValue;
        }
    }
    return image //return image in greyscale
}