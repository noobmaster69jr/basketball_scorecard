let a, b;
function incrementh(a) {
  let string = document.getElementById("home").innerText;
  document.getElementById("home").innerText = parseInt(string) + a;
}

function incrementg(b) {
  document.getElementById("guest").innerText =
    parseInt(document.getElementById("guest").innerText) + b;
}
