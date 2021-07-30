var buttonInitial = document.getElementById('button__initial')
var buttonMore = document.getElementById('button__more')
var cardMore = document.getElementsByClassName('card__more')

buttonInitial.onclick = () => {
    cardMore[0].classList.remove("animated-card__out", "card-position_out");
    cardMore[0].classList.add("animated-card__in", "card-position_initial");
    buttonInitial.classList.remove("animated-button__in")
    buttonInitial.classList.add("animated-button__out")
}

buttonMore.onclick = () => {
    cardMore[0].classList.remove("animated-card__in", "card-position_initial");
    cardMore[0].classList.add("animated-card__out", "card-position_out");
    buttonInitial.classList.remove("animated-button__out")
    buttonInitial.classList.add("animated-button__in")
}
