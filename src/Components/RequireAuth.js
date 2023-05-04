import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const RequireAuth = ({ children }) => {
       const auth = useAuth()

/*       class RequireAuth extends Component {

        constructor(props) {
          super(props)
          this.state = {
            userName: "",
            userNameError: ''
          }

       this.handleusernameChange = this.handleusernameChange.bind(this)
       this.validate = this.validate.bind(this);
    }

    validate() {
        let userName = "Raj";
        let userNameError = "";

        if (this.state.userName.length < 3) {
            userNameError = "UserName must contain atleast three characters"
          }
      
          if (userNameError) {
            this.setState({ userNameError });
            return false;
          }
          return true;
        }
      
 */     

    if (!auth.userName){
        return <Navigate to = '/login ' />
    }
    return children
}