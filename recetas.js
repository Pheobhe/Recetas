var app = Vue.createApp({
    data() {
        return {
        
        lista_recetas: [
          
            {
            "id": "001",
            "nombre": "Tarta de Manzanas sin Azucar",
            "descripcion": "lorem ipsum dolor sit amet",
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
            "nombre": "Tarta de Cocos",
            "descripcion": " lorem ipsum dolor sit amet",
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
            "descripcion": " lorem ipsum dolor sit amet",
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
        nuevo_ingrediente: ''
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
        }
     },
 
})

app.mount('#appReceta')