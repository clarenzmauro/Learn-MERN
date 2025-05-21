mongoose - an ODM (Object Data Modeling) library for MongoDB and Node.js

ODM - allows you to define objects with a strongly-typed schema which are then mapped to MongoDB documents. basically, the blueprint.

mongoose provides helpful features on top of the basic MongoDB Node.js driver:
    - schema definition and validation
    - data type casting
    - query building helpers
    - middleware (hooks) for operations
    - population for referencing docs in other collections

why use mongoose?
    - structure and validation
    - boilerplate reduction 
    - business logic hooks
    - improved readability

core concepts:
1. schema (mongoose.Schema) - where you define the structure of your documents within a collection.
2. model (mongoose.Model) - a model is a constructor compiled from a schema definition. it is responsible for crud operations.