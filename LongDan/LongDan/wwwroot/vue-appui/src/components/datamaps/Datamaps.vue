<script>
import Datamaps from 'datamaps'

export default {
  props: {
    defaultfill: {
      type: String,
      default: '#abdda4'
    },
    bordercolor: {
      type: String,
      default: '#fdfdfd'
    },
    highlightfillcolor: {
      type: String,
      default: '#fc8d59'
    },
    highlightbordercolor: {
      type: String,
      default: 'rgba(250, 15, 160, 0.2)'
    }
  },
  mounted () {
    let map = new Datamaps({
      element: document.getElementById('map'),
      projection: 'mercator',
      width: null,
      height: 197,
      fills: {
        defaultFill: this.defaultfill
      },
      geographyConfig: {
        borderColor: this.bordercolor,
        highlightOnHover: true,
        highlightFillColor: this.highlightfillcolor,
        highlightBorderColor: this.highlightbordercolor,
        popupOnHover: true
      }
    })
    map
  },
  render: function (createElement) {
    return createElement(
      'div' + this.level,
      [
        createElement('div', {
          style: {
            position: 'relative'
          },
          attrs: {
            id: 'map'
          }
        }, this.$slots.default)
      ]
    )
  }
}
</script>
