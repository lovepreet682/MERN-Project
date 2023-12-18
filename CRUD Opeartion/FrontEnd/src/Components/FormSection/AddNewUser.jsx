import React, { useState } from 'react';
import axios from 'axios';

function AddNewUser() {
    const [userInput, setUserInput] = useState({
        firstname: "", lastname: "", course: "", age: "", email: "", pincode: "", city: "",
    });
    const [userErrorInput, setUserErrorInput] = useState({
        firstname: "", lastname: "", course: "", age: "", email: "", pincode: "", city: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "firstname" && name === "lastname" && name === 'age' && name === 'pincode' && name === 'city') {
            setUserErrorInput((prev) => ({
                ...prev, [name]: `${name}`
            })
            )
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://192.168.29.172:5000/adduser', userInput);
            setUserInput(response.data);
            setUserInput({
                firstname: "", lastname: "", course: "", age: "", email: "", pincode: "", city: ""
            })
        } catch (error) {
            console.log(error);
        }

        window.location.reload();
    };

    return (
        <div>
            <div id="addUser">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-dark my-2'>Add User</button>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <form onSubmit={handleSubmit} >
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="row mb-3">
                                    <div className="col-6">

                                        <input type="text" name='firstname' value={userInput.firstname} onChange={handleChange} className='form-control' placeholder='Enter First Name' />
                                    </div>

                                    <div className="col-6">

                                        <input type="text" className='form-control' name='lastname' value={userInput.lastname} onChange={handleChange} placeholder='Enter First Name' />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <input type="email" className='form-control' name="email" id="" value={userInput.email} onChange={handleChange} placeholder='Enter Email' />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-6">
                                        <input type="number" className='form-control' name="age" value={userInput.age} onChange={handleChange} id="" placeholder='Enter Age' />
                                    </div>
                                    <div className="col-6">
                                        <select className='form-control' id="" name='course' value={userInput.course} onChange={handleChange}>
                                            <option selected>Choose Course</option>
                                            <option value="Java">Java</option>
                                            <option value="C++">C++</option>
                                            <option value="Node Js">Node Js</option>
                                            <option value="JavaScript">Java Script</option>
                                            <option value="Python">Python</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-6" >
                                        <input type="number" name='pincode' value={userInput.pincode} onChange={handleChange} className='form-control' placeholder='Enter Pin Code' />
                                    </div>

                                    <div className="col-6">
                                        <input type="text" name='city' value={userInput.city} onChange={handleChange} className='form-control' placeholder='Enter City' />
                                    </div>
                                </div>


                            </div>
                            <div class="modal-footer d-flex justify-content-center">
                                <button type="submit" data-bs-dismiss="modal" aria-label="Close" class="btn btn-success">Save changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNewUser