import React, { useEffect, useState } from 'react'

function UseStateHook() {
    const [name, setName] = useState("Love Rehan");
    const [studentList, setStudentList] = useState([]);
    const [objectName, setObjectName] = useState({
        name: "Lovepreet", course: "Java", age: 23
    });

    const [employeeNumber, setEmployeeNumber] = useState(0);
    const [myNumber, setMyNumber] = useState(0);

    const handleClick = () => {
        if (name.startsWith("R")) {
            setName("My Name Is love Rehan");
        } else {
            alert("This name is not Good")
        }
    }

    // Update the student List
    const handleStudentList = () => {
        setStudentList(["Love", "Gourav", "Chetan", "Sahil", "Gagan"])
    }

    // handle Reset the list
    const handleReset = () => {
        setStudentList('')
    }

    // handle Object
    const handleObject = () => {
        setObjectName({ name: "Nikhil", course: "React Js", age: 21 })
    }

    // handle UseEffect
    const handleEmployee = () => {
        setEmployeeNumber(employeeNumber + 1);
        
    }

    useEffect(() => {
        console.log("Working", employeeNumber);
        setMyNumber("Message", myNumber);
        console.log(myNumber);
    }, [employeeNumber])
    return (
        <>
            <div className="container">
                <h6>{name}</h6>
                <button type='btn' onClick={handleClick}>Submit</button>
            </div>

            {/* Student List */}
            <div className="row">
                <div className="col-md-4">
                    <div className=''>
                        <li>{studentList}</li>
                    </div>
                    <button className='btn btn-primary' onClick={handleStudentList}>Student List</button>
                    <button className='btn btn-success mx-3' type='btn' onClick={handleReset}>Clear List</button>
                </div>
            </div>

            {/* Object Handle */}
            <div className="row">
                <div className="col-md-4">
                    <h6>{objectName.name}</h6>
                    <h6>{objectName.course}</h6>
                    <h6>{objectName.age}</h6>

                    <button className='btn btn-danger' onClick={handleObject}>Get Object</button>
                </div>
            </div>

            <br /><br /> <hr /><br /><br />

            {/* useEffect in the Recat Js */}
            <div className="row d-flex jusitify-content-center">
                <div className="col-md-4">
                    <h3>Exato.AI {employeeNumber} {myNumber} </h3>                    
                    <div>
                        <button className='btn btn-primary' onClick={handleEmployee}>UseEffect Check</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseStateHook