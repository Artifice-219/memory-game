const cards = document.querySelectorAll('.card')

let has_flipped = false;

let first_card, second_card;

function flip_card(){
    
    this.classList.add('flip');
    
    if(!has_flipped){
        // first flipped
        has_flipped = true;
        first_card = this;

    }else{
        // second flipped
        has_flipped = false;
        second_card = this;

        if(first_card.dataset.value === second_card.dataset.value){

            first_card.removeEventListener('click', flip_card);
            second_card.removeEventListener('click', flip_card);

            console.log('flip function removed');
        }else{

            setTimeout(()=>{

                first_card.classList.remove('flip');
                second_card.classList.remove('flip');
                
            }, 1500);
         
        }

    }

  
}

cards.forEach(card => card.addEventListener('click',flip_card));