class AppError extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode
        this.explanation = message
    }
}

module.exports = AppError

/*
An Error instance usually has:

name → the type of error (default: "Error", but subclasses exist like TypeError, ReferenceError, etc.).

message → the string you passed when creating it.

stack → a stack trace (where the error happened in your code).

Example
try {
  throw new Error("Something went wrong!");
} catch (err) {
  console.log(err.name);    // "Error"
  console.log(err.message); // "Something went wrong!"
  console.log(err.stack);   // shows stack trace
}
*/