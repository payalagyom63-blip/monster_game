<template>
    <section>
    <header><h1>My friend</h1></header>
    <ul>
       <friend-contact
            v-for = "friend in friends"
            :key = "friend.id"
            :name= 'friend.name'
            :phone-number= 'friend.phone'
            :email-address= 'friend.email'
            :is-favorite = "true"   
            
       ></friend-contact>
    </ul>
    </section>

</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'alan',
                    name: 'alan warrf',
                    phone: '7896739487',
                    email: 'alan@gmail.com'
                },
                {
                    id: 'bonie',
                    name: 'bonie warrf',
                    phone: '7834439487',
                    email: 'bonie@gmail.com'
                }
             
            ]
        };
    }

};
</script>

<style>
* {
  box-sizing: border-box;
}
header {
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
  margin: 1rem auto;
  border-radius: 50px;
  padding: 0.5rem;
  background-color : #300c31ff;
  color: white;
  text-align: center;
  width: 100%;
  /* max-width: 3rem; */
}
ul{
    border-radius: 5px;
    background-color : #227679ff;
    margin: 1rem auto;
    color:white;
    /* text-align: center; */
}

</style>