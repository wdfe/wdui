import Vue from 'vue'
import Lazyload from './src/index.js'

Vue.use(Lazyload, {
  try: 3
})

export {default} from './src/index.js'
