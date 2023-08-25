import 'animate.css';

const boutonsAttack = document.querySelectorAll('.btn-attack');
const playerWeapons = document.querySelectorAll('.player-weapon');
const computerWeapons = document.querySelectorAll('.computer-weapon');
const hands = document.querySelectorAll('.hand');
const scorePanelPlayer = document.querySelector('.score-player');
const scorePanelOrdi = document.querySelector('.score-ordi');
const modal = document.querySelector('.modal');

 
boutonsAttack.forEach(bouton =>{
    let playerWeaponIndex = 0;
    let scorePlayer = 0;
    let scoreOrdi = 0;

    bouton.addEventListener("click", () =>{
        if(bouton.ariaLabel == "Roche"){
            playerWeaponIndex = 0
        } 

        if(bouton.ariaLabel == "Papier"){
            playerWeaponIndex = 1
        }

        if(bouton.ariaLabel == "Ciseaux"){
            playerWeaponIndex = 2
        }

        let computerWeaponIndex = Math.floor(Math.random() * computerWeapons.length);

        console.log(playerWeaponIndex, computerWeaponIndex);

        animation(playerWeaponIndex, computerWeaponIndex);

        let result = () =>{
            if(playerWeaponIndex === computerWeaponIndex){
            modal.style.display = 'block';
            modal.querySelector('.modal_content_result').innerHTML = 'Vous avez choisi la même arme!';
            modal.querySelector('.modal_content_winner').innerHTML = 'Match nul!';
            }
    
            else if(playerWeaponIndex == 0 && computerWeaponIndex == 1 || playerWeaponIndex == 1 && computerWeaponIndex == 2 || playerWeaponIndex == 2 && computerWeaponIndex == 0){
                modal.style.display = 'block';
                if(playerWeaponIndex == 0){
                    modal.querySelector('.modal_content_result').innerHTML = 'Le papier enveloppe la roche';
                }
                if(playerWeaponIndex == 1){
                    modal.querySelector('.modal_content_result').innerHTML = 'Les ciseaux coupent le papier';
                }
                if(playerWeaponIndex == 2){
                    modal.querySelector('.modal_content_result').innerHTML = 'La roche brise les ciseaux';
                }
                modal.querySelector('.modal_content_winner').innerHTML = 'Vous avez perdu la manche!';
                scoreOrdi++;
                scorePanelOrdi.querySelector('p').innerHTML = scoreOrdi;
            }
    
            else{
                modal.style.display = 'block';
                if(playerWeaponIndex == 0){
                    modal.querySelector('.modal_content_result').innerHTML = 'La roche brise les ciseaux';
                }
                if(playerWeaponIndex == 1){
                    modal.querySelector('.modal_content_result').innerHTML = 'Le papier enveloppe la roche';
                }
                if(playerWeaponIndex == 2){
                    modal.querySelector('.modal_content_result').innerHTML = 'Les ciseaux coupent le papier';
                }
                console.log('player win')
                modal.querySelector('.modal_content_winner').innerHTML = 'Vous avez gagné la manche!';
                scorePlayer++;
                scorePanelPlayer.querySelector('p').innerHTML = scorePlayer;
            }
        }

        let reset = () =>{
            playerWeaponIndex = 0;
            computerWeaponIndex = 0;
            hands.forEach(hand => {
                hand.style.display = "block";
            });
        
            playerWeapons.forEach(weapon => {
                weapon.style.display = "none";
            });
        
            computerWeapons.forEach(weapon => {
                weapon.style.display = "none";
            });
        }

        setTimeout(result, 2000);

        setTimeout(reset, 2000)

        setTimeout(() => {
            modal.style.display = 'none';;
        }, 4000);
    });
});


function animation(playerWeaponIndex, computerWeaponIndex){
    hands.forEach(hand =>{
        hand.classList.add('animate__animated','animate__bounce');
        hand.addEventListener('animationend', () =>{
            hand.style.display = "none"
            hand.classList.remove('animate__animated','animate__bounce');
            playerWeapons[playerWeaponIndex].style.display = "block";
            computerWeapons[computerWeaponIndex].style.display = "block";
        })
    })
}





