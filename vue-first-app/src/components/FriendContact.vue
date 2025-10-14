<template>
    <li>
        <h2>{{ name }} {{friendIsFavorite === '1'?'(Favorite)':' '}}</h2>
        <button @click = "toggleDetails">Show Details</button>
        <button @click = "toggleFavorite">Toggle Favorite</button>
        <ul v-if = "detailsAreVisible">
            <li><strong>Phone:</strong>{{ phoneNumber}}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    // props:["name","phoneNumber","emailAddress", "isFavorite"],
    props:{
        name : {
            type: String,
            required : true //also add the propertes required.
        },
        phoneNumber: {
            type: String,
            required : true
        },

        emailAddress:{
            type: String,
            required : true
        } ,
        isFavorite: {
            type: Boolean,
            required : false,
            default: false,
            // validator: function(value){
            //     return value === '1' || value === '0';
            // }
        
        },
    },
    data(){
        return {
            detailsAreVisible: false,
            friend: {
                    id: 'alan',
                    name: 'alan warrf',
                    phone: '7896739487',
                    email: 'alan@gmail.com'
                    

            },
            friendIsFavorite: this.isFavorite,
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite(){
            if(this.friendIsFavorite ==="1") {
                this.friendIsFavorite = "0";
            } else {
                this.friendIsFavorite = "1";
            }
        },
    },

};
</script>
