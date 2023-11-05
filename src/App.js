import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import Form from './components/Form';



function App() {
  const [memberList, setMemberList] = useState([]);
  const [memberToUpdate, setMemberToUpdate] = useState(null);

  const addMember = (memberData) => {
    setMemberList([...memberList, memberData]);
    console.log("New member data > ", memberData);
  }

  const updateMember = (memberData) => {
    setMemberList(
      memberList.map(member => {
        if (member.id === memberData.id) {
          return memberData;
        }
          return member;
      })
    )
  };

  return (
    <div className="App">
      <div className='member-card header'>
            <div>İsim:</div>
            <div>Email:</div>
            <div>Rol:</div> 
            <div>İşlemler:</div>
        </div>
      {memberList.map(member => (
        <div className='member-card'>
            <div>{member.name}</div>
            <div>{member.email}</div>
            <div>{member.role}</div>
            <div>
              <button onClick={() => setMemberToUpdate(member)}>Düzenle</button>
            </div>
        </div>
      ))}
      <Form addMember={addMember} updateMember={updateMember} memberToUpdate={memberToUpdate} />
    </div>

  );
}

export default App;
