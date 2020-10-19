import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
  }

  create() {
    this.createMap();
  }

  createMap() {
    // create our map
    this.bgMap = this.make.tilemap({ key: 'level1' });
    // add tileset image
    this.tiles = this.bgMap.addTilesetImage('terrainTiles_default');
    // create background layer
    this.backgroundLayer = this.bgMap.createStaticLayer('Background', this.tiles, 0, 0);
  }
}
