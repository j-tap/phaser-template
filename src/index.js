import AppGame from '@/objects/AppGame'
 
import configPhaser from '@/configs/phaser'

import BtnPlugin from '@/plugins/btn/BtnPlugin'
import ProgressPlugin from '@/plugins/Progress/ProgressPlugin'

import ScenePreload from '@/scenes/ScenePreload'
import Scene1 from '@/scenes/Scene1'

require('@/assets/styles/index.styl')

const config = {
  ...configPhaser,

  plugins: {
    global: [
      { key: 'BtnPlugin', plugin: BtnPlugin, start: true },
      { key: 'ProgressPlugin', plugin: ProgressPlugin, start: true },
    ],
  },
  scene: [
    ScenePreload,
    Scene1,
  ],
}

window.addEventListener('load', () =>
{
  const game = new AppGame(config)

  window.addEventListener('resize', () =>
  {
    game.resize()
  })

  game.resize()
})
