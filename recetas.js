var app = Vue.createApp({
    data() {
        return {
        
        lista_recetas: [
          
            {
            "id": "001",
            "nombre": "Receta de Tarta de Manzanas sin Azucar",
            "descripcion": " lorem ipsum dolor sit amet",
            "chef": "Pedro Santos",
            "Ingredientes": [
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
            "nombre": "Receta de Tarta de Cocos",
            "descripcion": " lorem ipsum dolor sit amet",
            "chef": "Pedro Santos",
            "Ingredientes": [
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
            "nombre": "Receta de Tarta de Chocolate",
            "descripcion": " lorem ipsum dolor sit amet",
            "chef": "Pedro Santos",
            "Ingredientes": [
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

        search:'',
        show_add_receta: false,
        new_receta: 
            {
            "id": "",
            "nombre": "",
            "descripcion": "",
            "chef": "",
            "Ingredientes": []
           },
        nuevo_ingrediente: ''
     } 
    }, 
    methods: {

        AgregarIngrediente: function() {
            console.log(this.nuevo_ingrediente);
            //new_receta.ingredientes.push('nuevo ingrediente')
        }
     }

    
})

app.mount('#appReceta')