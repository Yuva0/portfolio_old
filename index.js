$(document).ready(function(){
    //To change color of navbar on click
    $('a.nav-anchor').on('click', function() {
        setTimeout(()=>{
            // call RemoveHash function after set Timeout
            removeHash();
        }, 0); //0 millisecond Timeout
        
    });

    //To change color of navbar on scroll
    $(window).on('scroll', function(){
        scrollNav();
    });

    function removeHash(){
        history.replaceState('',document.title, window.location.origin + window.location.pathname + window.location.search)
    }

    function scrollNav(){
        var sTop = $(window).scrollTop()+$(window).height()/3;
        $('.page').each(function(index){
            var id = $(this).attr('id'),
            offset = $(this).offset().top-1,
            height = $(this).height();
            if(sTop>=offset && sTop < offset + height){
                $('a.nav-anchor').removeClass('active');
                
                $('a#anchor'+id).addClass('active');
            }
        });
    }

    $("div.intro-skill-box").click(function(){
        if(!$(this).children(".intro-skill-default").hasClass("hidden_class")){
            if(!$(this).hasClass("rotateOnY")){
                $(this).addClass("rotateOnY");
                setTimeout(()=>{
                    $(this).children('.intro-skill-default').addClass("hidden_class");
                    $(this).removeClass("rotateOnY");
                    $(this).children('.intro-skill-experience').removeClass("hidden_class");
                    $(this).addClass("rotateBackwardsOnY");
                    setTimeout(()=>{
                        $(this).removeClass("rotateBackwardsOnY");
                    }, 500);
                }, 500);
            }
        }
        else{
            if(!$(this).hasClass("rotateOnY")){
                $(this).addClass("rotateOnY");
                setTimeout(()=>{
                    $(this).children('.intro-skill-experience').addClass("hidden_class");
                    $(this).removeClass("rotateOnY");
                    $(this).children('.intro-skill-default').removeClass("hidden_class");
                    $(this).addClass("rotateBackwardsOnY");
                    setTimeout(()=>{
                        $(this).removeClass("rotateBackwardsOnY");
                    }, 500);
                },500);
            }
        }
        
    });
})
function sendEmail(e){
    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "tantheories@gmail.com",    
    //     Password : "tanuj1998",
    //     To : 'senguptanuj@gmail.com',
    //     From : "tantheories@gmail.com",
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // );
    e.preventDefault();
    window.open('mailto:senguptatanuj@gmail.com?subject='+$('#title').val()+'&body='+$('#mailContent').val());
    $('#title').val('');
    $('#mailContent').val('');
    return false;
}

;