$(document).ready(function(){
    //arthur
    $('#arthur-h1').click(function(){
        $('#arthur-main').slideToggle()

        const destinoArthur = $('.arthur-conteudo')

        $('html').animate({
            scrollTop: destinoArthur.offset().top
        }, 1000);
        });

    // john
    $('#john-h2').click(function(){
        $('#john-main').slideToggle()

        const destinoJohn = $('.john-conteudo')
        
        $('html').animate({
            scrollTop: destinoJohn.offset().top
        },1000);
    });

    
});