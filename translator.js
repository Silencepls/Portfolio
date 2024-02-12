const dictionary = {
    "Tópicos": "Topics",
    "Introdução": "Introduction",
    "Carreira": "Career",
    "Desenvolvimento de Jogos": "Game Development",
    "Desenvolvimento Web": "Web Development",
    "Ciências da Computação": "Computer Science",
    "Certificados e Contatos": "Certificates and Contacts",

    "EN-US": "EN-US",
    "PT-BR": "PT-BR",

    "Olá, meu nome é Vinícius Torres, também conhecido como Silence Please, estudante de Análise e Desenvolvimento de Sistemas (Wyden) e Bacharelado Interdisciplinar em Ciência e Tecnologia (UFPE).": "Hello, my name is Vinícius Torres, also known as Silence Please, student of Systems Analysis and Development (Wyden) and Interdisciplinary Bachelor's Degree in Science and Technology (UFPE).",
    "Meu primeiro jogo foi Coliseum, um survivor top down que desenvolvi sozinho no Unity para uma Game Jam, em que você têm que sobreviver 10 ondas de inimigos, com uma variedade de adversários. O mapa é composto de espinhos que você tem que prestar atenção para desviar.": "My first game was Coliseum, a top-down survival game that I developed alone in Unity for a Game Jam, in which you have to survive 10 waves of enemies, with a variety of opponents. The map is made up of spikes that you have to pay attention to avoid.",

    "Disponível no itch.io": "Available on itch.io",
    "Meu segundo jogo foi Farmlax, um Card Game/Board Game feito na Unity com um colega meu. O jogo foi feito pra uma gamejam e desenvolvido em 2 dias. O conceito dele era testar uma nova forma de fazer um jogo. Ele é feito simplesmente para relaxar, sem objetivos, pressão, punição por perder ou game over.": "My second game was Farmlax, a Card Game/Board Game made in Unity with a colleague of mine. The game was made for a gamejam and developed in 2 days. His concept was to test a new way of making a game. It is simply made to relax, without goals, pressure, punishment for losing or game over.",
    "Meu terceiro jogo foi Tamer of Uncontrolled Weapons (TUW), 2D Top-Down Shooter, feito na Unity com um colega artista meu para uma gamejam. O jogo é sobre uma arma super poderosa a qual o protagonista tem que manusear no meio de uma cidade de cidadãos desastrados a fim de evitar atingir os civís, enquanto manusea três munições diferentes e mágicas dela. O objetivo do jogo é terminar os 10 minutos tendo causado o menos de dano possível.": "My third game was Tamer of Uncontrolled Weapons (TUW), 2D Top-Down Shooter, made in Unity with a friend artist of mine for a gamejam. The game is about a super powerful weapon that the protagonist has to control in the middle of a city of clumsy citizens in order to avoid hitting civilians, while at the same time handling three different magical ammunition of it. The objective of the game is to finish the 10 minutes having caused as little damage as possible.",
    
    "Meu projeto atual se consiste em um jogo de cartas inspirado em HeartStone, Magic, Yugioh e LoR. Atualmete anda em desenvolvimento. Veja uma abaixo um vídeo sobre como está o atual estágio dele.": "My current project consists of a card game inspired by HeartStone, Magic, Yugioh and LoR. It is currently under development. See a video below about its current state.",


    "Esse site foi feito com HTML, CSS, JavaScript. É um site de jogo da velha feita com uma IA que eu mesmo programei. O jogo conta com scores teus e da IA. Toda a lógica e visual foi programada por mim.": "This website was made with HTML, CSS, JavaScript. It's a tic-tac-toe website made with an AI that I programmed myself. The game has scores from you and the AI. All logic and visuals were programmed by me.",

    "Esse site foi feito com .NET, REST API, e GoogleBooks API. Ele é uma rede social de livros extremamente inspirada em MyAnimeList. Nele você cria conta, adiciona livros no teu perfil com tua nota e review (podendo editar eles ou remover eles depois), e pode até olhar o perfil de outros usuários através do site. O motivo pelo qual ele não está mais online é pelo fato de que para deixá-lo online 24h por dia, eu teria que gastar uma certa quantidade de dinheiro mensalmente. Julguei desnecessário gastos extras, entretanto se você estiver curioso sobre o projeto ou queira ver o Source Code, sinta-se a vontade de me contatar através do meu email ou redes sociais.": "This site was made with .NET, REST API, and GoogleBooks API. It is a book social network extremely inspired by MyAnimeList. There you create an account, add books to your profile with your rating and review (you can edit or remove them later), and you can even look at the profiles of other users through the website. The reason why it is no longer online is because to keep it online 24 hours a day, I would have to spend a certain amount of money monthly. I judged that extra expenses were unnecessary, however, if you are curious about the project or want to see the Source Code, feel free to contact me via email or social media.",

    "Disponível aqui": "Available here",
    "silencepleaseofficialbr@gmail.com" : "silencepleaseofficialbr@gmail.com"
}
let isEnglish = false;

const arr = document.querySelectorAll("header, .point, a:not(.icon, .n), p:not(.n)");
const language_switch = document.getElementById("language-switch");
const en_us = language_switch.firstElementChild;
const pt_br = language_switch.lastElementChild;
changeLanguage();

en_us.addEventListener("click", () => {
    if (isEnglish) return;
    changeLanguage();
});

pt_br.addEventListener("click", () => {
    if (!isEnglish) return;
    changeLanguage();
})

document.addEventListener("keydown", function (event) {
    if (event.key === "e") {
        changeLanguage();
    }
});

function changeLanguage() {
    if (!isEnglish) {
        arr.forEach(el => {
            el.textContent = dictionary[el.textContent.replace(/\s+/g, ' ').trim()];
        });
    }
    else {
        arr.forEach(el => {
            el.textContent = getKeyByValue(el.textContent.replace(/\s+/g, ' ').trim());
        });
    }

    isEnglish = !isEnglish;
    updateLanguageButtons();
}

function getKeyByValue(value) {
    return Object.keys(dictionary).find(key => dictionary[key] === value);
};


function updateLanguageButtons() {
    if (isEnglish) {
        pt_br.classList.remove("active");
        en_us.classList.add("active");
        return;
    }
    pt_br.classList.add("active");
    en_us.classList.remove("active");
};
