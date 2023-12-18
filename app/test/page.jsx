

const Page = () => {

    const handleForm = async (formData) => {
        "use server"
        const username  =  formData.get('username')
        console.log("form-data ==> ", formData)
    
    console.log("username ==> ", username)}
    return (
        <div>
            <form action={handleForm}>
                <input type="text" name="username" />
                <button >send test data</button>
            </form>

        </div>
    )
}

export default Page
