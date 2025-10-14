const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible : false,
            friends: [
                {
                    id : 'alan',
                    name : 'Alan Walker',
                    phone : '7898762981',
                    email : 'alan@localhost.com',
                },
                {
                    id : 'billie',
                    name : 'Billie Jean',
                    phone : '7843842981',
                    email : 'billie@localhost.com',
                }
            ],

        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
        
     },

    // computed :{
    //     mine(){
    //         return this.detailsAreVisible ? 'Hide' : 'Show';
    //     }
    // }


});

app.component('my-component',{

    template:`
     <li>
          <h2>{{friend.name}}</h2>
          <button @click = "toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
          <ul v-if = "detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
    </li>
    `,
    data(){
        return {
            detailsAreVisible : false,
            friend: {

                    id : 'alan',
                    name : 'Alan Walker',
                    phone : '7898762981',
                    email : 'alan@localhost.com',
                },
            };

        },
        
    
     methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
     }
});

app.mount('#app');