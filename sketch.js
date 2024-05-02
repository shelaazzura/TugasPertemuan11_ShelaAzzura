//variabel tak bebas
let P1 = []; 
let P2 = [];
let t = [];
//parameter model 
let a;
let b;
let c;
let d;

let P10;
let P20;
let dt = 0.1;
let tMax = 200;

let grafik;

function setup() {
  createCanvas(400, 400);
  
  P10 = createInput("20");
  P10.position(20, 410);
  P20 = createInput("40");
  P20.position(100, 410);

  a = createSlider(0.1,2,0.4,0.01);//min,max,value,step
  a.position(20,450);
  b = createSlider(0.1,2,0.4,0.01);//min,max,value,step
  b.position(20,500);
  c = createSlider(0.1,2,0.4,0.01);//min,max,value,step
  c.position(20,550);
  d = createSlider(0.1,2,0.4,0.01);//min,max,value,step
  d.position(20,600);

  b=0.01;
  c=0.1;
  d=0.5;

  let p = createP('Kondisi Awal');
  p.style('font-size','14px')
  p.position(20,380)
  let q = createP('Parameter a');
  q.style('font-size','14px')
  q.position(20,420);
  let h = createP('Parameter b');
  h.style('font-size','14px')
  h.position(20,468);
  let g = createP('Parameter c');
  g.style('font-size','14px')
  g.position(20,520);
  let x = createP('Parameter d');
  x.style('font-size','14px')
  x.position(20,563);
  solve();

  grafik= new Chart(this, config);
  
  P10.changed(solve);//ketika nilainya berganti panggil fungsi solve
  P20.changed(solve);
  a.changed(solve);
}

function draw() {
  grafik.update();
}

function solve(){
  P1[0] = float(P10.value());//jangan lupa float
  P2[0] = float(P20.value());
  t[0] = 0;
  as = float(a.value());
  let iterNum = int(tMax / dt);
  
  for  (let i=0; i < iterNum; i++){
    P1[i+1] = P1[i] + dt*as*P1[i] - dt*b*P1[i]*P2[i];
    P2[i+1] = P2[i] + dt*c*P1[i+1]*P2[i] - dt*d*P2[i];
    t[i+1] = round((i + 1)*dt,3);
  }
}