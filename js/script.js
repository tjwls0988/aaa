window.onload=function(){
    $('.lnb').hide()
    $('nav > ul > li').on('mouseover',function(){
        $(this).find(".lnb").stop().slideDown()
    })
    $('nav > ul > li'). on('mouseout',function(){
        $(this).find('.lnb').stop().slideUp()
    })
}