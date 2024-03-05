const btnShowHid = document.querySelector('.show')

btnShowHid.addEventListener('click', function (){
    let blockHiddenShow = document.querySelector('.hidden');
    if (btnShowHid.innerText === 'Еще'){
        btnShowHid.innerHTML = 'Скрыть <div style="transform: rotate(180deg);" class="img"></div>'
        blockHiddenShow.style.display = 'flex';
    } else if  (btnShowHid.innerText === 'Скрыть') {
        btnShowHid.innerHTML = 'Еще <div class="img"></div>'
        blockHiddenShow.style.display = 'none';
    }
})



// function openthedooor(attr) {
//     let more = document.getElementById(attr)
//     let moreBtn = document.querySelector(`.more-btn${attr}`)
//     if (moreBtn.innerHTML === 'Подробнее'){
//         moreBtn.innerHTML = 'Скрыть'
//         more.style.display = 'flex';
//     } else if  (moreBtn.innerHTML === 'Скрыть') {
//         moreBtn.innerHTML = 'Подробнее'
//         more.style.display = 'none';
//     }
// }