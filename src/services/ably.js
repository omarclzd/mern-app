import { Realtime } from "ably/browser/static/ably-commonjs.js";

window.Ably = new Realtime(process.env.REACT_APP_ABLY_API_KEY);
window.Ably.connection.on("connected", function() {
  console.log("That was simple, you're now connected to Ably in realtime");
});

// window.Ably = new Realtime(process.env.REACT_APP_ABLY_API_KEY);
