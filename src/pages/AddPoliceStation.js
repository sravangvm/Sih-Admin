import React,{useState} from "react";
import "./app.css";
import FormInput from "../components/FormInput";
import { Alert } from "react-bootstrap";
import Navbar from '../components/NavBar';
const police = ['Begumpet', 'Bowenpally', 'Bollaram', 'Trimulgherry', 'Sulthan_Bazar', 'Chaderghat', 'Afzalgunj', 'Kachiguda', 'Nallakunta', 'Malakpet', 'Saidabad', 'Amberpet', 'Abids', 'Narayanguda', 'Begum_Bazar', 'Gandhinagar', 'Musheerabad', 'Chikkadpally', 'Nampally', 'Ramgopalpet', 'Saifabad', 'Banjara_Hills', 'Jubilee_Hills', 'Panjagutta', 'SR_Nagar', 'Asifnagar', 'Humayunnagar', 'Lunger_House', 'Golconda', 'Tappachabutra',
'Shahinayathgunj', 'Habeebnagar', 'Kulsumpura', 'Mangalhat', 'Gopalapuram', 'Tukaramgate', 'Lalaguda', 'Chilakalguda', 'Mahankali', 'Marredupally', 'Karkhana', 'Charminar', 'Bahadurpura', 'Kamatipura', 'Hussaini_Alam', 'Kalapattar', 'Mirchowk', 'Dabeerpura', 'Moghalpura', 'Rein_Bazar', 'Falaknuma', 'Chandrayangutta', 'Shalibanda', 'Chatrinaka', 'Kanchanbagah', 'Bhavani_Nagar', 'Madannapet', 'Santoshnagar']

const AddPs = () =>
{
        const [values, setValues] = useState({
        Location:"",
        username: "",
        password: "",
        confirmPassword: "",
      });
    
      const inputs = [
          {
            id: 1,
            name: "Location",
            type: "text",
            placeholder: "Loaction",
            errorMessage:
              "Location shouldn't include any special character!",
            label: "Location",
            pattern: "^[A-Za-z0-9]{0,100}$",
            required: true,
          },
        {
          id: 2,
          name: "username",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 3,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
          id: 4,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: true,
        },
      ];
    
      const handleSubmit = e => {
        this.setState({ buttonload : true });
        alert("Registration Succesfull!!")
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            fetch("api/Authentication/Login", {
              method: 'POST',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify({
                data:{
                  Location : this.props.Location,
                  Username : values.username,
                  Password : values.password
                }
              })
             })
            .then(res => res.json())
            .then(
              (result) => {
                console.log(result)
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({ buttonload : false });
                console.log(error)
             })
        }
        }
        );  
      }  
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    return(
      <div>
        <Navbar/>
        <div className="app">
        <form onSubmit={handleSubmit}>
        <h1>
          Register Police
        </h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button style={{marginTop:"20px"}}>  Submit</button>
      </form>
        </div>    
      </div>
    );
};
export default AddPs;