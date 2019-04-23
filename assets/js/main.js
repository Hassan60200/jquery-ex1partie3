// 0 = le nombre de clic sur le bouton au départ
var count = 0;
$(document).ready(function(){
    //si on clique sur le bouton
    $('#push').click(function(){
        // alors on incremente de 1 le count
        count++;
        $('#spam').attr('value',count);
    })
});
