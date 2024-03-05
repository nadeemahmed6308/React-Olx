import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import { Registered } from "../../config/firebase";
import img from '../code-img3.jpg'

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    checkbox: false,
  });

  const handleChange = (e) => {
    // Input field ka value ko state mein update karna
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const signup = async () => {
    try {
      if (!formData.name || !formData.email || !formData.password || !formData.number || !formData.checkbox) {
        alert("Please fill in all the inputs!");
        return;
      }

      await Registered(formData);
      navigate('/login');
    } catch (e) {
      alert(e.message);
    }
    
    // Form fields ko clear karne ke liye state ko reset karo
    setFormData({
      name: "",
      email: "",
      password: "",
      number: "",
      checkbox: false,
    });
  };

  const pic = {
    background: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vw',
    margin: 0,
    padding: 0
  };

  return (
    <div style={pic}>
      <div className="d-flex" style={{ marginLeft: '30%', paddingTop: '6%' }}>
        <form className="card p-5">

          {/* Input fields mein onChange aur value prop add kiye gaye hain */}
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
            <input type="name" className="form-control" id="exampleInputName1" name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputNumber1" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="exampleInputNumber1" name="number" value={formData.number} onChange={handleChange} />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" name="checkbox" checked={formData.checkbox} onChange={(e) => setFormData({ ...formData, checkbox: e.target.checked })} />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>

          <button type="button" onClick={signup} className="btn btn-primary">Sign Up</button>
          <p>If you don't have an account <a className="click" onClick={() => navigate('/login')}>click here</a></p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
