import gsap from 'gsap';

try{
    if(document.querySelector('#canvvaas18') != null){
        let canvas = document.querySelector('#canvvaas18');
        let c = canvas.getContext('2d');
            
        canvas.width = 500;
        canvas.height = 300;
            
        let center = {
            x: canvas.width / 2,
            y: canvas.height / 2
        }
            
        let mouse = {
            x: center.x,
            y: center.y,
            angle: 0
        }
            
        canvas.addEventListener('mousemove', (e)=>{
            gsap.to(mouse, {
                x: e.offsetX - center.x,
                y: e.offsetY - center.y,
                duration: 1
            });
            
            let angle = Math.atan2(mouse.y, mouse.x);
            mouse.angle = angle;
        });
        
        let particle = class{
            constructor(x, y, r, cl, distance){
                this.x = x;
                this.y = y;
                this.r = r;
                this.cl = cl;
                this.distance = distance;
            }
            
            draw(){
                c.save();
                c.fillStyle = this.cl;
                c.beginPath();
                c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                c.fill();
                c.restore();
            }
            
            update(){
                this.x = center.x + this.distance * Math.cos(mouse.angle);
                this.y = center.y + this.distance * Math.sin(mouse.angle);
                this.draw();
            }
        }
            
        let particles = new Array();
            
        let int = function(){
            let particleCount = 130;
            let colorsIncrement = 360 / particleCount;
        
            for(let i = 0; i < particleCount; i++){
                let x = center.x + i * Math.cos(mouse.angle);
                let y = center.y + i * Math.sin(mouse.angle);
                let r = 6;
                let cl = `hsl(${colorsIncrement * i}, 50%, 50%)`
                particles.push(new particle(x, y, r, cl, i));
            }
        }
            
        function isScrolledIntoView(el) {
            var rect = el.getBoundingClientRect();
            var elemTop = rect.top;
            var elemBottom = rect.bottom;
            var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            return isVisible;
        }
            
        let animate = function(){
            if(isScrolledIntoView(canvas)){
                let imageData = c.getImageData(0, 0, canvas.width, canvas.height);
                let data = imageData.data;
                for(let i = 3; i < data.length; i += 4){
                    data[i] *= 0.9;
                    if(data[i] / 255 < 0.09){
                        data[i] *= 0;
                    }
                }
                c.clearRect(0, 0, canvas.width, canvas.height);
                c.putImageData(imageData, 0, 0);
            
                particles.forEach((particle)=>{
                    particle.update();
                });
            }
            requestAnimationFrame(animate);
        }
            
        animate();
        int();
    }
} catch{}