let indiceImagenActual = 0; 
let indiceImagenActual2 = 0;
let indiceImagenActual3 = 0;

let user

function cambiarImagen(direccion) {
  const arrayImgs = user.Imgs.split(',');
  const imagenesMostrables = arrayImgs.filter((imagen, index) => index !== 4);

  indiceImagenActual = (indiceImagenActual + direccion + imagenesMostrables.length) % imagenesMostrables.length;

  const imagenMostrada = document.getElementById("imagenMostrada");
  imagenMostrada.src = imagenesMostrables[indiceImagenActual];
}

function cambiarImagen2(direccion) {
  const arrayImgs2 = user.Imgs.split(',');
  const imagenesMostrables2 = arrayImgs2.filter((imagen, index) => index !== 2 && index !== 4);

  indiceImagenActual2 = (indiceImagenActual2 + direccion + imagenesMostrables2.length) % imagenesMostrables2.length;

  const imagenMostrada = document.getElementById("imagenMostrada2");
  imagenMostrada.src = imagenesMostrables2[indiceImagenActual2];
}

function cambiarImagen3(direccion) {
  const arrayImgs3 = user.Imgs.split(',');
  const imagenesMostrables3 = arrayImgs3;

  indiceImagenActual3 = (indiceImagenActual3 + direccion + imagenesMostrables3.length) % imagenesMostrables3.length;

  const imagenMostrada = document.getElementById("imagenMostrada3");
  imagenMostrada.src = imagenesMostrables3[indiceImagenActual3];
}

window.onload = () => {

    let obtenerParam = (url) => {
        let urlParam = String(url.match(/\?+.+/));
        urlParam = urlParam.replace("?id=", "");
        return urlParam;
    };

    let param = obtenerParam(document.URL);
    console.log(param);

    fetch("../assets/data/data.json")
        .then((res) => res.json())
        .then((data) => {
            user = data.usuarios.find((item) => String(item.Id) === param); // Buscar el usuario por ID
            console.log(user);
            console.log(param);

            if (user) {
                let detalleUsuario;
                document.getElementById("tituloObra").textContent = user.Titulo;
                switch (user.Id) {
                    case 1:

                      let arrayImgs = user.Imgs.split(',')[4]; 

                         detalleUsuario = `
                         
                          <div class="seccion">
                            <div class="foto-keken-vertical">
                              <!-- KEKEN_04 -->
                              <img src="${arrayImgs = user.Imgs.split(',')[4]}" />
                            </div>
                            <div class="datos_detalles">
                              <p>${user.Descripcion}</p>
                            </div>
                           </div>
                          <div class="seccion">
                            <div class="texto_detalles"> 
                               <p class="extra"><strong style="font-size: 20px;">Alumna: ${user.Nombre_estudiante}</strong></p>
                               <p>${user.Subtitulo}</p>
                               <p>${user.Lineas_investigacion_esd}</p>
                               <p>${user.Palabras_clave}</p>
                               <p>Curso: ${user.Curso}</p>
                               <p>Especialidad: ${user.Especialidad}</p>
                               <p>Asignatura: ${user.Asignatura_vinculada}</p>
                               <p>Tutor: ${user.Nombre_docente}</p>  
                            </div>
                            <div class="foto-keken-horizontal">
                              <!-- KEKEN_01 -->
                              <img src="${user.Imgs.split(',')[0]}" id="imagenMostrada"/>
                              <div class="contenedor_flechas">
                                <div class="flecha-izquierda" onclick="cambiarImagen(-1)">
                                  &larr;
                                </div>
                                <div class="flecha-derecha" onclick="cambiarImagen(1)">
                                  &rarr;
                                </div>
                              </div>
                            </div>
                           
                          </div>

                       `;

                    break;

                    case 2:

                        let arrayImgs2 = user.Imgs.split(',')[4]; 
                        detalleUsuario = ` 
                         <div class="secciondos">
                            <div class="datos_detallesdos">
                              <p class="extra"><strong style="font-size: 20px;">Alumna: ${user.Nombre_estudiante}</strong></p>
                              <p>${user.Subtitulo}</p>
                              <p>${user.Lineas_investigacion_esd}</p>
                              <p>${user.Palabras_clave}</p>
                              <p>Curso: ${user.Curso}</p>
                              <p>Espcialidad: ${user.Especialidad}</p>
                              <p>Asignatura: ${user.Asignatura_vinculada}</p>
                              <p>Tutor: ${user.Nombre_docente}</p>
                            </div>
  
                            <div class="foto-keken-verticaldos">
                              <!-- AMAIMONOF 03-->                             
                              <img src="${arrayImgs2 = user.Imgs.split(',')[2]}" />
                            </div>
                            <div class="foto-keken-verticaldosdos">
                              <div class="contenedor_flechas">
                                <div class="flecha-izquierda" onclick="cambiarImagen2(-1)">
                                  &larr;
                                </div>
                                <div class="flecha-derecha" onclick="cambiarImagen2(1)">
                                  &rarr;
                                </div>
                              </div>
                              <!-- AMAIMONOF 02-->                            
                              <img src="${user.Imgs.split(',')[0]}" id="imagenMostrada2"/>
                              
                            </div>
                          </div>

                          <div class="secciondos">
                            <div class="foto-keken-horizontaldos">
                              <!-- AMAIMONOF 04 -->                           
                              <img src="${arrayImgs2 = user.Imgs.split(',')[4]}" />
                            </div>
                            <div class="texto_detallesdos">                              
                              <p><strong style="font-size: 20px;">${user.Enlace_estudiante}</strong></p>
                              <p>${user.Descripcion}</p>                                               
                            </div>
                          </div>

                         `;

                    break;

                    default:
                      let arrayImgs3 = user.Imgs.split(',')[4]; 

                     if (param % 2 === 0) {
                      detalleUsuario = `
                        <div class="seccion_default">
                            <div class="datos_detalles_default1">
                              <p class="extra"><strong style="font-size: 35px;">${user.Nombre_estudiante}</strong></p>
                              <p>${user.Descripcion}</p>
                            </div>
                            
                            <div class="imagen_default1">
                              <img src="${user.Imgs.split(',')[0]}" id="imagenMostrada3"/>
                              <div class="contenedor_flechas">
                                <div class="flecha-izquierda" onclick="cambiarImagen3(-1)">
                                  &larr;
                                </div>
                                <div class="flecha-derecha" onclick="cambiarImagen3(1)">
                                  &rarr;
                                </div>
                              </div> 
                            </div>  
                            <div class="texto_detalles_default_1">
                               <p class="extra"><strong style="font-size: 35px;">${user.Lineas_investigacion_esd}</strong></p>
                               <p>${user.Subtitulo}</p>
                               <p>${user.Palabras_clave}</p>
                               <p>Curso: ${user.Curso}</p>
                               <p>Especialidad: ${user.Especialidad}</p>
                               <p>Asignatura:  ${user.Asignatura_vinculada}</p>
                               <p>Tutor: ${user.Nombre_docente}</p>                        
                            </div>
                          </div>
                        `;
                     } else {
                       detalleUsuario = `
                          <div class="seccion_default2">
                             <div class="imagen_default2">
                               <img src="${user.Imgs.split(',')[0]}" id="imagenMostrada3"/>
                               <div class="contenedor_flechas">
                                 <div class="flecha-izquierda" onclick="cambiarImagen3(-1)">
                                   &larr;
                                 </div>
                                 <div class="flecha-derecha" onclick="cambiarImagen3(1)">
                                   &rarr;
                                 </div>
                                </div>
                             </div>  
                             <div class="seccion_default2">
                                <div class="texto_detalles_default_2">
                                   <p class="extra"><strong style="font-size: 35px;">${user.Nombre_estudiante}</strong></p>
                                   <p>${user.Subtitulo}</p>
                                   <p>${user.Lineas_investigacion_esd}</p>
                                   <p>${user.Palabras_clave}</p>
                                   <p>Curso: ${user.Curso}</p>
                                   <p>Especialidad: ${user.Especialidad}</p>
                                   <p>Asignatura: ${user.Asignatura_vinculada}</p>
                                   <p>Tutor: ${user.Nombre_docente}</p>   
                                   <p>${user.Descripcion}</p>
                               </div>
                             </div>
                          </div>
                          `;
                   }
                }

                let lista = document.querySelector("#contenedor");
                lista.innerHTML += detalleUsuario;

            } else {
                console.error("Usuario no encontrado");
            }
        })
        .catch((error) => console.error("Error al cargar el JSON:", error));
};
