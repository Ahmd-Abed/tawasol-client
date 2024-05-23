import React , {useEffect} from "react"
import {connect} from "react-redux";
import {useAlert} from "react-alert";

const Alert = ({alert})=>{
    const showAlert = useAlert();//call lal hook alert
    useEffect(()=>{
      
        if(alert.show){
            showAlert.show(alert.msg,{type:alert.type});
        }
    })
    return <></>//braje3 empty jsx elements la2en ejbare ykun fi return blfunction comoennet react
}

//bade hed lcomponent yeshbuk 3al state store Wkhasatan 3al alerts module

const mapStateToProps=(state)=>{
    return {
        alert : state.alerts //esm lfiles yale fe state la hed ha ykun fi initial state lb2aleb lmodule
    }
}
// const connectToStore = connect(mapStateToProps);
// const ConnectedComponent = connectToStore(Alert);
// export default ConnectedComponent;

export default connect(mapStateToProps)(Alert);