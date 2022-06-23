import { Scene, Scale } from 'phaser'

export default class SceneGame extends Scene
{
  preload ()
  {
    //
  }

  create ()
  {
    this.scale.lockOrientation(this.game.config.orientation)
    this.scale.on('resize', this.resize, this)
  }

  resize ()
  {
    //
  }

  update ()
  {
    //
  }
}
