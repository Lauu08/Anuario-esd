window.onload = () => {
    let datos;

    let verDetalle = (e) => {
        // let detalle = datos[e.currentTarget.id]
        // console.log(detalle)
        window.open(
            `/pages/detalles.html?id=${e.currentTarget.id}`,
            "_self"
        );
    };

    fetch("../assets/data/data.json")
        .then((res) => res.json())
        .then((data) => {
            datos = data;
            let lista = document.querySelector("#usuarios");
            data.usuarios.forEach((user, index) => {
                let listItem = document.createElement("li");
                listItem.classList.add("user");
                listItem.setAttribute("id", user.Id);

                let itemContent = `
                
                    <div class="img">
                      <img src=${user.Imgs} />
                    </div>
                    <div class="datos">
                      <div class="nombre">${user.Nombre_estudiante}</div>
                      <div class="titulo">${user.Titulo}</div>
                    </div>
                
            `;
                listItem.innerHTML = itemContent;
                lista.appendChild(listItem);
            });

            
            let listaRecursos = document.querySelector("#lista_recursos");

            data.recursos.forEach((recurso) => {
                if (recurso.tipo === "pdf") {
                    let listItem = document.createElement("li");
                    let enlaceDescarga = document.createElement("a");
                    enlaceDescarga.textContent = recurso.nombre;
                    enlaceDescarga.href = recurso.ruta;
                    enlaceDescarga.download = recurso.nombre;
                    listItem.appendChild(enlaceDescarga);
                    listaRecursos.appendChild(listItem);
                }
            });

        })
        .then(() => {
            let users = document.querySelectorAll(".user");
            users.forEach((user) => {
                user.addEventListener("click", verDetalle, true);
            });
        });
};
