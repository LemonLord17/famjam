var images = [
    "marge.jpg", "Thumbs.db", "Bart_Simpson_200px.png", "Lisa_Simpson.png"];
    var i=0;
    var reasons1 = ["Mom","Dad","brother","sister"];
    function next() {
    document.getElementById("fam1").innerHTML=reasons1 [i];
    document.getElementById("marge").src=images [i];
    i++;
    }