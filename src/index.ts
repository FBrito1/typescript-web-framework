import { User } from "./models/User";

const user = new User({ name: "New record", age: 10 });

user.save();
