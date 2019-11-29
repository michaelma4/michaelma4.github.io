function myFunction() {
 document.getElementById("demo").innerHTML = "Paragraph changed.";
}

var clicks = 0;
function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };