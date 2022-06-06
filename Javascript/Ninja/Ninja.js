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

const ninja1 = new Ninja("Hyabusa",1);
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();