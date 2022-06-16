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
    colorText: 0x222222,
    fontSize: 18,
    fontSizeH3: 24
  },

  /* phaser properties */
  disableContextMenu: true,
  autoFocus: true,
  pixelArt: false,
  antialias: true,
  transparent: false,
  parent: 'game',
  backgroundColor: 0x000000,
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
