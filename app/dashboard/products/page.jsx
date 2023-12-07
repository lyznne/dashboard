import styles from "@/app/ui/dashboard/products/products.module.css";

import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/iphone.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                iphone
              </div>
            </td>
            <td className= {styles.desc}>
              The iPhone 8 is a smartphone released by Apple in 2017. It
              features a 4.7-inch LCD display.
            </td>
            <td>$48.05</td>
            <td>Oct 29 2023</td>
            <td>34</td>

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
              <div className={styles.product}>
                <Image
                  src="/macbook.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Macbook pro
              </div>
            </td>
            <td className= {styles.desc}>
            The iPhone 8 is a smartphone released by Apple in 2017.
            </td>
            <td>$423.05</td>
            <td>Nov 29 2023</td>
            <td>12</td>

            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
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

export default ProductsPage;
