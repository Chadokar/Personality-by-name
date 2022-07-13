$(document).ready(function(){
    $('button').click(function(){
        const name = $('#nameid').val();
        $('#imgid').attr('src',`https://joeschmoe.io/api/v1/${name}`);
    })
});