if ( localStorage.getItem('dark') ) {
    document.documentElement.classList.add('dark');
    showNight();
} else {
    showDay();
}

document.body.classList.add('transition-colors');

document.getElementById('darkToggle').addEventListener('click', function(){
    document.body.classList.add('duration-300');
    if(document.documentElement.classList.contains('dark')){
        localStorage.removeItem('dark');
        showDay();
    } else {
        localStorage.setItem('dark', true);
        showNight();
    }
});

document.getElementById('openMenu').addEventListener('click', function(){
    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('closeMenu').classList.remove('hidden');
});

document.getElementById('closeMenu').addEventListener('click', function(){
    this.classList.add('hidden');
    document.getElementById('menu').classList.add('hidden');
});

function showDay(){
    document.getElementById('moon').classList.add('hidden');
    document.getElementById('sun').classList.remove('hidden');
    document.documentElement.classList.remove('dark');
}

function showNight(){
    document.getElementById('moon').classList.remove('hidden');
    document.getElementById('sun').classList.add('hidden');
    document.documentElement.classList.add('dark');
}

document.addEventListener('DOMContentLoaded', function(){
    // set the active menu item
    let path = window.location.pathname;
    // for each menu item .menu-item add class
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === path) {
            activeClasses = item.dataset.active.split(' ');
            item.classList.add(...activeClasses);
        } else {
            inactiveClasses = item.dataset.inactive.split(' ');
            item.classList.add(...inactiveClasses);
        }
        
    });
});