
// Fetch Users
$(function () {
    $("#fetchUsersButton").on("click", function () {
        console.log("Hello")
        $.ajax({
            type: 'GET',
            url: '/',
            success: function (result) {
                $('#champ').html(result);
            }
        });

    })
});