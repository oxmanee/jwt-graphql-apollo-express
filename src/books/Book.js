import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String },
  pageCount: { type: Number },
  description: { type: String },
  status: { type: String },
  authors: [String],
  categories: [String]
});

const Book = mongoose.model("books", bookSchema, "books");

export default Book;