import { Game } from 'phaser'

export default class AppGame extends Game
{
  constructor(config)
  {
    super(config)

    this.#initCustomParameters(config)
  }

  #initCustomParameters (config)
  {
    Object.keys(config).forEach(key =>
      {
        if (this.config[key] === undefined)
        {
          this.config[key] = config[key]
        }
      })
  }

  resize ()
  {
    const w = window.innerWidth
    const h = window.innerHeight

    let width = this.config.DEFAULT_WIDTH
    let height = this.config.DEFAULT_HEIGHT
    let maxWidth = this.config.MAX_WIDTH
    let maxHeight = this.config.MAX_HEIGHT
    let scaleMode = this.config.SCALE_MODE

    let scale = Math.min(w / width, h / height)
    let newWidth = Math.min(w / scale, maxWidth)
    let newHeight = Math.min(h / scale, maxHeight)

    let defaultRatio = this.config.DEFAULT_WIDTH / this.config.DEFAULT_HEIGHT
    let maxRatioWidth = this.config.MAX_WIDTH / this.config.DEFAULT_HEIGHT
    let maxRatioHeight = this.config.DEFAULT_WIDTH / this.config.MAX_HEIGHT

    /* smooth scaling */
    let smooth = 1
    if (scaleMode === 'SMOOTH')
    {
      const maxSmoothScale = 1.15
      const getValuePercentFromRange = (value, min, max) =>
      {
        return (value - min) / (max - min)
      }
      if (width / height < w / h)
      {
        smooth =
          -getValuePercentFromRange(newWidth / newHeight, defaultRatio, maxRatioWidth) / (1 / (maxSmoothScale - 1)) + maxSmoothScale
      } else {
        smooth =
          -getValuePercentFromRange(newWidth / newHeight, defaultRatio, maxRatioHeight) / (1 / (maxSmoothScale - 1)) + maxSmoothScale
      }
    }

    /* resize the game */
    this.scale.resize(newWidth * smooth, newHeight * smooth)

    /* scale the width and height of the css */
    this.canvas.style.width = newWidth * scale + 'px'
    this.canvas.style.height = newHeight * scale + 'px'

    /* center the game with css margin */
    this.canvas.style.marginTop = `${(h - newHeight * scale) / 2}px`
    this.canvas.style.marginLeft = `${(w - newWidth * scale) / 2}px`
  }
}
