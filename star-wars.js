
//js jest jezykiem asynchronicznym jednowatkowym
//powoduja ze jak program natrafi na funkcje asynchroniczna
//program go odklada na bok i w miedzy czasie go sciaga
//jak go sciagnie dopiero go wykonuje


//nie strzalkowo
//async function pobierz() {

//}

//-------------------------------

const pobierzDane = async () => {
    //funkcja fetch sluzy do pobierania danych
    //await to ze czeka na pobranie danych !
    // sama funkcja zostala odsunieta na bok i czeka na dane
    //funkcja nie blokuje kodu 
    //ale pewne operacje musza czekac na dane
    //console.log czeka na pobranie danych
    //musi wyswietlic pobrane dane


    const wynik = await fetch("https://swapi.dev/api/people");

    //sprawdz
    // console.log(wynik);

    //teraz dane tak jakby trzeba te dane odkodowac
    //konwertujemy to do formatu json - 
    //awaity powoduja czekanie
    //gdybysmy usuneli async awaity by nie dzialaly


    const dane = await wynik.json();

    //slowo results wzial sie z API ..zobacz rozwijajac cosole results 

   dane.results.forEach( (element) => {
    dodajPostac(element);

   });
    
    

  
}

pobierzDane();



// <div class="card">
//             <h3>Luke Skalwalker</h3>
//             <span>Rasa: czlowiek</span>
//             <span>Kolor oczu: niebieski</span>
//             <span>Kolor skóry: </span>
        
//             <div >
//                 <span>Wzrost: 172cm</span>
//                 <span>Waga: 77kg</span>
//             </div>
//         </div>


const sekcjaKarta = document.querySelector("#wrapper");

const dodajPostac = (postac) => {
    console.log(postac);

    const karta = document.createElement("article");
    karta.classList.add("card");

    const nazwaPostaci = document.createElement("h3");
    nazwaPostaci.textContent = postac.name;

    const plecPostaci = document.createElement("span");
    plecPostaci.textContent = `Plec: ${postac.gender}`;

    const kolorOczu = document.createElement("span");
    kolorOczu.textContent = `Kolor oczu: ${postac.hair_color}`;

        const div1 = document.createElement("div");
        div1.classList.add("tytul");
        div1.classList.add("tytul2");
        
        //zmiana nazwy klasy
        //div1.setAttribute('class','tytulnowy');

        div1.classList.remove('tytul');
        

            const wzrost = document.createElement("span");
            wzrost.textContent = `Wzrost:  ${postac.height} `;

            const waga = document.createElement("span");
            waga.textContent = `Waga:  ${postac.mass} `;

    div1.append(wzrost);
    div1.append(waga);


    karta.append(nazwaPostaci);
    karta.append(plecPostaci);
    karta.append(kolorOczu);
    karta.append(div1);
    


    sekcjaKarta.append(karta);
   




}