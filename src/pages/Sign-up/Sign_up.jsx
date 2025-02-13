import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./Sign_up.css";



function Sign_up() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        role: ""
    });

    const [errors, setErrors] = useState({});



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const validate = () => {
        let tempErrors = {};
        tempErrors.first_name = formData.first_name ? "" : "First name is required";
        tempErrors.last_name = formData.last_name ? "" : "Last name is required";
        tempErrors.username = formData.username ? "" : "Username is required";
        tempErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? "" : "Valid email is required";
        tempErrors.password = formData.password.length >= 6 ? "" : "Password must be at least 6 characters";
        tempErrors.role = formData.role ? "" : "Role is required";

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
        <div id="main-div">
            {/* section 2 */}
            <div id="section-1">
                <div>
                    <div id="title">
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

            {/* section 2 */}
            <div id="section-2">
                <Container className="container">
                    <Box id="box">
                        <Typography className="logo" variant="h2">
                            Sign Up
                        </Typography>
                        <form className="form" action="sign-up.php" method="POST" onSubmit={handleSubmit}>
                            <div>
                                <TextField
                                    name="first_name"
                                    id="firs-name"
                                    label="First Name"
                                    variant="outlined"
                                    required
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    error={!!errors.first_name}
                                    helperText={errors.first_name}
                                />
                            </div>

                            <div>
                                <TextField
                                    id="last-name"
                                    label="Last Name"
                                    name="last_name"
                                    variant="outlined"
                                    required
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    error={!!errors.last_name}
                                    helperText={errors.last_name}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="username"
                                    label="Username"
                                    name="username"
                                    variant="outlined"
                                    required
                                    value={formData.username}
                                    onChange={handleChange}
                                    error={!!errors.username}
                                    helperText={errors.username}

                                />
                            </div>


                            <div>
                                <TextField
                                    required
                                    id="email"
                                    label="Email"
                                    name="email"
                                    variant="outlined"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                            </div>

                            <div> <TextField
                                required
                                id="password"
                                label="Password"
                                name="password"
                                variant="outlined"
                                value={formData.password}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                            </div>
                            <div>
                                <FormControl id="radio-role">
                                    <FormLabel required >Role</FormLabel>
                                    <RadioGroup
                                        row
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="doctor" control={<Radio />} label="Doctor" />
                                        <FormControlLabel value="patient" control={<Radio />} label="Patient" />
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <div className="Sign-up">
                                <Button className="submit" variant="contained" type="submit">Sign Up</Button>
                                <Typography>
                                    <p>
                                        Already Have An Account?<span>   </span>
                                        <Link className="route-login"
                                            onClick={() => navigate("/login")}
                                            underline="none">
                                            Login
                                        </Link>
                                    </p>
                                </Typography>
                            </div>
                        </form>

                    </Box>
                </Container>

            </div>
        </div>
    )
}

export default Sign_up
