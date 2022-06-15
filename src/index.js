import { Game } from 'phaser'
 
import configPhaser from '@/configs/phaser'

import BtnPlugin from '@/plugins/btn/BtnPlugin'

import ScenePreload from '@/scenes/ScenePreload'
import Scene1 from '@/scenes/Scene1'

require('@/assets/styles/index.styl')

const config = {
  ...configPhaser,
  plugins: {
    global: [
      { key: 'BtnPlugin', plugin: BtnPlugin, start: true },
    ],
  },
  scene: [
    ScenePreload,
    Scene1,
  ],
}

new Game(config)
