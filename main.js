$(document).ready(function() {
    $(".nav li a").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});