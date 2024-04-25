import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();

    const handleDeleteUser = (id) => {
        console.log('deleting', id)
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE",
            // headers: {

            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    toast.success('User Deleted successfully')
                }
                else{
                    toast.error('failed to delete user')
                }
        })
    }

    return (
        <div>
            <Toaster></Toaster>
            <h1 className="text-center text-3xl font-semibold">Users: {users.length}</h1>
            <div>
                {
                    users.map(user => <p
                        key={user._id}>
                        {user.name} :
                        {user.email} :
                        {user._id}
                        <button
                            onClick={() => handleDeleteUser(user._id)}
                            className="btn btn-xs btn-warning">Delete
                        </button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;