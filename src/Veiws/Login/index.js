import { useNavigate, Link } from "react-router-dom";
import { login } from "../../config/firebase";
import bgimg from '../code-img3.jpg'

function Login() {
  const navigate = useNavigate();

  async function signin() {
    const allInputs = document.getElementsByClassName('form-control');
    const email = allInputs[0].value;
    const password = allInputs[1].value;
    const checkbox = document.getElementById('exampleCheck1').checked;

    try {
      if (!email || !password || !checkbox) {
        alert('Please fill all the inputs!');
        return;
      }

      await login({ email, password });
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  }

  const pic = {
    background: `url(${bgimg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vw',
    margin: 0,
    padding: 0
  };

  return (
    <div style={pic}>
      <div className="d-flex" style={{ marginLeft: '23%', paddingTop: '12%' }}>
        <form className="card p-5">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="button" onClick={signin} className="btn btn-primary">Login</button>
          <p>If you don't have an account <Link className="click" onClick={() => navigate('/signup')}>click here</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;