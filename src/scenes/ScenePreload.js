import SceneGame from '@/objects/SceneGame'

import charImg from '@/assets/images/char.png'
import bgImg from '@/assets/images/bg.jpg'

export default class ScenePreload extends SceneGame
{
  constructor ()
  {
    super('ScenePreload')
    this.width = 600
  }

  preload ()
  {
    super.preload()

    this.drawLoader()

    this.load.image('charImg', charImg)
    this.load.image('bgImg', bgImg)
  }

  create ()
  {
    super.create()
  }

  drawLoader ()
  {
    const { centerX, centerY } = this.cameras.main
    const { colorText, fontSizeH3 } = this.game.config.styles

    this.loader = this.add.container(centerX, centerY)

    this.loaderProgress = this.add.progress(0, 0)

    const textLoading = this.make.text({
        x: 0,
        y: -(this.loaderProgress.displayHeight + 10),
        text: 'Loading',
        style: {
          fontSize: fontSizeH3,
          color: colorText,
        },
      })
      .setOrigin(.5, 0)

    this.loader.add([ this.loaderProgress, textLoading])

    this.load
      .on('progress', (...args) => this.updateLoader(...args))
      .on('complete', (...args) => this.completeLoader(...args))
  }

  destroyLoader ()
  {
    this.loader.destroy()
  }

  updateLoader (value)
  {
    this.loaderProgress.updateProgress(value)
  }

  completeLoader (value)
  {
    this.time.delayedCall(200, () =>
    {
      this.destroyLoader()
      this.game.gameService.switchLevel(this, 'Scene1')
    })
  }
}
