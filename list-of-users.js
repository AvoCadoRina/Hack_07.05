const App = {
    data() {
        return {
            cards: [
                {
                    name: 'Лена Колесникова',
                    age: '18-45',
                    text: 'Заканчиваются деньги на еду, помогите, пожалуйста, с продуктами',
                    time: new Date(2013, 2, 1, 1, 10),
                    urgently: false,
                    address: 'ул. Древних вязов, дом 13, квартира 5',
                    phone: '+79990000000',
                    email: 'leka@somemail.net'

                },
                {
                    name: 'Лена Колесникова',
                    age: '18-45',
                    text: 'Заканчиваются деньги на еду, помогите, пожалуйста, с продуктами',
                    time: new Date(2013, 2, 1, 1, 10),
                    urgently: false,
                    address: 'ул. Древних вязов, дом 13, квартира 5',
                    phone: '+79990000000',
                    email: 'leka@somemail.net'

                },
                {
                    name: 'Лена Колесникова',
                    age: '18-45',
                    text: 'Заканчиваются деньги на еду, помогите, пожалуйста, с продуктами',
                    time: new Date(2013, 2, 1, 1, 10),
                    urgently: false,
                    address: 'ул. Древних вязов, дом 13, квартира 5',
                    phone: '+79990000000',
                    email: 'leka@somemail.net'

                },
            ]
        }
    },
    mounted() {

    },
    methods: {

    }
}


Vue.createApp(App).mount('#app')
