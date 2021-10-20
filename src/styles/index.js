import './null.scss'
import './typography.scss'
import { mapState } from 'vuex'

const styles = {
  data: () => {
    return {
      themes: {
        Dark: () => import('./themes/dark.json'),
        Light: () => import('./themes/light.json')
      }
    }
  },

  computed: {
    ...mapState({
      theme: state => state.theme
    }),

    themesList: () => {
      return Object.keys(this.themes)
    }
  },

  watch: {
    theme: function(val) {
      this.setTheme(val)
    }
  },

  methods: {
    setTheme: (name) => {
     this.themesList.forEach(key => {
        document.documentElement.style.setProperty(`--${key}`, this.themes[name][key])
      })
    }
  },

  created() {
    this.setTheme(this.theme)
  }
}

export {
  styles
}