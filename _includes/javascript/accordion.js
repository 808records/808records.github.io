$(document).ready(function() {
    $('.accordion-title').click(function() {
        $(".accordion-container").not($(this).closest(".accordion-container")).removeClass("active");
        $(this).closest(".accordion-container").toggleClass("active");
    });
});
