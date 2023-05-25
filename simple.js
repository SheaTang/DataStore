var low = require("lowdb");
var fs = require("lowdb/adapters/FileSync");
var adapter = new fs("db.json");
var db = low(adapter);

// init the data store
// ---------------------------
db.defaults({ posts: [], user: {} }).write();

// Add a post
db.get("posts").push({ id: 1, title: "lowdb is awsome" }).write();
console.log(db.get("posts").value());

// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
