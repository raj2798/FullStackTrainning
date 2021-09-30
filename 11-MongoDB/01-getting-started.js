To start the DB server, from within the folder with the data folder... (use sudo ONLY for Linux/Mac)
sudo mongod --dbpath=./data/db

To start the client, in another terminal...
mongo

In mongo shell which has started... (shows all the databases)
show dbs;

// MongoDB is "schemaless" (you do not need to specify the table, its fields, and their data types)

// RDBMS
// DB -> DB (a group of collections - eg. weather, city, conversion_factors)
// Table -> Collection (eg. weather data for many cities)
// Row -> Document (the weather data for a single city)

// Switch to a new DB
use myapp;

// Check which DB you are currently working on
db;

// To get help
help;

// Check the collections in the current DB
show collections;

// Creating persons collection and work with it...
// We will insert a few documents (few persons)
// The persons collection gets created when we insert the first document
/*
myapp (database)
    - persons (collection)
        - john (document)
        - jane (document)
*/
var personsToInsert2 = [
    { _id: ObjectId("615411a837365f52a809ccd7"), name: 'John Doe', age: 32, emails: [ 'john@gmail.com', 'john@fynd.com' ] },
    { _id: ObjectId("615411a837365f52a809ccd8"), name: 'Jane Doe', age: 28, emails: [ 'jane@fynd.com' ] }
];

db.persons.insertMany(
    personsToInsert2,
    { ordered: false } // even if one document insertion fails, carry on trying to insert the remaining documents
);

// generally not preferred - an old API
db.persons.insertOne(
    { name: 'Mark Smith', age: 40, emails: [ 'mark@gmail.com', 'mark@fynd.com' ] }
);

db.persons.insertOne(
    { name: 'Mary Smith', age: 44, emails: [ 'mary@gmail.com', 'mary@fynd.com' ] }
);

// let's try to insert a document with a specified _id field value
db.persons.insertOne(
    { _id: 123, name: 'David Page', age: 60, emails: [ 'david@gmail.com' ] }
);
db.persons.insertOne(
    { _id: 123, name: 'Dorothy Page', age: 64, emails: [ 'dorothy@gmail.com' ] }
);
db.persons.insertOne(
    { _id: ObjectId("61540afa37365f52a809ccd6"), name: 'Chris Beck', age: 10, emails: [] }
);

// We will query to check the persons in the DB
db.persons.find();

// pretty-print the result of a query
db.persons.find().pretty();

// projection (pick out name fields)
// Pass {} to prevent filtering (get all records)
// Mention fields names that you want to pick, and set them as true
// _id is included by default -> you need to set false to prevent _id from being included in the result
db.persons.find( {}, { name: true, _id: false } );

// We will query with some filtering (eg. age > 40)
db.persons.find( { age: 40 } );
db.persons.find({
    age: {
        $gte: 40
    }
});

// We will query based on nested data
db.persons.insertOne(
    {
        name: 'Chloe Beck',
        age: 8,
        address: {
            city: 'Bangalore',
            state: 'Karnataka'
        },
        school: {
            name: 'St. Johns',
            place: 'Koramangala'
        }
    }
);
db.persons.find( { 'address.city': 'Bangalore' } );

db.persons.find({
    emails:'mark@gmail.com'
});

// We will update data (update name, email id etc.) 

db.persons.updateOne(
    {
        name:'Chloe Beck'
    },
    {
        $set:{
            age:60
        }
    }
);

//updateMany is used to update multiple records

db.persons.updateMany({
    emails: 'mark@gmail.com'
},{
    $inc:{
        age:5
    }
});

// We will delete data
db.persons.deleteMany(
    {
        name: 'Mark Smith'
    }
)