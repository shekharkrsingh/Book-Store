import Login from "./Login";
const HandleError = ({isPending, data, error, setProfileId}) => {
    return (
        <div>
            {console.log("shekahr")}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <Login data={data} setProfileId={setProfileId}/>}
        </div>
    );
}

export default HandleError;