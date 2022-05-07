import {data} from '.js';
let newList = data


const App = {
    data() {
        return {
            cards: newList
        }
    },
    mounted() {
        //спортирует карточки по времени при рендеринге страницы
        this.sortCards()
    },
    methods: {
        //сортирует карточки по срочности
        sortCards() {
            this.cards = this.cards.sort((a, b) => a.time - b.time)
            console.log('done')
        },
    }
}


Vue.createApp(App).mount('#app')
