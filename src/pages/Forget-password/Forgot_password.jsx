import "./Forgot_password.css"
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Forgot_password() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Valid email is required";

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
                            <Typography className="logo" variant="h3">
                                Forgot password?
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
                                <div className="submit">
                                    <Button id="submit" variant="contained" type="submit">Reset password</Button>
                                    <Typography>
                                        <p>
                                            Remember your password?<span>   </span>
                                            <Link className="route-login"
                                                onClick={() => navigate("/login")}
                                                underline="none">
                                                Login here
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

export default Forgot_password
