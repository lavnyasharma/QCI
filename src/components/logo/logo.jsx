import { useId, forwardRef } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { RouterLink } from 'src/routes/components';
import { logoClasses } from './classes';

// ----------------------------------------------------------------------

export const Logo = forwardRef(
  (
    { width = '100%', height = '100%', href = '/', isSingle = true, disableLink = false, className, sx, ...other },
    ref
  ) => {
    const theme = useTheme();
    const gradientId = useId();

    const TEXT_PRIMARY = theme.vars.palette.text.primary;
    const PRIMARY_LIGHT = theme.vars.palette.primary.light;
    const PRIMARY_MAIN = theme.vars.palette.primary.main;
    const PRIMARY_DARKER = theme.vars.palette.primary.dark;

    // Replace SVG with image logo
    const singleLogo = (
      <Box
        alt="Single logo"
        component="img"
        src="https://storage.googleapis.com/uiresource/uiresource.ap-south-1.linodeobjects.com/corover-v245/images/logo-white.png"
        width={width}
        height={height}
      />
    );

    const fullLogo = (
      <Box
        alt="Full logo"
        component="img"
        src="https://storage.googleapis.com/uiresource/uiresource.ap-south-1.linodeobjects.com/corover-v245/images/logo-white.png"
        width={width}
        height={height}
      />
    );

    return (
      <Box
        ref={ref}
        sx={{ display: 'inline-block', ...sx }}
        {...other}
      >
        {!disableLink ? (
          <RouterLink to={href} className={className}>
            {isSingle ? singleLogo : fullLogo}
          </RouterLink>
        ) : (
          isSingle ? singleLogo : fullLogo
        )}
      </Box>
    );
  }
);

Logo.displayName = 'Logo';
