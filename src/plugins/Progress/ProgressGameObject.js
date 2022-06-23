import { GameObjects } from 'phaser'

export default class ProgressGameObject extends GameObjects.Container
{
  constructor(scene, x, y, options = {})
  {
    super(scene, x, y)

    this.width = options.width || 300
    this.height = options.height || 40
    this.padding = options.padding || { x: 5, y: 5 }
    this.progressWidth = this.width - this.padding.x * 2
    this.progressHeight = this.height - this.padding.y * 2
    this.colorBar = 0xDC4D8D

    this.#draw()
  }

  #draw ()
  {
    this.#drawBar()
    this.#drawPercent()
  }

  #drawBar ()
  {
    this.progressBlock = this.scene.add.rectangle(
      0,
      0,
      this.width,
      this.height,
      this.colorBar,
      1,
    )

    this.progressBar = this.scene.add.rectangle(
      -(this.width / 2 - this.padding.x),
      0,
      0,
      this.progressHeight,
      0xffffff,
      .6,
    )

    this.add([this.progressBlock, this.progressBar])
  }

  #drawPercent ()
  {
    const { colorText } = this.scene.game.config.styles
    const text = '0%'
    const size = this.progressHeight / 2
    const x = 0
    const y = 0

    const style = {
      fontSize: size,
      color: colorText,
    }

    this.textPercent = this.scene.make.text({ x, y, text, style })
      .setOrigin(.5)

    this.add(this.textPercent)
  }

  updateProgress (value = 0)
  {
    this.textPercent.setText(`${parseInt(value * 100)}%`)

    this.progressBar.width = this.progressWidth * value
  }
}
