import { useState } from "react"

const Form = ({addMember, updateMember}) => {
    const [memberData, setMemberData] = useState({
        name: '',
        email: '',
        role: '',
    });

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(event.target.elements.name.value)
        addMember(memberData);
        setMemberData({name: '',email: '',role: ''})
    }

    return (
        <form onSubmit={submitHandler}>
            <label>
                Üye Adı:
                <input type="text" onChange={(e) => 
                    setMemberData({...memberData, name: e.target.value}) } />
            </label>
            <label>
                Üye mail:
                <input type="email" onChange={(e) => 
                    setMemberData({...memberData, email: e.target.value}) } />
            </label>
            <label>
                Üye rolü:
                <input type="text" onChange={(e) => 
                    setMemberData({...memberData, role: e.target.value}) } />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;