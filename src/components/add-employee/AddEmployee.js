import React, { Fragment, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee, getAllEmployees } from "../../redux/employee/employeeActions";
import { useHistory } from 'react-router-dom';
import PopUp from '../common/Popup'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { OutlinedInput} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    '@global': {
        // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiFormControl-marginDense': {
         marginTop: "-2px"
        },
        '.MuiDialogContent-root': {
             padding: "8px 41px",
            margin:"auto",
            width:"100%"
            
        }
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '55ch',
        },
    },

}));


let AddEmployee = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    let history = useHistory();
    let dispatch = useDispatch();

    let buttonElem = useRef(null)
    let [checked, setCheked] = useState(false)

    let [employee, setEmployee] = useState({
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        mobile: ''
    });

    let alert = useSelector((store) => {
        return store.alert
    });

  
   
    let changeInput = (e) => {
        // setCheked(!checked)
        // buttonElem.current.disabled = checked
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    let submitAddEmployee = (e) => {
        e.preventDefault();
        dispatch(createEmployee(employee, history))
        // .then(res=>{
        //     alert("success")
        // })
        // .catch(err=>{
        //     alert("err",err)
        // });
        //setOpen(false)

    };

    const resetForm = () => {
        setEmployee({...employee,first_name:""})

    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <PopUp type={alert.type} message={alert.message} open={alert.open} onClose={alert.handleClose} />
            {/* <pre>{JSON.stringify(employee)}</pre>*/}
            <form>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add Employee
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title" style={{textAlign:"center"}}>Add Employee</DialogTitle>
                    <DialogContent>
                        <TextField
                            style={{ marginBottom: 20 }}
                            id="outlined-helperText"
                            label="First Name"
                            variant="outlined"
                            labelWidth={0}
                            name="email"
                            margin="dense"
                            name="first_name"
                            value={employee.first_name}
                            onChange={changeInput}
                            fullWidth
                        />
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            style={{ marginBottom: 20 }}
                            id="outlined-helperText"
                            label="Last Name"
                            variant="outlined"
                            labelWidth={0}
                            name="last_name"
                            margin="dense"
                            value={employee.last_name}
                            onChange={changeInput}
                            fullWidth
                            
                        />
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            style={{ marginBottom: 20 }}
                            id="outlined-helperText"
                            label="Email"
                            variant="outlined"
                            margin="dense"
                            name="email"
                            value={employee.email}
                            onChange={changeInput}
                            fullWidth
                           
                        />
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            style={{ marginBottom: 20 }}
                            id="outlined-helperText"
                            label="Mobile No"
                            variant="outlined"
                            labelWidth={0}
                            margin="dense"
                            name="mobile"
                            value={employee.mobile}
                            onChange={changeInput}
                            fullWidth
                            
                        />
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            style={{ marginBottom: 10}}
                            id="outlined-helperText"
                            label="Gender"
                            variant="outlined"
                            labelWidth={0}
                            name="email"
                            margin="dense"
                            name="gender"
                            value={employee.gender}
                            onChange={changeInput}
                            fullWidth
                           
                        />
                    </DialogContent>
                    <div style={{paddingRight:"50px"}}>
                    <DialogActions>
                        <Button onClick={handleClose} style={{ backgroundColor:"#f44336",color:"white"}}>
                            Cancel
                        </Button>
                        <Button onClick={submitAddEmployee} style={{ backgroundColor:"#f44336",color:"white"}}>
                            Submit
                        </Button>
                    </DialogActions>
                    </div>
                </Dialog>
            </form>

        </Fragment>
    );
};
export default AddEmployee;