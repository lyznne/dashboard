import { updateUser } from "@/app/lib/actions-server"
import { fetchSingleUser } from "@/app/lib/data"
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"

const SingleUserPage = async ( {params}) => { 
    const { id }  = params
    const user = await fetchSingleUser(id) 



    return (

        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.imgContainer} >
                    <Image src={user.img || "/admin.jpg" } alt="" fill className={styles.img} />
                </div>
                {user.username}
            </div>
            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}> 
                <input name="id" type="hidden" value={user.id}/>
                    <label >Username</label>
                    <input type="text" name="username"  placeholder= {user.username} />

                    <label >Email</label>
                    <input type="email" name="email"  placeholder= {user.email}/>

                    <label >password</label>
                    <input type="password" name="password"  placeholder= "***********" />

                    <label >phone</label>
                    <input type="text" name="phone"  placeholder= {user.phone} />

                    <label >address</label>
                    <textarea name="address" id="address" rows="6"  placeholder={user.address}></textarea>

                    <label>Is Admin ?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true} selected={user.isAdmin}>Yes</option>
                        <option value={false} selected={!user.isAdmin}>No</option>
                    </select>

                    <label>Is Active ?</label>
                    <select name="isActive" id="isActive">
                        <option value={true} selected={user.isActive}>Yes</option>
                        <option value={false} selected={!user.isActive}>No</option>
                    </select>


                    <button type="submit" className={styles.button} >Update</button>
                </form>
            </div>


        </div>
    )
}

export default SingleUserPage
