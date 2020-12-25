$(document).ready(function() {
    $('.accordion-title').click(function() {
        $(".accordion-container").not($(this).closest(".accordion-container")).removeClass("active").attr("aria-expanded","false");
        $(this).closest(".accordion-container").toggleClass("active").attr("aria-expanded","true");
    });
});
