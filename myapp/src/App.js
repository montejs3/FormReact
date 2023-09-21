
import './App.css';
import { useState } from 'react'; 
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

function App() {

  const [formValues, setFormValues] = useState({email:"", password:"",favClass:"1"})
  const [validationStates, setValidationStates] = useState({emailState:true, passwordState:true})

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });

  const handlePasswordChange = ((e) => {
  setFormValues({...formValues, password: e.target.value})
  if (e.target.value.length < 9 || !/[0-9]/.test(e.target.value)) {
    setValidationStates({...validationStates, passwordState:false})
  }else{
    setValidationStates({...validationStates, passwordState:true})
  }

  });

  const handleSelectChange = ((e) => {
  setFormValues({...formValues, favClass: e.target.value})
  });

 


  const clickSubmit = (() => {
    //validate email
    if (formValues.email.includes("@") && validationStates.passwordState) {
      setValidationStates({ ...validationStates, emailState: true });
      alert(JSON.stringify(formValues));
    } else if (!formValues.email.includes("@")) {
      setValidationStates({ ...validationStates, emailState: false });
    } else if (!validationStates.passwordState) {
      setValidationStates({ ...validationStates, passwordState: false });
    }
    })
    
      


  return (
    <div>
      <h1>Ejemplo de formularios!</h1>

      <Form>

        <Form.Group className='mb-6' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' onChange={handleEmailChange} value={formValues.email} className={!validationStates.emailState ? 'is-invalid' : ''}/>
          {!validationStates.emailState &&  <Form.Text className='text-muted'>Your email is invalid</Form.Text>}
          {validationStates.emailState &&  <Form.Text className='text-muted'>We'll never share your email with anyoneelse.</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} className={!validationStates.passwordState ? 'is-invalid' : ''}/>
          { !validationStates.passwordState && <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>} 
      
        </Form.Group>
         
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}> 
          <option value="1">ISIS3710</option>
          <option value="2">Programación con tecnologias web</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>

      </Form>
    </div>
  );
}

export default App;
