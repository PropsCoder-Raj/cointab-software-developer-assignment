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
                    return res.status(400).send({ success: false, message: "Already Fetch Users" })
                }else{
                    var config = {
                        method: 'get',
                        url: 'https://randomuser.me/api?results=50',
                    };
            
                    axios(config)
                        .then(function (response) {
                            User.createMultiUser(
                                response.data.results,
                                (err, result) => {
                                    if (err)
                                        return res.status(400).send({
                                            success: false,
                                            message: err.message || "Some error occurred while fetching the users."
                                        });
            
                                    if (result.status === true) {
                                        return res.status(200).send({
                                            success: true,
                                            message: result.message,
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
        User.getUsers((err, result) => {
            if(err){
                return res.status(400).send(err)
            }

            if(result){
                if(result.data.length > 0){
                    User.deleteUsers((err, result) => {
                        if(err){
                            return res.status(400).send({
                                success: false,
                                message: err.message || "Some error occurred while deleteing the users."
                            });
                        }
            
                        if (result.status === true) {
                            return res.status(200).send({
                                success: true,
                                message: result.message
                            });
                        }
                    });
                }else{
                    return res.status(400).send({ success: false, message: "Users not found." })
                }
            }
        });
    } catch (error) {
        throw new Error(error)
    }
}