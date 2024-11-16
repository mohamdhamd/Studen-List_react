import AddStudent from "./components/AddStudent"
import TableStudentShow from "./components/TableStudentShow"
import { useState } from "react"
import { data } from "./utils/data"

function App() {
  const [students, setStudents] = useState(data)

  return (
    <div className="container mx-auto mt-10 border-x-2 border-t-2 border-gray bprder-b-black p-2">

  <TableStudentShow students={students} />
      <AddStudent students={students}  setStudents={setStudents} />
    </div>
  )
}

export default App
