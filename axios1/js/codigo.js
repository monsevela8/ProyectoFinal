Vue.component('mis-tareas',{
    props: ['tareas'],
    template: '<ul><li v-for="tarea in tareas">{{ tarea.title }}</li></ul>',
});

new Vue({
    el: 'main',
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((respuesta) => {
                this.tareasAjax = respuesta.data;
            });
    },
    data: {
        tareasAjax: [],
        tareasLocales: [
            {title: 'Reetiquetar mercancia'},
            {title: 'Recibir proovedores los viernes'},
            {title: 'Organizar eventos'},
            {title: 'Recibir las visitas escolares'},
            {title: 'Decorar para la epoca navideña'},
            {title: 'Cambiar focos de las lamparas'},
            {title: 'Llevar material reciclable a reciclar'},
        ]
    }
});