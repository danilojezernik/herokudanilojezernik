import moment from 'moment';

export default {
    data() {
        return {
            prioriteta: `Normal priority`,
            datumVnosa: ``,
            datumKonec: ``,

            napaka: [],
            prikazano: false,
            prikazanoEna: true,
            opozorilo: ``,
            todos: [
                {
                    id: 1,
                    text: `Buy things that you need for dinner and a milk is needed as well!`,
                    naslov: `Go to store`,
                    prioriteta: ``,
                    datumVnosa: ``
                }
            ],
            uredi: null,
            show: true,
            vtekuTodo: 0,
            naslednjiTodoId: 1,
            naslovInput: ``,
            textInput: ``,
            badges: [
                {
                    id: 1,
                    naslov: ``
                }
            ]
        }
    },
    computed: {
        steviloNaslova() {
            return this.naslovInput.length
        },
        steviloVnosa() {
            return this.textInput.length
        }
    },
    methods: {
        // ToDo 1
        dodajTodo() {
            let naslov = this.naslovInput;
            let text = this.textInput;
            let prioriteta = this.prioriteta;
            let datum = moment().format("DD.MM.YYYY HH:mm:ss");
            let datumKonca = this.datumKonec;

            if (!this.naslovInput || !this.textInput) {
                this.opozorilo = "Please fill all the inputs!";
                this.prikazano = true;
            } else if (this.uredi === null) {
                this.opozorilo = ``;
                this.naslovInput = ``;
                this.textInput = ``;
                this.prioriteta = ``
                this.datumVnosa = ``
                this.datumKonec = ``
                this.prikazano = false;
                this.todos.unshift(
                    {
                        id: this.naslednjiTodoId++,
                        text: text,
                        naslov: naslov,
                        prioriteta: prioriteta,
                        datum: datum,
                        datumKonca: datumKonca,
                    })
                this.naslovInput = ``
                this.textInput = ``
            } else {
                this.todos[this.uredi].naslov = this.naslovInput;
                this.todos[this.uredi].text = this.textInput;
                this.todos[this.uredi].datumKonca = this.datumKonec;
                this.todos[this.uredi].prioriteta = this.prioriteta;
                this.uredi = null;
                this.naslovInput = ``;
                this.textInput = ``;
                this.datumKonec = ``;
            }
        },
        izbrisiTodo(id) {
            this.todos.splice(id, 1);
            this.badges.splice(id, 1);
        },
        izbrisVse(todos) {
            if (window.confirm('Are you sure you want to delete everything?')) {
                this.todos.splice(todos);
                this.prikazano = false;
                this.prikazanoEna = true;
                this.naslovInput = ``;
                this.textInput = ``;
                this.opozorilo = ``;
                this.prioriteta = ``;
                this.datumVnosa = ``;
                this.datumKonec = ``;
            }
        },
        urediTodo(index) {
            this.naslovInput = this.todos[index].naslov;
            this.textInput = this.todos[index].text;
            this.datumKonec = this.todos[index].datumKonca;
            this.prioriteta = this.todos[index].prioriteta;
            this.uredi = index;
        }
    }
}
