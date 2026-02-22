/* ==========================================
   Repeat Animation Script (Table Version)
========================================== */

$(function(){

    $('.repeat').click(function(e){
        e.preventDefault();

        // Find animation inside same table row
        var $row = $(this).closest('tr');
        var $animate = $row.find('.animate');

        // Get full class list (example: "animate one")
        var classes = $animate.attr('class');

        // Reset to only "animate"
        $animate.attr('class', 'animate');

        // Small delay to restart animation
        setTimeout(function(){
            $animate.attr('class', classes);
        }, 20);

    });

});