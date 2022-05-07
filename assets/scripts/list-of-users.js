

const App = {
    data() {
        return {
            cards: [
                {
                    "name": "Лена Колесникова",
                    "age": "18-45",
                    "text": "Заканчиваются деньги на еду, помогите, пожалуйста, с продуктами",
                    "time": new Date(2013, 2, 8, 5, 10),
                    "urgently": false,
                    "address": "ул. Древних вязов, дом 13, квартира 5",
                    "phone": 79990000000,
                    "email": "leka@somemail.net"
        
                },
                {
                    "name": "Анонимный Аноним",
                    "age": "0-18",
                    "text": "Сломала ногу в лесу, заберите, меня, пожалуйста",
                    "time": null,
                    "urgently": true,
                    "address": "Парк Пруды",
                    "phone": 8948787887,
                    "email": null
        
                },
                {
                    "name": "Коля Ежов",
                    "age": "45-65",
                    "text": "Помогите починить шкаф",
                    "time": new Date(2013, 2, 6, 3, 10),
                    "urgently": false,
                    "address": "ул. Старых вязов, дом 13, квартира 5",
                    "phone": 78456456456,
                    "email": "leka@somemail.net"
        
                }
            ]
        }
    },
    created() {
        //записывает данные о карточках после создания страницы
        this.getList
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
        getList() {
            let list = JSON.stringify(this.card);
            localStorage.setItem("list", list);
            let newList =JSON.parse(localStorage.getItem("list"));
            this.cards = newList
        }
    }
}


Vue.createApp(App).mount('#app')
