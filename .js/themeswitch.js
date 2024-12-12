let toggle  = document.getElementById('toggleDark');
let body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('sunny');
    if(this.classList.toggle('sunny-outline')){
        body.style.background = 'white';
        body.style.color = 'black';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
    }
});
