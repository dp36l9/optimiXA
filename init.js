//variables y objetos
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let c = {}, bOb = {}, pOb = {}, inUs = {};

c.x = canvas.width;
c.y = canvas.height;

bOb.cor = { x : 50, y : 25};
bOb.rad = 10;
bOb.mov = { x : 0.8, y : -0.8};
bOb.inc = 0.2;
bOb.vel = 30;
bOb.col = ['lightblue','mediumslateblue','darkslateblue','black'];

pOb.siz = { x : 75, y : 10};
pOb.cor = { x : (c.x-pOb.siz.y)/2, y : c.y-pOb.siz.y};

inUs.cor = { right : false, left : false};

function animar(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ball();
    paddle();
    return;
}
//paddle
function paddle(){
    ctx.beginPath();
    ctx.rect(pOb.cor.x, pOb.cor.y, pOb.siz.x, pOb.siz.y);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
};

//ball
function ball(){
    for(var i=0;i<bOb.col.length;i++){
	ctx.beginPath();
	ctx.arc( col('x',bOb), col('y',bOb),bOb.rad-(bOb.col.length-i), 0, Math.PI*2);
	ctx.fillStyle = bOb.col[i];
	ctx.fill();
	ctx.closePath();
    }
    return;
};
function velocidad(v){
    v += (v<0 && v>-3) ? -0.2 : 0.2;
    v = v>=3 ? 0.8 : v<=-3 ? -0.8 : v;
    return -v;
}
function col(s,o){
    o.cor[s] += (o.cor[s]+o.mov[s] > c[s]-o.rad || o.cor[s] + o.mov[s] < o.rad)
	? o.mov[s] = velocidad(o.mov[s])
	: o.mov[s];
    return o.cor[s];
};



var ballMove = setInterval(animar, bOb.vel);

//zona de todos y pedos
    //asteroid partes //padel TODO  //velocidad TODO
    // size = size<3 ? size+(Math.random()*1|1) : 1;
// el tutorial pone todo en la misma funcion animar. a trves de un true o false
// si aprieta tecla entonces true, y entonces la funcion animar pinta
// mirar si se puede hacer solo si se apreta y que la b vaya por otro lado
// entonces pedos, al hacer clearRect se tiene que especificar bola o paddle
// al no ser sincronizado se comporta igual?
