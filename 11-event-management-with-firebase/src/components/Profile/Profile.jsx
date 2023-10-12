import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

 

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="justify-center items-center flex flex-col mt-20 max-w-screen-lg mx-auto">
            <div className="max-w-screen-lg mx-auto">
            <img src={user.photoURL} alt="" className="w-full" />
            <h1>{user.displayName}</h1>
            </div>
        </div>
    );
};

export default Profile;