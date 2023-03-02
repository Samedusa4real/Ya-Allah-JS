const firstName = prompt("Adinizi daxil edin:")
const secondName = prompt("Soyadinizi daxil edin:")
let moneyRn = prompt("Kartinizda olan pulun miqdarini daxil edin:")
let finalChoice;

alert(firstName + " " + secondName + ", balans: " + moneyRn + "azn");

do{
    const decisionMaker = prompt("Zehmet olmasa secim edin ('Y'-Balans artirmaq // 'N'-Balansdan pul cekmek)")
    if(!isNaN(moneyRn)){
        switch (decisionMaker) {
            case "Y":
                let firstChoice;
                do{
                    firstChoice = prompt("Artirmaq istediyiniz meblegi daxil edin:")
                    if(!isNaN(firstChoice)){
                        moneyRn = Number(moneyRn) + Number(firstChoice);
                        alert("Balansiniz ugurla artirildi, yeni balansiniz: " + Number(moneyRn) + "azn");
                    }else{
                        alert("Zehmet olmasa duzgun mebleg daxil edin!");
                    }
                }while(isNaN(firstChoice))
                break;
            
            case "N":
                let secondChoice;
                do{
                    secondChoice = prompt("Cekmek istediyiniz pulun miqdarini daxil edin:")
                    if(!isNaN(secondChoice) && moneyRn>=secondChoice){
                        moneyRn = Number(moneyRn) - Number(secondChoice);
                        alert("Pulunuz ugurla cekildi, sizin yeni balansiniz: " + Number(moneyRn) + "azn")
                    }else if(moneyRn<secondChoice){
                        alert("Balansda kifayet qeder vesait yoxdur!");
                    }
                    else{
                        alert("Zehmet olmasa duzgun mebleg daxil edin!");
                    }
                }while(isNaN(secondChoice))            
                break;
            
            default:
                alert("Zehmet olmasa duzgun secim edin!");
                break;
        }
    }
    finalChoice = prompt("Prosese davam etmek ucun: 'D' // Cixis etmek ucun: 'Q'")
    if(finalChoice === 'Q'){
        alert("Siz ugurla cixis etdiniz!");
    }
}while(finalChoice === 'D')