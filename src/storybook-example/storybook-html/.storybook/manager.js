import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import myTheme from './theme'

const options = {
  isFullScreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedPanel: undefined,
}

addons.setConfig({
  ...options,

  // Preset theme
  // theme: themes.dark,

  // Own theme
  theme: myTheme,
})
