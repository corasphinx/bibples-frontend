import type { NextPage } from "next";
import { Container, Typography, Box } from '@mui/material';
import Link from '@/components/Link';
import { selectAuthState, setAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../store/store";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard: NextPage = () => {
  const authState = useSelector(selectAuthState);

  const { push } = useRouter();

  useEffect(() => {
     if(!authState) push('/login');
  }, [authState]);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        <Link href="/login" sx={{ color: 'text.primary' }}>
          Login
        </Link>
        <Link href="/register" sx={{ color: 'text.primary' }}>
          Register
        </Link>
        <Link href="/home" sx={{ color: 'text.primary' }}>
          Home
        </Link>
        <Link href="/private" sx={{ color: 'text.primary' }}>
          Private Chat
        </Link>
      </Box>
    </Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      await store.dispatch(setAuthState(false));

      console.log("State on server", store.getState());

      return {
        props: {
          authState: false,
        },
      };
    }
);

export default Dashboard;
