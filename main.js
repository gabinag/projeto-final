//Altera cores do tema
function mudaTema() {
  document.body.classList.toggle("dark");
  
}

//Galeria
function init() {
  const inputFile = document.querySelector("#file");

  function closeInput() {
    inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target;
    let file = inputTarget.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", function (e) {
    const readerTarget = e.target;
    
    const img = document.createElement("img");
    img.src = readerTarget.result;
    img.classList.add("picture");

    const div = document.getElementById("container");
    div.appendChild(img);
    });
      
    reader.readAsDataURL(file);
    });
  }
  closeInput();
}
init();

//api
fetch('https://dog.ceo/api/breed/akita/images/random').then(r=>{
  return r.json()
}).then(corpo=>{
  document.getElementById("container").innerHTML = `<img src=${corpo.message} class="picture">`
})



















