import './style.css'


const burgerMenu = document.querySelector('#burger-menu')!;
const navBar = document.querySelector<HTMLDivElement>('#burger-navbar')!;

const op1 = document.querySelector('#option-1') as HTMLButtonElement;
const op2 = document.querySelector('#option-2')!;
const op3 = document.querySelector('#option-3')!;
const op4 = document.querySelector('#option-4')!;

const burgerTop = document.querySelector('#burger-top')!;
const burgerMiddle = document.querySelector('#burger-middle')!;
const burgerBottom = document.querySelector('#burger-bottom')!;

const sideBar = document.querySelector('#side-bar')!;

var state = 1;

burgerMenu.addEventListener('click', () => {

  navBar.classList.toggle('translate-x-[35rem]')

  if(state == 1){
    state=2;
    op1.classList.add('text-white')
    op1.classList.remove('text-[#FFFFFF00]')

    op2.classList.add('text-white')
    op2.classList.remove('text-[#FFFFFF00]')

    op3.classList.add('text-white')
    op3.classList.remove('text-[#FFFFFF00]')

    op4.classList.add('text-white')
    op4.classList.remove('text-[#FFFFFF00]')


    burgerTop.classList.add('-rotate-45', 'translate-y-[9px]')
    burgerMiddle.classList.add('hidden')
    burgerBottom.classList.add('rotate-45', '-translate-y-[9px]')


    sideBar.classList.remove('translate-x-[11rem]')

    console.log(burgerTop.classList)

  }else{
    state=1;
    op1.classList.add('text-white')
    op1.classList.remove('text-[#FFFFFF00]')
    
    op2.classList.add('text-white')
    op2.classList.remove('text-[#FFFFFF00]')
    
    op3.classList.add('text-white')
    op3.classList.remove('text-[#FFFFFF00]')

    op4.classList.add('text-white')
    op4.classList.remove('text-[#FFFFFF00]')

    burgerTop.classList.remove('-rotate-45', 'translate-y-[9px]')
    burgerMiddle.classList.remove('hidden')
    burgerBottom.classList.remove('rotate-45', '-translate-y-[9px]')

    sideBar.classList.add('translate-x-[11rem]')
  }

  // if(state==1){
  //   state=2;
  //   console.log('ease-in')
  //   op1.classList.replace('duration-600','duration-100')
  //   op2.classList.replace('duration-600','duration-100')
  //   op3.classList.replace('duration-600','duration-100')
  //   op4.classList.replace('duration-600','duration-100')
  // }else{
  //   state=1;
  //   console.log('ease-out')
  //   op1.classList.replace('duration-100','duration-600')
  //   op2.classList.replace('duration-100','duration-600')
  //   op3.classList.replace('duration-100','duration-600')
  //   op4.classList.replace('duration-100','duration-600')
  // }
  

})