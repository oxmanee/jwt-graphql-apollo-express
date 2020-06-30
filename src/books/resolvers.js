import Book from "./Book"; // if { } for not export default
import decodedToken from "./../middleware/checkToken";

export default {
  Query: {
    getBooks: async (root, args, req) => {
      decodedToken(req);
      return await Book.find();
    },
  },
  Mutation: {
    createBook: async (root, { input }, req) => {
      decodedToken(req);
      return await Book.create(input);
    },
    updateBook: async (root, { _id, input, req }) => {
      decodedToken(req);
      return await Book.useFindAndModify(
        {
          _id,
        },
        input,
        { new: true }
      );
    },
    deleteBook: async (root, { _id }, req) => {
      decodedToken(req);
      return await Book.findByIdAndRemove(_id);
    },
  },
};
