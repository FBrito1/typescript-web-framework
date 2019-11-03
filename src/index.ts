import { User } from "./models/User";

const user = new User({ name: "New record", age: 10 });
user.on("change", () => {
  console.log("use wae");
});
user.trigger("change");

console.log(user.get("name"));
