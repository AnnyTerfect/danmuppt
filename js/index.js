var curDanmu=0,rcurDanmu;
function createDanmu(message)
{
    var newDanmu=document.createElement("div");
    document.getElementById("danmu").appendChild(newDanmu);
    newDanmu.setAttribute("id","danmu"+curDanmu);
    newDanmu.innerText=message;
    $(newDanmu).css("left","100%");
    $(newDanmu).css("top",Math.random()*$(window).height()+"px");
    $(newDanmu).css("transition","7s");
    $(newDanmu).css("transitionTimingFunction","linear");
    setTimeout(function()
    {
        $(newDanmu).css("left","0");
        $(newDanmu).css("transform","translateX(-100%)");
    },0);
    let _curDanmu=curDanmu;
    setTimeout(function()
    {
        $("#danmu"+_curDanmu).remove();
    },7000);
    curDanmu++;
}
setInterval(function()
{
    var url="http://59.111.103.218/danmu/";
    $.post(url+"curDanmu.php","",function(result)
    {
        rcurDanmu=parseInt(result);
        if(curDanmu<rcurDanmu)
        {
            $.post(url+"getMessage.php","number="+(curDanmu+1),function(message)
            {
                createDanmu(message);
            });
        }
    });
},500);
