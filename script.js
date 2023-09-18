const open = document.getElementById('open');
const close = document.getElementById('close');
const rotate = document.querySelector('.rotate');
const circle = document.querySelector('.circle');
const body = document.querySelector('body');
const content = document.querySelector('.container');
const overlay = document.createElement('DIV');
body.appendChild(overlay);

open.addEventListener('click',()=> {
    rotate.classList.add('show-nav');
    circle.classList.add('show-nav');
    content.classList.add('overlay');
    overlay.classList.add('overlay');

    if(overlay.classList.contains('overlay')){
        overlay.addEventListener('click',()=>{
            rotate.classList.remove('show-nav');
            circle.classList.remove('show-nav');
            content.classList.remove('overlay');
            overlay.classList.remove('overlay');
        });
    }
});

close.addEventListener('click',()=> {
    rotate.classList.remove('show-nav');
    circle.classList.remove('show-nav');
    content.classList.remove('overlay');
    overlay.classList.remove('overlay');
});

rotate.addEventListener('click',()=>{
    rotate.classList.remove('show-nav');
    circle.classList.remove('show-nav');
    content.classList.remove('overlay');
    overlay.classList.remove('overlay');
});

document.addEventListener('DOMContentLoaded',function(){
    obs();
})
const options={
    rootMargin:'-100px'
}

function callback (entries){
    const boxesUp = document.querySelectorAll('.up');
    const boxesDown = document.querySelectorAll('.down');
    boxesUp.forEach(box=>{
        if(entries[0].isIntersecting){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
    boxesDown.forEach(box=>{
        if(entries[0].isIntersecting){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })

}

function obs(){
    const observer = new IntersectionObserver(callback,options)

    observer.observe(document.querySelector('.about'));
}

const panels = document.querySelectorAll('.panel');
const title = document.querySelector('.title');
panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active');
    })
});
function removeActiveClasses(){
    title.addEventListener('click',()=>{
        panels.forEach((panel)=>{
            panel.classList.remove('active');
        })
    })
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}

const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx)=>`<span style="transition-delay:${idx*50}ms">${letter}</span>`)
    .join('')
})
const singinBtn = document.querySelector('.singinBtn');
const singupBtn = document.querySelector('.singupBtn');
const formBx = document.querySelector('.formBx');
const circulo = document.querySelector('.circulo');
const circulo2 = document.querySelector('.circulo2');
const circulo3 = document.querySelector('.circulo3');

singupBtn.onclick=function(){
    formBx.classList.add('active');
    circulo.classList.add('active');
    circulo2.classList.add('active');
    circulo3.classList.add('active');
}
singinBtn.onclick=function(){
    formBx.classList.remove('active');
    circulo.classList.remove('active');
    circulo2.classList.remove('active');
    circulo3.classList.remove('active');
}
