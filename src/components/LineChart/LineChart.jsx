import styles from './LineChart.module.css'
import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart as ChartJS, Filler, LineElement, LinearScale, PointElement } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Filler,

)

const LineChart = ({ title, quantity }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h6>{title}</h6>
                <span>{quantity}</span>
            </div>
            <div className={styles.bottom}>
                <Line data={{
                    labels: [3, 5, 6, 4, 8, 5, 6],
                    datasets: [
                        {
                            label: 'Sales',
                            data: [7.3, 4, 5, 3, 7, 5, 10],
                            fill: true,
                            borderColor: '#E6E75B',
                            backgroundColor: '#ECEB6D',
                            tension: 0.4,
                            pointRadius: 0
                        }
                    ]
                }} options={{
                    scales: {
                        x: {
                            display: false,
                            ticks: {
                                display: false,
                            },
                            grid: {
                                display: false
                            },
                            border: {
                                display: false
                            }
                        },
                        y: {
                            min: 0,
                            max: 10,
                            display: false
                        }
                    },
                }} />
            </div>
        </div>
    )
}

export default LineChart