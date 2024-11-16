// import { data } from '../utils/data'
// import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { data, Student } from "@/utils/data";
import { Dispatch, useMemo } from "react";

interface Props {
    students: Student[],

}
var counter = 0;


const TableStudentShow = (props: Props) => {
    // useMemo
    const StudentWithScolarship = useMemo(() => {
        return props.students.map((s) => {
            let result = false;
            for (let i = 0; i >= 100000000; i++) {
                result = Math.random() > 0.5;
            }
            return { ...s, eligible: result }
        })

    }, [])
    return (
        <div>
            <Table>
                <TableCaption>Studen List Show .</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>id</TableHead>
                        <TableHead>Full Name</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Class</TableHead>
                        <TableHead>Yes/No</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>

                    {/* <TableCell >mohamed</TableCell>
            <TableCell>21</TableCell>
            <TableCell>mohamed@gmail.com</TableCell>
            <TableCell>MBA</TableCell> */}
                    {
                        props.students.map((item , index) => {
                            return (
                                <>
                                    <TableRow>
                                        <TableCell>{counter++}</TableCell>
                                        <TableCell >{item.name}</TableCell>
                                        <TableCell>{item.age}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.class}</TableCell>
                                        <TableCell>{StudentWithScolarship[index]?.eligible?"Yes" :"No"}</TableCell>
                                    </TableRow>
                                </>
                            )
                        })
                    }

                </TableBody>
            </Table>

        </div>
    )
}

export default TableStudentShow
