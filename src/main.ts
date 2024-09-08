import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueGoogleMaps from "@fawmi/vue-google-maps";

const app = createApp(App);

app.use(VueGoogleMaps, {
  load: {
    key: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
    v: "weekly",
  },
});

app.mount("#app");
