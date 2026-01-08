const cards = [
    {
        title: "Profiel",
        content: `
      <p>21 jaar</p>
      <p>Neeroeteren, België</p>
      <p> ✉️thielensyonas@gmail.com</p>
      <p> 📞+32 470 86 50 58</p>
     <p>- Sociaal</p> 
      <p>- Creatief</p>
      <p>- Geluk</p>
      <p>- Passie</p>
    `
    },
    {
        title: "Opleiding",
        content: `
      <p>Ik koos voor deze opleiding omdat ik graag creatief bezig ben.</p>
      <p>Ik beheer de sociale media van mijn dansschool en kijk nu anders naar visuals online of in het echt.</p>
    `
    },
    {
        title: "Skills",
        content: `
      <p>- Creatieve kijk op design.</p>
      <p>- Geduldig en oog voor detail.</p>
      <p>- Passie voor zowel design als programmeren.</p>
    `
    }
];

const container = document.getElementById('cards-container');

cards.forEach(cardData => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h2>${cardData.title}</h2>${cardData.content}`;
    container.appendChild(card);
});
