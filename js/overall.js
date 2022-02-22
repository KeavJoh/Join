// color designer #e2d810
// color frontend #d9138a
// color backend #12a4d9
// color Scrum #322e2f
// color outsourcing #5c3c92

let employees = [
    // {
    //     "firstName": "Nina",
    //     "lastName": "Muster",
    //     "email": "nina.muster@join.de",
    //     "picture": "assets/profil/profil_1.jpg"
    // },
    // {
    //     "firstName": "Jana",
    //     "lastName": "Tuffel",
    //     "email": "jana.tuffel@join.de",
    //     "picture": "assets/profil/profil_3.jpg"
    // },
    // {
    //     "firstName": "Mark",
    //     "lastName": "Anders",
    //     "email": "mark.anders@join.de",
    //     "picture": "assets/profil/profil_2.jpg"
    // }
];
let employeesForTask = [];
let taskBoard = [];
let informations = [];

let board = false;


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}