const dots = Array.from(document.querySelectorAll(".spell-dot"));
let enterdot = document.querySelectorAll(".spell-dot");

const demos = Array.from(document.querySelectorAll(".demo"));

const spellnames = Array.from(document.querySelectorAll("li"));

let clicked = [false, false, false, false, false];
// console.log(clicked);

Array.from(enterdot).forEach(dot => {
    dot.addEventListener("click", showdetail);
    dot.addEventListener("mouseover", showspellname);
    dot.addEventListener("mouseleave", hidespellname);
});

function showdetail(event) {
    let dotnum = dots.findIndex(function (matchdot) {
        return matchdot === event.target;
    });
    // console.log(dotnum);
    if (dotnum == 0) {
        if (clicked[0] == false) {
            demos[0].style.display = "flex";
            clicked[0] = true;
        } else {
            demos[0].style.display = "none";
            clicked[0] = false;
        }
    }
    else if (dotnum == 1) {
        if (clicked[1] == false) {
            demos[1].style.display = "flex";
            clicked[1] = true;
        } else {
            demos[1].style.display = "none";
            clicked[1] = false;
        }
    }
    else if (dotnum == 2) {
        if (clicked[2] == false) {
            demos[2].style.display = "flex";
            clicked[2] = true;
        } else {
            demos[2].style.display = "none";
            clicked[2] = false;
        }
    }
    else if (dotnum == 3) {
        if (clicked[3] == false) {
            demos[3].style.display = "flex";
            clicked[3] = true;
        } else {
            demos[3].style.display = "none";
            clicked[3] = false;
        }
    }
    else if (dotnum == 4) {
        if (clicked[4] == false) {
            demos[4].style.display = "flex";
            clicked[4] = true;
        } else {
            demos[4].style.display = "none";
            clicked[4] = false;
        }
    }
    // dotnum == 0 ? demos[0].style.display = "flex" :
    // dotnum == 1 ? demos[1].style.display = "flex" :
    // dotnum == 2 ? demos[2].style.display = "flex" :
    // dotnum == 3 ? demos[3].style.display = "flex" :
    // demos[4].style.display = "flex";

    // dotnum == 0 ? demos[0].style.display = "none" :
    // dotnum == 1 ? demos[1].style.display = "none" :
    // dotnum == 2 ? demos[2].style.display = "none" :
    // dotnum == 3 ? demos[3].style.display = "none" :
    // demos[4].style.display = "none";

}
function showspellname(event) {
    let dotnum = dots.findIndex(function (matchdot) {
        return matchdot === event.target;
    });
    dotnum == 0 ? spellnames[0].style.display = "inline-block" :
    dotnum == 1 ? spellnames[1].style.display = "inline-block" :
    dotnum == 2 ? spellnames[2].style.display = "inline-block" :
    dotnum == 3 ? spellnames[3].style.display = "inline-block" :
    spellnames[4].style.display = "inline-block";
}
function hidespellname(event) {
    let dotnum = dots.findIndex(function (matchdot) {
        return matchdot === event.target;
    });
    dotnum == 0 ? spellnames[0].style.display = "none" :
    dotnum == 1 ? spellnames[1].style.display = "none" :
    dotnum == 2 ? spellnames[2].style.display = "none" :
    dotnum == 3 ? spellnames[3].style.display = "none" :
    spellnames[4].style.display = "none";
}
