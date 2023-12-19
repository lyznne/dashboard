import Image from "next/image";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { fetchSingleProduct } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/actions-server";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchSingleProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.imgContainer}>
          <Image
            src={product.img || "/iphone.jpg"}
            alt=""
            fill
            className={styles.img}
          />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input name="id" type="hidden" value={product.id} />

          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />

          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />

          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />

          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />

          <label>Size</label>
          <input type="text" name="size" placeholder={product.size} />

          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="6"
            placeholder={product.desc}
          ></textarea>

          <label>Category</label>
          <select name="cat" id="cat">
            <option value="computer" selected>
              Computer
            </option>
            <option value="electronics">Electronics</option>
          </select>

          <button type="submit" className={styles.button}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
