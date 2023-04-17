$(function(){
    let num=null;
    let answers=new Array(30);
    for(var c=0;c<30;c++){
        answers[c]=0
    }
    $("#StartButton").on("click",function(){
        if(num==null){
            num=0;
            $("#options").empty();
            $("#question").text(questions[0].question);
            questions[0].answers.forEach(function(element,index){
                $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
            });
            $("#StartButton").attr("value","Next");
        }
        else{
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    answers[num]=(questions[num].answers[i][1]);
                    if(num==29){
                        var scoreForTiger=answers[4]+answers[9]+answers[13]+answers[17]+answers[23]+answers[29];
                        var scoreForPeacock=answers[2]+answers[5]+answers[12]+answers[19]+answers[21]+answers[28];
                        var scoreForKoala=answers[1]+answers[7]+answers[14]+answers[16]+answers[24]+answers[27];
                        var scoreForOwl=answers[0]+answers[6]+answers[10]+answers[15]+answers[20]+answers[25];
                        var scoreForChameleon=answers[3]+answers[8]+answers[11]+answers[18]+answers[22]+answers[26];
                        $("#question").text("最終結果");
                        $("#options").empty();
                        $("#options").append(
                            `<a href="https://bookmarks.tw/pdp/tiger.html">老虎型 (支配型Dominance)</a>：${scoreForTiger}分<br><br>`+
                            `<a href="https://bookmarks.tw/pdp/peacock.html">孔雀型 (表達型Extroversion)</a>：${scoreForPeacock}分<br><br>`+
                            `<a href="https://bookmarks.tw/pdp/koala.html">無尾熊型 (耐心型Patience)</a>：${scoreForKoala}分<br><br>`+
                            `<a href="https://bookmarks.tw/pdp/owl.html">貓頭鷹型 (精確型Conformity)</a>：${scoreForOwl}分<br><br>`+
                            `<a href="https://bookmarks.tw/pdp/chameleon.html">變色龍型 (整合型1/2 Sigma)</a>：${scoreForChameleon}分<br><br>`+
                            "※詳細說明請點擊各類型連結查看");
                        num=null;
                        $("#StartButton").attr("value","重新開始");
                    }
                    else{
                        num+=1;
                        $("#question").text(questions[num].question);
                        $("#options").empty();
                        questions[num].answers.forEach(function(element,index){
                            $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                        });
                    }
                    return false;
                }
            });
        }
    });
});