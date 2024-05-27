arr = [
    { songname: "Soulmate", url : "./songs/Soulmate.mp3", img:"./images/Soulmate.jpg"},
    { songname: "Pehle Bhi Main", url : "./songs/Pehle Bhi Main.mp3", img:"./images/PehleBhiMain.jpg"},
    { songname: "Heeriye", url : "./songs/Heeriye.mp3", img:"./images/Heeriye.jpg"},
    { songname: "Ve Haniya", url : "./songs/Ve Haniya.mp3", img:"./images/VeHaniya.jpg"}
]

var allsongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")
var play = document.querySelector("#play")
var forword = document.querySelector("#forword")
var backword = document.querySelector("#backword")
var audio = new Audio()
var selectedsong = 0 
function mainfunction(){
    var clutter = ""
    arr.forEach(function(elem, index){
    clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${elem.img}
            alt="">
        <h2>${elem.songname}</h2>
    </div>
    <h6>3:56</h6>
    </div>`
    })
    audio.src = arr[selectedsong].url
    poster.style.backgroundImage = `url(${arr[selectedsong].img })` 
    allsongs.innerHTML = clutter

}
mainfunction()



allsongs.addEventListener("click", function(details){
    selectedsong = details.target.id 
    mainfunction()
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    flag = 1
    audio.play()
    // console.log(arr[details.target.id].url);
})


var flag = 0
play.addEventListener("click",function(){
    if(flag == 0){   
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        mainfunction()
        audio.play()
        flag = 1
    }else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        mainfunction()
        audio.pause()
        flag = 0
    }
})

forword.addEventListener("click",function(){
    if(selectedsong <= (arr.length) -1 ){
        selectedsong++
        mainfunction()
        audio.play()
        flag = 1
        play.innerHTML = `<i class="ri-pause-fill"></i>`
    }else{
        forword.style.opacity = 0.3
    }
})
backword.addEventListener("click",function(){
    if(selectedsong > 0){
        selectedsong--
        mainfunction()
        audio.play()
        flag = 1
    }else{
        backword.style.opacity = 0.3
    }
})