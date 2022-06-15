import { Scene } from 'phaser'

import configGame from '@/configs/game'

export default class SceneGame extends Scene
{
  preload ()
  {
    this.configGame = configGame
    this.cameras.main.setBackgroundColor(this.configGame.colorBg)
  }

  create ()
  {
    //
  }

  update ()
  {
    //
  }
}
