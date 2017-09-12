function send()
{
    var url="http://59.111.103.218/danmu/"
    $.post(url+"send.php","message="+document.getElementById("message").value,"");
    document.getElementById("message").value="";
}
