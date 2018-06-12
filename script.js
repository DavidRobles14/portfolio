// let h = 2; // TODO: what is h? _
// let s = 200; // TODO: what is s? _
// let b = 100; // TODO: what is b? _

// function setup()
// {
//     createCanvas(400, 400);
//     colorMode(HSB);
// }

// function draw()
// {
//     // TODO: what is the meaning of the param below?
//     drawGradient(100);
// }

// function drawGradient(count)
// {
//     noStroke();
//     // TODO: blockHeight is height / num of rects
//     let blockHeight = 400/count;
    
//     // TODO: brightStep is b / num of rects
//     let brightStep = b/count;
    
//     // TODO: brightness is b 
//     let brightness = b;
//     // TODO: create a for loop to make the gradient
//     // The gradient should be made up of exactly `count`
//     // number of rectangles
    
//     for(let i=0;i<count;i++)
//     {
//         fill(h,s,brightness);
//         rect(i*blockHeight,0,blockHeight,400);
//         brightness = brightness - brightStep;
//     }
// }