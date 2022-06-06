class Ninja{
    constructor(name,health){
    this.name=name;
    this.health=health;
    this.speed=3;
    this.strength=3;
}
 sayName(){
     console.log("Ninja Name:"+this.name);
 }
 showStats(){
     console.log("Ninja Name:"+this.name+" Stringth: "+this.strength+" Speed: "+this.speed+" health: "+this.health);
 }
 drinkSake(){
     this.health+=10;
 }
}

class Sensei extends Ninja{
    constructor(name,health){
        super(name,health);
        this.wisdom=10;
    }

    speakWisdom(){
       console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const superSensei = new Sensei("Master Splinter",10);
superSensei.speakWisdom();
const ninja1 = new Ninja("Hyabusa",1);
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();
console.log("*************************");
superSensei.showStats();