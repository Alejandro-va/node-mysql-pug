const nombre = document.querySelector("#nombre");
const numero = document.querySelector("#numero");
const btnAgregar = document.querySelector("#btn_agregar");
const btnBorrar = document.getElementsByClassName("borrar");

console.log(123);
btnAgregar.addEventListener("click", function () {
  window.location.href = `agregar/${nombre.value}/${numero.value}
  `;
  /* console.log(`${nombre.value}, ${numero.value}`); */
});

for (let i of btnBorrar) {
  i.addEventListener("click", function () {
    let id = this.getAttribute("id"); //podria usar i en vez de this
    window.location.href = `borrar/${id}`;
    console.log(id);
  });
}
