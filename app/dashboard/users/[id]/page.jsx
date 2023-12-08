import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"

const SingleUserPage = () => {
    return (

        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.imgContainer} >
                    <Image src="/admin.jpg" alt="" fill className={styles.img} />
                </div>
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label >Username</label>
                    <input type="text" name="username" placeholder="Johnn doe" />

                    <label >Email</label>
                    <input type="email" name="email" placeholder="Johndoe@gmail.com" />

                    <label >password</label>
                    <input type="password" name="password" placeholder="John doe" />

                    <label >phone</label>
                    <input type="text" name="phone" placeholder="+254 7574 875 783" />

                    <label >address</label>
                    <textarea name="address" id="address" rows="6" placeholder="addres 20, 50"></textarea>

                    <label>Is Admin ?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                    <label>Is Active ?</label>
                    <select name="isActive" id="isActive">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>

                </form>
            </div>


        </div>
    )
}

export default SingleUserPage
