var dropdown_tooltip = $('#menu_tooltip');
var dropdown = $('.dropdown');

var search = $('#search');
var search_from = $('.navbar-form');

$(dropdown).click(function(){
    $(dropdown_tooltip).toggle();
});


$(search).click(function(){
    $(search_from).toggle(500);
});

