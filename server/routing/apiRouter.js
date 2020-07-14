const express = require('express');
const router = express.Router();
const Employee = require('../model/Employee');



// GET all Employees
// Method : GET
router.get('/employees', async (request, response) => {
    try {
        let employees = await Employee.find();
        response.status(200).json(employees);
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : 'Server Error'
        });
    }
});

// GET a Single Employee
// Method : GET
router.get('/employees/:id', async (request, response) => {
    let employeeId = request.params.id;
    try {
        let employee = await Employee.findById(employeeId);
        response.status(200).json(employee);
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : 'Server Error'
        });
    }
});

/*  CREATE a new Employee
    Method : POST
 */
router.post('/employees', async (request , response) => {
    const{ first_name , last_name ,email ,gender , mobile} = request.body
    if (!first_name || !last_name || !email || !gender || !mobile) {
        return response.status(400).json({
            error: "All field required"
        })
    }
    if (mobile.length < 10 || mobile.length >10) {
        return response.status(400).json({
            error: "Mobile no 10 digits only"
        })
    }
    var phoneno = /^\d{10}$/;
    if(!mobile.match(phoneno)){
        return response.status(400).json({
            error: "Only Digit allow"
        })
    }

    
    try {
        let emp = await Employee.findOne({ email });
        if (emp) {
            return response
                .status(400).json({
                    error: "Employee alreday exists"
                })
        }
        emp = new Employee({
            first_name,
            last_name,
            email,
            gender,
            mobile
        });
        await emp.save()
        response.json({
            message: "Done",
            emp
        })

    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : 'Server Error'
        });
    }
});

/*  UPDATE an existing Employee
    Method : PUT
 */
router.put('/employees/:id', async (request , response) => {
    let employeeId = request.params.id;
    let updatedEmployee = {
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        gender : request.body.gender,
        mobile: request.body.mobile
    };
    const {first_name,last_name,email,gender,mobile} = updatedEmployee
    if (!first_name || !last_name || !email || !gender || !mobile) {
        return response.status(400).json({
            error: "All field required"
        })
    }
    try {
        
        let employee = await Employee.findById(employeeId);
        if(employee){
            employee = await Employee.findByIdAndUpdate(employeeId , {
                $set : updatedEmployee
            } , {new : true});
            response.status(200).json({
                msg : 'Employee is Updated'
            });
        }
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : 'Server Error'
        });
    }

});

/*  DELETE an existing Employee
    Method : DELETE
 */
router.delete('/employees/:id', async (request,response) => {
    let employeeId = request.params.id;
    try {
        await Employee.findByIdAndDelete(employeeId);
        response.status(200).json({
            msg : 'Employee is Deleted'
        });
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : 'Server Error'
        });
    }
});

module.exports = router;


