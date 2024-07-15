import {useState} from 'react'
import '../Components/RegForm.css'

const RegForm = () => {

    const [user,setUser] = useState({
        name:"Shobika",
        age:20,
        gender:"Female",
        isMarried:false,
    })

    function changeHandler(e){
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({...user , [name]:value});
    }
  return (
    <div className='regcontainer'>
    
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <td>{user.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{user.age}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>{user.gender}</td>
            </tr>
            <tr>
                <th>Marrital Status</th>
                <td>{user.isMarried ? "Married" : "Not Married"}</td>
            </tr>
        </tbody>
    </table>
    <form>
        <input type="text" placeholder="fullname" name="name" value={user.name} onChange={changeHandler}/>
        <input type="text" placeholder="age" name="age" value={user.age} onChange={changeHandler}/>
        <div className="gender">
            <label htmlFor='male'>
                <input type="radio" name="gender" id="male" value="Male" checked={user.gender === "Male"} onChange={changeHandler}/>
                Male
            </label>
            <label htmlFor='female'>
                <input type="radio" name="gender" id="female" value="Female" checked={user.gender === "Female"} onChange={changeHandler}/>
                Female
            </label>
        </div>
        <label htmlFor='isMarried'>
            <input type="checkbox" id="isMarried" name="isMarried" checked={user.isMarried} onChange={changeHandler}/>
            IsMarried
        </label>
    </form>
    </div>
  )
}

export default RegForm