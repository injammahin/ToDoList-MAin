// Import the necessary libraries and components
import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import ExampleComponent from "./components/Todo.vue"; // Ensure this import is at the top for clarity

// Create the Vue application
const app = createApp({});

// Use VueAxios plugin. This syntax is used for providing axios to the Vue application as a plugin
app.use(VueAxios, axios);

// Register your component globally
app.component("todo", ExampleComponent);

// Mount the application to the DOM element with the ID 'app'
app.mount("#app");
