const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema, GraphQLNonNull } = require('graphql');
const firebase = require('firebase');
const dotenv = require('dotenv');
dotenv.config();

var firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function writeUserData() {


}
writeUserData();

const BookType = new GraphQLObjectType({
    name: 'BookType',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        author: { type: GraphQLString }
    })
});


const AuthorType = new GraphQLObjectType({
    name: 'AuthorType',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        books: { type: GraphQLString }
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {


                var record;
                function Another(a) {
                    record = a;
                }
                firebase.database().ref().on('value', (snapshot) => {
                    let data = snapshot.val().Books;
                    Another(data);
                });
                return record;

            }
        }
    }
});

const mutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        AddBook: {
            type: BookType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) },
                name: { type: new GraphQLNonNull(GraphQLString) },
                author: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                firebase.database().ref().child("Books").child(args.name).set({
                    id: args.id,
                    name: args.name,
                    author: args.author
                });
                return NN = {id: args.id,name:args.name,author: args.author}
            },
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
})