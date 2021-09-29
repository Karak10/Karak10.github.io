function create_nav(){

document.getElementById("homepages").innerHTML = "<h2>Home Pages</h2>"


/* the nav element location */
    var nav = document.getElementsByTagName("nav")[0];
    
/* Function that creates headings */
    function create_heading(x, y){
    var heading1 = document.createElement("h2");
    var heading_text1 = document.createTextNode(x);
    
    heading1.appendChild(heading_text1);
    
    nav.insertBefore(heading1, y);
    };
    
/* Function that creates links */
    function create_link(x){
    var paragraph = document.createElement("p");
    var link = document.createElement("a");
    var text = document.createTextNode(x);
    var url = document.createAttribute("href");
    url.value = x;
    var cls = document.createAttribute("class");
    cls.value = "navlinks";
    
    link.setAttributeNode(cls);
    link.setAttributeNode(url);
    link.appendChild(text);
    paragraph.appendChild(link);
     
    nav.appendChild(paragraph);
    };
    
// loop that creates links

    var page_number = 22;
    var num = 1; 

    let x = parseInt(nav.id.slice(1));

    for(num;num<=page_number;num++){
    if(x < 6 && num < 6){
        if(num==1){
            create_link(`Notes.html`);
            console.log("test");
        } else {
        create_link(`Notes${num}.html`);
        }
      }
   else if(x < 13 && x > 5){
        if(num > 5 && num < 13){
        create_link(`Notes${num}.html`);
        } 
    } else if(x > 12 && num > 12) {
        create_link(`Notes${num}.html`);
    } else if(nav.id.startsWith("ext")){
        if(num > 5 && num < 13){
            create_link(`Notes${num}.html`);
        }
    }
    }

 
     

/* array of all the children */
    var children = nav.children;
    
/* function that replaces link of 
viewd page with underlined text */
    function something(x, y){
        
        var newParagraph = document.createElement("p");
        var underline = document.createElement("u");
        var text = document.createTextNode(x);
        var children = nav.children;
        
        underline.appendChild(text);
        newParagraph.appendChild(underline);
        nav.replaceChild(newParagraph, y);
        
        };
    
// loop that replaces opened page's link with fake link

    var num2 = 1;
     
    for (num2; num2<= page_number; num2++){
    if(x < 6){
        if (num2 == 1 && nav.id == `p1`){
            something(`Notes.html`, children[num2-1])
        } else if(nav.id == `p${num2}`){
           something(`Notes${num2}.html`, children[num2-1]);
       } 
    } else if( x > 5 && x < 13){
    if(nav.id == `p${num2}`){
        something(`Notes${num2}.html`, children[num2-6])
        }
      } else if( x > 12 ){
        if(nav.id == `p${num2}`){
            something(`Notes${num2}.html`, children[num2-13])
            }
        } 
    }
    
/* function that creates new home page link */

    function create_homepage(x, y){
    var div = document.getElementById("homepages");
    var paragraph = document.createElement("p");
    var link = document.createElement("a");
    var text = document.createTextNode(x);
    var att = document.createAttribute("href");
    att.value = y; 
    
    link.setAttributeNode(att);
    link.appendChild(text);
    paragraph.appendChild(link);
    div.appendChild(paragraph);
    };

/* home pages */

    create_homepage("home page of my notes", "index.html");
    create_homepage("home page of my HTML notes", "myhtmlnotes.html");
    create_homepage("home page of my CSS notes", "mycssnotes.html");
    create_homepage("home page of my JavaScript notes", "javascriptnotes.html");
    create_homepage("home page of my projects", "myprojects.html");
    create_homepage("home page of my Math notes", "mathnotes.html");
    
// code that creates heading, previous, after and extra pages links

function createLink(n, x, y){
    let paragraph = document.createElement("p");
    let link = document.createElement("a");
    let text = document.createTextNode(n);
    let url = document.createAttribute("href");
    url.value = x;
    let cls = document.createAttribute("class");
    cls.value = "prev_next_links";
    
    link.setAttributeNode(cls);
    link.setAttributeNode(url);
    link.appendChild(text);
    paragraph.appendChild(link);

if(y){
    nav.prepend(paragraph);
} else {
    nav.appendChild(paragraph);
}
};

if(x < 6){  
    create_heading(`HTML Notes:`, children[0]);
    createLink("Next (CSS Notes)", "Notes6.html");  
} else if(x > 5 && x < 13 || nav.id.startsWith("ext")){
    createLink("Previous (HTML Notes)", "Notes5.html", true);
    create_heading(`CSS Notes:`, children[0]);
    create_link("CSS_Extra_1.html");
    createLink("Next (JavaScript Notes)", "Notes13.html");
} else if(x > 12){
    createLink("Previous (CSS Notes)", "CSS_Extra_1.html", true);
    create_heading(`JavaScript Notes:`, children[0]);
} 

// code that creates math notes links

let smth = 1;

if(nav.dataset.math != undefined){
for(let i = 1 ; i <= smth; i++){
    create_link(`math${i}.html`);
}

create_heading('Math Notes:', children[0]);

let num = nav.dataset.math; 
let childrenx = Array.from(nav.children);

for(let i of childrenx){
    if(parseInt(i.innerText.slice(4)) == num){
        something(`math${num}.html`, childrenx[num]);
    }
}

}

// code that repalaces selected links of extra pages with fake links

let arr = Array.from(nav.children);
let extra = arr.filter((x) => x.innerText.includes("Extra"));
let csse = parseInt(nav.id.slice(3));
console.log(csse)
let num3 = 1;
let aas = children[0].innerText.indexOf(' ');
let word = children[0].innerText.slice(0, aas);

for(num3; num3<=extra.length; num3++){
if(nav.id.startsWith("ext")){
      if(csse == num3){
        something(`${word}_Extra_${num3}.html`, extra[num3 - 1]);
      }
   }
}



}

window.addEventListener("load", create_nav()); 

     