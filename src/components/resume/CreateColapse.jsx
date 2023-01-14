import reactIcon from "../../assets/iconos/react.webp";
import htmlIcon from "../../assets/iconos/html.webp";
import cssIcon from "../../assets/iconos/css.webp";
import bootstrapIcon from "../../assets/iconos/bootstrap.webp";
import jsIcon from "../../assets/iconos/js.webp";
import gitIcon from "../../assets/iconos/git.webp";
import gitHubIcon from "../../assets/iconos/github.webp";
import photoshopIcon from "../../assets/iconos/photoshop.webp";
import sassIcon from "../../assets/iconos/sass.webp";
import figmaIcon from "../../assets/iconos/figma.webp";



import cetificadoReact from "../../assets/certificados/Certificado-Reactjs-CoderHouse.png";
import cetificadoJs from "../../assets/certificados/Certificado-Javascript-CoderHouse.png";
import cetificadoFront from "../../assets/certificados/Certificado-DevFrontEnd-CoderHouse.png";
import cetificadoDevWeb from "../../assets/certificados/CertificadoDeCoderHouseDesarrolloWeb.png";

export const handleClickColapseEducacion = () => {
    const contenedor = document.querySelector("#contenedorColapse");
    contenedor.innerHTML = `<div class="estudio col-12 p-2 p-sm-5 m-1 mx-auto my-4 text-white">
    <div class="title">
      <h2 class="text-rojo fw-bold mt-3 mb-1">
        TERCIARIO: 2022 (En curso)
      </h2>
      <p class="h5 text-gris">
        Institución de Formacion Técnica Superior N°11
      </p>
      <span class="h5 text-blanco">
        PLAN DE ESTUDIOS DE LA CARRERA:
      </span>
      <ul class="text-gris my-2">
        <li>Administración de base de datos.</li>
        <li>Desarrollo de Sistemas Web Full-Stack.</li>
        <li>Desarrollo de Sistemas Orientados a Objetos.</li>
        <li>Modelado y Diseño de Software.</li>
        <li>Desarrollo de Aplicaciones para Dispositivos.</li>
        <li>Metodologías de Pruebas de Sistemas.</li>
      </ul>
    </div>
  </div>
  <div class="estudio col-12 p-2 p-sm-5 m-1 mx-auto my-4 text-white">
            <div class="title">
              <h2 class="text-rojo fw-bold mt-3 mb-1">
                SECUNDARIO: 2015-2021 (Terminado)
              </h2>
              <p class="h5 text-gris">
              Escuela Técnica N°7 Dolores Lavalle de Lavalle
              </p>
              <span class="h5 text-blanco">
              Título obtenido: Técnico en Computación:
              </span>
              <ul class="text-gris my-2">
                <li>Programación nivel básico (C# para Arduino, C++ Orientado a Objetos, JavaScript Orientado a Objetos).</li>
              </ul>
            </div>
          </div>
  `;
  };

export const handleClickColapseSkills = () => {
    const contenedor = document.querySelector("#contenedorColapse");
    contenedor.innerHTML = "";
    contenedor.innerHTML = `
    <div class="estudio col-12 p-2 p-sm-5 m-1 mx-auto my-4 text-white">
            <div class="title">
              <h2 class="text-rojo fw-bold mt-3 mb-2">Habilidades</h2>
              <p class="h5 text-blanco">Frontend:</p>
              <div class="front d-flex flex-wrap gap-1 my-2">
                <figure class="m-2 hover-img hobbie px-3 pt-3">
                  <img src=${reactIcon} alt="" class="d-block mx-auto react" />
                  <p class="text-rojo text-center mt-2 fw-bold">React.js</p>
                </figure>
                <figure class="m-2 hover-img  hobbie px-3 pt-3">
                  <img src=${jsIcon} alt="" class="d-block mx-auto" />
                  <p class="text-rojo text-center mt-2 fw-bold">JavaScript</p>
                </figure>
                <figure class="m-2 hover-img  hobbie px-3 pt-3">
                  <img src=${htmlIcon} alt="" class="d-block mx-auto" />
                  <p class="text-rojo text-center mt-2 fw-bold">HTML 5</p>
                </figure>
                <figure class="m-2 hover-img  hobbie px-3 pt-3">
                  <img src=${cssIcon} alt="" class="d-block mx-auto" />
                  <p class="text-rojo text-center mt-2 fw-bold">CSS 3</p>
                </figure>
                <figure class="m-2 hover-img hobbie px-3 pt-3">
                  <img src=${bootstrapIcon} alt="" class="d-block mx-auto" />
                  <p class="text-rojo text-center mt-2 fw-bold">Bootstrap</p>
                </figure>
              </div>
              <p class="h5 text-blanco my-4">Otras herramientas:</p>
              <div class="herramientas d-flex flex-wrap gap-1">
                <figure class="m-2 hover-img hobbie px-3 pt-3">
                  <img src=${photoshopIcon} alt="" class="d-block mx-auto" />
                  <p class="text-rojo text-center mt-2 fw-bold">Photoshop</p>
                </figure>
                <figure class="m-2 hover-img  hobbie px-3 pt-3">
                  <img src=${figmaIcon} alt="" class="d-block mx-auto" />
                  <p class="text-rojo text-center mt-2 fw-bold">Figma</p>
                </figure>
                <figure class="m-2 hover-img  hobbie px-3 pt-3">
                  <img src=${gitIcon} alt="" class="d-block mx-auto" />
                  <p class="text-rojo text-center mt-2 fw-bold">Git</p>
                </figure>
                <figure class="m-2 hover-img  hobbie px-3 pt-3">
                  <img src=${gitHubIcon} alt="" class="d-block mx-auto" />
                  <p class="text-rojo text-center mt-2 fw-bold">GitHub</p>
                </figure>
                <figure class="m-2 hover-img hobbie px-3 pt-3">
                  <img src=${sassIcon} alt="" class="d-block mx-auto" />
                  <p class="text-rojo text-center mt-2 fw-bold">Sass</p>
                </figure>
              </div>
            </div>

          </div>
    `;
  };

export const handleClickColapseCertificados = () => {
    const contenedor = document.querySelector("#contenedorColapse");
    contenedor.innerHTML = "";
    contenedor.innerHTML = `
    <div class="estudio col-12 p-2 p-sm-5 m-1 mx-auto my-4 text-white">
              <div class="title">
                <h2 class="text-rojo fw-bold my-3 mb-1 mb-4">Certificados</h2>
                <div
                  id="carouselExampleCaptionsCertificado"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item">
                      <img
                        src=${cetificadoDevWeb}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item active">
                      <img
                        src=${cetificadoJs}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src=${cetificadoReact}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src=${cetificadoFront}
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                  class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptionsCertificado"
                    data-bs-slide="prev"
                  >
                    <span
                    class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                  class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptionsCertificado"
                    data-bs-slide="next"
                  >
                    <span
                    class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>`
  };  