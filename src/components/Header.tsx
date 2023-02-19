import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import icon from '../images/icon.png';

export const Header: React.FC = () => (
  <Box sx={{ flexGrow: 1, mb: '70px' }}>
    <AppBar position="static" sx={{ bgcolor: '#422ed4' }}>
      <Toolbar
        sx={{
          '@media (min-width:600px)': {
            ml: '100px',
          },
        }}
      >
        <img src={icon} alt="chuck norris face" />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: '600', ml: '10px' }}
        >
          Chuck Norris
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);
