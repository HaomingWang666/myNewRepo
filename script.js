const svg = document.getElementById(`svg-canvas`);

window.addEventListener(`resize`,resizeSvg);

function resizeSvg(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);
    for(let circle of svg.children){
        circle.setAttribute('r',  Math.min(bbox.width, bbox.height) * 0.1);
    }
}

resizeSvg();

function makeRGBSimple(R,G,B){
    return `rgb(${R},${G},${B})`
}

function makeRGB(redInput,greenInput,blueInput){
    let redOutput = redInput ?? Math.random() * 255;
    let greenOutput = greenInput ?? Math.random() * 255;
    let blueOutput = blueInput ?? Math.random() * 255;

    return  `rgb(${redOutput}, ${greenOutput},${blueOutput})`
}

let width = 1100;
let height = 700;

svg.setAttribute("width",width);
svg.setAttribute("height",height);

function makeCircle(cx,cy,r,red,g,b){

    let X = cx ?? Math.random() * width;
    let Y = cy ?? Math.random() * height;
    let W = r ?? Math.random() * width;
    let C = makeRGB(red,g,b);
    
    let Circle = document.createElementNS("http://www.w3.org/2000/svg","circle");

    Circle.setAttribute('cx',X);
    Circle.setAttribute('cy',Y);
    Circle.setAttribute('r',W);
    Circle.setAttribute('fill',C);

    svg.appendChild(Circle)
}

makeCircle(null,null,null,null,null,null);
makeCircle(null,null,null,null,null,null);
makeCircle(null,null,null,null,null,null);
makeCircle(null,null,null,null,null,null);
makeCircle(null,null,null,null,null,null);
makeCircle(null,null,null,null,null,null);
makeCircle(null,null,null,null,null,null);
makeCircle(null,null,null,null,null,null);
makeCircle(null,null,null,null,null,null);
makeCircle(null,null,null,null,null,null);
