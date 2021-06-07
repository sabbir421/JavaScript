class Country{
    constructor(countryName){
        this.countryName = countryName;
    }
}
const country = new Country("bangladesh");
// console.log(countryName);
 class Player extends Country{
    constructor(name, match, run, fifty, hundred){
        super();
        this.name=name;
        this. match= match;
        this.run = run;
        this.fifty = fifty;
        this.hundred= hundred;
    }
}
const details = new Player("Tamim", 50, 2000, 15 , 5);
document.write(details);
console.log(details); 