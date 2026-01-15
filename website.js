const profiel:Element =document.querySelector(selectors:"#profielfoto");
profiel.src = "images/profile.jpg";
profiel.alt = "Yonas Thielens";

const uiImg:Element = document.querySelector(selectors:"#img-ui");
uiImg.src = "images/ui-design.jpg";
uiImg.alt = "UI Design Project";
uiImg.style.width = "600px";

const werkpleklerenImg:Element = document.querySelector(selectors:"#img-werkplekleren");
werkpleklerenImg.src = "images/cv.png";
werkpleklerenImg.alt = "Werkplekleren Project";
werkpleklerenImg.style.width = "400px";

const socialImg:Element = document.querySelector(selectors:"#img-social");
socialImg.src = "images/socials.png";
socialImg.alt = "Be Urban Social Media";
socialImg.style.width = "222px";

const dansImg:Element = document.querySelector(selectors: "#img-dansshow");
dansImg.src = "images/spotlight.png";
dansImg.alt = "Dansshow Organisatie";
dansImg.style.width = "222px";

const motivatie:string[] = [
    "Ik koos voor deze opleiding omdat ik graag creatief bezig ben. Wanneer ik tv kijk of door een magazine blader, word ik automatisch aangetrokken tot het visuele aspect. Ik kijk naar opmaak, kleurgebruik en creativiteit. Een mooie layout maakt mij gelukkig.",
    "Daarnaast ben ik zelf ook creatief ingesteld. Ik dans al sinds ik 5 jaar ben en hierbij staat naast creativiteit ook precisie centraal.",
    "Programmeren ligt verder van mijn bedshow. Ik beschouw mezelf dan ook als een programmeur aan het begin van zijn opleiding — gemotiveerd om hierin te groeien."
];

const loopbaan:[{jaar,string,event:string}... = [
    {jaar: "5 jaar", event: "begonnen met dansen" },
    {jaar: "10 jaar", event: "deelname aan musical Kadanza Together (Ketnet)" },
    {jaar: "12 jaar", event: "wedstrijddansen in ene team" },
    {jaar: "16 jaar", event: "start als dansleerkracht" },
    {jaar: "19 jaar", event: "bestuurslid van dansschool" }
];

const motivatieContainer:Element = document.querySelector(selectors:"#motivatie-box");
motivatie.forEach((tekst:string):void
    const p:HTMLParagraphElement = document.createElement(tagName:"p");
    p.innerText = tekst;
    p.style.marginBottom = "15px";
    motivatieContainer.appendChild(p);
});

const lijst:Element = document.querySelector(selectors:"#tijdlijn-lijst");
lijst.innerHTML = "";

loopbaan.forEach((item:{event:string,jaar:string}):void
    const li:HTMLLIElement = document.createElement(tagName:"li");
    li.innerHTML = `
        <strong>${item.jaar}</strong>
        <span>${item.event}</span>
    `;

    lijst.appendChild(li);
});
