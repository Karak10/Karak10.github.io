window.addEventListener('load', (e) => {
    var nav = document.querySelector('nav');
    
    // function that creates links

    function create_link(text1, text2){
        if(text2 == undefined){
            return `<p><a href="${text1}">${text1}</a></p>`
        } else {
            return `<p><a href="${text1}">${text2}</a></p>`;
        }
    }    
    
    // code that creates home pages links 
    
    let x = document.querySelector('#homepages');

    x.innerHTML += create_link(`../index.html`, `home page of my notes`);
    x.innerHTML += create_link(`../Home-Pages/myhtmlnotes.html`, `home page of my HTML notes`);
    x.innerHTML += create_link(`../Home-Pages/mycssnotes.html`, `home page of my CSS notes`);
    x.innerHTML += create_link(`../Home-Pages/javascriptnotes.html`, `home page of my JavaScript notes`);
    x.innerHTML += create_link(`../Home-Pages/myprojects.html`, `home page of my projects`);
    x.innerHTML += create_link(`../Home-Pages/mathnotes.html`, `home page of my Math and Physics notes`);
    x.innerHTML += create_link(`../Home-Pages/extrastuff.html`, `Tools and other programming related stuff`);
    x.innerHTML += create_link(`../Home-Pages/frontendnotes.html`, `home page of other front end notes`);
    x.innerHTML += create_link(`../Home-Pages/computer.html`, `home page of my Computer Science notes`);
    x.innerHTML += create_link(`../Home-Pages/backend.html`, `Backend Notes`);

    // code for HTML notes
   
    if(nav.dataset.notes == "html" | nav.dataset.notes == "HTML_Extra"){

        // loop that creates links

        let pages = 5; 
        let num = 1;

       for(num; num <= pages; num++){
           if(num == 1){
                nav.innerHTML += create_link(`Notes.html`);
           } else {
                nav.innerHTML += create_link(`Notes${num}.html`);
           }
       }

       // loop that creates extra links

       let extra = 1;
       let num2 = 1;

       for(num2; num2 <= extra; num2++){
           nav.innerHTML += create_link(`HTML_Extra_${num2}.html`);
       }

       // loop that replaces viewed page link with a fake

       let arr = Array.from(nav.children);

       arr.forEach((item) => {
           let category = nav.dataset.notes;
           if(category == "html"){
               let page = parseInt(nav.dataset.page);
               if(page == 1){
                   if(item.lastChild.innerText == 'Notes.html'){
                       item.innerHTML = `<u>Notes.html</u>`;
                   }
               } else {
                   let num = parseInt(item.lastChild.innerText.slice(5));
                   if(num == page){
                       item.innerHTML = `<u>Notes${page}.html</u>`;
                   }
               }
           } else if(category == "HTML_Extra"){
               let page = nav.dataset.page;
               let num = parseInt(item.lastChild.innerText.slice(11));
                if(page == num){
                   item.innerHTML = `<u>HTML_Extra_${page}.html</u>`;
               }
           }
       });
      
       // code that creates the CSS link at end of links

       nav.innerHTML += create_link('../CSS-Notes/Notes6.html','Next (CSS Notes)');

       // code that creates HTML heading

       nav.innerHTML = `<h2>HTML Notes:</h2>` + nav.innerHTML;
    }

    // code for CSS notes:

    if(nav.dataset.notes.startsWith("CSS")){

        // loop that creates links

        let pages = 7;
        let num = 1;

        for(num; num <= pages; num++){
            nav.innerHTML += create_link(`Notes${5 + num}.html`);
        }

        // loop that creates extra links

        let extra = 1;
        let num2 = 1;

        for(num2; num2 <= extra; num2++){
            nav.innerHTML += create_link(`CSS_Extra_${num2}.html`);
        }

        // loop that creates SASS links

        let sass = 1;
        let num3 = 1;

        for(num3; num3 <= sass; num3++){
            nav.innerHTML += create_link(`CSS_SASS_${num3}.html`);
        }

        // loop that replaces viewed page link with a fake

        let arr = Array.from(nav.children);
        let category = nav.dataset.notes;

        arr.forEach((item) => {
            if(category == "CSS"){
                let page = 5 + parseInt(nav.dataset.page);
                let num = parseInt(item.lastChild.innerText.slice(5));
                if(num == page){
                    item.innerHTML = `<u>Notes${page}.html</u>`;
                }
            } else if(category == "CSS_Extra"){
                let page = nav.dataset.page;
                let num = parseInt(item.lastChild.innerText.slice(10));
                 if(page == num){
                    item.innerHTML = `<u>CSS_Extra_${page}.html</u>`;
                }
            } else if(category == "CSS_SASS"){
                let page = nav.dataset.page;
                let num = parseInt(item.lastChild.innerText.slice(9));
                if(page == num){
                    item.innerHTML = `<u>CSS_SASS_${page}.html</u>`;
                }
            }
        });

        // code that creates JavaScript link at the end of the links

        nav.innerHTML += create_link(`../JavaScript-Notes/Notes13.html`,`Next (JavaScript Notes)`);

        // code that creates HTML link at the start of the links

        nav.innerHTML = create_link('../HTML-Notes/Notes.html','Previous (HTML Notes)') + nav.innerHTML;

        // code that creates CSS heading

        nav.innerHTML = `<h2>CSS Notes:</h2>` + nav.innerHTML;
    }

    // code for JavaScript notes:

    if(nav.dataset.notes == "JavaScript"){

        // loop that creates links

        let pages = 12;
        let num = 1;

        for(num; num <= pages; num++){
            nav.innerHTML += create_link(`Notes${12 + num}.html`);
        }

        // loop that replaces viewed page link with a fake link

        let arr = Array.from(nav.children);

        arr.forEach((item) => {
            let page = 12 + parseInt(nav.dataset.page);
            let num = parseInt(item.lastChild.innerText.slice(5));
            if(page == num){
                item.innerHTML = `<u>Notes${page}.html</u>`;
            }
        });

        // code that creates CSS link at the start of the links

        nav.innerHTML = create_link(`../CSS-Notes/Notes6.html`,`Previous (CSS Notes)`) + nav.innerHTML;

        // code that creates jQuery link at the end of the links
        nav.innerHTML += create_link(`../JavaScript-Notes/jQuery1.html`,`Next (jQuery Notes)`);

        // code that creates JavaScript heading

        nav.innerHTML = `<h2>JavaScript Notes:</h2>` + nav.innerHTML;

    }

    // code for jQuery notes:

    if(nav.dataset.notes == "jQuery"){

        // loop that creates links

        let pages = 1;
        let num = 1;

        for(num; num <= pages; num++){
            nav.innerHTML += create_link(`jQuery${num}.html`);
        }

        // loop that replaces viewed page link with a fake link

        let arr = Array.from(nav.children);

        arr.forEach((item) => {
            let page = parseInt(nav.dataset.page);
            let num = parseInt(item.lastChild.innerText.slice(6));
            if(page == num){
                item.innerHTML = `<u>jQuery${page}.html</u>`;
            }
        });

        // code that creates JavaScript link at the start of the links

        nav.innerHTML = create_link(`../JavaScript-Notes/Notes13.html`,`Previous (JavaScript Notes)`) + nav.innerHTML;

        // code that creates jQuery heading

        nav.innerHTML = `<h2>jQuery Notes:</h2>` + nav.innerHTML;
    }

    // code for Math notes

    if(nav.dataset.notes == "Math"){

        // loop that creates links

        let pages = 1;
        let num = 1;

        for(num; num <= pages; num++){
            nav.innerHTML += create_link(`math${num}.html`);
        }

        // loop that replaces viewed page link with a fake one

        let arr = Array.from(nav.children);

        arr.forEach((item) => {
            let page = parseInt(nav.dataset.page);
            let num = parseInt(item.lastChild.innerText.slice(4));
            if(num == page){
                item.innerHTML = `<u>math${page}.html</u>`;
            }
        });

        // code that creates Math heading

        nav.innerHTML = `<h2>Math Notes:</h2>` + nav.innerHTML;
    }

    // code for extra notes

    if(nav.dataset.notes == "Extranotes"){

        // loop that creates links

        let pages = 2;
        let num = 1;

        for(num; num <= pages; num++){
            nav.innerHTML += create_link(`extranotes${num}.html`);
        }

        // loop that replaces viewed page link with a fake one

        let arr = Array.from(nav.children);

        arr.forEach((item) => {
            let page = parseInt(nav.dataset.page);
            let num = parseInt(item.lastChild.innerText.slice(10));
            if(num == page){
                item.innerHTML = `<u>extranotes${page}.html</u>`;
            }
        });

        // code that creates Math heading

        nav.innerHTML = `<h2>Extra Notes:</h2>` + nav.innerHTML;
    }

    // code for backend notes

    if(nav.dataset.notes == "backend"){

        // loop that creates links

        let pages = 4;
        let num = 1;

        for(num; num <= pages; num++){
            nav.innerHTML += create_link(`backend${num}.html`);
        }

        // loop that replaces viewed page link with a fake one

        let arr = Array.from(nav.children);

        arr.forEach((item) => {
            let page = parseInt(nav.dataset.page);
            let num = parseInt(item.lastChild.innerText.slice(7));
            if(num == page){
                item.innerHTML = `<u>backend${page}.html</u>`;
            }
        });

        // code that creates Math heading

        nav.innerHTML = `<h2>Backend Notes:</h2>` + nav.innerHTML;
    }

    // code for Computer Science notes

    if(nav.dataset.notes == "computer"){

        // loop that creates links

        let pages = 2;
        let num = 1;

        for(num; num <= pages; num++){
            nav.innerHTML += create_link(`computer${num}.html`);
        }

        // loop that replaces viewed page link with a fake one

        let arr = Array.from(nav.children);

        arr.forEach((item) => {
            let page = parseInt(nav.dataset.page);
            let num = parseInt(item.lastChild.innerText.slice(8));
            if(num == page){
                item.innerHTML = `<u>computer${page}.html</u>`;
            }
        });

        // code that creates Math heading

        nav.innerHTML = `<h2>Extra Notes:</h2>` + nav.innerHTML;
    }

    // code for front end notes

    if(nav.dataset.notes == "frontendnotes"){

        // loop that creates links

        let pages = 1;
        let num = 1;

        for(num; num <= pages; num++){
            nav.innerHTML = create_link(`frontend${num}.html`);
        }

        // loop that replaces viewed page link with a fake one

        let arr = Array.from(nav.children);

        arr.forEach((item) => {
            let page = parseInt(nav.dataset.page);
            let num = parseInt(item.lastChild.innerText.slice(10));
            if(num == page){
                item.innerHTML = `<u>frontend${page}.html</u>`;
            }
        });

        // code that creates Math heading

        nav.innerHTML = `<h2>Front End Notes:</h2>` + nav.innerHTML;
    }
});