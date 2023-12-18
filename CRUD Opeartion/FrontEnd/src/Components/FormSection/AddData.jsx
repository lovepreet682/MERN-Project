import React, { useEffect, useState } from 'react'
import AddNewUser from './AddNewUser'
import axios from 'axios';
import { MdDeleteForever } from 'react-icons/md'
import { FaEdit } from 'react-icons/fa'
import EditData from './EditData';

function AddData() {
    const [userList, setUserList] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);

    // handle Edit
    const handleEdit = (id) => {
        console.log("llllll", id);
        setShowEditModal(true);
        console.log(showEditModal);
    }

    // handle Delete
    const handleDelete = (userId) => {
        try {
            axios.delete(`http://192.168.29.172:5000/deleteuser/${userId}`).then((res) => {
                setUserList(res.data);
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        try {
            axios.get("http://192.168.29.172:5000/getusers").then((response) => {
                setUserList(response.data);
                console.log(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <>
            <div className="container">
                <AddNewUser />
                <table className='table text-center table-responsive'>
                    <thead>
                        <tr className='table-dark'>
                            <th scope='col'> Sr No</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Course</th>
                            <th scope="col">City</th>
                            <th scope="col">Pin Code</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.isArray(userList) && userList.map((item, index) => {
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.firstname}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.course}</td>
                                        <td>{item.city}</td>
                                        <td>{item.pincode}</td>
                                        <td>
                                            <span className='mx-3 cursor-pointer' onClick={() => handleDelete(item._id)} ><MdDeleteForever /></span>
                                            <span className='mx-3 cursor-pointer' onClick={() => { handleEdit(item._id) }}>
                                                <FaEdit></FaEdit>
                                            </span>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        
        </>
    )
}

export default AddData