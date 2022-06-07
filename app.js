const btn = document.getElementById('btn');
const btn_2 = document.getElementById('btn-2');
const card_body = document.getElementById('card_body');
const head = document.getElementById('head');
const tag = document.querySelector('#tag');


// layout style and advance btn 
const layout_btn = document.getElementById('layout')
const style_btn = document.getElementById('style')
const advance_btn = document.getElementById('advance')


// layout style advanc div
const layout_div =document.querySelector('.layout')
const style_div =document.querySelector('.style')
const btn_save =document.querySelector('#btn-save')
const la_st_ad =document.querySelector('#la_st_ad');




layout_btn.addEventListener('click',()=>{
    layout_div.classList.toggle('d-none')
    style_div.classList.add('d-none')
    advance_div.classList.add('d-none')
})
style_btn.addEventListener('click',()=>{
    style_div.classList.toggle('d-none')
    layout_div.classList.add('d-none')
    advance_div.classList.add('d-none')

})
advance_btn.addEventListener('click',()=>{
    advance_div.classList.toggle('d-none')
    style_div.classList.add('d-none')
    layout_div.classList.add('d-none')

})


btn_save.addEventListener("click",()=>{
    output.innerHTML =`<h3>You can't save</h3>`;
})












// close_btn
const btn_close =document.querySelectorAll('btn-close');
// close_btn


// icon tag 

const heading = document.getElementById('heading');
const text_size = document.getElementById('text_size');
const color = document.getElementById('color');
const padding = document.getElementById('padding');
const fonts = document.getElementById('fonts');
const font_style = document.getElementById('font_style');
const font_case = document.getElementById('font_case');
const font_weight = document.getElementById('font_weight');
const stopwatch = document.getElementById('stopwatch');
const calculator = document.getElementById('Calculator');
const Paragraph = document.getElementById('para');
const input = document.getElementById('input');
const link_tag = document.getElementById('Link');
const timer = document.getElementById('timer');
const margin = document.getElementById('margin');
const output = document.getElementById('output');
const align_design = document.querySelectorAll('.align_design');

// icon tag 

// disign tag 
const Text_type = document.getElementById('Text_type');
const color_design = document.getElementById('color_design');
const font_size_design = document.getElementById('font_size_design');
const font_weight_design = document.getElementById('font_weight_design');
const padding_design = document.getElementById('padding_design');
const margin_design = document.getElementById('margin_design');
const font_case_design = document.getElementById('font_case_design');
const font_family_design = document.getElementById('font_family_design');
const font_style_design = document.getElementById('font_style_design');
// disign tag 


// output 

const h1 = document.querySelector('h1');



heading.addEventListener('click',()=>{
    style_div.classList.remove('d-none')
})


// output 



// div 
const text_div = document.getElementById('text_div');
const color_div = document.getElementById('color_div');
const font_size_div = document.getElementById('font_size_div');
const font_wight_div = document.getElementById('font_wight_div');
const ptoggleing_div = document.getElementById('padding_div');
const font_case_div = document.getElementById('font_case_div');
const margin_div = document.getElementById('margin_div');
const font_style_div = document.getElementById('font_style_div');
const font_family_div = document.getElementById('font_family_div');
const align_div = document.getElementById('align_div');
const Hide = document.getElementById('hide');
const stopwatch_div = document.getElementById('stopwatch_div');
const timer_div = document.getElementById('timer_div');
const elementor = document.getElementById('elementor');




// div 





// menu button 
btn_2.addEventListener('click',(e)=>{
    e.preventDefault();
    card_body.classList.toggle('d-none');
})


btn.addEventListener('click',()=>{
    Hide.classList.add('d-none');
    elementor.classList.remove('d-none')

})
elementor.addEventListener('click',()=>{
    Hide.classList.remove('d-none');
    elementor.classList.add('d-none');
})


// menu button 









// div shower toggle button 


heading.addEventListener('click',(e)=>{
    e.preventDefault();
    text_div.classList.toggle('d-none');
    card_body.classList.add('d-none');
    btn_save.classList.remove('d-none')

})
text_size.addEventListener('click',(e)=>{
    e.preventDefault();
    font_size_div.classList.toggle('d-none');
    card_body.classList.add('d-none');

})
color.addEventListener('click',(e)=>{
    e.preventDefault();
    color_div.classList.toggle('d-none');
    card_body.classList.add('d-none');

})
padding.addEventListener('click',(e)=>{
    e.preventDefault();
    padding_div.classList.toggle('d-none');
    card_body.classList.add('d-none');

})
align.addEventListener('click',(e)=>{
    e.preventDefault();
    align_div.classList.toggle('d-none');
    card_body.classList.add('d-none');

})
font_weight.addEventListener('click',(e)=>{
    e.preventDefault();
    font_wight_div.classList.toggle('d-none');
    card_body.classList.add('d-none');

})

fonts.addEventListener('click',(e)=>{
    e.preventDefault();
    font_family_div.classList.toggle('d-none')
    card_body.classList.add('d-none');

})

font_style.addEventListener('click',(e)=>{
    e.preventDefault();
    font_style_div.classList.toggle('d-none');
    card_body.classList.add('d-none');

})
font_case.addEventListener('click',(e)=>{
    e.preventDefault();
    font_case_div.classList.toggle('d-none');
    card_body.classList.add('d-none');

})
margin.addEventListener('click',(e)=>{
    e.preventDefault();
    margin_div.classList.toggle('d-none');
    card_body.classList.add('d-none');

})

stopwatch.addEventListener('click',(e)=>{
    e.preventDefault();
    stopwatch_div.classList.toggle('d-none');
    card_body.classList.add('d-none');
})

timer.addEventListener('click',(e)=>{
    e.preventDefault();
    timer_div.classList.toggle('d-none');
    card_body.classList.add('d-none');
})


// div shower toggle button 

// text writting 
Text_type.onkeyup =(e)=>{
    e.preventDefault();
    output.innerHTML =Text_type.value;
}
// text writting 

// value changing here 

color_design.oninput = (e)=>{
    e.preventDefault();
    output.style.color = color_design.value;
}

font_size_design.onchange=(e)=>{
    e.preventDefault();
    output.style.fontSize = `${font_size_design.value}px`;
}

padding_design.oninput =(e)=>{
    e.preventDefault();
    output.style.padding = `${padding_design.value}px`
}

align_design.forEach(element => {
    element.addEventListener('click',(e)=>{
    e.preventDefault()
      output.style.textAlign = element.value;
    })
});

font_weight_design.onchange=(e)=>{
    e.preventDefault();
    output.style.fontWeight = font_weight_design.value;
}

font_family_design.onchange=(e)=>{
    e.preventDefault();
       output.style.fontFamily = font_family_design.value;
   }

font_style_design.onchange=(e)=>{
    e.preventDefault();
    output.style.fontStyle = font_style_design.value;
}

font_case_design.onchange=(e)=>{
    e.preventDefault();
    output.style.textTransform = font_case_design.value;
}
margin_design.onchange = (e)=>{
e.preventDefault();
    output.style.margin = `${margin_design.value}px`
}
// value changing here 



// create element 
const para =document.createElement("p");
const Input =document.createElement("input");
const Link_tag =document.createElement("a");
para.innerText = "hello world";
Link_tag.innerText ='button';
Link_tag.href = "#";

Paragraph.onclick=(e)=>{
    e.preventDefault();
    tag.appendChild(para);
}

input.onclick = (e)=>{
e.preventDefault();
    tag.appendChild(Input);
}

Paragraph.onclick = (e)=>{
e.preventDefault();
    tag.appendChild(Link_tag);
}







// stopwatch
const time_output = document.getElementById('time_output');
const time_start = document.getElementById('time_start');
const time_stop = document.getElementById('time_stop');
const time_reset = document.getElementById('time_reset');

let milisecond = 00;
let second = 00;
let munite = 00;
let hour = 00;
let setintervel ='';


// star intervale 
time_start.addEventListener('click', (e)=>{
e.preventDefault();
        setintervel = setInterval(() => {
          msmh();
          audio_4.play();
    },10);


})


// close start intervale



// stop inter vale 


time_stop.addEventListener('click',(e)=>{
    e.preventDefault();
    clearInterval(setintervel);
})

//close  stopintervale


// reset interval 
time_reset.addEventListener('click', (e)=>{
e.preventDefault();
    clearInterval(setintervel);
    clear();
})

// close reset inervale



// timer start 
const timer_output =document.getElementById('timer_output');
const timer_start =document.getElementById('timer_start');
const timer_back =document.getElementById('timer_back');
const timer_reset =document.getElementById('timer_reset');
const audio_1 =document.getElementById('audio_1');
const audio_2 =document.getElementById('audio_2');
const audio_3 =document.getElementById('audio_3');
const audio_4 =document.getElementById('audio_4');


let count = 0;

timer_start.addEventListener('click',(e)=>{
e.preventDefault()
    if(count<=10){
        timer_output.innerHTML = `${count++}`
        audio_1.play();
        
    }else{
        timer_output.innerHTML = count;
    }
})
timer_back.addEventListener('click',(e)=>{
        e.preventDefault();

    if(count>=0){
        timer_output.innerHTML = `${count--}`
        audio_2.play();
    }else{
        timer_output.innerHTML = 0;
    }
})
timer_reset.addEventListener('click',(e)=>{
    e.preventDefault();
    if(count>=0){
        timer_output.innerHTML = `${count=0}`;
        audio_3.play();
    }else{
        timer_output.innerHTML = 0;
    }
})


// timer stop 



// calculator

// const mc =document.getElementById('mc');
// const m_plus =document.getElementById('m_plus');
// const divided =document.getElementById('divided');
// const multi =document.getElementById('multi');
// const seven =document.getElementById('seven');
// const eight =document.getElementById('eight');
// const nine =document.getElementById('nine');
// const minus =document.getElementById('minus');
// const six =document.getElementById('six');
// const five =document.getElementById('five');
// const four =document.getElementById('four');
// const plus =document.getElementById('plus');
// const one =document.getElementById('one');
// const two =document.getElementById('two');
// const three =document.getElementById('three');
// const zero =document.getElementById('zero');
// const decimal =document.getElementById('decimal');
// const equal =document.getElementById('equal');



// const cal_output = document.getElementById('cal_output');
// const cal_div = document.getElementById('cal_div');


// const click_vlaue = document.querySelectorAll('click_value');

// click_vlaue.forEach((items)=>{
//      items.onclick=()=>{
//          cal_output.innerHTML = items.value
//              }
// })

