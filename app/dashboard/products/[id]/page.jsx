import Image from "next/image"
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";



const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.imgContainer} >
                    <Image src="/iphone.jpg" alt="" fill className={styles.img} />
                </div>
                Iphone 8 pro
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label >Title</label>
                    <input type="text" name="title" placeholder=" Iphone 8 pro" />

                    <label >Price</label>
                    <input type="number" name="price" placeholder="$48.03" />

                    <label >Stock</label>
                    <input type="number" name="stock" placeholder="32" />

                    <label >Color</label>
                    <input type="color" name="color" placeholder="gray" />

                    <label >Size</label>
                    <input type="text" name="size" placeholder="medium" />

                    <label >Description</label>
                    <textarea name="desc" id="desc" rows="6" placeholder="iphone 8 pro released 2017"></textarea>

                    <label>Category</label>
                    <select name="cat" id="cat">
                        <option value="computer" selected>Computer</option>
                        <option value="electronics">Electronics</option>
                    </select>



                    <button type="submit" className={styles.button} >Update</button>
                </form>
            </div>

        </div>
    )
}

export default SingleProductPage

