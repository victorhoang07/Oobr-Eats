import React from "react";
import { Link } from "react-router-dom";

const FormNav = () => {

    return (
        <div className="form-nav">
            <div className="form-nav-title-box">
                <Link to="/" className="form-nav-Oobr">Oobr <span className="form-nav-Eats">Eats</span></Link>
            </div> 
        </div>
    )
}

export default FormNav