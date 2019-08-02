var quiz = () => {
    //total score
    let score = 0;

    //Question 1
    let html = document.getElementById("html");
    let html1 = document.getElementById("html1");
    let html2 = document.getElementById("html2");

    //checked
    if (html.checked) {
        score += 25;
    } else if (html1.checked) {
        score += 0;
    } else if (html2.checked) {
        score += 0;
    }

    //Question 2
    let css = document.getElementById("css");
    let css1 = document.getElementById("css1");
    let css2 = document.getElementById("css2");

    //checked
    if (css.checked) {
        score += 25;
    } else if (css1.checked) {
        score += 0;
    } else if (css2.checked) {
        score += 0;
    }
    
    //Question 3
    let subject = document.getElementsByName("subject[]");
    for ( i = 0; i < subject.length; i++) {
        if (subject[i].checked) {
            if (subject[i].value == "css"){
                score += 0;
                break;
            }else{
                score += 25/2
            }
               
        }
    }

    //Question4
    let script = document.getElementById("chooseJS");
    if (script.value != "best") {
        score += 0;
    }else {
        score += 25;
    }

    //result on screen
    document.getElementById("result").innerHTML = score;
}
    let btn = document.getElementById('answer');
    btn.addEventListener('click', quiz)