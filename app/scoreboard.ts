//// <reference path="results.ts" />
import {Result} from './results';
import * as _ from "lodash";

export class Scoreboard {

    private result:Result[]=[];


    addResult(newResult:Result):void{
        this.result.push(newResult);
        let allCapsName:string=_.upperCase(newResult.playerName);
        console.log(`${allCapsName} : ${newResult.score}`);
    }

    updateScoreboard():void{
        let output:string="<h2>Scoreboard</h2>"

        for(let i=0; i<this.result.length; i++){
            const result:Result=this.result[i];
            output+="<h4>";
            output+= result.playerName + "  :  " + result.score + "/" + result.problemCount + "  for factor  " + result.factor;
            output+="</h4>"; 

        }

        const scoresElements:HTMLElement=document.getElementById('scores')!;
        scoresElements.innerHTML=output;
    }
}