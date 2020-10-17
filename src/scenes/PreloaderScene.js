import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;

    // add logo image
    this.add.image(width / 2, height / 2 - 100, 'logo');

    // display progress bar
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 2 - 160, height / 2 - 30, 320, 50);

    // loading text
    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    // percent text
    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    // loading assets text
    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on('progress', function (value) {
      console.log(value)
    })

    // load assets needed in our game
    this.load.image('bullet', 'assets/level/bulletDark2_outline.png');
    this.load.image('tower', 'assets/level/tank_bigRed.png');
    this.load.image('enemy', 'assets/level/tank_sand.png');
    this.load.image('base', 'assets/level/tankBody_darkLarge_outline.png');
    this.load.image('title', 'assets/ui/title.png');
    this.load.image('cursor', 'assets/ui/cursor.png');
    this.load.image('blueButton1', 'assets/ui/blue_button02.png');
    this.load.image('blueButton2', 'assets/ui/blue_button03.png');

    // placeholder
    this.load.image('logo2', 'assets/logo.png');

    // tile map in JSON format
    this.load.tilemapTiledJSON('level1', 'assets/level/level1.json');
    this.load.spritesheet('terrainTiles_default', 'assets/logo/terrainTiles_default.png', { frameWidth: 64, frameHeight: 64 })
  }

  create() {
    this.scene.start('Game');
  }
}
