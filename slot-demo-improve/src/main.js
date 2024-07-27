import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialogue from './components/UI/BaseDialogue.vue';

// Assuming the component is in the 'components' directory

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-dialogue', BaseDialogue);
app.component('base-button', BaseButton);

app.mount('#app');
