// window.onload = function(){
//     // alert("hi");
// };

let imageURL_Array = [
    "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
    "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
    "https://pic03.eapple.com.tw/siangnong/xn_i_img02.png",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/372073/60ad2eda9638fa38.jpg",
    "additem.jpg"
];


$(function(){
    $('input[id="choose"]').on("click",function(){
        // alert("Hi");
        // $("h1").text("Hello");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        while($("h1").text()==$("li").eq(randomChildNumber).text())
        {
            console.log("repeat");
            randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        }
        $("h1").text($("li").eq(randomChildNumber).text());
        // change image -> change image element's src
        if(randomChildNumber<4){
            $("img").attr("src",imageURL_Array[randomChildNumber]);
        }
        else
        {
            $("img").attr("src",imageURL_Array[4]);
        }
        
    });
    $('input[id="add"]').on("click",function(){
        additem = document.querySelector('input[id="addli"]').value.toString();
        if(additem!="")
        {
            $("ul").append(`<li>${additem}</li>`);
            $("#addli").val("");
        }

    });
});