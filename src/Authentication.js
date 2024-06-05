import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { db } from './firebase'; // Import the Firestore instance
import { collection, addDoc } from 'firebase/firestore';

const Authentication = () => {
    const [formData, setFormdata] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "users"), formData);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit}
                display="flex"
                flexDirection={"column"}
                alignItems={"center"}
                maxWidth={400}
                justifyContent={"center"}
                marginTop={5}
                padding={3}
                borderRadius={5}
                margin="auto"
                boxShadow={'5px 5px 10px #ccc'}
                sx={{
                    gap: '2',
                    ":hover": {
                        boxShadow: "5px 5px 10px #ccc",
                    },
                }}
            >
                <Typography variant='h4' component="h1" gutterBottom>
                    Register
                </Typography>
                <TextField
                    type="text"
                    label="First Name"
                    variant="outlined"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <br />
                <TextField
                    type="text"
                    label="Last Name"
                    variant="outlined"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    fullWidth
                />
                <br />
                <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                />
                <br />
                <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                />
                <br />
                <TextField
                    type="password"
                    label="Confirm Password"
                    variant="outlined"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    fullWidth
                />
                <br />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </Box>
        </Container>
    );
};

export default Authentication;
