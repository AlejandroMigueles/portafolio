const ProyectosDesarrollados = [
    {
      name: "Portafolio",
      ident: "portafolio",
      descripcion: `Un pequeño paso para la humanidad pero un gran salto para mi`,
      imagen: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
      url: "",
      tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
      logTech: [`<a><i class="fab fa-html5"></i></a>`,`<i class="fab fa-css3-alt"></i>`, `<i class="fab fa-js"></i>`,`<i class="fab fa-bootstrap"></i>` ],
      tiempoDesarrollo: "en proceso",
    },
    {
      name: "Tienda de celulares",
      ident: "CatPhone",
      descripcion: `Se creó una tiendita de celulares`,
      imagen: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
      url: "",
      tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
      logTech: [`<a><i class="fab fa-html5"></i></a>`,`<i class="fab fa-css3-alt"></i>`, `<i class="fab fa-js"></i>`,`<i class="fab fa-bootstrap"></i>` ],
      
      tiempoDesarrollo: "2 días",
    },
    {
      name: "Clon de Netflix",
      ident: "Netflix",
      descripcion: `Se creó el login, la pagina para elegir perfiles y el browser de Netflix`,
      imagen: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
      url: "",
      tecnologias: ["Html", "CSS"],
      logTech: [`<a><i class="fab fa-html5"></i></a>`,`<i class="fab fa-css3-alt"></i>`, `<i class="fab fa-js"></i>`,`<i class="fab fa-bootstrap"></i>` ],
      tiempoDesarrollo: "5 días",
    },
    {
      name: "Clon de Google",
      ident: "Google",
      descripcion: `Haciendo uso de HTML se hizo la página de búsqueda`,
      imagen: "http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg",
      url: "",
      tecnologias: ["Html"],
      logTech: [`<a><i class="fab fa-html5"></i></a>`,`<i class="fab fa-css3-alt"></i>`, `<i class="fab fa-js"></i>`,`<i class="fab fa-bootstrap"></i>` ],
      tiempoDesarrollo: "1 día",
    },
    {
      name: "Tienda de casas",
      ident: "portafolio",
      descripcion: `Se creó una tiendita de celulares`,
      imagen: "./src/img/logo1.png",
      url: "",
      tecnologias: ["Html", "CSS", "JS", "Bootstrap"],
      logTech: [`<a><i class="fab fa-html5"></i></a>`,`<i class="fab fa-css3-alt"></i>`, `<i class="fab fa-js"></i>`,`<i class="fab fa-bootstrap"></i>` ],
      tiempoDesarrollo: "10 días",
    },
  ];

  //para poner una imagen en javascript es necesario declararla como una variable
  //y luego ponerle el valor de la imagen en el innerHTML
  //por ejemplo:


  function setProyectosDesarrolladosInHTML() {
    const tagProyectosDesarrollados = document.getElementById("proyectosRealizados");
    var innerHtmlProyectosDesarrollados = "";
    ProyectosDesarrollados.forEach((proyecto) => {
      let proyectoTemp;
      proyectoTemp = `
    <div class="col">
        <div class="card shadow-sm">
                  <div class="nameProyect">
                      <h2>${proyecto.name}</h2>
                  </div>
        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: ${proyecto.ident}" preserveAspectRatio="xMidYMid slice"
        focusable="false"><title>Placeholder</title> <rect width="100%" height="100%" fill="#55595c" />
        <text x="50%" y="50%" fill="#eceeef" dy=".3em"> ${proyecto.ident}</text>
        <image xlink:href="${proyecto.imagen}" x="0" y="0" width="100%" height="100%" />
        </svg
         <div class="card-body">
            <p class="card-text">${proyecto.descripcion}</p>
                <div class="buttonCenter">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Codigo</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>
                    </div>
                </div>
            <small class="text-muted">${proyecto.tiempoDesarrollo}</small>
            <div>
                ${proyecto.logTech}
            </div>
              </div>
        </div>
    </div>      `;
      innerHtmlProyectosDesarrollados = innerHtmlProyectosDesarrollados + proyectoTemp;
    });
    tagProyectosDesarrollados.innerHTML = innerHtmlProyectosDesarrollados;
  }
  
  
  
  
  // Pila de ejecución hasta que el DOM esta completamente cargado
  document.addEventListener("DOMContentLoaded", function (e) {
    setProyectosDesarrolladosInHTML();
  });