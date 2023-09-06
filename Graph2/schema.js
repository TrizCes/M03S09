const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLString,
  graphqlSync,
  GraphQLList,
} = require('graphql');

let books = [
  { id: "1", title: 'Harry Potter e a pedra filosofal', author: 'J. K. Rowling' },
  { id: '2', title: 'Coraline', author: 'Null' },
  { id: '3', title: 'Em chamas', author: 'Susan Colins' },
  { id: '4', title: 'Harry Potter e a camara secreta', author: 'J. K. Rowling' },
];

const BookType = new GraphQLObjectType({
  name: 'BookType',
  description: 'Representa um livro escrito por um autor',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        return books.find((book) => book.id === args.id);
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },
  },
});

//MUTATION
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addBook: {
      type: BookType,
      args: {
        title: { type: GraphQLString },
        author: { type: GraphQLString },
      },
      resolve(parent, args) {
        let book = {
          id: books.length + 1,
          title: args.title,
          author: args.author,
        };
        books.push(book);
        return book;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
