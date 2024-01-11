window.onload = () => {
    let obtenerParam = (url) => {
        let urlParam = String(url.match(/\?+.+/));
        urlParam = urlParam.replace("?id=", "");
        return urlParam;
    };

    let param = obtenerParam(document.URL);
    console.log(param);

    fetch("../assets/data/data.json")
         console.log(;D);
        .then((res) => res.json())
        .then((data) => {
            let user = data.usuarios.find((item) => String(item.Id) === param); // Buscar el usuario por ID
            console.log(user);
            console.log(param);

            if (user) {
                let detalleUsuario;


                switch (user.Id) {
                    case 1:
                         detalleUsuario = `

                          <div class="seccion">
                            <div class="foto-keken-vertical">
                              <!-- KEKEN_04 -->
                              <img src="../assets/resources/img/keken/KEKEN_04.jpg"></img>
                            </div>
                            <div class="datos_detalles">
                              <p class="extra"><strong style="font-size: 20px;">${user.Nombre_estudiante}</strong></p>
                              <p>${user.Descripcion}</p>
                            </div>
                           </div>
                          <div class="seccion">
                            <div class="texto_detalles">
                               <p class="extra"><strong style="font-size: 20px;">${user.Titulo}</strong></p>
                               <p>${user.Subtitulo}</p>
                               <p>${user.Lineas_investigacion_esd}</p>
                               <p>${user.Palabras_clave}</p>
                               <p>${user.Curso}</p>
                               <p>${user.Especialidad}</p>
                               <p>${user.Asignatura_vinculada}</p>
                               <p>${user.Nombre_docente}</p>
                              
                            </div>
                            <div class="foto-keken-horizontal">
                              <!-- KEKEN_01 -->
                              <img src="../assets/resources/img/keken/KEKEN_01.jpg"></img>
                            </div>
                          </div>

                       `;

                    break;

                    case 2:
                        detalleUsuario = ` 

                        <div class="secciondos">
                            <div class="datos_detallesdos">
                              <p class="extra"><strong style="font-size: 20px;">${user.Titulo}</strong></p></p>
                              <p>${user.Subtitulo}</p>
                              <p>${user.Lineas_investigacion_esd}</p>
                              <p>${user.Palabras_clave}</p>
                              <p>${user.Curso}</p>
                              <p>${user.Especialidad}</p>
                              <p>${user.Asignatura_vinculada}</p>
                              <p>${user.Nombre_docente}</p>
                            </div>
                            <div class="foto-keken-verticaldos">
                              <!-- AMAIMONOF 02-->                            
                              <img src="${user.ImgsDetalle1}" />
                            </div>
                            <div class="foto-keken-verticaldos">
                              <!-- AMAIMONOF 03-->                             
                              <img src="${user.ImgsDetalle2}" />
                            </div>
                            
                           </div>
                          <div class="secciondos">
                            <div class="foto-keken-horizontaldos">
                              <!-- AMAIMONOF 04 -->                           
                              <img src="${user.ImgsDetalle3}" />
                            </div>
                            <div class="texto_detallesdos">
                              <p class="extra"><strong style="font-size: 20px;">${user.Nombre_estudiante}</strong></p>                              
                              <p>${user.Enlace_estudiante}</p> 
                              <p>${user.Descripcion}</p>                                               
                            </div>
                          </div>

                         `;

                    break;

                    default:
                     if (param % 2 === 0) {
                        detalleUsuario = `
                        <div class="seccion_default">
                            <div class="datos_detalles_default1">
                              <p class="extra"><strong style="font-size: 20px;">${user.Nombre_estudiante}</strong></p>
                              <p>${user.Descripcion}</p>
                            </div>
                            
                            <div class="imagen_default1">
                              <img src="${user.Imgs}" />
                            </div>  
                            
                            <div class="texto_detalles_default_1">
                               <p class="extra"><strong style="font-size: 20px;">${user.Titulo}</strong></p>
                               <p>${user.Subtitulo}</p>
                               <p>${user.Lineas_investigacion_esd}</p>
                               <p>${user.Palabras_clave}</p>
                               <p>${user.Curso}</p>
                               <p>${user.Especialidad}</p>
                               <p>${user.Asignatura_vinculada}</p>
                               <p>${user.Nombre_docente}</p>
                              
                            </div>
                          </div>
                        `;
                     } else {
                       detalleUsuario = `
                          <div class="seccion_default2">
                             <div class="imagen_default2">
                                 <img src="${user.Imgs}" />
                             </div>  
                             <div class="seccion_default2">
                                <div class="texto_detalles_default_2">
                                   <p class="extra"><strong style="font-size: 20px;">${user.Nombre_estudiante}</strong></p>
                                   <p class="extra"><strong style="font-size: 20px;">${user.Titulo}</strong></p>
                                   <p>${user.Subtitulo}</p>
                                   <p>${user.Lineas_investigacion_esd}</p>
                                   <p>${user.Palabras_clave}</p>
                                   <p>${user.Curso}</p>
                                   <p>${user.Especialidad}</p>
                                   <p>${user.Asignatura_vinculada}</p>
                                   <p>${user.Nombre_docente}</p>   
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
