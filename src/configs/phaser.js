const DEFAULT_WIDTH = 640
const DEFAULT_HEIGHT= 360
const MAX_WIDTH = 1920
const MAX_HEIGHT = 1080
const SCALE_MODE = 'SMOOTH' /* (FIT, SMOOTH) */

export default {
  /* custom properties */
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  MAX_WIDTH,
  MAX_HEIGHT,
  SCALE_MODE,
  
  orientation: 'landscape',
  styles: {
    colorText: '#222222',
    colorTextInvert: '#ffffff',
    fontSize: 18,
    fontSizeH3: 26
  },

  /* phaser properties */
  disableContextMenu: true,
  autoFocus: true,
  pixelArt: false,
  antialias: true,
  transparent: false,
  parent: 'game',
  backgroundColor: '#dddddd',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 600 },
      debug: true,
    },
  },
  scale: {
    mode: 0, /* 0 - NONE */
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
}
