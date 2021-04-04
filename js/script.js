$('.btn-menu').click(function () {
    if ($('.sidepanel').hasClass('sr-only') == false) {
        $('.sidepanel').addClass('sr-only');
        $('.content-panel').removeClass('col-lg-9');
        $('.content-panel').addClass('col-lg-12');
        $('.card').addClass('ml-3');
        $('.nav-breadcrumb').addClass('ml-3');
    } else {
        $('.sidepanel').removeClass('sr-only');
        $('.content-panel').removeClass('col-lg-12');
        $('.card').removeClass('ml-3');
        $('.content-panel').addClass('col-lg-9');
        $('.nav-breadcrumb').removeClass('ml-3');
    }
})

