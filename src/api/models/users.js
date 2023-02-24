const db = require("../../config/db");


// constructor
const User = function(user) {
    this.cell = user.cell;
    this.dob = user.dob;
    this.email = user.email;
    this.gender = user.gender;
    this._id = user._id;
    this.location = user.location;
    this.login = user.login;
    this.name = user.name;
    this.nat = user.nat;
    this.phone = user.phone;
    this.picture = user.picture;
    this.registered = user.registered;
}; 
User.create = (newItems, result) => {
  const sql = "INSERT INTO user (cell, dob, email, gender, _id, location, login, name, nat, phone, picture, registered) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.run(sql, newItems, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    getItems();
    result(null, { status: true, message: "A new item has been craeted." });
  });
};

const initUserTable = () => {
  const sql = `CREATE TABLE IF NOT EXISTS user (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    cell TEXT,
    dob TEXT,
    email TEXT,
    gender TEXT,
    _id TEXT,
    location TEXT,
    login TEXT,
    name TEXT,
    nat TEXT,
    phone TEXT,
    picture TEXT,
    registered TEXT,
    CreatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
     )`;

    db.run(sql, (err, res) => {
        if (err) {
          console.log("error: ", err.message);
          return;
        }
    
        // getUser();
        console.log("created User Table");
    });
}

initUserTable();

module.exports = User;