const templates = [
    "./templates/business/template1.html", 
    "./templates/business/template2.html"
]
let 
    frame = document.getElementById("singlepageframe"), 
    link1 = document.getElementById("link1"),
    btn1 = document.getElementsByClassName("btn1");

    console.log(frame)
const Template = (index) =>{
    console.log(frame.href)
    frame.setAttribute('src', templates[index])
    link1.setAttribute('href', templates[index])

    for(let i = 0; i < btn1.length; i++){
        btn1[i].setAttribute('class', 'btn1')
    }
    btn1[index].setAttribute('class', 'btn1 active')
}