import * as React from 'react';
import { FC } from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
    background:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)'
        : theme.palette.primary.main,
    height: 45,
    minWidth: 160
  }));

interface DragDropFileProps {}

// drag drop file component
const DragDropFile: FC<DragDropFileProps> = () => {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  const handleFile = function (files) {
    alert('Number of files: ' + files.length);
  };

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <Box
      sx={{
        height: '9.9rem',
        width: '100%',
        maxWidth: '100%',
        textAlign: 'center',
        position: 'relative'
      }}
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        style={{display: 'none'}}
        multiple={true}
        onChange={handleChange}
      />
      <label
        className={dragActive ? 'drag-active' : ''}

        style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: '3px',
            borderRadius: '1rem',
            borderStyle: 'dashed',
            borderColor: '#cbd5e1',
        }}
      >
        <Box>
          <p>Drag and drop your file here or</p>
          <StyledButton variant="contained" onClick={onButtonClick}>Select file</StyledButton>
        </Box>
      </label>
      {dragActive && (
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '1rem',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
          }}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></Box>
      )}
    </Box>
  );
};
export default DragDropFile;
