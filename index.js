$(function() {
    $('i').each(function() {
        $(this).attr('status', 0);
        $(this).click(function() {
            var status = $(this).attr('status');
            console.log(status);
            if (status == 0) {
                openMenu($(this));
            } else {
                closeMenu($(this));
            }
        });
    });

    var openMenu = function($obj) {
        console.log('open');
        $obj.attr('status', 1);
        $obj.addClass('trans')
            .addClass('rotate');
        setTimeout(
            function() {
                $obj.html('&#xe616;')
            }, 500);
    }

    var closeMenu = function($obj) {
        console.log('close');
        $obj.attr('status', 0);
        $obj.removeClass('rotate');
        setTimeout(
            function() {
                $obj.html('&#xe64f;')
            }, 500);
    }

});
