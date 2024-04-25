import toast, { Toaster } from 'react-hot-toast';

const Home = () => {

    const handleAddUser = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = { name, email };
        console.log(name, email, user);

        try {
            const response = await fetch('http://localhost:5000/users', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })
            const data = await response.json()
            console.log("Success:", data);
            if (data?.insertedId) {
                toast.success('User Added Successfully')
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div>
            <Toaster></Toaster>
            <div className="p-12 text-center bg-rose-100 text-5xl font-semibold rounded-3xl">
                Simple CRUD
            </div>
            <form onSubmit={handleAddUser} className="mt-12 flex flex-col gap-4 w-2/5 mx-auto">

                <input className="grow input input-bordered w-full"
                    type="text"
                    name="name"
                    placeholder="Name"
                />


                <input className="input input-bordered w-full"
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                {/* <input className="input input-bordered w-full"
                    type="text"
                    name="x"
                    placeholder="Type here"
                /> */}

                <button className="btn btn-accent w-1/2 mx-auto" type="submit">Add User</button>
            </form>
        </div>
    );
};

export default Home;