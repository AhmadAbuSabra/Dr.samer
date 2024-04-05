import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface StylesDictionary {
  [Key: string]: React.CSSProperties;
}

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {  // Replace '/api/your-endpoint' with your actual endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Error logging in');
        return;
      }

      const data = await response.json();
      // Handle success (e.g., redirecting to another page, storing user data)
      console.log('Login successful:', data);
      console.log('Login successful:', data.message);
      if(data.message ===1)
      {

        router.push('/MenuScreenDr'); // Navigate to DoctorDB.js
      }
      else
      {

        router.push('/MenuScreen'); // Navigate to DoctorDB.js
      }

    } catch (error) {
      setErrorMessage('Failed to connect to the server');
    }
  };

  const styles: StylesDictionary = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: 'url(/images/pakata-goh-RDolnHtjVCY-unsplash-resized.jpg)', // Replace with your actual image path
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    formContainer: {
      width: '100%',
      maxWidth: '340px', // Slightly reduced for a more elegant look
      padding: '2rem',
      borderRadius: '15px', // Softer rounded corners
      backgroundColor: 'rgba(255, 255, 255, 0.95)', // Higher opacity for better readability
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)', // Softer shadow for a floating effect
      backdropFilter: 'blur(5px)', // Slight blur for a frosted glass look
      margin: '0 20px', // For smaller screens
      border: '1px solid rgba(255, 255, 255, 0.3)', // Subtle border for depth
    },
    title: {
      textAlign: 'center',
      color: '#284B63', // Color picked from the background for consistency
      marginBottom: '2rem',
      fontSize: '2.2rem', // Slightly larger for emphasis
      fontWeight: '300', // Lighter font-weight for a more elegant feel
    },
    input: {
      marginBottom: '1rem',
      padding: '0.8rem 1rem', // Adjusted padding for better proportions
      borderRadius: '8px', // Softer rounded corners
      border: '1px solid #ced4da',
      width: '100%',
      boxSizing: 'border-box',
      fontSize: '1rem',
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slightly more transparency
      color: '#495057',
      transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    },
    button: {
      padding: '0.8rem 1rem',
      width: '100%',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#40826D', // A green hue that complements the background
      color: 'white',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold', // Bold for the button to make it stand out
      letterSpacing: '1px', // Spacing for a more premium look
      transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
      marginTop: '1rem',
    },
  };

  return (
    <>
      <Head>
        <title>شاشة الدخول</title>
      </Head>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <h1 style={styles.title}>تسجيل الدخول</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#80C7A5'; // A light green picked from the background
                e.currentTarget.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#ced4da';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#80C7A5'; // Consistent with the username field
                e.currentTarget.style.boxShadow = 'inset 0 1px 3px rgba(0, 0, 0, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#ced4da';
                e.currentTarget.style.boxShadow = 'none';
              }}
            />
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#36685D'; // Darker green for hover effect
                e.currentTarget.style.transform = 'scale(1.02)'; // Slight scale for interaction
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#40826D';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              دخول
            </button>
          </form>
          {errorMessage && <p>Error: {errorMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
