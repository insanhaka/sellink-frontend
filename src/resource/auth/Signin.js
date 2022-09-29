import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Headimg from '../../assets/img/Login.png';
import {
  Link,
  useNavigate,
} from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function Signin() {

  const apiUrl = useSelector(state => state.ApiReducer);
  const apiKey = useSelector(state => state.HeaderReducer);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  let navigate = useNavigate();
  

    const submit = () => {

        setLoading(true);

        if (email === '' || password === '') {
            Swal.fire({
                icon: 'warning',
                text: 'Mohon isi form dengan lengkap',
                showConfirmButton: false,
                timer: 2500
            })
            setLoading(false);
        }else {
            axios.post(apiUrl.url+'postlogin', {
                email: email,
                password: password
            }, {
                headers: {
                    'Authorization': apiKey.key 
                }
            })
            .then(function (response) {
                var res = response.data.message;
                var token = response.data.token;
                if (res == "success") {
                    localStorage.setItem('passport', token);
                    Swal.fire({
                        icon: 'success',
                        title: 'Selamat Datang',
                        text: response.data.user,
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setLoading(false);
                    navigate("/user/dashboard", { replace: true });

                }else if (res == "empty") {
                    Swal.fire({
                        icon: 'error',
                        text: 'Kamu belum terdaftar, Silahkan mendaftar terlebih dahulu',
                        showConfirmButton: false,
                        timer: 2500
                    })
                    setLoading(false);
                }else if (res == "failed") {
                    Swal.fire({
                        icon: 'error',
                        text: 'Akun ini sedang tidak aktif',
                        showConfirmButton: false,
                        timer: 2500
                    })
                    setLoading(false);
                }else {
                    Swal.fire({
                        icon: 'error',
                        text: 'Email atau Password yang anda masukan salah',
                        showConfirmButton: false,
                        timer: 2500
                    })
                    setLoading(false);
                }
            })
            .catch(function (error) {
                console.log("error nih");
                Swal.fire({
                    icon: 'error',
                    text: 'Mohon maaf, sedang ada gangguan pada server',
                    showConfirmButton: false,
                    timer: 2500
                })
                setLoading(false);
            });
        }
    }

  return (
    <div className="App pt-5">
        <Navbar/>
        
        <div className="page-header min-vh-75 mt-5">
          <div className="container" style={{paddingTop : '3%'}}>
            <div className="row">

              <div className="col-md-5">
                  <center>
                  <Image src={Headimg} className="img-fluid mt-3" alt="Head Image"/>
                  </center>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                  <div className="card card-plain pt-3">
                      <div className="card-header pb-2 text-left bg-transparent">
                        <h3 className="font-weight-bolder">Masuk</h3>
                      </div>
                      <div className="card-body">
                        <label className="form-label">Email</label>
                        <div className="mb-3">
                            <Form.Control type="text" className="form-control" placeholder="Email kamu" id="email" onChange={(event)=> setEmail(event.target.value)} />
                        </div>
                        <label className="form-label">Password</label>
                        <div className="mb-3">
                            <Form.Control type="password" className="form-control" placeholder="Password" id="password" onChange={(event)=> setPassword(event.target.value)} />
                        </div>
                        <div className="text-center">
                            <button onClick={submit} className="btn btn-primary w-100 mt-4 mb-0">{isLoading ? 'Loading…' : 'Masuk'}</button>
                        </div>
                        <br/>
                        <div className="card-footer text-center pt-0 px-lg-2 px-1">
                            <p className="text-sm mx-auto">
                                Belum mempunyai akun?
                                <Link to="/signup" className="font-weight-bold" style={{marginLeft: '4%', color: '#546de5'}}> <b>Daftar</b></Link>
                            </p>
                        </div>
                      </div>
                  </div>
              </div>

            </div>
          </div>
        </div>

        <Footer/>

    </div>
  );
}

export default Signin;