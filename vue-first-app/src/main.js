import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

const app = createApp(App);

app.component('friend-contact',FriendContact);
// friend-contaact is a custom name , which acts as a html element
app.mount('#app');
