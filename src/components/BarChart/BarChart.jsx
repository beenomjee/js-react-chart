import { Bar } from 'react-chartjs-2'
import styles from './BarChart.module.css'
import { BarElement, Chart as ChartJS } from 'chart.js'

ChartJS.register(BarElement);

const BarChart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h6>Traffic by location</h6>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottom}>
                    <Bar data={{
                        labels: ['FSD', 'LHR', 'MUL', 'PHW', 'KR'],
                        datasets: [
                            {
                                label: 'Group 1',
                                backgroundColor: '#5AC0CC',
                                data: [32, 18, 9, 22, 24],
                            },
                            {
                                label: 'Group 2',
                                backgroundColor: '#53A6B4',
                                data: [16, 28, 36, 7, 18],

                            },
                            {
                                label: 'Group 3',
                                backgroundColor: '#4D8F9F',
                                data: [27, 9, 28, 34, 8],
                            }
                        ],

                    }} options={{
                        categoryPercentage: 0.5,
                        barPercentage: 0.8,
                        scales: {
                            x: {
                                ticks: {
                                    display: false
                                },
                                grid: {
                                    display: false
                                },

                            },
                            y: {

                                ticks: {
                                    stepSize: 10,
                                    display: false
                                },
                                border: {
                                    display: false
                                }
                            }
                        },

                    }} width={660} />
                </div>
            </div>
        </div>
    )
}

export default BarChart