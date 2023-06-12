import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';


class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2
            
            firstName:"",
            lastName:"",
            emailId:"",
            department:"",
            salary:"",
            gender:"",
            dob:""
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }
    saveEmployee = async(event) => {
        event.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,department :this.state.department,salary:this.state.salary,gender:this.state.gender,dob:this.state.dob};
        console.log('employee => ' + JSON.stringify(employee));
        // const conf= window.confirm("Do you want to save ?");
 
        if (this.state.firstName.length === 0) {
            alert("firstName field is Empty");
          }
         else if (this.state.lastName.length === 0) {
            alert("lastName field is Empty");
          }
          else if (this.state.emailId.length === 0  ) {
            alert("emailId field is Empty");
          }
          else if (this.state.department.length === 0) {
            alert("Department field is Empty");
          }
          else if (this.state.salary.length === 0) {
            alert("salary field is Empty");
          }
          else if (this.state.gender.length === 0) {
            alert("gender field is Empty");
          }
          else if (this.state.dob.length === 0) {
            alert("dob field is Empty");
          }
          
        else if(window.confirm("Do you want to save ?")){
            EmployeeService.createEmployee(employee)
            .then(res =>{
                <Link to='/employees'> this.props.history.push('/employees');</Link>
                window.location.replace("/employees");
                
            });

            }

        
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});

    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }

    changeDepartmentHandler= (event) => {
        this.setState({department: event.target.value});
    }
    changeSalaryHandler= (event) => {
        this.setState({salary: event.target.value});
    }
    changeGenderHandler= (event) => {
        this.setState({gender: event.target.value});
    }
    changeDobHandler= (event) => {
        this.setState({dob: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }
    render(){
        return(<div style={{backgroundImage:`url('https://t4.ftcdn.net/jpg/03/94/95/17/240_F_394951749_TkFfmScEKhEeoYLUWhjnkYVUhzvDTBzn.jpg')`, height: '900px'}}>
            <div>
                <Link to='/employees'> <button className="btn btn-danger" size="xl" style={{marginLeft: "10px",size:'xl'}}>{"<<Back"}</button></Link>
                </div>
               <div className = "container" >
                    <div className = "row">
                        <div className = "d-flex w-50 vh-50 justify-content-center align-items-center" style={{ margin: '0rem',backgroundColor:'' }}>
                            
                            <div className = "card-body" >
                                <form>
                                    <div className = "form-group" style={{alignItems:"-moz-initial"}}>
                                    <h3 className="text-center" style={{fontFamily:'cursive',color:'aqua',fontSize:50}} >Add employee</h3>
                                        <label style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}} required="required"> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={this.state.firstName}  required="required" onChange={this.changeFirstNameHandler}/>
                                    
                                    </div>
                                    <div className = "form-group">
                                        <label style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}} > Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.lastName} required onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}} required> Email Id: </label>
                                        <input type='text' placeholder="Email Address" name="emailId" className="form-control" 
                                            value={this.state.emailId} required onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}} required> Department: </label>
                                        <select placeholder="Department" name="department" className="form-control" 
                                            value={this.state.department} required onChange={this.changeDepartmentHandler}>
                                                <option>FullStackDeveloper</option>
                                                <option>Tester</option>
                                                <option>JavaDeveloper</option>
                                                <option>sales</option>

                                         </select>       

                                    </div>
                                    <div className = "form-group">
                                        <label style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}} required> Salary: </label>
                                        <input placeholder="salary" type="number"  name="salary" className="form-control" 
                                            value={this.state.salary} required onChange={this.changeSalaryHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}} required> Gender: </label>&emsp;
                                        {/* <label  style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}}>
                                        <input type="radio"  name="gender" value={this.state.gender} required onChange={this.changeGenderHandler} />
                                        Male
                                        </label>&emsp; */}
                                        {/* <input type="radio"  name="gender"  value={this.state.gender} required onChange={this.changeGenderHandler} />
                                        <label  style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}}>Female</label>&emsp;
                                        <input type="radio"  name="gender"  value={this.state.gender} required onChange={this.changeGenderHandler} />
                                       <label  style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}}>Other</label>&emsp; */}
                                        <select placeholder="Enter M or F" name="gender" className="form-control" 
                                            value={this.state.gender} required onChange={this.changeGenderHandler}>
                                                <option>None</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                        </select>
                                    </div>
                                    <div className = "form-group">
                                        <label style={{fontFamily:'-moz-initial',color:'aqua',fontSize:25}} required> DateofBirth: </label>
                                        <input placeholder="dob" name="dob" className="form-control"  type='date'
                                            value={this.state.dob} required onChange={this.changeDobHandler}/>
                                    </div>
                                    <div className = "form-group">
                                    <Link to='/employees'><button className="btn btn-success"  required onClick={this.saveEmployee} >Save</button></Link>
                                    <Link to='/employees'> <button className="btn btn-danger"  style={{marginLeft: "10px"}}>Cancel</button></Link>
                                    </div>                            
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    )
}
        
    }


export default CreateEmployeeComponent
