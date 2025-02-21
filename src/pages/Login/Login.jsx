import "./Login.css"
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';




function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    return (
        <div>
            <div id="main-div">
                <div id="section-1">
                    <div>
                        <div id="title">
                            <Typography variant="p">Doctor Appointment Booking.</Typography>
                        </div>
                        <div id="paragraph">
                            <Typography variant="p">
                                Welcome.<br />
                                Start your journey now with our managment system!
                            </Typography>
                        </div>
                    </div>
                </div>

                {/* section two */}

                <div id="section-2">
                    <Container className='container'>
                        <Box id="box">
                            <Typography className="logo" variant="h2">
                                Login
                            </Typography>
                            <form className="form" action="login.php" method="POST" /*onSubmit={handleSubmit} */>
                                <div>
                                    <TextField
                                        name="email"
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        name="password"
                                        id="password"
                                        label="Password"
                                        variant="outlined"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        error={!!errors.password}
                                        helperText={errors.password}
                                    />
                                </div>
                                <div className="login">
                                    <div className="buttons">
                                        <Button className="signup-b" variant="contained" type="submit">Sign Up</Button>
                                        <a className="google-link" href="http://localhost/google"><Button className="google-signup" variant="contained"><GoogleIcon /></Button>
                                        </a>
                                    </div>
                                    <Typography variant="p" className="go-signup">
                                        Don't have an account yet?<span>   </span>
                                        <Link className="route-login"
                                            onClick={() => navigate("/sign-up")}
                                            underline="none">
                                            Sign Up
                                        </Link>
                                    </Typography>
                                </div>
                            </form>
                        </Box>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default Login
