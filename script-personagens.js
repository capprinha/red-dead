$(document).ready(function(){
    //arthur
    $('#arthur-h1').click(function(){
        $('#arthur-main').slideToggle()

        const destinoArthur = $('#arthur-conteudo')

        $('html').animate({
            scrollTop: destinoArthur.offset().top
        }, 1000);
        });

    // john
    $('#john-h2').click(function(){
        $('#john-main').slideToggle()

        const destinoJohn = $('#john-conteudo')
        
        $('html').animate({
            scrollTop: destinoJohn.offset().top
        },1000);
    });

    // dutch
    $('#dutch-h2').click(function(){
        $('#dutch-main').slideToggle()

        const destinoJohn = $('#dutch-conteudo')
        
        $('html').animate({
            scrollTop: destinoJohn.offset().top
        },1000);
    });
    
    // sadie
    $('#sadie-h2').click(function(){
        $('#sadie-main').slideToggle()

        const destinoJohn = $('#sadie-conteudo')
        
        $('html').animate({
            scrollTop: destinoJohn.offset().top
        },1000);
    });

    // hosea
    $('#hosea-h2').click(function(){
        $('#hosea-main').slideToggle()

        const destinoJohn = $('#hosea-conteudo')
        
        $('html').animate({
            scrollTop: destinoJohn.offset().top
        },1000);
    });

    // javier
    $('#javier-h2').click(function(){
        $('#javier-main').slideToggle()

        const destinoJohn = $('#javier-conteudo')
        
        $('html').animate({
            scrollTop: destinoJohn.offset().top
        },1000);
    });
});