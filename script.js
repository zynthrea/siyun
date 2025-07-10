const typedText = document.getElementById("typed-text");
const text = "﹒✦ 처음 보는 사람들도 환영해요〜！ .𖥔 ݁ ₍^. .^₎Ⳋ";
let i = 0;

function type() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}

window.onload = () => {
  setTimeout(() => {
    type();
  }, 300);
}

function showCard(cardIdToShow) {
  const allCards = document.querySelectorAll('.card');
  allCards.forEach(card => {
    card.classList.remove('active', 'animated');
  });

  const nextCard = document.getElementById(cardIdToShow);
  setTimeout(() => {
    nextCard.classList.add('active');
    void nextCard.offsetWidth;
    nextCard.classList.add('animated');
  }, 100);
}