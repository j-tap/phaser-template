import SceneGame from '@/objects/SceneGame'

export default class SceneBoot extends SceneGame
{
  constructor ()
  {
    super('SceneBoot')
  }

  preload ()
  {
    super.preload()
  }

  create ()
  {
    super.create()

    this.scene.start('ScenePreload')
  }
}
