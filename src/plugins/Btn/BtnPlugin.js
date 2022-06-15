import { Plugins } from 'phaser'
import BtnGameObject from './BtnGameObject'

export default class BtnPlugin extends Plugins.BasePlugin
{
  constructor (pluginManager)
  {
    super(pluginManager)
    pluginManager.registerGameObject('btn', this.create)
  }

  create (x, y, option, action)
  {
    return this.displayList.add(new BtnGameObject(this.scene, x, y, option, action))
  }
}
