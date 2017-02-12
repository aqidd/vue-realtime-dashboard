<script>
import { Pie } from 'vue-chartjs'

export default Pie.extend({
  props: ['labels', 'ratings'],
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          data: this.ratings,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#55FF56',
            '#33DD56'
          ]
        }
      ]
    })
  }
})
</script>
