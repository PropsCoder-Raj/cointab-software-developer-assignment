
// Fetch Users
$(function () {
    $("#fetchUsersButton").on("click", function () {
        console.log("Hello")

        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/users/fetch',
            success: function (result) {
                console.log("Result: ", result)
            }
        });

    })
});