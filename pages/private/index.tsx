import type { ReactElement } from 'react';
import { Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { NextPageWithLayout } from '@/pages/_app';
import PrivateChatLayout from '@/layouts/PrivateChatLayout';
import MessageItem from '@/components/private/MessageItem';

const StyledRootBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3, 4),
  backgroundColor: theme.palette.primary.main,
  borderRadius: '15px',
}));

const Private: NextPageWithLayout = () => {
  return (
    <StyledRootBox>
      {Array.from(Array(3)).map((_, index) => (
        <MessageItem key={index} active={true} />
      ))}
      <MessageItem active={false} />
      <Divider />
    </StyledRootBox>
  );
};

Private.getLayout = (page: ReactElement) => (
  <PrivateChatLayout>{page}</PrivateChatLayout>
);

export default Private;
