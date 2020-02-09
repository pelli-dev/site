const words = ["Welcome", "Benvenuto", "Bienvenida", "歓迎", "வரவேற்பு"];
const index = 0;
const txt = "";

type(words, index, txt);



function type(words, index, txt){

    //console.log(words, index);
    const div = screen.width;
    //console.log(div);

    const word = words[index % words.length];

    if(txt != word){

        txt = word.substring(0, txt.length + 1);
        //console.log(txt);

        if(div > 521){

            document.getElementById("first-part-welcome").innerHTML = "<span>" + txt + "</span>";
        }else{
            
            document.getElementById("nav-welcome-container").innerHTML = "<span>" + txt + "</span>";
        }

        if(txt == word){

            setTimeout( () => type(words, index, txt), 1100);
        }else{

            setTimeout( () => type(words, index, txt), 500);
        }

        
    }else if(txt == word){

        cancella(txt, index, words, div);
    }
}


function cancella(txt, index, words, div){

    if(txt != ""){

        txt = txt.substring(0, txt.length - 1);

        if(div > 521){

            document.getElementById("first-part-welcome").innerHTML = "<span>" + txt + "</span>";
        }else{
            
            document.getElementById("nav-welcome-container").innerHTML = "<span>" + txt + "</span>";
        }

        setTimeout( () => cancella(txt, index, words, div), 250);
    }else if(txt == ""){

        index++;
        type(words, index, txt);
    }
}






function openMenu(){

    const nav = document.getElementById("navbar").style;
    nav.transition = "0.5s";
    //console.log(nav.height);

    if(nav.height == "0%" || nav.height == ""){

        nav.height = "100%";
    }else{

        nav.height = "0%";
    }
}
