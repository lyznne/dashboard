import React from "react";
import styles from "../../ui/dashboard/users/users.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const UsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user ..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/admin.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                john Doe
              </div>
            </td>
            <td>johndoe@gmail.com</td>
            <td>13.12.2023</td>
            <td>admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    view
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  delete
                </button>
              </div>
            </td>
          </tr>


          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/admin-avatar.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Mary Doe
              </div>
            </td>
            <td>marydoe@gmail.com</td>
            <td>1.12.2023</td>
            <td>client</td>
            <td>in-active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    view
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  delete
                </button>
              </div>
            </td>
            </tr>
        </tbody>
      </table>


<Pagination />
    </div>
  );
};

export default UsersPage;
