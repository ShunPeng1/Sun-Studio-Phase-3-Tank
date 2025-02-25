import BootScene from "./scenes/BootScene";
import GameScene from "./scenes/GameScene";
import MenuScene from "./scenes/MenuScene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Tank',
    url: 'https://github.com/digitsensitive/phaser3-typescript',
    version: '0.0.1',
    width: 1600,
    height: 1200,
    zoom: 0.6,
    type: Phaser.AUTO,
    parent: 'game',
    scene: [BootScene, MenuScene, GameScene],
    input: {
        keyboard: true
    },
    physics: {
        default: 'arcade',
        arcade: {
        gravity: { x: 0, y: 0 }
        }
    },
    backgroundColor: '#000000',
    render: { antialias: true }
};
