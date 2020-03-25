/// <reference path="person.ts" />

class Player implements Person{
    
    name: string;
    age: number;
    highScore: number;

/*constructor(name: string, age: number,  highScore: number,){
this.name=name;
this.age=age;
this.highScore=highScore;
}*/
    formatName(){
        return this.name.toUpperCase();
    }

}