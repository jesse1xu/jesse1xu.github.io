// page initialization
$(function () {
    $('#fullpage').fullpage({
        anchors: ['intro', 'webmobile', 'system', 'gadgets', 'design', 'contact'],
        menu: '#projects-menu',
        slidesNavigation: true,
        loopHorizontal: false,
        // fade nav in and out as appropriate
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            var nav = $("#projects-menu");

            if (index == 1 && direction == 'down') {
                nav.stop().animate({
                    opacity: 1
                }, 800);
            } else if (nextIndex == 1 && direction == 'up') {
                nav.stop().animate({
                    opacity: 0
                }, 400);
            }
        }
    });

});

$(document).ready(function()
{
    setTimeout(function()
    {
        // Lorem Ipsum
        $("h1").decrypt_effect({
            speed: 100,
            decrypted_text: "Hi there!  ",
            callback: function()
            {
                setTimeout(function()
                {
                    $("h2").decrypt_effect({
                        speed: 9,
                        decrypted_text: "I'm Jesse, a senior at the University of Pennsylvania passionate about web development, product management, and app design.",
                        callback: function()
                        {
                            setTimeout(() => {
                                $("h2").html("I'm Jesse, a senior at the University of Pennsylvania passionate about <strong style=\"color: #87d3ff;\">entrepreneurship</strong>, <strong style=\"color: #87d3ff;\">product management</strong>, and <strong style=\"color: #87d3ff;\">app design</strong>.");
                            }, 300);
                        }
                    });

                    $("#intro2").decrypt_effect({
                        speed: 9,
                        decrypted_text: "When I'm not up to my eyes in coursework, I enjoy fiddling, cooking, and watching Philly sports teams.",
                        callback: function()
                        {
                            setTimeout(() => {
                                $("#intro2").html("When I'm not up to my eyes in <a class=\"underline\" data-hover=\"coursework\" data-toggle=\"modal\" data-target=\"#classes-modal\">coursework</a>, I enjoy fiddling, cooking, and watching Philly sports teams.");
                            }, 300);
                            
                        }
                    });
                }, 400);

            },

        });

    }, 600);

});

// $(window).load(function()
// {
//     $("h1").decrypt_effect({
//         speed: 100,
//         decrypted_text: "Hi There!",
//         callback: function(){
//             alert("all done!");
//             // maybe do some other stuff
//         },
//     });
// });
