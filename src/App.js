import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import Form from './components/Form';



function App() {
  const [memberList, setMemberList] = useState([]);

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
      {memberList.map(member) => (
        <div>
            <div>{member.name}</div>
            <div>{member.email}</div>
            <div>{member.role}</div>
        </div>
      )}
      <Form addMember={addMember} updateMember={updateMember} />
    </div>

  );
}

export default App;
