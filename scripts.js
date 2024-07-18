const cards = document.querySelectorAll('.card')

let has_flipped = false;

let lock_board = false;

let first_card, second_card;

function check_match(){

    if(first_card.dataset.value === second_card.dataset.value){

        first_card.removeEventListener('click', flip_card);
        second_card.removeEventListener('click', flip_card);

        console.log('flip function removed');

    }else{
        
        lock_board = true;

        setTimeout(()=>{

            first_card.classList.remove('flip');
            second_card.classList.remove('flip');

            lock_board = false;
            
        }, 1400);
     
    }

}
function flip_card(){
    
    if(lock_board) return;

    this.classList.add('flip');
    
    if(!has_flipped){
        // first flipped
        has_flipped = true;
        first_card = this;

    }else{
        // second flipped
        has_flipped = false;
        second_card = this;

        
        check_match();

    }

  
}

(function shuffle(){

    cards.forEach(card =>{

        let random_index = Math.floor(Math.random() * 16);
        card.style.order = random_index;
    })
})();

cards.forEach(card => card.addEventListener('click',flip_card));