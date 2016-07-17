$(document).ready(function() {
    var $password = $('#password');
    var $passwordMatch = $('#password-match');
    $password.change(function() {
        var password = $password.val();
        var passwordMatch = $passwordMatch.val();
        if (passwordMatch) {
            if (password != passwordMatch) {
                $('#notice').css({display:'block'});
                $('#notice-text').html('<span>Make sure your passwords match</span>');
            } else {
                $('#notice').css({display:'none'});
            }
        }
    });
    $passwordMatch.change(function() {
        var password = $password.val();
        var passwordMatch = $passwordMatch.val();
        if (password) {
            if (password != passwordMatch) {
                $('#notice').css({display:'block'});
                $('#notice-text').html('<span>Make sure your passwords match</span>');
            } else {
                $('#notice').css({display:'none'});
            }
        }
    });
});