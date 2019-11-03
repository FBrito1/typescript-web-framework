import { User } from "./models/User";

const user = new User({ id: 1, name: "mewename", age: 30 });
user.on("save", () => {
  console.log(user);
});

user.save();
