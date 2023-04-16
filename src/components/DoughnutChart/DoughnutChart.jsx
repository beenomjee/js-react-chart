import React, { useEffect, useRef, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement } from 'chart.js';
import styles from './DoughnutChart.module.css'

ChartJS.register(ArcElement)

const backgroundCircle = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart) {
        const { ctx } = chart;
        ctx.save();
        const x = chart.getDatasetMeta(0).data[0].x;
        const y = chart.getDatasetMeta(0).data[0].y;
        const outerRad = chart.getDatasetMeta(0).data[0].outerRadius;
        const innerRad = chart.getDatasetMeta(0).data[0].innerRadius;
        const width = outerRad - innerRad;
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = '#D3E1E1';
        ctx.arc(x, y, outerRad - width / 2, 0, 2 * Math.PI, false);
        ctx.stroke();
    }
}

const DoughnutChart = () => {
    const canvaRef = useRef(null);
    const [bgColor, setBgColor] = useState('#E6E75B');

    useEffect(() => {
        if (canvaRef.current) {
            const canvas = canvaRef.current.querySelector('canvas');
            const ctx = canvas.getContext('2d');
            const grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
            grd.addColorStop(0, "#5F605B");
            grd.addColorStop(1, "#E6E75B");
            setBgColor(grd)
        }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.left}>
                    <h6>Today views</h6>
                    <span>750</span>
                </div>
                <div className={styles.right} ref={canvaRef}>
                    <Doughnut data={{
                        labels: ['Red', 'Blue',],
                        datasets: [
                            {
                                label: '# of Votes',
                                data: [85, 15],
                                backgroundColor: [
                                    bgColor,
                                    '#D3E1E1',
                                ],
                                hoverBackgroundColor: [
                                    bgColor,
                                    '#D3E1E1',
                                ],
                                borderWidth: 0,
                                borderRadius: 1000,
                                cutout: '60%',
                                rotation: -10

                            },
                        ],
                    }} options={{
                        responsive: true, plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                enabled: false,
                            }
                        },
                    }} width={'100%'}
                        plugins={[backgroundCircle,]} />
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <h6>Last Week</h6>
                    <span>10,235</span>
                </div>
                <div className={styles.right}>
                    <h6>Last Month</h6>
                    <span>100,234</span>
                </div>
            </div>
        </div>
    )
}

export default DoughnutChart