import { BarChart, DoughnutChart, HeatChart, LineChart, LineChart2, PieChart } from '../../components'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <DoughnutChart />
            <br />
            <br />
            <LineChart quantity={100} title={'Visitors by Browsers'} />
            <br />
            <br />
            <LineChart quantity={250} title={'Subscriber'} />
            <br />
            <br />
            <PieChart />
            <br />
            <br />
            <LineChart2 />
            <br />
            <br />
            <BarChart />
            <br />
            <br />
            <HeatChart />
        </div>
    )
}

export default Home