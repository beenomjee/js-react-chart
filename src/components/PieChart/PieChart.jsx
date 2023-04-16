import { Pie } from 'react-chartjs-2'
import styles from './PieChart.module.css'
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js'

ChartJS.register(ArcElement, Tooltip)

const backgroundCircle = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart) {
        const { ctx } = chart;
        ctx.save();
        const x = chart.getDatasetMeta(0).data[0].x;
        const y = chart.getDatasetMeta(0).data[0].y;
        const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;

        ctx.beginPath();
        ctx.fillStyle = "#EAEA66";
        ctx.arc(x, y, outerRadius, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

const PieChart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Pie data={{
                    labels: ['Vendors', 'Customers',],
                    datasets: [
                        {
                            label: 'Sample',
                            data: [12, 88],
                            backgroundColor: [
                                '#606060',
                                '#EAEA66',
                            ],
                            hoverBackgroundColor: [
                                '#606060',
                                '#EAEA66',
                            ],
                            borderWidth: 0,
                            borderRadius: {
                                innerEnd: 5,
                                innerStart: 5,
                                outerEnd: 0,
                                outerStart: 0,
                            }
                        },
                    ],
                }} options={{
                    cutout: '10%',
                    responsive: true,
                }}
                    plugins={[backgroundCircle]} width={"100%"} />
            </div>
            <div className={styles.right}>
                <div className={styles.top}>
                    <span>12%</span>
                    <h6>Vendors</h6>
                </div>
                <div className={styles.bottom}>
                    <span>88%</span>
                    <h6>Customers</h6>
                </div>
            </div>
        </div>
    )
}

export default PieChart