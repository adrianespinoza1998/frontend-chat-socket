import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import env from "react-dotenv";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GoogleIcon from '@mui/icons-material/Google';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {

  //Footbar copyright
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/adrianespinoza1998">
        Adrian Espinoza Arevalo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export const LoginScreen = () => {

 //Guardar host
  const url = 'http://localhost:5000';

  const signInGoogle = async(googleUser) => {
    //Guardar token de inicio de sesiÃ³n de google
    const id_token = googleUser.getAuthResponse().id_token;

    //Enviar token al backend
    const response = await axios({
      method: 'POST',
      url: `${url}/api/auth/google`,
      data: {id_token}
    });

    console.log(response);
  }

  const failedSingIn = (response)=>{
    console.log(response);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      correo: data.get('correo'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="correo"
              label="Correo electronico"
              name="correo"
              autoComplete="email"
              autoFocus
              type="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar contraseña"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesión
            </Button>
            <GoogleLogin 
              clientId={env.GOOGLE_CLIENT_ID}
              render={renderProps => (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  sx={{bgcolor: 'error.main',':hover': {
                      bgcolor: '#c42c2c',
                      color: 'white',
                    }
                  }}
                >
                  <GoogleIcon />
                </Button>
              )}
              onSuccess={signInGoogle}
              onFailure={failedSingIn}
              cookiePolicy={'single_host_origin'}
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvido su contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"¿No posee una cuenta? Registrarse"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
