import React ,{useState} from "react";
import { connect } from "react-redux";//la e3ml connect 3al lredux store
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";//behke lal compoennet shu hene lprops lezm tetwa2a3un
import { register } from "../../redux/modules/users";
import { showAlertMessage } from "../../redux/modules/alerts";

const Register = ({isAuthenticated, register, showAlertMessage}) =>{//ay shi bade estkhdum belstore aw acttion bade mar2un ka props
    const [formData,setFormData]=useState({
             name: "",
             email:"",
             password:"",
             password2:""
    });
//diconstract lal variable meshen ma dal e3ml FormData.name ..
    const {name ,email,password,password2}=formData;
    //ma 3mlta async la2en mafeye shi biraje3 promise
    const onChange =(e)=>{
    return setFormData({
        ...formData,[e.target.name]:e.target.value});//meshen ya3ml change btari2a dynamic la kel linput lwe2ef 3layun
    }
    const onSubmit = async(e) =>{
     //hun call lal api register
     e.preventDefault();
     if(password!==password2){
        showAlertMessage("password dont match","error");
     }
     else{
        register({name,email,password});
     }
    }

    if(isAuthenticated){
        return <Navigate to="home"/>;
    }
    return (
        <div className="main register">
            <p className="form-title" align="center">Sign Up</p>
            <form className="form1" onSubmit={onSubmit}>
                <input
                className="input-text"
                type="text"
                name="name"
                placeholder="Name"
                align="center"
                value={name}//internal state bade ekmshu
                onChange={onChange}
                />
                 <input
                className="input-text"
                type="text"
                name="email"
                placeholder="Email"
                align="center"
                value={email}//internal state bade ekmshu
                onChange={onChange}
                />
                 <input
                className="input-text"
                type="password"
                name="password"
                placeholder="Password"
                align="center"
                value={password}//internal state bade ekmshu
                onChange={onChange}
                />
                 <input
                className="input-text"
                type="password"
                name="password2"
                placeholder="Confirm Password"
                align="center"
                value={password2}//internal state bade ekmshu
                onChange={onChange}
                />
                 <input
                 className="btn btn-primary"
                 style={{marginLeft:"36%"}}
                 type="submit"
                 align="center"
                 value="Register"
                 />
                 <p className="forgot" align="center">
                    Already have an account?<Link to="/login">Sign In</Link>
                 </p>
            </form>
        </div>
    )
}

//hul option extra lal validation 
Register.propTypes = {
    register : PropTypes.func.isRequired,
    showAlertMessage:PropTypes.func.isRequired
}
//bade ehke la react shu hene lstate lbade jebun mn lstore

const mapStateToProps =(state)=>{

    return {
        isAuthenticated:state.users.isAuthenticated,//esem lprops lbade hatu blcomponent bruh bhatu ka parameter b2alb lcomponent
    }

}

export default connect(mapStateToProps,{showAlertMessage,register})(Register);//btene paramter bb7aded laction lbade esta5dmun mn redux ,ba3da esem lcomponent bstep wahde