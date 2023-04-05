const obj = {

    imie: "Jan",
    nazwisko: "Kowalski",
    wiek: 20,

    informacje () {

        console.log(`Wyswietlam informacje "${this.imie} ${this.nazwisko} `);
    },

    informacjeStrzalkowa: () => {

        console.log("Informacje - fn strzalkowa");
    }
}

console.log(obj);
console.log(obj.nazwisko);

//const wypis = `To jest ${obj.imie} ${obj.nazwisko}. Ma ${obj.wiek} lat.`

obj.informacje();
obj.informacjeStrzalkowa();


const panstwa = [
    {
        nazwa: "Polska",
        stolica: "Warszawa",
        ludnosc: 38
    },
    {
        nazwa: "Niemcy",
        stolica: "Berlin",
        ludnosc: 85
    },
    {
        nazwa: "Ukraina",
        stolica: "Kijow",
        ludnosc: 67
    }
]

console.log(panstwa[1].nazwa);

panstwa.forEach((panstwo)=> {
    console.log(panstwo);
    
})

// lub bez funkcji strzalkowej !
function kraj (x) {
    console.log(x);
    console.log(`To jest ${x.nazwa} - ${x.stolica}`);
}

//
// const kraj =(x) => {
//     console.log(`To jest ${x.nazwa} - ${x.stolica}`);
// }



//przefiltrowanie tych danych - wyswietl tylko te co wiecej ludnosci wiecej
//nic 80

panstwa.forEach(kraj);

const funkcjaFiltrujaca = (a) => {
    return a.ludnosc > 80
}


const duzeKraje = panstwa.filter(funkcjaFiltrujaca);