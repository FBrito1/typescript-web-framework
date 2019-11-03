import { User } from "./models/User";

const user = new User({ name: "New record", age: 10 });

user.events.on("change", () => {
  console.log(1);
});

user.events.trigger("change");
