import { FC } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import SvgColor from '@/components/SvgColor';
import {
  StyledRootBox,
  StyledInfoBox,
  StyledActionBox,
  StyledProfileImageBox,
} from './styles';

interface CommunityCardProps {
  community: {
    id: number;
    name: string;
    description: string;
    members: number;
    image: string;
  };
}
const CommunityCard: FC<CommunityCardProps> = ({ community }) => {
  const theme = useTheme();
  return (
    <StyledRootBox>
      <Image
        src={community.image}
        alt=""
        width={380}
        height={185}
        style={{ borderRadius: '10px' }}
      />
      <StyledInfoBox>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}
          >
            {community.name}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <SvgColor
              src="assets/images/svgs/users.svg"
              sx={{
                width: 10,
                height: 10,
                color: '#fff',
              }}
            />
            <Typography sx={{ fontSize: '9px', color: '#fff', ml: 1 }}>
              {community.members} members
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ fontSize: '8px', color: '#fff' }}>
          {community.description}
        </Typography>
      </StyledInfoBox>
    </StyledRootBox>
  );
};

export default CommunityCard;
