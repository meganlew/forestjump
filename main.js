import start from "./state/start.js"

import Play from "./state/play.js"

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};



var game = new Phaser.Game(config);

game.scene.add("play", Play);
game.scene.add("start", start);

game.scene.start("start")