import React from "react";

const students = [
    {   id:1,
        name: "Inje",
    },
    {  
        id:2,
        name: "sms",
    },
    {   
        id:3,
        name: "ksy",
    },
    {
        id:4,
        name: "kbj",
    },
    {
        id:5,
        name: "hwj",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;