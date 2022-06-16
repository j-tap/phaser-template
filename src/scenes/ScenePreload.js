import SceneGame from '@/objects/SceneGame'

import charImg from '@/assets/images/char.png'
import progressSpr from '@/assets/images/progress-spr.png'
import progressAtlas from '@/assets/images/progress-atlas.json'

export default class ScenePreload extends SceneGame
{
  constructor ()
  {
    super('ScenePreload')
    console.log(this);
    this.width = 600
    console.log(this);
  }

  preload ()
  {
    super.preload()

    this.preloaderDraw()

    this.load.image('charImg', charImg)
    this.load.atlas('progressAtlas', progressSpr, progressAtlas)
  }

  create ()
  {
    super.create()

    this.preloaderDestroy()
    this.scene.start('Scene1')
  }

  preloaderDraw ()
  {
    const { centerX, centerY } = this.cameras.main
    const { colorText, fontSize, fontSizeH3 } = this.game.config.styles

    this.preloader = this.add.container(centerX, centerY)

    this.progressLoader = this.add.progress(0, 0, {
      width: this.width,
    })

    const loadingText = this.make.text({
        x: 0,
        y: -36,
        text: 'Loading...',
        style: {
          fontSize: fontSizeH3,
          color: colorText,
        },
      })
      .setOrigin(.5, 0)

    this.percentText = this.make.text({
        x: 0,
        y: 8,
        text: '0%',
        style: {
          fontSize: fontSize,
          color: colorText,
        },
      })
      .setOrigin(.5, 0)

    this.preloader.add([ this.progressLoader, loadingText, this.percentText])

    this.load.on('progress', (value) =>
    {
      this.preloaderUpdate(value)
    })

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this)
  }

  preloaderDestroy ()
  {
    this.preloader.destroy()
  }

  preloaderUpdate (value)
  {
    this.percentText.setText(`${parseInt(value * 100)}%`)
    this.progressLoader.updateProgress(value)
  }
}
