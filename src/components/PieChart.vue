<script>
import { Pie, mixins } from 'vue-chartjs'

export default Pie.extend({
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
})
</script>
