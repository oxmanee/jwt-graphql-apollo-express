import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config";
import Auth from "../users/User";

export default {
  Mutation: {
    loginAuth: async (root, { input }) => {
      const password = input.password;
      const [user] = await Auth.find({
        username: input.username,
      });
      if (!user) throw new Error("Unable to Login");
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) throw new Error("Unable to Login");
      return {
        token: jwt.sign(user.toJSON(), config.secretKey, {
          expiresIn: 604800, // 1 week
        }),
      };
    },
  },
};
