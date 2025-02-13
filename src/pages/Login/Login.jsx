import "./Login.css"
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";


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

    const validate = () => {
        let tempErrors = {};
        tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Valid email is required";
        tempErrors.password = formData.password.length >= 6 ? "" : "Password must be at least 6 characters";

        setErrors(tempErrors);
        return Object.values(tempErrors).every((x) => x === "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Signup successful", formData);
        }
    };

    return (
        <div>
            <div id="main-div">
                <div id="section-1">
                    <div>
                        <div id='title'>
                            <Typography variant="p">Test.</Typography>
                        </div>
                        <div id="paragraph">
                            <Typography variant="p">
                                Welcom.<br />
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
                            <form className="form" action="login.php" method="POST" onSubmit={handleSubmit}>
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
                                <Typography>
                                    <div className="forgot-pass">
                                        <Link className="forgot-pass-l"
                                            onClick={() => navigate("/forgot-password")}
                                            underline="none">
                                            Forgot Password
                                        </Link>
                                    </div>
                                </Typography>
                                <div className="login">
                                    <Button id="submit" variant="contained" type="submit">Login</Button>
                                    <Typography>
                                        <p>
                                            Don't have an account yet?<span>   </span>
                                            <Link className="route-login"
                                                onClick={() => navigate("/sign-up")}
                                                underline="none">
                                                Sign Up
                                            </Link>
                                        </p>
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
