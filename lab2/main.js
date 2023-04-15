$(function(){
    let inputdate = document.querySelector('input[type="date"]').value.toString();
    YYYYMMDD=inputdate.split('-');
    console.log(inputdate);
    setMonthAndDay(parseInt(YYYYMMDD[1]),parseInt(YYYYMMDD[2]));
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount= topic.length;
    let millisecsPerDay=24*60*60*1000;
    
    for(var x=0;x<topicCount;x++){
        var date = new Date(startDate.getTime()+7*x*millisecsPerDay).toLocaleDateString();
        date = date.substring(5,9);            
        if(x%2==0){
            $("#courseTable").append("<tr>"+
            `<td style="background-color:#50C878">${x+1}</td>`+
            `<td style="background-color:#50C878">${date}</td>`+
            `<td style="background-color:#50C878">${topic[x]}</td>`+
            "</tr>");
            if(topic[x] == '國定假日'||topic[x] == '停課')
            {
                document.getElementById("courseTable").rows[x+1].style.color = "gray";
            }
        }
        else{
            $("#courseTable").append("<tr>"+
            `<td style="background-color:white">${x+1}</td>`+
            `<td style="background-color:white">${date}</td>`+
            `<td style="background-color:white">${topic[x]}</td>`+
            "</tr>");
            if(topic[x] == '國定假日'||topic[x] == '停課')
            {
                document.getElementById("courseTable").rows[x+1].style.color = "gray";
            }
        }
    }
});
$('input[type="date"]').on("change",function(){
    let inputdate = document.querySelector('input[type="date"]').value.toString();
    YYYYMMDD=inputdate.split('-');
    console.log(inputdate);
    $("#courseTable").empty();
    setMonthAndDay(parseInt(YYYYMMDD[1]),parseInt(YYYYMMDD[2]));
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount= topic.length;
    let millisecsPerDay=24*60*60*1000;
    
    for(var x=0;x<topicCount;x++){
        var date = new Date(startDate.getTime()+7*x*millisecsPerDay).toLocaleDateString();
        date = date.substring(5,9);            
        if(x%2==0){
            $("#courseTable").append("<tr>"+
            `<td style="background-color:#50C878">${x+1}</td>`+
            `<td style="background-color:#50C878">${date}</td>`+
            `<td style="background-color:#50C878">${topic[x]}</td>`+
            "</tr>");
            if(topic[x] == '國定假日'||topic[x] == '停課')
            {
                document.getElementById("courseTable").rows[x+1].style.color = "gray";
            }
        }
        else{
            $("#courseTable").append("<tr>"+
            `<td style="background-color:white">${x+1}</td>`+
            `<td style="background-color:white">${date}</td>`+
            `<td style="background-color:white">${topic[x]}</td>`+
            "</tr>");
            if(topic[x] == '國定假日'||topic[x] == '停課')
            {
                document.getElementById("courseTable").rows[x+1].style.color = "gray";
            }
        }
    }
});
$('input[type="button"]').on("click",function(){
    let inputdate = document.querySelector('input[type="date"]').value.toString();
    YYYYMMDD=inputdate.split('-');
    console.log(inputdate);
    inputtext=document.querySelector('input[type="text"]').value.toString();
    topic.push(inputtext);
    $('input[type="text"]').val("");
    $("#courseTable").empty();
    setMonthAndDay(parseInt(YYYYMMDD[1]),parseInt(YYYYMMDD[2]));
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount= topic.length;
    let millisecsPerDay=24*60*60*1000;
    
    for(var x=0;x<topicCount;x++){
        var date = new Date(startDate.getTime()+7*x*millisecsPerDay).toLocaleDateString();
        date = date.substring(5,9);            
        if(x%2==0){
            $("#courseTable").append("<tr>"+
            `<td style="background-color:#50C878">${x+1}</td>`+
            `<td style="background-color:#50C878">${date}</td>`+
            `<td style="background-color:#50C878">${topic[x]}</td>`+
            "</tr>");
            if(topic[x] == '國定假日'||topic[x] == '停課')
            {
                document.getElementById("courseTable").rows[x+1].style.color = "gray";
            }
        }
        else{
            $("#courseTable").append("<tr>"+
            `<td style="background-color:white">${x+1}</td>`+
            `<td style="background-color:white">${date}</td>`+
            `<td style="background-color:white">${topic[x]}</td>`+
            "</tr>");
            if(topic[x] == '國定假日'||topic[x] == '停課')
            {
                document.getElementById("courseTable").rows[x+1].style.color = "gray";
            }
        }
    }
});
