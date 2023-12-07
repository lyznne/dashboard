import React from 'react'
import styles from "./transactions.module.css"
import Image from 'next/image'


const Transaction = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions </h2>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/admin.jpg" alt="" height={40} width={40} className={styles.userImage} />
                                John mike
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>
                            14.02.2023
                        </td>
                        <td>
                            $3.205
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/admin-avatar.jpg" alt="" height={40} width={40} className={styles.userImage} />
                                John Snow
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>
                            14.02.2023
                        </td>
                        <td>
                            $3.205
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user} >
                                <Image src="/admin.jpg" alt="" height={40} width={40} className={styles.userImage} />
                                John mike
                            </div>

                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        </td>
                        <td>
                            14.02.2023
                        </td>
                        <td>
                            $3.205
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Transaction
