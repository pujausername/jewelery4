$(document).on('click','.nav_bar .fa-times',function(){
    $('.nav_bar').hide();
    $('.slide_img').show();
})
$(document).on('click','.fa-bars',function(){
    $('.slide_img').hide();
    $('.nav_bar').show();
})