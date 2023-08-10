var app = Vue.createApp({
    data() {
        return {
        
        lista_recetas: [
          
            {
            "id": "001",
            "nombre": "Manzanas sin Azucar",
            "descripcion": "Mezclar con las manos hasta que quede una masa uniforme. Una cosa que me gusta de ésta masa es que lleva la manteca derretida, lo que ahorra un montón de tiempo evitando utilizar la manteca pomada.",
            "chef": "Pedro Santos",
            "ingredientes": [
                {
                    "id": "i001",
                    "nombre": "3 manzanas grandes",
                },
                {
                    "id": "i002",
                    "nombre": "1 rama canela",
                },
                {
                    "id": "i003",
                    "nombre": "3 huevos",
                },
                {
                    "id": "i004",
                    "nombre": "3 tazas harina leudante",
                },
            ]
            },

            {
            "id": "002",
            "nombre": "Tarta de Coco",
            "descripcion": "Colocar la harina en un bol grande. Agregar una pizca de sal, la manteca derretida, y un huevo. Esta masa de tarta de coco no lleva azúcar ya que el resto de la tarta será muy dulce, ya es más que suficiente con el dulce de leche",
            "chef": "Pedro Santos",
            "ingredientes": [
                {
                    "id": "i005",
                    "nombre": "3 cocos grandes",
                },
                {
                    "id": "i006",
                    "nombre": "1 rama vainilla",
                },
                {
                    "id": "i007",
                    "nombre": "3 huevos",
                },
                {
                    "id": "i008",
                    "nombre": "3 tazas harina leudante",
                },
            ]
            },

            {
            "id": "003",
            "nombre": "Torta de Chocolate",
            "descripcion": "Cubrir la masa con film y llevar a la heladera a reposar 20 minutos. Si no tienen tiempo pueden saltear éste paso, pero la masa queda mucho más crocante y rica si la dejamos reposar.",
            "chef": "Pedro Santos",
            "ingredientes": [
                {
                    "id": "i009",
                    "nombre": "3 cocos grandes",
                },
                {
                    "id": "i010",
                    "nombre": "1 rama vainilla",
                },
                {
                    "id": "i011",
                    "nombre": "3 huevos",
                },
                {
                    "id": "i012",
                    "nombre": "3 tazas harina leudante",
                },
            ]
            },
        ],

        buscar:'',
        show_add_receta: false,
        new_receta: 
            {
            "id": "",
            "nombre": "",
            "descripcion": "",
            "chef": "",
            "ingredientes": []
           },
        nuevo_ingrediente:'',
        receta_seleccionada: null
      
     } 
    }, 

    computed: {

        lista_receta_filtrada: function() {
            var self = this
            return this.lista_recetas.filter(
                function (value) {
                    return value.nombre.includes(self.buscar)
                }
            )
        }
    },

    methods: {

        AgregarIngrediente: function() {
            var new_date = new Date()
            var ingrediente ={
                "id":"i1000" + new_date.getTime(),
                "nombre": this.nuevo_ingrediente
            }

            this.new_receta.ingredientes.push(
                ingrediente
            )
            //console.log(this.nuevo_ingrediente);
           // new_receta.ingredientes.push('nuevo ingrediente')
        },
    
        AgregarReceta: function() {
            this.lista_recetas.push(this.new_receta);
        },

        SeleccionarReceta: function (receta) {
            this.receta_seleccionada = receta
           // console.log(this.receta_seleccionada)
        },

        EliminarReceta: function () {
            id = this.lista_recetas.indexOf(this.receta_seleccionada)
            this.lista_recetas.splice(id,1)

           // console.log(this.lista_recetas)
        },
    },

})

app.mount('#appReceta')