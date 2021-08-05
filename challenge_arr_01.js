/*********   CODE CHALLENGE HTML **********/

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html","head","head","body","h1","h1","p","p","p","p","ul","li","li","li","li","ul","body","html"];
let stack = [];

// Ziel --> "<html><head></head><body><p></p></body></html>"; 
 
 
// Modul: HTML-String erzeugen | Test
ausgabe(getHTML());
function getHTML(){
	let htmlstr ="";
    for(let i=0 ; i <tags.length ; i++){
        if (isopenTag(tags[i])){
            htmlstr += gettag(tags[i],"open");
        } else {
            htmlstr += gettag(tags[i],"close");
        }

        
}       
return htmlstr;
}

function getTab(tabCount) {
    let myTab ="";
    for (let i=0; i < tabcount; i++){
        myTab += "\t";
    }
    return myTab;
}
//ausgabe(gettag("p","open"));
//ausgabe(gettag("p","close"));
function gettag(tag,flag){
switch (flag){
    case "open":
        return getTab(stack.length - 1) + controls[0] + tag + controls[2] + "\n";
    case "close":
        return getTab(stack.length) + controls[1] + tag + controls[2] + "\n";
    default:
        return "#!?";
    }
}



/*ausgabe(isopenTag("html"));
ausgabe(isopenTag("head"));
ausgabe(isopenTag("head"));
ausgabe(isopenTag("body"));*/
function isopenTag(tag) {
    const cond = (stack.indexOf(tag) == -1);// tag ist neu
    if (cond){

        stack.push(tag);
        ausgabe(stack);
        return true;
    }else {
        stack.pop();
        ausgabe(stack);
        return false;
    }
}

   
// Modul: Ausgabe | Test
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}
