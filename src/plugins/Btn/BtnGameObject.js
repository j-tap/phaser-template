import { GameObjects } from 'phaser'

export default class BtnGameObject extends GameObjects.Container
{
  constructor(scene, x, y, { text }, action)
  {
    super(scene, x, y)

    this.text = text
    this.action = action

    this.on('pointerdown', () =>
    {
      this.action()
    })
  }
}
