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

User.createMultiUser = (newItems, result) => {
  const sql = "INSERT INTO user (cell, dob, email, gender, _id, location, login, name, nat, phone, picture, registered) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const stmt  = db.prepare(sql);
  var bar = new Promise((resolve, reject) => {
    newItems.forEach(async(ele, index, array) => {
      stmt.run([ele.cell, ele.dob, ele.email, ele.gender, ele.id, ele.location, ele.login, ele.name, ele.nat, ele.phone, ele.picture, ele.registered]);

      if(index === array.length - 1) resolve()
    })
  })

  bar.then(async() => {
    await stmt.finalize();

    result(null, { status: true, message: "Create Multiple Users." });
  })
};

User.getUsers = (result) => {
  const sql = `SELECT * FROM user`;
  db.all(sql, [], (err, users) => {
    if (err) {
      console.log("error: ", err);
      return;
    }

    result(null, { status: true, message: "Get Users." });
  });
}

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