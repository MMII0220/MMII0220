document.getElementById("btn").addEventListener("click", function () {
  var k = document.getElementsByClassName("nav_link");
  for (i = 0; i < k.length; i++) {
    if (k[i].style.display == "inline-block") {
      k[i].style.display = "none";
    } else {
      k[i].style.display = "inline-block";
    }
  }
});
