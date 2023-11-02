import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';
import { Formik, Field, Form } from 'formik';


function App() {
  {/*- [ ] Takım üyelerini içeren listeyi bir stateten render edin.*/}
  const [members, setMembers] = useState([]);


  {/*  - [ ] Üye listesine yeni bir üye eklemek için bir form oluşturun.*/}
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  return (
    <div className="App">
<h1>Any place in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="email" name="email" />
           {/*<ErrorMessage name="email" component="div" />*/}

            <br>
            </br>

           <Field type="password" name="password" />
           {/*<ErrorMessage name="password" component="div" />*/}

            <br>
            </br>

           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
    </div>
  );
}

export default App;
