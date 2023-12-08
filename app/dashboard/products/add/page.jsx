// import styles from  "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import styles from "app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="computer"> Computer </option>
          <option value="phone">Phone</option>
        </select>

        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          reuired
        />
        <input
          type="number"
          name="stock"
          id="stock"
          placeholder="Stock"
          reuired
        />

        <input
          type="text"
          name="color"
          id="color"
          placeholder="Color"
          required
        />
        <input type="text" name="size" id="size" placeholder="size" required />

        <textarea
          name="desc"
          id="desc"
          rows="6"
          placeholder="Description"
          required
        ></textarea>

        <button type="submit" className={styles.button}>
       
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
