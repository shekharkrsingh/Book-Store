import {Navigate} from "react-router-dom";
import {CgProfile} from "react-icons/cg"
import {BiMaleFemale} from "react-icons/bi"
import {LiaBirthdayCakeSolid} from "react-icons/lia"
import {HiOutlineMail} from "react-icons/hi"
import {BiPhone} from "react-icons/bi"
import {GrLocation} from "react-icons/gr"

const Profile = ({profileId}) => {

    const handleProfileLogin = () => {
        if (profileId !== null && profileId.length === 1) {
            return (
                <div>
                    <div className=" flex flex-col justify-center text-center mt-9">
                        <div className="m-auto text-9xl"><CgProfile/></div>
                        <h2 className=" text-4xl text-green-600">{profileId[0].name}</h2>
                        <div>
                            <div className="flex flex-row justify-center m-auto text-2xl font-thin ">
                                <BiMaleFemale className=" mr-2 "/> {profileId[0].gender}</div>
                        </div>
                        <div className=" flex flex-row justify-center m-auto text-xl font-thin ">
                            <LiaBirthdayCakeSolid className="mr-2"/> {profileId[0].dob}
                        </div>
                        <div className=" flex flex-row justify-center m-auto text-xl font-thin">
                            <HiOutlineMail className="mr-2"/> {profileId[0].email}</div>
                        <div className=" flex flex-row justify-center m-auto text-xl font-thin"><BiPhone className="mr-2"/> {profileId[0].contact}</div>
                        <div className=" flex flex-row justify-center m-auto text-xl font-thin"><GrLocation className="mr-2"/> {profileId[0].address}</div>
                    </div>
                </div>
            );
        } else {
            // Use the Navigate component to perform the redirection
            return <Navigate to="/login"/>;
        }
    };

    return <div>{handleProfileLogin()}</div>;
};

export default Profile; // Changed the component name to "Profile" with an uppercase "P"