// ----------------------------------메인 사진 슬라이더-------------------------------------
function init(){
    const button = document.querySelector('.btn');
    const slide = document.querySelector('.slide > div');
    const figure = document.querySelectorAll('.slide figure');


    let cloneFirst = figure[0].cloneNode(true);
    let cloneLast = figure[4].cloneNode(true);

        slide.append(cloneFirst);
        slide.prepend(cloneLast);

        let it=1;

        slide.style = `transform:translateX(${-it*100}%);`;

    

        
        
        button.addEventListener('click',()=>{
            let btnName = event.target.dataset.btn;

            if(btnName == 'next'){
                if(it < 6) it++;
            }else{
                if(it > 0) it--;
            }
            
            slide.style = `transition:1s; transform:translateX(${-it*100}%);`;

            setTimeout(()=>{
                if(it == 6){
                    it = 1;
                    slide.style = `transition:0s; transform:translateX(${-it*100}%);`;
                } else if(it==0) {
                    it=5;
                    slide.style = `transition:0s; transform:translateX(${-it*100}%);`;
                }
            },1100);
            
            

    });

    // ==========================================메인 페이지 섹션 슬라이더========================================================

    const contents =document.querySelector('.all');
    const btn =document.querySelectorAll('aside button');
    const section = document.querySelectorAll('section');
    let offset= [];
    // offset[0] =1000;
    // offset.push();




    section.forEach((ele,k)=>{
        if(k!=5){
            offset.push(ele.offsetTop) ;
        }else{
            offset.push(ele.offsetTop - (window.innerHeight - ele.offsetHeight)) ;
        }
    });

    // 버튼 수만큼 반복하세용 
    let inter, idx=0;
    let sd = {y:0, y2:0, state:true}

    function scrollState(){
        sd.y = window.pageYOffset
        sd.state= (sd.y > sd.y2) ? true : false;
        sd.y2 = sd.y;
    }
    window.addEventListener('scroll',()=>{
            scrollState();

            clearTimeout(inter);
            inter = setTimeout(()=>{
            if(sd.state){
                // down
            if(idx < 5 )idx ++;
            }else{
                // up
                if(idx > 0)idx --;
                
            }

                contents.style = `transform:translateY(-${offset[idx]}px)`;

                btn.forEach((v,k)=>{
                    btn[k].classList.remove('active');
                })

                btn[idx].classList.add('active');
            },50)       
            

        })
        


        document.body.style = `height:${contents.offsetHeight }px`;
}
window.onload = init;

// ---------------------------ss-----------버튼 슬라이드 이벤트

const btn3 = document.querySelectorAll('aside button');
const section3 = document.querySelectorAll('section');
let offset3 = [];
// offset[0] = 1000;
// offset.push();

section3.forEach((ele)=>{
    offset3.push( ele.offsetTop );            
});

//버튼 수만큼 반복하라
let idxx=0;
btn3.forEach((ele,key)=>{
    //각 버튼에 클릭이벤트 발생
    ele.addEventListener('click',()=>{
        //스크롤 이동
        window.scrollTo({
            left:0,
            top:offset3[key],
            behavior:'smooth'
        });
        
        // btn[idx].classList.remove('active')
        // btn[key].classList.add('active')
        // idx=key;
    })
})

let inter3,num3=0;       
window.addEventListener('scroll',()=>{
    
    offset3.forEach((v,k)=>{
        if(window.pageYOffset >= offset3[k]){
            btn3[idxx].classList.remove('active')
            btn3[k].classList.add('active')
            idxx = k;
        }
    })  
    
})