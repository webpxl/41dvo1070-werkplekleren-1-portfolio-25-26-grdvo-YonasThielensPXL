const profiel = document.querySelector("#profielfoto");
profiel.src = "profile.jpg";
profiel.alt = "Yonas Thielens";

const uiImg = document.querySelector("#img-ui");
uiImg.src = "ui-design.jpg";
uiImg.alt = "UI Design Project";
uiImg.style.width = "600px";

const werkpleklerenImg = document.querySelector("#img-werkplekleren");
werkpleklerenImg.src = "cv.png";
werkpleklerenImg.alt = "Werkplekleren Project";
werkpleklerenImg.style.width = "400px";

const socialImg = document.querySelector("#img-social");
socialImg.src = "socials.png";
socialImg.alt = "Be Urban Social Media";
socialImg.style.width = "222px";

const dansImg = document.querySelector("#img-dansshow");
dansImg.src = "spotlight.png";
dansImg.alt = "Dansshow Organisatie";
dansImg.style.width = "222px";

const motivatie = [
    "Ik koos voor deze opleiding omdat ik graag creatief bezig ben. Wanneer ik tv kijk of door een magazine blader, word ik automatisch aangetrokken tot het visuele aspect. Ik kijk naar opmaak, kleurgebruik en creativiteit. Een mooie layout maakt mij gelukkig.",
    "Daarnaast ben ik zelf ook creatief ingesteld. Ik dans al sinds ik 5 jaar ben en hierbij staat naast creativiteit ook precisie centraal.",
    "Programmeren ligt verder van mijn bedshow. Ik beschouw mezelf dan ook als een programmeur aan het begin van zijn opleiding — gemotiveerd om hierin te groeien."
];

const loopbaan = [
    {jaar: "5 jaar", event: "begonnen met dansen" },
    {jaar: "10 jaar", event: "deelname aan musical Kadanza Together (Ketnet)" },
    {jaar: "12 jaar", event: "wedstrijddansen in ene team" },
    {jaar: "16 jaar", event: "start als dansleerkracht" },
    {jaar: "19 jaar", event: "bestuurslid van dansschool" }
];

const motivatieContainer = document.querySelector("#motivatie-box");

motivatie.forEach((tekst) => {
    const p = document.createElement("p");
    p.innerText = tekst;
    p.style.marginBottom = "15px";
    motivatieContainer.appendChild(p);
});

const lijst = document.querySelector("#tijdlijn-lijst");
lijst.innerHTML = "";

loopbaan.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <strong>${item.jaar}</strong>
        <span>${item.event}</span>
    `;
    lijst.appendChild(li);
});
