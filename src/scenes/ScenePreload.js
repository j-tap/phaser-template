import SceneGame from '@/objects/SceneGame'

import charImg from '@/assets/img/game/char.png'

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

    this.preloaderDraw()

    this.load.image('charImg', charImg)
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
    const { fontFamily, colorTextBar, colorTextTitle } = this.configGame

    this.preloader = this.add.container(centerX, centerY)

    const progressLoader = this.add.progressLoader(0, 0, {
        width: this.width,
      })
      .setName('progress')

    const loadingText = this.make.text({
      x: 0,
      y: -36,
      text: 'Loading...',
      style: {
        fontSize: 24,
        fontFamily,
        color: colorTextTitle,
      },
    })
      .setOrigin(.5, 0)

    const percentText = this.make.text({
      x: 0,
      y: 8,
      text: '0%',
      style: {
        fontSize: 18,
        fontFamily,
        color: colorTextBar,
      },
    })
      .setName('percentText')
      .setOrigin(.5, 0)

    this.preloader.add([progressLoader, loadingText, percentText])

    this.load.on('progress', (value) =>
    {
      this.preloaderUpdateData(value)
    })

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this)
  }

  preloaderDestroy ()
  {
    this.preloader.destroy()
  }

  preloaderUpdateData (value)
  {
    this.preloader.getByName('percentText')
      .setText(`${parseInt(value * 100)}%`)

    this.preloader.getByName('progress')
      .updateProgress(value)
  }
}
