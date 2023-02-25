const axios = require("axios")
const User = require("../models/users")

exports.fetchUsers = (req, res) => {
    try {
        User.getUsers((err, result) => {
            if(err){
                return res.status(400).send(err)
            }

            if(result){
                if(result.data.length > 0){
                    return res.status(200).send({ success: false, message: "Already Fetch Users" })
                }else{
                    var config = {
                        method: 'get',
                        url: 'https://randomuser.me/api?results=50',
                    };
            
                    axios(config)
                        .then(function (response) {
                            User.createMultiUser(
                                response.data.results,
                                (err, usersData) => {
                                    if (err)
                                        return res.status(400).send({
                                            success: false,
                                            message: err.message || "Some error occurred while creating the Users."
                                        });
            
                                    if (usersData.status === true) {
                                        return res.status(200).json({
                                            success: true,
                                            message: "Successfully fetched the users",
                                            data: response.data
                                        });
                                    }
                                }
                            );
                        })
                        .catch(function (error) {
                            throw new Error(error)
                        });
                }
            }

        });
    } catch (error) {
        throw new Error(error)
    }
}

exports.deleteUsers = (req, res) => {
    try {
        console.log("kjefbjskv")
        User.deleteUsers((err, result) => {
            
            console.log("err: ", err)
            console.log("result: ", result)
            if(err){
                return res.status(400).send(err)
            }
            
            return res.status(200).json(result)
        });
    } catch (error) {
        throw new Error(error)
    }
}