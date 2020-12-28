<template>
    <div id="chartBar">
        <div class="processIcon" v-show="process">
          <mu-circular-progress class="demo-circular-progress" :size="36"></mu-circular-progress>
        </div>
        <div class="div-chart-canvas">
          <canvas class="chartjs-render-monitor" ref="canvasChart"></canvas>
        </div>
    </div>
</template>

<script>
    import Chart from 'chart.js'

    export default {
        name: "chartComponent",
        data: function () {
            return {
                process: true,
                barChart: null,
            }
        },
        methods: {
            createChart: function () {
                this.process = true;
                this.barChart = new Chart(this.$refs.canvasChart, {
                    type: 'bar',
                    data: {
                        labels: ['RU', 'EN'],
                        datasets: [{
                            label: 'Частота встречаемости',
                            backgroundColor: [
                                'rgba(252,168,62,0.1)',
                                'rgba(255,99,132,0.1)',
                            ],
                            borderColor: [
                                '#fca83a',
                                'rgb(255,99,132)'
                            ],
                            hoverBackgroundColor: [
                                'rgba(252,168,62,0.4)',
                                'rgba(255,99,132,0.4)',
                            ],
                            pointBackgroundColor: 'white',
                            borderWidth: 1,
                            pointBorderColor: '#249EBF',
                            data: [40, 70]
                        }],
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: true
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false
                                }
                            }]
                        },
                        legend: {
                            display: false
                        },
                        responsive: true,
                        maintainAspectRatio: false,
                        height: 200
                    }
                });
                this.process = false;
            }
        },
        mounted() {
            this.createChart();
        }
    }
</script>

<style scoped>
    .div-chart-canvas {
        margin-top: 50px;
        width: 500px;
        height: 250px;
    }
</style>