// username
// String
// Unique
// Required
// Trimmed
// email
// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)
// thoughts
// Array of _id values referencing the Thought model
// friends
// Array of _id values referencing the User model (self-reference)
// Schema Settings
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

// Reaction (SCHEMA ONLY)
// reactionId
// Use Mongoose's ObjectId data type
// Default value is set to a new ObjectId
// reactionBody
// String
// Required
// 280 character maximum
// username
// String
// Required
// createdAt
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query
// Schema Settings
// This will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model.