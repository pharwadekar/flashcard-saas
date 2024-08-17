import { SignIn } from '@clerk/nextjs';
import { Button, AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import Head from 'next/head';

export default function SignUpPage() {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        padding: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/cover-image.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.9,
          zIndex: -1,
        }
      }}
    >
    <Container maxWidth="sm">
      <Head>
        <title>Sign In - Flashcard SaaS</title>
        <meta name="description" content="Sign in to your Flashcard SaaS account" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Dancing+Script&display=swap" rel="stylesheet" />
      </Head>
      <br></br>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontFamily: 'Lobster',
              fontWeight: 'bold',
              color: '#9c27b0'
            }}
          >
            Custom Flashcards 
          </Typography>
          <Button color="inherit" sx={{ fontFamily: 'Lobster', fontWeight: 'bold'}}>
            <Link href="/sign-up" passHref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 4 }} 
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Lobster',
            fontWeight: 'bold',
            color: '#9c27b0', // Darker lavender shade matching the "Get Started" button
          }}
        >
          Sign In
        </Typography>
        <br></br>
        <SignIn routing="hash" />
      </Box>
    </Container>
    </Box>
  );
}
