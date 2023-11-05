import { useEffect, useState } from "react"

const Form = ({addMember, updateMember, memberToUpdate}) => {
    const [memberData, setMemberData] = useState({
        name: '',
        email: '',
        role: '',
    });

    const submitHandler = (event) => {
        event.preventDefault()
        if(memberData.id){
            updateMember(memberData);
        } else {
        addMember({...memberData, id: Math.round(Math.random() *  999999)});
        }
        setMemberData({name: '',email: '',role: ''})
    }

    useEffect(() => {
        if(memberToUpdate){
            setMemberData(memberToUpdate);
        }
    }, [memberToUpdate]);

    return (
        <form onSubmit={submitHandler} className="member-form">
            <h2>
                {memberData.id ? 'Üye Güncelle' : 'Üye Ekle'}
            </h2>
            <hr style={{marginBottom:"1.5rem"}} ></hr>
            <div>           
                <label>
                    <span>Üye Adı:</span>
                    {/* Controlled Component */}
                    <input type="text" 
                        //İnputtan state e yaıdırılır.
                        onChange={(e) => 
                        setMemberData({...memberData, name: e.target.value}) }

                        //State değerini value ye yazdırılır.
                        value={memberData.name}
                        />
                </label>
            </div>
            <div>
                <label>
                    <span>Üye Email:</span>
                    <input type="email" onChange={(e) => 
                        setMemberData({...memberData, email: e.target.value}) } 
                        value={memberData.email}
                        />
                </label>
            </div>
            
            <div>
                <label>
                    <span>Üye rolü:</span>
                    <input type="text" onChange={(e) => 
                        setMemberData({...memberData, role: e.target.value}) } 
                        value={memberData.role}
                        />
                </label>
            </div>
            <div className="submit-btn">
            <button type="submit" disabled= { !(memberData.name && memberData.email) }  >
                {memberData.id ? 'Güncelle' : 'Yeni Kayıt Ekle'}
            </button>
            </div>
        </form>
    )
}

export default Form;