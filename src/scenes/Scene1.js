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

    this.add.image(0, 0, 'bgImg')
      .setOrigin(0)

    this.add.image(0, 0, 'charImg')
      .setOrigin(0)
      .setScale(.5)

  }

  update ()
  {
    super.update()
  }

  resize ()
  {
    //
  }

}
