import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link } from '@mui/material';

function Login({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ email, password });
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        p: 4,
        borderRadius: 2,
        mx: 'auto',
      }}
    >
      <Typography variant="h5" component="h2" textAlign="center" mb={3}>
        Accedi
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />

        <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px"}} fullWidth>
          Accedi
        </Button>
      </Box>

      <Typography variant="body2" textAlign="center" mt={4}>
        Non hai un account?{' '}
        <Link href="/register" underline="hover">
          Registrati
        </Link>
      </Typography>
    </Box>
  );
}

export default Login;
