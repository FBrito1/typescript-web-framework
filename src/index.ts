import { User } from "./models/User";

const user = new User({ name: "Brito", age: 13 });

user.on("change", () => {
  console.log("1");
});
user.on("change", () => {
  console.log("3");
});
user.on("save", () => {
  console.log("save");
});

user.trigger("savettt");
