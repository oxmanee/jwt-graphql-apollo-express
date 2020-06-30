import User from "./User"; // if { } for not export default
import bcrypt from "bcrypt";

export default {
  Query: {
    getUsers: async () => await User.find(),
  },
  Mutation: {
    createUser: async (root, { input }) => {
      const hash = await bcrypt.hash(input.password, 10);
      input.password = hash;
      return await User.create(input);
    },
    updateUser: async (root, { _id, input }) => {
      return await User.useFindAndModify(
        {
          _id,
        },
        input,
        { new: true }
      );
    },
    deleteUser: async (root, { _id }) => {
      return await User.findByIdAndRemove(_id);
    },
  },
};
