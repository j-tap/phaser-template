import { Plugins } from 'phaser'
import ProgressGameObject from './ProgressGameObject'

export default class ProgressLoaderPlugin extends Plugins.BasePlugin
{
  constructor (pluginManager)
  {
    super(pluginManager)
    pluginManager.registerGameObject('progress', this.create)
  }

  create (x, y, options)
  {
    return this.displayList.add(new ProgressGameObject(this.scene, x, y, options))
  }
}
