let bodyEl = document.body;

if ( localStorage.getItem('dark') ) {
    bodyEl.classList.add('dark');
    showNight();
} else {
    showDay();
}

bodyEl.classList.add('transition-colors');

document.getElementById('darkToggle').addEventListener('click', function(){
    bodyEl.classList.add('duration-300');
    if(bodyEl.classList.contains('dark')){
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
    bodyEl.classList.remove('dark');
}

function showNight(){
    document.getElementById('moon').classList.remove('hidden');
    document.getElementById('sun').classList.add('hidden');
    bodyEl.classList.add('dark');
}
