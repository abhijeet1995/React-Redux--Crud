import React, {Fragment} from "react";
import spin from '../../images/spinner.gif';
import './Spinner.css';


let Spinner = () => {
    return(
        <Fragment>
            <img src={spin} alt="" className="spin-img"/>
        </Fragment>
    );
};
export default Spinner;

