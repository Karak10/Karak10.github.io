import * as dat from 'dat.gui' 

window.addEventListener('load', (e)=>{

// canvas 0006 

try{
if(document.getElementById('canvas-0006') != null){
    let canvas = document.getElementById('canvas-0006');
    let c = canvas.getContext('2d');
    
    canvas.width = 500;
    canvas.height = 300;
    
    let gui;

    let wave = {
        y: canvas.height / 2,
        aplitude: 50,
        length: 0.05
    }

    canvas.addEventListener('click', (e) =>{
        let div = document.querySelector('.close-button');
        if(div == null){
            gui = new dat.GUI();
            let wave_folder = gui.addFolder('wave');
            wave_folder.add(wave, 'y', 0, canvas.height);
            wave_folder.add(wave, 'aplitude', -100, 100);
            wave_folder.add(wave, 'length', -0.05, 0.05);
        } else {
            div.remove();
            let folders = document.querySelector('.dg ul');
            if(folders != null){
            folders.remove();
            }
        }
    });
    
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    function animate(){
        if(isScrolledIntoView(canvas)){
c.beginPath();
        c.moveTo(0, wave.y);
        for(let i = 0; i <= canvas.width; i++){
            c.lineTo(i, wave.y + Math.sin(i * wave.length) * wave.aplitude);
        }
        c.stroke();
        }
        requestAnimationFrame(animate);
    }

    animate();
}
}catch{}

// canvas 0007 

try{
if(document.getElementById('canvas-0007') != null){
    let canvas = document.getElementById('canvas-0007');
    let c = canvas.getContext('2d');
    
    canvas.width = 500;
    canvas.height = 300;
    
    let gui;

    let wave = {
        y: canvas.height / 2,
        aplitude: 50,
        length: 0.05
    }

    canvas.addEventListener('click', (e) =>{
        let div = document.querySelector('.close-button');
        if(div == null){
            gui = new dat.GUI();
            let wave_folder = gui.addFolder('wave');
            wave_folder.add(wave, 'y', 0, canvas.height);
            wave_folder.add(wave, 'aplitude', -100, 100);
            wave_folder.add(wave, 'length', -0.05, 0.05);
        } else {
            div.remove();
            let folders = document.querySelector('.dg ul');
            if(folders != null){
            folders.remove();
            }
        }
    });
    
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    function animate(){
        if(isScrolledIntoView(canvas)){

            let imageData = c.getImageData(0, 0, canvas.width, canvas.height);
            let data = imageData.data;
            for(i = 3; i < data.length; i += 4){
                data[i] = data[i] * 0.9;
            }
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.putImageData(imageData, 0, 0);

            c.beginPath();
            c.moveTo(0, wave.y);
            for(let i = 0; i <= canvas.width; i++){
                c.lineTo(i, wave.y + Math.sin(i * wave.length) * wave.aplitude);
            }
            c.stroke();
        }
        requestAnimationFrame(animate);
    }

    animate();
}
}catch{}

// canvas 0008

try{
if(document.getElementById('canvas-0008') != null){
    let canvas = document.getElementById('canvas-0008');
    let c = canvas.getContext('2d');
    
    canvas.width = 500;
    canvas.height = 300;
    
    let gui;

    let wave = {
        y: canvas.height / 2,
        aplitude: 50,
        length: 0.05,
        frequency: 0.01,
    }

    canvas.addEventListener('click', (e) =>{
        let div = document.querySelector('.close-button');
        if(div == null){
            gui = new dat.GUI();
            let wave_folder = gui.addFolder('wave');
            wave_folder.add(wave, 'y', 0, canvas.height);
            wave_folder.add(wave, 'aplitude', -100, 100);
            wave_folder.add(wave, 'length', -0.05, 0.05);
            wave_folder.add(wave, 'frequency', -1, 1);
        } else {
            div.remove();
            let folders = document.querySelector('.dg ul');
            if(folders != null){
            folders.remove();
            }
        }
    });
    
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    let increment = wave.frequency;
    function animate(){
        if(isScrolledIntoView(canvas)){

            let imageData = c.getImageData(0, 0, canvas.width, canvas.height);
            let data = imageData.data;
            for(i = 3; i < data.length; i += 4){
                data[i] = data[i] * 0.9;
            }
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.putImageData(imageData, 0, 0);

            c.beginPath();
            c.moveTo(0, wave.y);
            for(let i = 0; i <= canvas.width; i++){
                c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.aplitude);
            }
            c.stroke();
            increment += wave.frequency;
        }
        requestAnimationFrame(animate);
    }

    animate();
}
}catch{}

//canvas 0009

try{
if(document.getElementById('canvas-0006') != null){
    let canvas = document.getElementById('canvas-0006');
    let c = canvas.getContext('2d');
    
    canvas.width = 500;
    canvas.height = 300;
    
    let gui;

    let wave = {
        y: canvas.height / 2,
        aplitude: 50,
        length: 0.05
    }

    canvas.addEventListener('click', (e) =>{
        let div = document.querySelector('.close-button');
        if(div == null){
            gui = new dat.GUI();
            let wave_folder = gui.addFolder('wave');
            wave_folder.add(wave, 'y', 0, canvas.height);
            wave_folder.add(wave, 'aplitude', -100, 100);
            wave_folder.add(wave, 'length', -0.05, 0.05);
        } else {
            div.remove();
            let folders = document.querySelector('.dg ul');
            if(folders != null){
            folders.remove();
            }
        }
    });
    
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    function animate(){
        if(isScrolledIntoView(canvas)){
c.beginPath();
        c.moveTo(0, wave.y);
        for(let i = 0; i <= canvas.width; i++){
            c.lineTo(i, wave.y + Math.sin(i * wave.length) * wave.aplitude);
        }
        c.stroke();
        }
        requestAnimationFrame(animate);
    }

    animate();
}
}catch{}

// canvas 0007 

try{
if(document.getElementById('canvas-0007') != null){
    let canvas = document.getElementById('canvas-0007');
    let c = canvas.getContext('2d');
    
    canvas.width = 500;
    canvas.height = 300;
    
    let gui;

    let wave = {
        y: canvas.height / 2,
        aplitude: 50,
        length: 0.05
    }

    canvas.addEventListener('click', (e) =>{
        let div = document.querySelector('.close-button');
        if(div == null){
            gui = new dat.GUI();
            let wave_folder = gui.addFolder('wave');
            wave_folder.add(wave, 'y', 0, canvas.height);
            wave_folder.add(wave, 'aplitude', -100, 100);
            wave_folder.add(wave, 'length', -0.05, 0.05);
        } else {
            div.remove();
            let folders = document.querySelector('.dg ul');
            if(folders != null){
            folders.remove();
            }
        }
    });
    
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    function animate(){
        if(isScrolledIntoView(canvas)){

            let imageData = c.getImageData(0, 0, canvas.width, canvas.height);
            let data = imageData.data;
            for(let i = 3; i < data.length; i += 4){
                data[i] = data[i] * 0.9;
            }
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.putImageData(imageData, 0, 0);

            c.beginPath();
            c.moveTo(0, wave.y);
            for(let i = 0; i <= canvas.width; i++){
                c.lineTo(i, wave.y + Math.sin(i * wave.length) * wave.aplitude);
            }
            c.stroke();
        }
        requestAnimationFrame(animate);
    }

    animate();
}
}catch{}

// canvas 0009

try{
if(document.getElementById('canvas-0009') != null){
    let canvas = document.getElementById('canvas-0009');
    let c = canvas.getContext('2d');
    
    canvas.width = 500;
    canvas.height = 300;
    
    let gui;

    let wave = {
        y: canvas.height / 2,
        aplitude: 50,
        length: 0.010,
        frequency: 0.01,
    }

    canvas.addEventListener('click', (e) =>{
        let div = document.querySelector('.close-button');
        if(div == null){
            gui = new dat.GUI();
            let wave_folder = gui.addFolder('wave');
            wave_folder.add(wave, 'y', 0, canvas.height);
            wave_folder.add(wave, 'aplitude', -100, 100);
            wave_folder.add(wave, 'length', -0.05, 0.05);
            wave_folder.add(wave, 'frequency', -1, 1);
        } else {
            div.remove();
            let folders = document.querySelector('.dg ul');
            if(folders != null){
            folders.remove();
            }
        }
    });
    
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    let increment = wave.frequency;
    function animate(){
        if(isScrolledIntoView(canvas)){

            let imageData = c.getImageData(0, 0, canvas.width, canvas.height);
            let data = imageData.data;
            for(let i = 3; i < data.length; i += 4){
                data[i] = data[i] * 0.9;
            }
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.putImageData(imageData, 0, 0);

            c.beginPath();
            c.moveTo(0, wave.y);
            for(let i = 0; i <= canvas.width; i++){
                c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.aplitude * Math.sin(increment));
            }
            c.stroke();
            increment += wave.frequency;
        }
        requestAnimationFrame(animate);
    }

    animate();
}
}catch{}

// canvas 00010

try{
if(document.getElementById('canvas-00010') != null){
    let canvas = document.getElementById('canvas-00010');
    let c = canvas.getContext('2d');
    
    canvas.width = 500;
    canvas.height = 300;
    
    let gui;

    let wave = {
        y: canvas.height / 2,
        aplitude: 50,
        length: 0.01,
        frequency: 0.03,
    }

    let stroke = {
        h: 0,
        s: 50, 
        l: 50
    }

    canvas.addEventListener('click', (e) =>{
        let div = document.querySelector('.close-button');
        if(div == null){
            gui = new dat.GUI();
            let wave_folder = gui.addFolder('wave');
            wave_folder.add(wave, 'y', 0, canvas.height);
            wave_folder.add(wave, 'aplitude', -100, 100);
            wave_folder.add(wave, 'length', -0.05, 0.05);
            wave_folder.add(wave, 'frequency', -1, 1);
            wave_folder.open();

            let stroke_folder = gui.addFolder('stroke');
            stroke_folder.add(stroke, 'h', 0, 360);
            stroke_folder.add(stroke, 's', 0, 100);
            stroke_folder.add(stroke, 'l', 0, 100);
            stroke_folder.open();
        } else {
            div.remove();
            let folders = document.querySelector('.dg ul');
            if(folders != null){
            folders.remove();
            }
        }
    });
    
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    let increment = wave.frequency;
    function animate(){
        if(isScrolledIntoView(canvas)){

            let imageData = c.getImageData(0, 0, canvas.width, canvas.height);
            let data = imageData.data;
            for(let i = 3; i < data.length; i += 4){
                data[i] = data[i] * 0.9;
            }
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.putImageData(imageData, 0, 0);

            c.beginPath();
            c.moveTo(0, wave.y);
            for(let i = 0; i <= canvas.width; i++){
                c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.aplitude * Math.sin(increment));
            }
            c.strokeStyle = `hsl(${stroke.h}, ${stroke.s}%, ${stroke.l}%)`;
            c.stroke();
            increment += wave.frequency;
        }
        requestAnimationFrame(animate);
    }

    animate();
}
}catch{}

// canvas 00011

try{
if(document.getElementById('canvas-00011') != null){
    let canvas = document.getElementById('canvas-00011');
    let c = canvas.getContext('2d');
    
    canvas.width = 500;
    canvas.height = 300;
    
    canvas.style.backgroundColor = 'black';

    let gui;

    let wave = {
        y: canvas.height / 2,
        aplitude: 50,
        length: 0.01,
        frequency: 0.02,
    }

    let stroke = {
        h: 360,
        s: 50, 
        l: 50
    }

    canvas.addEventListener('click', (e) =>{
        let div = document.querySelector('.close-button');
        if(div == null){
            gui = new dat.GUI();
            let wave_folder = gui.addFolder('wave');
            wave_folder.add(wave, 'y', 0, canvas.height);
            wave_folder.add(wave, 'aplitude', -100, 100);
            wave_folder.add(wave, 'length', -0.05, 0.05);
            wave_folder.add(wave, 'frequency', -1, 1);
            wave_folder.open();

            let stroke_folder = gui.addFolder('stroke');
            stroke_folder.add(stroke, 'h', 0, 360);
            stroke_folder.add(stroke, 's', 0, 100);
            stroke_folder.add(stroke, 'l', 0, 100);
            stroke_folder.open();
        } else {
            div.remove();
            let folders = document.querySelector('.dg ul');
            if(folders != null){
            folders.remove();
            }
        }
    });
    
    function isScrolledIntoView(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        return isVisible;
    } 

    let increment = wave.frequency;
    function animate(){
        if(isScrolledIntoView(canvas)){
            let imageData = c.getImageData(0, 0, canvas.width, canvas.height);
            let data = imageData.data;
            for(let i = 3; i < data.length; i += 4){
                data[i] = data[i] * 0.95;
            }
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.putImageData(imageData, 0, 0);

            c.beginPath();
            c.moveTo(0, wave.y + Math.sin(wave.length + increment) * wave.aplitude * Math.sin(increment));
            for(let i = 0; i <= canvas.width; i++){
                c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.aplitude * Math.sin(increment));
            }
            c.strokeStyle = `hsl(${Math.abs(stroke.h * Math.sin(increment))}, ${stroke.s}%, ${stroke.l}%)`;
            c.stroke();
            increment += wave.frequency;
        }
        requestAnimationFrame(animate);
    }

    animate();
}
}catch{}

// canvas 00012

try{
    if(document.getElementById('canvas-00012') != null){
        let canvas = document.getElementById('canvas-00012');
        let c = canvas.getContext('2d');
        
        canvas.width = 500;
        canvas.height = 300;
        
        canvas.style.backgroundColor = 'black';
    
        let gui;
    
        let wave = {
            y: canvas.height / 2,
            aplitude: 50,
            length: 0.01,
            frequency: 0.02,
        }
    
        let stroke = {
            h: 360,
            s: 50, 
            l: 50
        }
    
        canvas.addEventListener('click', (e) =>{
            let div = document.querySelector('.close-button');
            if(div == null){
                gui = new dat.GUI();
                let wave_folder = gui.addFolder('wave');
                wave_folder.add(wave, 'y', 0, canvas.height);
                wave_folder.add(wave, 'aplitude', -100, 100);
                wave_folder.add(wave, 'length', -0.05, 0.05);
                wave_folder.add(wave, 'frequency', -1, 1);
                wave_folder.open();
    
                let stroke_folder = gui.addFolder('stroke');
                stroke_folder.add(stroke, 'h', 0, 360);
                stroke_folder.add(stroke, 's', 0, 100);
                stroke_folder.add(stroke, 'l', 0, 100);
                stroke_folder.open();
            } else {
                div.remove();
                let folders = document.querySelector('.dg ul');
                if(folders != null){
                folders.remove();
                }
            }
        });
    
        let increment = wave.frequency;
        function animate(){
                let imageData = c.getImageData(0, 0, canvas.width, canvas.height);
                let data = imageData.data;
                for(let i = 3; i < data.length; i += 4){
                    data[i] = data[i] * 0.95;
                }
                c.clearRect(0, 0, canvas.width, canvas.height);
                c.putImageData(imageData, 0, 0);
    
                c.beginPath();
                c.moveTo(0, wave.y + Math.sin(wave.length + increment) * wave.aplitude * Math.sin(increment));
                for(let i = 0; i <= canvas.width; i++){
                    c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.aplitude * Math.sin(increment));
                }
                c.strokeStyle = `hsl(${Math.abs(stroke.h * Math.sin(increment))}, ${stroke.s}%, ${stroke.l}%)`;
                c.stroke();
                c.fillStyle="white";
                c.font = 'normal 20px Arial';
                c.alignText = 'left';
                c.fillText('Click to open variable changer', 10, 20);
                increment += wave.frequency;
            requestAnimationFrame(animate);
        }
    
        animate();
    }
}catch{}



});