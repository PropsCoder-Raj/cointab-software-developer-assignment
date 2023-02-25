
// Fetch Users
$(function () {
    $("#fetchUsersButton").on("click", function () {
        console.log("Hello")
        $("#loader1").show();
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/users/fetch',
            success: function (result) {
                if (result.success === true) {
                    var x = document.getElementById("snackbarSuccess");
                    x.className = "show";
                    x.innerHTML = result.message;
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                    $("#loader1").hide();
                }
            },
            error: function (result) {
                var x = document.getElementById("snackbarDanger");
                x.className = "show";
                x.innerHTML = result.responseJSON.message;
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                $("#loader1").hide();
            }
        });

    })

    $("#deleteUsersButton").on("click", function () {
        console.log("Hello")
        $("#loader2").show();
        $.ajax({
            type: 'delete',
            url: 'http://localhost:3000/users/delete',
            success: function (result) {
                if (result.success === true) {
                    var x = document.getElementById("snackbarSuccess");
                    x.className = "show";
                    x.innerHTML = result.message;
                    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                    $("#loader2").hide();
                }
            },
            error: function (result) {
                var x = document.getElementById("snackbarDanger");
                x.className = "show";
                x.innerHTML = result.responseJSON.message;
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
                $("#loader2").hide();
            }
        });

    })
});