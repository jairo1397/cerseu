import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
    private cursos:Curso[]=[
      {
        nombre: " Curso de HTML 5",
        descripcion: "HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto.",
        img: "assets/images/html.PNG",
        profesor:"Susana Rivera",
        precioN: "19.99",
        precioO: "9.99",
        puntaje: "210",
  clase1: "Introducción al curso de HTML5",
  clase2: "Creando nuestro primer documento HTML en VSCODE",
  clase3: "Sintaxis de las etiquetas en HTML",
  clase4: "Estructura básica de un documento HTML",
  clase5: "Etiquetas Headings en HTML (H1,H2)",
  clase6: "Comentarios en HTML",
  clase7: "Etiquetas de texto en HTML",
  clase8: "Enlaces en HTML (Etiqueta A HTML)",
  clase9: "Imágenes en HTML",
  clase10: "Etiquetas de contenido HTML (Main, Article, Footer)",
  clase11: "Elementos en Bloque y en linea HTML",
  clase12: "Despedida curso",
      },
      {
        nombre: "Curso de CSS 3",
        descripcion: "CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.​",
        img: "assets/images/css.PNG",
        profesor:"Susan Sanchez",
        precioN: "39.99",
        precioO: "29.99",
        puntaje: "210",
  clase1: "Introducción a CSS3",
  clase2: "Creando archivos CSS3",
  clase3: "Comentarios en CSS3",
  clase4: "Descendencia en CSS3",
  clase5: "Empezando nuestro primer proyecto",
  clase6: "Selectores Básicos en CSS3",
  clase7: "Selectores de atributo en CSS3",
  clase8: "Selectores Combinadores",
  clase9: "Introducción al Box Model",
  clase10: "Propiedad margin en CSS3",
  clase11: "Colapso de Margenes en CSS",
  clase12: "Final curso CSS3",
      },
      {
        nombre: " Curso de JavaScript",
        descripcion: "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.",
        img: "assets/images/javascript.PNG",
        profesor: "Juan Sanchez",
        precioN: "29.99",
        precioO: "19.99",
        puntaje: "410",
  clase1: "Introducción a JavaScript",
  clase2: "Variables y constantes",
  clase3: "Tipos de datos",
  clase4: "Arreglos",
  clase5: "Metodos y propiedades para los Arreglos",
  clase6: "Condicionales",
  clase7: "Ciclo For y While",
  clase8: "Funciones",
  clase9: "Ejercicio con Funciones y Formularios",
  clase10: "Scope de Javascript (ámbito de las variables)",
  clase11: "Metodos y propiedades para Cadenas de Texto",
  clase12: "Final curso JavScript",
      },
      {
        nombre: "Curso de Ofimatica",
        descripcion: "Ofimática, a veces también llamado burótica, ​ designa al conjunto de técnicas, aplicaciones y herramientas informáticas que se utilizan en funciones de oficina para optimizar, automatizar, mejorar tareas y procedimientos relacionados.",
        img: "assets/images/ofimatica.PNG",
        profesor:"Harold Garcia",
        precioN: "19.99",
        precioO: "9.99",
        puntaje: "310",
  clase1: "Introducción a Word 2016",
  clase2: "Tareas básicas",
  clase3: "Edición de un documento",
  clase4: "Formato de texto",
  clase5: "Formato de párrafo",
  clase6: "Introducción a Excel 2016",
  clase7: "Configuración de la ventana de la aplicación",
  clase8: "Mecanismos de importación y exportación de ficheros",
  clase9: "Utilización de rangos y vinculación entre ficheros",
  clase10: "Introducción a Access 2016",
  clase11: "Trabajo con tablas",
  clase12: "Final curso de Ofimatica",
      },
      {
        nombre: "Computacion Informatica",
        descripcion: "La informática, ​ también llamada computación, ​ es la rama de la ciencia que se encarga de estudiar la administración de métodos, técnicas y procesos con el fin de almacenar, procesar y transmitir información y datos en formato digital.",
        img: "assets/images/computacion.PNG",
        profesor: "Susana Rivera",
        precioN: "49.99",
        precioO: "39.99",
        puntaje: "340",
  clase1: "Introducción a Computacion Informatica",
  clase2: "Encender y Apagar Correctamente Computador. Conexión de sus partes",
  clase3: "Qué es un Sistema Operativo. Funciones y Tipos. Windows, Mac, y más",
  clase4: "Conoce el Entorno Gráfico de Windows. Evolución de Windows",
  clase5: "Mouse y Touchpad. Partes y Funciones principales. Clic, doble clic",
  clase6: "Configurar Pantalla-Crear Accesos Directos-Ordenar Iconos",
  clase7: "Personalizar Windows Fondos, Colores y Alto Contraste",
  clase8: "Protector de Pantalla y Pantalla de Bloqueo Configuración y Personalización",
  clase9: "La Barra de Tareas: Configurar y Personalizar",
  clase10: "Activar Botón de Búsqueda y Teclado Táctil",
  clase11: "El teclado: Partes, Funciones y Formas de Interactuar con el Computador",
  clase12: "Final curso de Computacion Informatica",
      },
      {
        nombre: "Curso de Git-Hub",
        descripcion: "GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador.",
        img: "assets/images/github.PNG",
        profesor: "Shari Herrera",
        precioN: "39.99",
        precioO: "29.99",
        puntaje: "300",
  clase1: "Introducción a Git-Hub",
  clase2: "Primer Repositorio y Commit",
  clase3: "Stage, Logs y Git Alias",
  clase4: "Git MV/RM/Reset",
  clase5: "Ramas y Uniones (Merge)",
  clase6: "Merge con conflictos",
  clase7: "Github (git clone)",
  clase8: "git pull",
  clase9: "Integración con NetBeans, Eclipse, Intellij y Visual Studio Code",
  clase10: "Configurar git con github",
  clase11: "Subir proyeto a github con git",
  clase12: "Final curso Git-Hub",
      },
      {
        nombre: "Curso de Angular",
        descripcion: "Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.",
        img: "assets/images/angular.PNG",
        profesor: "Rafael Bautista",
        precioN: "29.99",
        precioO: "19.99",
        puntaje: "180",
  clase1: "Introducción a Angular",
  clase2: "Tu Primera Aplicación Angular",
  clase3: "Componentes y Enrutamiento",
  clase4: "Data Binding y Pipes",
  clase5: "Directivas y Componentes Personalizados",
  clase6: "Módulos, Servicios y Buenas Prácticas",
  clase7: "Asincronía y RxJS",
  clase8: "Comunicación HTTP",
  clase9: "Formularios basados en plantillas",
  clase10: "Formularios Reactivos",
  clase11: "Proyección del contenido",
  clase12: "Final curso Angular",
      }
    ];


    constructor() {
        console.log("servicio listo");
     }
    
    getCursos():Curso[]{
        return this.cursos;
    }
    getCurso(idx: number){
      return this.cursos[idx];
    }
    
    buscarCursos( termino: string){
      let cursosArr: Curso[]=[];
      termino = termino.toLowerCase();

      for( let i=0; i<this.cursos.length;i++){
        let curso = this.cursos[i];
        let nombre = curso.nombre.toLowerCase();
        if( nombre.indexOf( termino ) >= 0){
          curso.idx=i;
          cursosArr.push(curso)
        }

      }
     return cursosArr;
    }
}
export interface Curso{
    idx?: number;
    nombre: String;
    descripcion: String;
    img: String;
    profesor: String;
    precioN: String;
    precioO: String;
    puntaje: String;
    clase1: String;
    clase2: String;
    clase3: String;
    clase4: String;
    clase5: String;
    clase6: String;
    clase7: String;
    clase8: String;
    clase9: String;
    clase10: String;
    clase11: String;
    clase12: String;


};