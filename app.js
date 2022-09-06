const fs = require("fs");
const process = require("process");
const funcionesDeTareas = require("./funcionesDeTareas")
let tareasjson = fs.readFileSync("./tareas.json", "utf-8");
let tareasParseadas = JSON.parse(tareasjson)
let action = process.argv[2] && process.argv[2].toLowerCase();

switch(action){
        case "listar":
            let listaDeTareas = funcionesDeTareas.leerJson()
            for (let i = 0; i < listaDeTareas.length; i++){
                console.log(
                    `Tarea: ${listaDeTareas[i].titulo} \nEstado: ${tareasParseadas[i].estado}`
                    )
                    console.log("---------------------------------")

            };
            break
        case "agregar":
            let titulo = process.argv[3];
            let estado = process.argv[4];
            funcionesDeTareas.agregarTarea(titulo, estado)
            break
        //case "deshacer":
          //  funcionesDeTareas.deshacer
            //break
        case "filtrar":
            let filtrado = process.argv[3]
            let tareasFiltradas = funcionesDeTareas.filtrarPorEstado(filtrado)
            console.log(`Tareas filtradas por ${filtrado}`)   
            console.log( "_______________________________________________")
            tareasFiltradas.forEach((tarea) => {
                console.log(`tarea:  ${tarea.titulo}`)
                console.log("/***********************/")

            })
        case undefined:
                console.log("Atención tienes que pasar una acción");
                break
        default:
            console.log("No entiendo que quieres hacer")


}


//console.log("tarea: " + tareasParseadas[2].titulo + " / " + "Estado:  " + tareasParseadas[2].estado)




