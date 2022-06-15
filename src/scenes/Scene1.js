import SceneGame from '@/objects/SceneGame'

export default class Scene1 extends SceneGame
{
  constructor ()
  {
    super('Scene1')
  }

  create ()
  {
    super.create()

    this.add.image(200, 200, 'charImg')
  }

  update ()
  {
    super.update()
  }

}
