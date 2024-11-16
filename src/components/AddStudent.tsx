
import { Button, Paper } from '@mui/material';
import TextField from '@mui/material/TextField';
import { ChangeEvent, Dispatch, MutableRefObject, useEffect, useMemo, useRef, useState } from 'react';
import { data, Student } from '@/utils/data';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
// inter Face data array
interface Props {
    students: Student[]
    ,
    setStudents: Dispatch<React.SetStateAction<Student[]>>
}

const AddStudent = ({ setStudents, students }: Props) => {
    let counter = 0;
    data.map(() => {
        return counter++
    })
    let newId = counter + 1;
    const intinalValue = { id: newId, name: "", age: 0, email: "", class: "", eligible: "" };
    const [formData, setFormData] = useState(intinalValue)
    // let formData = { id: newId, name: "", age: 0, email: "", class: "" };
    // use Ref 
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const classRef = useRef<HTMLInputElement>(null);
    const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
        // formData.name = e.target.value;
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(e.target.value)
        // console.log(e.target.value)

    }
    // const handelAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     formData.age = parseInt(e.target.value);
    //     // console.log(e.target.value)
    // }
    // const handelEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     formData.email = e.target.value;
    //     // console.log(e.target.value)
    // }
    // const handelClassChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     formData.class = e.target.value;
    //     // console.log(e.target.value)
    // }
    const handleSubmit = () => {
        // // check if all fields are filled
        // if (formData.name === "" || formData.age === 0 || formData.email === "" || formData.class === "") {
        //     alert("Please fill all fields");
        //     return (
        //         <Alert>
        //             <Terminal className="h-4 w-4" />
        //             <AlertTitle>Heads up!</AlertTitle>
        //             <AlertDescription>
        //                 You can add components and dependencies to your app using the cli.
        //             </AlertDescription>
        //         </Alert>

        //     );
        // } else {
            setStudents([...students, formData])
        // }
        // clear form data

        // if (nameRef.current) {
        //     nameRef.current.value = ''
        // }
        // if (ageRef.current) {
        //     ageRef.current.value = ''
        // }
        // if (emailRef.current) {
        //     emailRef.current.value = ''
        // }
        // if (classRef.current) {
        //     classRef.current.value = ''
        // }
        // console.log(newId)
        // data.push(formData)
        // console.log(data)

    }


    // useEffect
    useEffect(() => {
        // console.log(students)
        if (students.length > 6) {
            alert("You Reach max data")
        }
    }, [students])
    useEffect(() => {
        if(formData.name === "Admin" || formData.name === "admin") {
            alert("You Can't Add Admin")
        }
    }, [formData.name])

    return (
        <Paper sx={{ width: 300, padding: 4, gap: 4 }} className='m-auto mt-6 w-100' style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>



            <TextField inputRef={nameRef} onChange={handelChange} id="outlined-basic" label="Full Name" name="name" variant="outlined" />
            <TextField inputRef={ageRef} onChange={handelChange} id="outlined-basic" label="Age" name="age" variant="outlined" />
            <TextField inputRef={emailRef} onChange={handelChange} id="outlined-basic" label="Email" name="email" variant="outlined" />
            <TextField inputRef={classRef} onChange={handelChange} id="outlined-basic" label="Class" name="class" variant="outlined" />
            <Button variant="contained" onClick={handleSubmit}>
                Add
            </Button>

        </Paper>
    )
}

export default AddStudent
