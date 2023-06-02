
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadUser = useLoaderData();

    const handleupdate =event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name,email);
        const updatedUser ={name,email};
        
        fetch(`http://localhost:5000/users/${loadUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('user updated successfully')
            }
        })
    }

    return (
        <div>
            <h3>Update information of :{loadUser.name}</h3>
            <form onSubmit={handleupdate}>
                <input type="text" name="name" defaultValue={loadUser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadUser?.email} id="" />
                <br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default Update;