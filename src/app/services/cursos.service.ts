import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
    private cursos:Curso[]=[
        {
          nombre: " Curso de HTML 5",
          descripcion: "HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto.",
          img: "assets/images/html.PNG",
          profesor:"Luis Gonzales Ayvar",
          precioN: "19.99",
          precioO: "9.99",
          puntaje: "210",
        },
        {
          nombre: "Curso de CSS 3",
          descripcion: "CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.​",
          img: "assets/images/css.PNG",
          profesor:"Gabriel Chavez Guerrero",
          precioN: "39.99",
          precioO: "29.99",
          puntaje: "210",
        },
        {
          nombre: " Curso de JavaScript",
          descripcion: "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.",
          img: "assets/images/javascript.PNG",
          profesor: "Jairo Espinoza Quispe",
          precioN: "29.99",
          precioO: "19.99",
          puntaje: "410",
        },
        {
          nombre: "Curso de Ofimatica",
          descripcion: "Ofimática, a veces también llamado burótica, ​ designa al conjunto de técnicas, aplicaciones y herramientas informáticas que se utilizan en funciones de oficina para optimizar, automatizar, mejorar tareas y procedimientos relacionados.",
          img: "assets/images/ofimatica.PNG",
          profesor:"Neisser Guillen Aponte",
          precioN: "19.99",
          precioO: "9.99",
          puntaje: "310",
        },
        {
          nombre: "Computacion Informatica",
          descripcion: "La informática, ​ también llamada computación, ​ es la rama de la ciencia que se encarga de estudiar la administración de métodos, técnicas y procesos con el fin de almacenar, procesar y transmitir información y datos en formato digital.",
          img: "assets/images/computacion.PNG",
          profesor: "Luis Gonzales Ayvar",
          precioN: "49.99",
          precioO: "39.99",
          puntaje: "340",
        },
        {
          nombre: "Curso de Git-Hub",
          descripcion: "GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador.",
          img: "assets/images/github.PNG",
          profesor: "Neisser Guillen Aponte",
          precioN: "39.99",
          precioO: "29.99",
          puntaje: "300",
        },
        {
          nombre: "Curso de Angular",
          descripcion: "Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.",
          img: "assets/images/angular.PNG",
          profesor: "Andre Coral Loli",
          precioN: "29.99",
          precioO: "19.99",
          puntaje: "180",
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

      for( let curso of this.cursos){
        let nombre = curso.nombre.toLowerCase();
        if( nombre.indexOf( termino ) >= 0){
          cursosArr.push(curso)
        }

      }
     return cursosArr;
    }
}
export interface Curso{
    nombre: String;
    descripcion: String;
    img: String;
    profesor: String;
    precioN: String;
    precioO: String;
    puntaje: String;
};