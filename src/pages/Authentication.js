const Authentication = (data, email, password, setProfileId) => {
    const filterData = data.filter((pf) => {
        if (pf.email === email && pf.password === password) {

            return pf;
        } else {

            return null;
        }
    })
    console.log("auth succesfull")
    setProfileId(filterData);
}

export default Authentication;