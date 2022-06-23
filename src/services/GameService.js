export default class GameService
{
  constructor ()
  {
    //
  }

  switchLevel (oldScene, newSceneName)
  {
    this.fadeScene(oldScene, { type: 'fadeOut' }, () =>
    {
      const newScene = oldScene.game.scene.getScene(newSceneName)
      oldScene.scene.start(newSceneName)
      this.fadeScene(newScene)
    })
  }

  fadeScene (scene, options = {}, callback)
  {
    const fades = ['fadeIn', 'fadeOut']
    const duration = options.duration || 200
    const type = options.type || fades[0]

    if (!fades.includes(type)) throw('Incorrect fade type')

    scene.cameras.main[type](duration, 0, 0, 0, (camera, value) =>
    {
      if (value === 1)
      {
        if (typeof callback === 'function')
        {
          callback()
        }
      }
    })
  }
}
