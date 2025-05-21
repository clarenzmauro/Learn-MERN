M for? - MongoDB

database - allows you to store, retrieve, update, and manage information efficiently.

SQL vs No-SQL databases

SQL
    - data is stored in tables with predefined schemas (columns with specific data types)
    - uses SQL (Structured Query Language) to interact with data.
    - good for complex relationships and ensures data integrity through strict schemas

NoSQL
    - often more flexible with schemas 
    - can scale horizontally more easily for very large datasets
    - mongoDB is a document database which stores data in document formats like JSON or BSON.

MongoDB: a nosql document database

BSON - Binary JSON

key concepts:
1. database
    - physical container for collections. a single mongodb server can host multiple collections.

2. collection
    - a grouping of mongodb documents.
    - roughly the equivalent of tables in relational databases.

3. document
    - a single record in a mongodb collection, stored in BSON format.

4. field
    - a name-value pair in a document.

5. _id field
    - acts as a primary key. mongodb automatically generates a unique ObjectId if you insert a document without an _id.

Why MongoDB for MERN?

- JavaScript: data flows very naturally through the stack.
- Flexible schema: great for rapid development and evolving applications.
- Scalability: designed to scale horizontally.
- Rich Query Language: has a powerful query language for finding and manipulating documents.
- Performance: very fast for many use cases. 

mongoose - a driver for programmatic access from applications like node.js/express.