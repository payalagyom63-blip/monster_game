const app = Vue.createApp({
    data() {
        return {
            // both of these properties are reactive , that means they changed whenever this file is updated.
            // currentUserInput: '' ,
            message: 'Vue is Great!',
        };
    },
    methods: {
        // saveInput(event) {
        //     this.currentUserInput = event.target.value;
        // },
        setText(){
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value; // its reading whenever the button is getting clicked.
            // console.log(this.$refs.userText);
            this.$refs.userText.value ='';

        },
    },
});
app.mount('#app');

/*
const data = {
    message: 'hello!',
    text: 'ophelia',
    longMessage: 'HELLO !WORLD!'


};
// const handler = {
//     set(target, key, value) {
//         console.log(target);//the value of the data property
//         console.log(key);//the type in which value is set look at 33 line that is text.
//         console.log(value);//the value is set that is "hello!!!"
  
//     }
// };

const handler = {
    set(target, key,value){
        if(key ==='longMessage'){
            target.longMessage = value + 'wFForld';
        }
        target.message = value;
    }
};
const proxy = new Proxy(data, handler);
proxy.longMessage = 'bello!!!';

console.log(proxy.longMessage);
*/


//creating more than one vue app in a single page, and each vue app works standalone
const appp = Vue.createApp({
    template: ` <p>{{favouriteMeal}}</p>`,
    data(){
        return{
            favouriteMeal : 'pizza'
        };
    },
});
appp.mount('#food')