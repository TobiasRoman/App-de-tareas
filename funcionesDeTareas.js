const fs = require("fs")

let funcionesDeTareas = {
    archivo: "./tareas.json",
    leerJson: function (){
        let tareasjson = fs.readFileSync("./tareas.json", "utf-8")
        let tareasParseadas = JSON.parse(tareasjson);
        return tareasParseadas


    },

  agregarTarea: function (titulo, estado) {
    let nuevaTarea = {
        titulo: titulo,
        estado: estado,
    };
    
    let tareasAnteriores = this.leerJson()
    
    tareasAnteriores.push(nuevaTarea)

    this.escribirJson(tareasAnteriores)
},
escribirJson :function (data){
let nuevoJson = JSON.stringify(data)//Convierte el objeto js a string
fs.writeFileSync(this.archivo, nuevoJson, 'utf-8')
},

deshacer: function(){
        let tareas = this.leerJson();
        tareas.pop()
        this.escribirJson(tareas)

    },
    filtrarPorEstado: function(estado){
        let tareas = this.leerJson();
        let tareasFiltradasPorEstados = tareas.filter((tarea)  => tarea.estado == estado)
        return tareasFiltradasPorEstados
    }
    

}





module.exports = funcionesDeTareas


 