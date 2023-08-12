const robotron = document.querySelector("#robotron");
robotron.addEventListener("click", dizOi);
robotron.addEventListener("click", function(){
    console.log("Função Anônima");
});
robotron.addEventListener("click", () => {
    console.log("Arrow Function");
});

function dizOi(nome) {
    console.log("Oi");
    console.log(nome);
}

dizOi("Pedro");

