import { Line } from 'react-chartjs-2'
import styles from './LineChart2.module.css'
import { CategoryScale, Chart as ChartJS, LineElement, LinearScale, PointElement } from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
)

const LineChart2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h6>Monthly Subscribers</h6>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottom}>
                    <Line data={{
                        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
                        datasets: [{
                            label: 'Dataset 1',
                            data: [110, 150, 290, 400, 470, 490],
                            borderColor: '#aeaeae',
                            tension: 0.4,
                            pointRadius: 0,
                            borderWidth: 2
                        }, {
                            label: 'Dataset 2',
                            data: [380, 350, 180, 190, 290, 350],
                            borderColor: '#aeaeae',
                            tension: 0.4,
                            pointRadius: 0,
                            borderWidth: 2
                        }],
                    }} options={{
                        scales: {
                            x: {
                                grid: {
                                    display: false
                                },
                                border: {
                                    display: false
                                },
                                ticks: {
                                    font: {
                                        family: "Poppins",
                                        weight: "300",

                                    },
                                    color: "#B7B7B7",
                                    align: 'center'
                                }
                            },
                            y: {
                                border: {
                                    display: false
                                },
                                grid: {
                                    color: "#b7b7b7",
                                },
                                ticks: {
                                    stepSize: 100,
                                    callback: (number) => `${number} ·`,
                                    font: {
                                        family: "Poppins",
                                        weight: "300",

                                    },
                                    color: "#B7B7B7"
                                }
                            }
                        }
                    }} width={660} height={200} />
                </div>
            </div>
        </div>
    )
}

export default LineChart2