"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Scoreboard = (function () {
    function Scoreboard() {
        this.result = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.result.push(newResult);
    };
    Scoreboard.prototype.updateScoreboard = function () {
        var output = "<h2>Scoreboard</h2>";
        for (var i = 0; i < this.result.length; i++) {
            var result = this.result[i];
            output += "<h4>";
            output += result.playerName + "  :  " + result.score + "/" + result.problemCount + "  for factor  " + result.factor;
            output += "</h4>";
        }
        var scoresElements = document.getElementById('scores');
        scoresElements.innerHTML = output;
    };
    return Scoreboard;
}());
exports.Scoreboard = Scoreboard;
//# sourceMappingURL=scoreboard.js.map