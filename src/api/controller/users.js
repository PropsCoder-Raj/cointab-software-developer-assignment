const axios = require("axios")
const User = require("../models/users")

exports.fetchUsers = (req, res) => {
    try {

        const usersList = User.getUsers();
        if(usersList.length > 0) {
            console.log("usersList.length: ", usersList.length);
            return res.status(409).send({ success: false, message: "Fetch users successfully." })
        }
        // console.log("usersList: ", usersList)

        // var config = {
        //     method: 'get',
        //     url: 'https://randomuser.me/api?results=50',
        // };

        // axios(config)
        //     .then(function (response) {
        //         // console.log(JSON.stringify(response.data));
        //         User.createMultiUser(
        //             response.data.results,
        //             (err, usersData) => {
        //                 if (err)
        //                     return res.status(400).send({
        //                         success: false,
        //                         message: err.message || "Some error occurred while creating the Users."
        //                     });

        //                 if (usersData.status === true) {
        //                     return res.status(200).json({
        //                         success: true,
        //                         message: "Successfully fetched the users",
        //                         data: response.data
        //                     });
        //                 }
        //             }
        //         );
        //         // return res.send({ success: true, message: "Fetch User Successfully.", data: response.data })
        //     })
        //     .catch(function (error) {
        //         throw new Error(error)
        //     });
    } catch (error) {
        throw new Error(error)
    }
}