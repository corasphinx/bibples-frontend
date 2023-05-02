import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SvgColor from '@/components/SvgColor';
import { Divider } from '@mui/material';
import Image from 'next/image';
import { StyledActionGroupBox } from './styles';

const FileItem = () => {
  const theme = useTheme();

  return (
    <StyledActionGroupBox>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', mb:1, mt:1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <Image
            src={'/assets/images/1.png'}
            alt=""
            width={83}
            height={83}
            style={{
                borderRadius: '10px',
            }}
            />
            <Box sx={{ml:2}}>
                <Typography
                    sx={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: theme.palette.primary.contrastText,
                        margin: 0,
                        padding: 0,
                    }}
                >
                    Document.png
                </Typography>
                <Typography
                    sx={{
                        fontSize: '0.8rem',
                        color: theme.palette.primary.contrastText,
                        margin: 0,
                        padding: 0,
                    }}
                >
                    21.5MB
                </Typography>
                <Divider/>
                <Typography
                    sx={{
                        fontSize: '0.8rem',
                        color: theme.palette.primary.contrastText,
                        margin: 0,
                        padding: 0,
                    }}
                >
                    December 7 at 10:25 PM
                </Typography>
            </Box>
        </Box>
        <SvgColor
          src="/assets/images/svgs/filedown.svg"
          sx={{
            width: '20px',
            height: '20px',
            pl: 2,
            color: theme.palette.primary.contrastText,
          }}
        />
      </Box>
    </StyledActionGroupBox>
  );
};

export default FileItem;
