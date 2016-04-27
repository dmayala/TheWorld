// site.js

(function () {
    console.log('hu');
    var $sidebarAndWrapper = $("#sidebar, #wrapper");

    $("#sidebarToggle").on("click" ,function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show Sidebar");
        } else {
            $(this).text("Hide Sidebar");
        }
    });
})();