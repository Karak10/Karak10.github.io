const { noise } = require('@chriscourses/perlin-noise')

try{
if(document.querySelector('#canvvaas1') != null){
    let canvas = document.querySelector('#canvvaas1');
    let c = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 300;

    let ball = class{
        constructor(x, y, r, cl){
            this.x = x;
            this.y = y;
            this.r = r;
            this.cl = cl;
        }
        
        draw(){
            c.fillStyle = this.cl;
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            c.stroke();
            c.fill();
        }

        update(){
            this.y = noise(increment) * (canvas.height - 2 * this.r) + this.r;
            this.draw();
        }
    }

    let particle1 = new ball(canvas.width / 2, canvas.height / 2, 20, 'red');

    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    let increment = 0;

    let animate = function(){
        if(isScrolledIntoView(canvas)){
            c.clearRect(0, 0, canvas.width, canvas.height);
            particle1.update();
            increment += 0.01;
        }
        requestAnimationFrame(animate);
    }

    animate();
}
} catch {}

try{
if(document.querySelector('#canvvaas2') != null){
    let canvas = document.querySelector('#canvvaas2');
    let c = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 300;

    let ball = class{
        constructor(x, y, r, cl){
            this.x = x;
            this.y = y;
            this.r = r;
            this.cl = cl;
        }
        
        draw(){
            c.fillStyle = this.cl;
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            c.stroke();
            c.fill();
        }

        update(){
            this.x = noise(increment) * (canvas.width - 2 * this.r) + this.r;
            this.y = noise(increment) * (canvas.height - 2 * this.r) + this.r;
            this.draw();
        }
    }

    let particle1 = new ball(canvas.width / 2, canvas.height / 2, 20, 'red');

    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    let increment = 0;

    let animate = function(){
        if(isScrolledIntoView(canvas)){
            c.clearRect(0, 0, canvas.width, canvas.height);
            particle1.update();
            increment += 0.01;
        }
        requestAnimationFrame(animate);
    }

    animate();
}
} catch {}

try{
if(document.querySelector('#canvvaas3') != null){
    let canvas = document.querySelector('#canvvaas3');
    let c = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 300;

    let ball = class{
        constructor(x, y, r, cl){
            this.x = x;
            this.y = y;
            this.r = r;
            this.cl = cl;
        }
        
        draw(){
            c.fillStyle = this.cl;
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            c.stroke();
            c.fill();
        }

        update(){
            this.x = noise(increment - 20) * (canvas.width - 2 * this.r) + this.r;
            this.y = noise(increment) * (canvas.height - 2 * this.r) + this.r;
            this.draw();
        }
    }

    let particle1 = new ball(canvas.width / 2, canvas.height / 2, 20, 'red');

    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    let increment = 0;

    let animate = function(){
        if(isScrolledIntoView(canvas)){
            c.clearRect(0, 0, canvas.width, canvas.height);
            particle1.update();
            increment += 0.01;
        }
        requestAnimationFrame(animate);
    }

    animate();
}
} catch {}

try{
if(document.querySelector('#canvvaas4') != null){
    let canvas = document.querySelector('#canvvaas4');
    let c = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 300;

    let ball = class{
        constructor(x, y, r, cl, offset){
            this.x = x;
            this.y = y;
            this.r = r;
            this.cl = cl;
            this.offset = offset;
        }
        
        draw(){
            c.fillStyle = this.cl;
            c.beginPath();
            c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            c.stroke();
            c.fill();
        }

        update(){
            this.x = noise(increment - this.offset - 20) * (canvas.width - 2 * this.r) + this.r;
            this.y = noise(increment - this.offset) * (canvas.height - 2 * this.r) + this.r;
            this.draw();
        }
    }

    let particles = new Array();
    
    let int = function(){
        particles = [];
        for(let i = 0; i < 50; i++){
            let r = 10;
            let x = -999;
            let y = -999;
            let cl = 'red';
            particles.push(new ball(x, y, r, cl, i * 0.02));
        }
    }
    int();

    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    let increment = 0;

    let animate = function(){
        if(isScrolledIntoView(canvas)){
            c.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) =>{
                particle.update();
            });
            increment += 0.01;
        }
        requestAnimationFrame(animate);
    }

    animate();
}
} catch {}

try{
if(document.querySelector('#canvvaas5') != null){
    let canvas = document.querySelector('#canvvaas5');
    let c = canvas.getContext('2d');

    canvas.width = 500;
    canvas.height = 300;

    let ball = class{
        constructor(x, y, r, cl, cl2, offset){
            this.x = x;
            this.y = y;
            this.r = r;
            this.innerColor = cl;
            this.outerColor = cl2;
            this.offset = offset;
            this.previousCoords = {x: this.x, y: this.y};
        }
        
        draw(){
            c.lineCap = 'round';
            c.lineJoin = 'round';
            c.strokeStyle = this.outerColor;
            c.lineWidth = this.r;
            c.beginPath();
            c.moveTo(this.previousCoords.x, this.previousCoords.y);
            c.lineTo(this.x, this.y);
            c.stroke();
            c.fill();

            c.lineWidth = this.r - 5;
            c.strokeStyle = this.innerColor;
            c.beginPath();
            c.moveTo(this.previousCoords.x, this.previousCoords.y);
            c.lineTo(this.x, this.y);
            c.fill();
            c.stroke();
        }

        update(){
            if(this.x == undefined){
                this.previousCoords.x = noise(increment - this.offset - 20) * (canvas.width - 2 * this.r) + this.r;
                this.previousCoords.y = noise(increment - this.offset) * (canvas.height - 2 * this.r) + this.r;
            }
            this.x = noise(increment - this.offset - 20) * (canvas.width - 2 * this.r) + this.r;
            this.y = noise(increment - this.offset) * (canvas.height - 2 * this.r) + this.r;
            this.draw();
            this.previousCoords.x = this.x;
            this.previousCoords.y = this.y;
        }
    }

    let particles = new Array();
    let particles2 = new Array();

    let colors = ["#F2EBEC", "#C8C1D9", "#5D84A6", "#485159", "#F2D4AE"];

    let int = function(){
        particles = [];
        particles2 = [];
        for(let i = 0; i < 30; i++){
            let r = 23;
            let x = undefined;
            let y = undefined;
            let innerColor = colors[Math.floor(Math.random() * colors.length)];
            particles.push(new ball(x, y, r, innerColor, 'red', i * 0.03));
            particles2.push(new ball(x, y, r, innerColor, 'blue', i * 0.03 + 300));
        }
    }
    int();

    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    let increment = 0;

    let animate = function(){
        if(isScrolledIntoView(canvas)){
            let imageData = c.getImageData(0, 0, canvas.width, canvas.height);
            let data = imageData.data;
            for(let i = 3; i < data.length; i += 4){
                data[i] = data[i] * 0.7;
                if(data[i] / 255 < 0.1){
                    data[i] = data[i] * 0;
                }
            }
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.putImageData(imageData, 0, 0);

            particles.forEach((particle) =>{
                particle.update();
            });
            particles2.forEach((particle) =>{
                particle.update();
            });
            increment += 0.01;
        }
        requestAnimationFrame(animate);
    }

    animate();
}
} catch {}