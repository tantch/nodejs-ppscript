var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db.sql');


db.serialize(function() {
  db.run(
    "DROP TABLE IF EXISTS character;"
  );
  db.run(
    "CREATE TABLE character (" +
    "C_Id int NOT NULL ," +
    "Name varchar(255) NOT NULL," +
    "PRIMARY KEY(C_Id)  " +
    ");"
  );
  db.run(
    "DROP TABLE IF EXISTS comic;"
  );
  db.run(
    "CREATE TABLE comic (" +
    "Com_Id int NOT NULL ," +
    "Name varchar(255) NOT NULL," +
    "PRIMARY KEY(Com_Id)  " +
    ");"
  );


});

db.close();
