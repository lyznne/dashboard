import { addUser } from "@/app/lib/actions-server";
import styles from "app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" name="email" id="email" placeholder="email address"  required />
        <input type="password" name="password" id="password" placeholder="Password" required />
        <input type="phone"  placeholder="Phone" name="phone" id="phone" />

        <select name="isAdmin" id="isAdmin">
          <option value={false} >Is a Admin ?</option>
          <option value={true}>Yes</option>
          <option value={false}> No</option>
        </select>


        <select name="isActive" id="isActive">
          <option value={false} selected>Is a Active ?</option>
          <option value={true}>Yes</option>
          <option value={false}> No</option>
        </select>


       
        <textarea
          name="address"
          id="address"
          rows="6"
          placeholder="Address"
          required
        ></textarea>

        <button type="submit" className={styles.button}>
         
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
