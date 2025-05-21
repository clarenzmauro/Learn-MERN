CRUD - Create, Read, Update, Delete

MongoShell - CLI for interacting directly with MongoDB.

select/create a database:
command: use [DB NAME]

create (insert) documents:
insertOne(): inserts a single document.

example(mongoshell):
db.products.insertOne({
    name: "Macbook Air M1",
    price: 40000,
    category: "Electronics",
    tags: ["laptop", "powerful", "lightweight"],
    stock: 50
})

insertMany(): insert multiple documents. pass an array of documents.

example (mongoshell):
db.products.insertMany([
    { name: "Mouse", price: 10, category: "Electronics", tags: ["peripheral", "ergonomic"], stock: 150},
    { name: "Camera", price: 25, category: "Electronics", tags: ["accessory", "hd"], stock: 10},
    { name: "Node.js Book", price: 5, category: "Books", tags: ["resource", "programming"], stock: 50}
])

read (find) documents:
find() retrieves documents from a collection.

db.products.find() or db.products.find({}) : Retrieves all documents in the products collection.

querying with filters:
db.products.find({ category: "Electronics" }).pretty() : find products in the "Electronics" category

db.products.find({ price: { $lt: 50 } }).pretty() : find products with a price less than 50

common query operators: 
    - $eq - equal
    - $ne - not equal
    - $gt - greater than
    - $gte - greater than or equal
    - $lt - less than
    - $lte - less than or equal
    - $in - matches any value in an array
    - $nin - doesn't match any value in an array

db.products.find({ category: "Electronics", price: { $gt: 1000 } }).pretty() : finds products that are "Electronics" AND price is greater than 1000

db.products.find({ $or: [ { category: "Electronics" }, { category: "Books" } ] }).pretty() : finds products that are "Electronics" OR "Books"

findOne(): retrieves first document that matches the query.

projection (selecting specific fields):
    - you don't need all the fields from a document.
    - 1 means include
    - 0 means exclude
    - _id is included by default unless explicitly excluded.

db.products.find({}, { name: 1, price: 1 }).pretty() : gets the name and price of all products

db.products.find({}, { stock: 0, tags: 0 }).pretty() : gets all field except stock and tags

db.products.find({}, { name: 1, price: 1, _id: 0 }).pretty() : get only name and price but not _id

update documents
updateOne() - a single document that matches the filter
    - takes two arguments: a filter document to select the documents to update, and an update document specifying the modifications.
    - uses update operators like $set (set field's value), $inc (increment a numeric field), $unset (remove a field), $push (add an element to an array)

example:
db.products.updateOne(
  { name: "Laptop Pro" }, : filter; finds the document named "Laptop Pro"                    
  { $set: { price: 1250, lastUpdated: new Date() } } : update; set the price and lastUpdated field
)

updateMany() - updates all documents that match the filter

example:
db.products.updateMany(
  { category: "Electronics" },
  { $addToSet: { tags: "featured" } } : adds a "featured" tag to all "Electronics" products
)

replaceOne() - replaces an entire document with a new on, except for the _id field.

deleteOne() - deletes a single document that matches the filter

example:
db.products.deleteOne({ name: "Coffee Mug" }) : deletes the "Coffee Mug"

deleteMany() - deletes all documents that matches the filter

example:
db.products.deleteMany({ stock: { $lt: 10 } }) : delete all products with stock less than 10

db.products.deleteMany({}) : delete all documents in a collection