const menultems = document.querySelectorAll('.list__left li')('.list__right li')

menultems.forEach(item => {
    item.addEventListener('mouseenter', () =>{
        item.computedStyleMap.color = 'pink';
    });

    item.addEventListener('mouseleave', () =>{
        item.style.color = "";
    });
})