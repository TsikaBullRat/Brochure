let 
    handler1 = 0,
    handler2 = null,
    _ham1Bar1 = document.getElementById("b1-comp1"),
    _ham1Bar2 = document.getElementById("b2-comp1"),
    _ham1Bar3 = document.getElementById("b3-comp1"),
    off1 = document.getElementById("off"),
    //Consider fixing here
    main1 = document.getElementsByTagName("main")[0],
    footer = document.getElementsByTagName("footer")[0],
    nav = document.getElementById("nav"),
    block1 = document.getElementsByTagName("nav")[0],
    links = document.getElementsByClassName("link-set"),
    banner_slabs1 = document.getElementsByClassName("slab-b1"),
    banner_controls1 = document.getElementsByClassName("slab-nav-g"),
    card3 = document.getElementsByClassName("card3"),
    card3_txt = document.getElementsByClassName("card3-text"),
    card3_img = document.getElementsByClassName("img-card3"),
    card3_inner = document.getElementsByClassName("info-card3"),
    name = document.getElementById("name"),
    message = document.getElementById("message"),
    email = document.getElementById("email");




const Display1 = () =>{
    if(handler1 === 0){
        nav.style.zIndex = 1
        off1.style.display = "block"
        nav.style.opacity = 1;
        block1.style.left = 0;
        setTimeout(()=>{
            for(let i = 0; i < links.length; i++){
                let timer = i * 100
                setTimeout(()=>{
                    links[i].style.opacity = 1
                    links[i].style.marginLeft = 0
                }, timer)
            }
        }, 850)
    }else{
        nav.style.zIndex = 0
        nav.style.opacity = 0;
        block1.style.left = "-500px";
        for(let i = 0; i < links.length; i++){
            links[i].style.opacity = 0
            links[i].style.marginLeft = "-1000px"
        }
        off1.style.display = "none"
    }
}
const Switch1 = () =>{


    Display1()
    if(handler1 === 0){
        _ham1Bar2.style.opacity = 0
        _ham1Bar1.style.transform = "rotate(45deg)"
        _ham1Bar3.style.transform = "rotate(-45deg)"
        _ham1Bar3.style.marginTop = "-55px"
        handler1 = 1
    }else{
        _ham1Bar3.style.marginTop = "0px"
        _ham1Bar1.style.transform = "rotate(0deg)"
        _ham1Bar3.style.transform = "rotate(0deg)"
        _ham1Bar2.style.opacity = 1
        handler1 = 0
    }

    
}

const Banner1 = (index) =>{
    for(let i = 0; i < banner_slabs1.length; i++)
        banner_controls1[i].style.boxShadow = "rgba(149, 157, 165, 0.2) 0px 8px 24px";

    switch(index){
        case 0:
            banner_slabs1[index].style.opacity = 1;
            banner_slabs1[index].style.right = 0;
            banner_slabs1[index+1].style.opacity = 0;
            banner_slabs1[index+1].style.left = "150%";
            banner_slabs1[index+2].style.opacity = 0;
            banner_slabs1[index+2].style.left = "150%";
            break;
        case 1:
            banner_slabs1[index].style.opacity = 1;
            banner_slabs1[index].style.left = 0;
            banner_slabs1[index+1].style.opacity = 0;
            banner_slabs1[index+1].style.left = "150%";
            banner_slabs1[index-1].style.opacity = 0;
            banner_slabs1[index-1].style.right = "150%";
            break;
        case 2:
            banner_slabs1[index].style.opacity = 1;
            banner_slabs1[index].style.left = 0;
            banner_slabs1[index-1].style.opacity = 0;
            banner_slabs1[index-1].style.right = "150%";
            banner_slabs1[index-2].style.opacity = 0;
            banner_slabs1[index-2].style.right = "150%";
            break;
    }
    banner_controls1[index].style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
} 

const Email1 = () =>{
    
}
const SendEmail = () =>{
    console.log(name.value)
    console.log(message.value)
    const data = JSON.stringify({
        sendto: 'tsika1996190514@gmail.com',
        name: name.value,
        replyTo: email.value,
        title: `Inquerie from ${name.value}`,
        body: message.value
    });
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });
    
    xhr.open('POST', 'https://mail-sender-api1.p.rapidapi.com/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('X-RapidAPI-Key', '4298e3da2emshf39b08d3bbe2f3cp1ff22ajsn4b60a977651a');
    xhr.setRequestHeader('X-RapidAPI-Host', 'mail-sender-api1.p.rapidapi.com');
    
    xhr.send(data);
} 

const ClickCard1 = (index) =>{
    

    if(handler2 !== index){
        for(let i = 0; i < card3.length; i++){
            card3[i].style.width = "60vw"
            card3[i].style.height = "300px"
            card3[index].style.height = "300px"
            card3_img[i].style.boxShadow = "rgba(0, 0, 0, 0.15) 10px 10px 20px"
            card3_img[i].style.width = "60vw"
            card3_inner[i].style.backgroundColor = "transparent"
            card3_inner[i].style.width = "60%"
            card3_txt[index].style.marginTop = "0"
            card3_txt[i].style.height = "50px"
        }
        card3_img[index].style.boxShadow = "none"
        card3_img[index].style.width = "300px"
        card3[index].style.width = "70vw"
        card3[index].style.height = "500px"
        card3_inner[index].style.backgroundColor = "#e6e6e6"
        card3_inner[index].style.width = "60vw"
        card3_txt[index].style.marginTop = "50px"
        card3_txt[index].style.height = "300px"
        handler2 = index
    }else{
        card3[index].style.width = "60vw"
        card3[index].style.height = "300px"
        card3_img[index].style.boxShadow = "rgba(0, 0, 0, 0.15) 10px 10px 20px"
        card3_img[index].style.width = "60vw"
        card3_inner[index].style.backgroundColor = "transparent"
        card3_inner[index].style.width = "60%"
        card3_txt[index].style.marginTop = "0"
        card3_txt[index].style.height = "50px"
        handler2 = null
    }
}

// const Switch1 = () =>{

//     if(handler1 === 0){
//         _ham1Bar2.style.opacity = 0
//         _ham1Bar1.style.transform = "rotate(45deg)"
//         _ham1Bar3.style.transform = "rotate(-45deg)"
//         _ham1Bar3.style.marginTop = "-20px"
//         handler1 = 1
//     }else{
//         _ham1Bar1.style.transform = "rotate(0deg)"
//         _ham1Bar3.style.transform = "rotate(0deg)"
//         _ham1Bar2.style.opacity = 1
//         handler1 = 0
//     }
    
// }