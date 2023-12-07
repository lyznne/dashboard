import React from 'react'
import Card from '../ui/dashboard/card/card'
import styles from "../ui/dashboard/dashboard.module.css";
import RightBar from '../ui/dashboard/rightBar/rightbar';
import Transaction from '../ui/dashboard/transactions/transaction';
import Chart from '../ui/dashboard/chart/chart';

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards} >
          <Card />
          <Card />
          <Card />
        </div>

        <Transaction />
        <Chart />
      </div>

      <div className={ styles.side}>
        <RightBar />
      </div>
    </div>
  )
}

export default DashboardPage
