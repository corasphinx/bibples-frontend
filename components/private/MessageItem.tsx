import { Box, Typography, Badge, Avatar } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import Image from 'next/image';

interface MessageItemProps {
  active: boolean;
}

const MessageItem = (props: MessageItemProps) => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pb: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: props.active ? '#44b700' : '#565A7F',
                boxShadow: `0 0 0 2px ${theme.palette.primary.contrastText}`,
              },
            }}
          >
            <Avatar
              alt="User"
              src="/assets/images/5.png"
              sx={{ width: 40, height: 40 }}
            />
          </Badge>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              pl: 1,
            }}
          >
            <Typography
              color="primary.contrastText"
              fontSize={15}
              fontWeight={500}
              sx={{
                background:
                  'linear-gradient(265.96deg, #00A3FF 4.86%, #E140E4 93.41%)',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
              }}
            >
              Dave Bronx
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            src="/assets/icons/double-check.svg"
            alt=""
            width={18.67}
            height={10}
            style={{ width: 'auto', height: '10px' }}
          />
          <Typography fontSize="10px" color="#697A8D" ml={1}>
            14:40
          </Typography>
        </Box>
      </Box>
      <Box sx={{ ml: 6 }}>
        <Typography color="primary.contrastText" fontSize={15}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam id
          vel euismod. Semper libero mi tincidunt sed lectus faucibus vestibulum
          morbi. Massa velit tortor iaculis odio sed sodales arcu maecenas.
          Vitae hac tempor velit pulvinar aliquet est.
        </Typography>
      </Box>
    </Box>
  );
};

export default MessageItem;
