var app = Vue.createApp({
    data() {
        return {
        precios: [100.2, 300, 300.5, 400.5],
        cantidades: [20, 10, 30, 90],
        productos:[
            'zapatos',
            'camisetas',
            'gorras',
            'lentes'],
            precioDolar: 3.42,
            kwarg:'',
            full_name: '',
            direccion: '',
            comprobante: ''
        }
    },
    computed:{
         montoPagar() {
            var total = 0
          
            for (let i = 0; i < this.precios.length; i++){
                var monto = 
                    this.precios[i]*this.cantidades[i];
                    total = total + monto
            }
            return total*parseFloat(this.precioDolar);
         }
         
    },

    watch:{                   //propiedad observada
     
        full_name: function (nuevo) {
            this.comprobante = 'Comprobante para : ' + nuevo + ' con dirección en '  + this.direccion
            
        },
        direccion: function (nuevo){
            this.comprobante = 'Comprobante para : ' + this.full_name + ' con dirección en ' + nuevo
        },

    },

    methods: {
        SumarVentas() {
            var total = 0;
          
            for (let i = 0; i < this.precios.length; i++){
                var monto = this.precios[i]*this.cantidades[i];
                total = total + monto
            }
            return total;
         },
         BuscarProducto: function(){
            var clave_busqueda = this.kwarg
            return this.productos.filter(
                function(valor){
                   return valor.includes(clave_busqueda)
                }
            )
         },
     
 
         }
    
})

app.mount('#appReceta')