const messages = [];

function Send(){
    const ism = document.getElementById('ism').value;
    const sms = document.getElementById('sms').value;
    const d = new Date();
    let hour = d.getHours();
    let minutes = function(){ return (d.getMinutes()<10)?("0"+d.getMinutes()):d.getMinutes()}
    let time = hour + ":" + minutes();
    
    const message = "<div style = 'border: 2px solid #dedede;background-color: #f1f1f1;border-radius: 5px;padding: 20px;margin: 10px 0;'>" + 
    "<img src='avatar.png' alt='Avatar' style='width:100%;float: left;max-width: 60px;width: 100%;margin-right: 20px;border-radius: 50%;'>" +
    "<p>" + sms + "</p>" +
    "<span style = 'float: right;color: #aaa;'>" + ism + "  " + time + "</span>"+
    "</div>" + "<br>";
    messages.push(message);

    

    document.getElementById('messages').innerHTML = messages.join(" ");









    // const message ="<p style='display: inline-block;'>"
    //  + "<small>" + time + "</small>" + " </p> " 
    //  + "<button style='border-radius: 10%; border-color: green; display: inline-block;' disabled>" + ism
    //  + "</button>" + "  " + "<p style='display: inline-block;'>"
    //  + sms + "</p>" + "<br>";
}