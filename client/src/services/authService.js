import { toast } from "react-toastify"
import { userLogin,userRegister } from "../redux/features/authAction"
import store from "../redux/store"
//this is for the handling login
export let handleLoginController = (e, email, password, role) => {
    e.preventDefault()
    try {
        if (!email || !password || !role) return toast.error("All fields are required");
        //api -call
        store.dispatch(userLogin({email,password,role}))
    }
    catch (error) {
        console.log(error)
    }
}
//handling for registration
export let handleRegistrationController = (e, email, password, name, role, phone, address, hospitalName, organizationName) => {
    e.preventDefault()
    try {
        store.dispatch(userRegister({email,password,name,role,phone,address,hospitalName,organizationName}))
    }
    catch (error) {
        console.log(error)
    }
}