const { pg } = require("./conn");

/////////////////////////////////
// Example Schema Builder
// Check if table exists if not, creates it
/////////////////////////////////

pg.schema.hasTable("rats").then(function (exists) {
  if (!exists) {
    return pg.schema.createTable("rats", function (t) {
      t.increments("id").primary();
      t.string("name", 100);
      t.integer("age");
    });
  } else {
    console.log("The rats Table Exists");
  }
});
