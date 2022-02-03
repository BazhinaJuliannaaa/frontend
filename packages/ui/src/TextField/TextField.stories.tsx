import React from 'react';
import { Story } from '@storybook/react';
import { Box, IconButton, InputAdornment, Stack } from '@mui/material';

import { TextField } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
};

const HelperText = ({ path, text }) => {
  return (
    <Box component={React.Fragment}>
      <Box
        component="svg"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 16,
          verticalAlign: 'middle',
        }}
        width="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {path}
      </Box>
      <Box
        component="span"
        sx={{
          verticalAlign: 'middle',
        }}
      >
        {text}
      </Box>
    </Box>
  );
};

const errorHelperText = (
  <HelperText
    path={
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5109 2.65519C8.67288 2.72231 8.82004 2.82068 8.94399 2.94469L13.056 7.05602C13.1801 7.17998 13.2786 7.32719 13.3457 7.48922C13.4129 7.65126 13.4475 7.82495 13.4475 8.00036C13.4475 8.17577 13.4129 8.34946 13.3457 8.51149C13.2786 8.67353 13.1801 8.82073 13.056 8.94469L8.94399 13.056C8.82004 13.18 8.67288 13.2784 8.5109 13.3455C8.34893 13.4126 8.17532 13.4472 7.99999 13.4472C7.82466 13.4472 7.65104 13.4126 7.48907 13.3455C7.3271 13.2784 7.17993 13.18 7.05599 13.056L2.94399 8.94469C2.81988 8.82073 2.72142 8.67353 2.65424 8.51149C2.58707 8.34946 2.55249 8.17577 2.55249 8.00036C2.55249 7.82495 2.58707 7.65126 2.65424 7.48922C2.72142 7.32719 2.81988 7.17998 2.94399 7.05602L7.05599 2.94469C7.17993 2.82068 7.3271 2.72231 7.48907 2.65519C7.65104 2.58807 7.82466 2.55353 7.99999 2.55353C8.17532 2.55353 8.34893 2.58807 8.5109 2.65519ZM7.52858 9.13809C7.6536 9.26311 7.82317 9.33335 7.99998 9.33335C8.1768 9.33335 8.34636 9.26311 8.47139 9.13809C8.59641 9.01307 8.66665 8.8435 8.66665 8.66669V5.33335C8.66665 5.15654 8.59641 4.98697 8.47139 4.86195C8.34636 4.73692 8.1768 4.66669 7.99998 4.66669C7.82317 4.66669 7.6536 4.73692 7.52858 4.86195C7.40356 4.98697 7.33332 5.15654 7.33332 5.33335V8.66669C7.33332 8.8435 7.40356 9.01307 7.52858 9.13809ZM7.52858 11.1381C7.6536 11.2631 7.82317 11.3334 7.99998 11.3334C8.1768 11.3334 8.34636 11.2631 8.47139 11.1381C8.59641 11.0131 8.66665 10.8435 8.66665 10.6667C8.66665 10.4899 8.59641 10.3203 8.47139 10.1953C8.34636 10.0703 8.1768 10 7.99998 10C7.82317 10 7.6536 10.0703 7.52858 10.1953C7.40356 10.3203 7.33332 10.4899 7.33332 10.6667C7.33332 10.8435 7.40356 11.0131 7.52858 11.1381Z"
        fill="#F24646"
      />
    }
    text="Ошибка, проверка не пройдена"
  />
);

const successHelperText = (
  <HelperText
    path={
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99996 13.3334C6.58547 13.3334 5.22892 12.7715 4.22872 11.7713C3.22853 10.7711 2.66663 9.41451 2.66663 8.00002C2.66663 6.58553 3.22853 5.22898 4.22872 4.22878C5.22892 3.22859 6.58547 2.66669 7.99996 2.66669C9.41445 2.66669 10.771 3.22859 11.7712 4.22878C12.7714 5.22898 13.3333 6.58553 13.3333 8.00002C13.3333 9.41451 12.7714 10.7711 11.7712 11.7713C10.771 12.7715 9.41445 13.3334 7.99996 13.3334ZM8.90929 6.02402L7.47463 8.76402L6.44596 7.83735C6.38087 7.77878 6.30488 7.73361 6.22233 7.70441C6.13978 7.67521 6.05228 7.66255 5.96484 7.66716C5.8774 7.67177 5.79172 7.69356 5.7127 7.73129C5.63368 7.76901 5.56286 7.82193 5.50429 7.88702C5.44572 7.95211 5.40055 8.0281 5.37135 8.11065C5.34214 8.1932 5.32949 8.2807 5.3341 8.36814C5.33871 8.45558 5.3605 8.54126 5.39823 8.62028C5.43595 8.6993 5.48887 8.77012 5.55396 8.82869L7.22063 10.3287C7.29614 10.3967 7.3862 10.4465 7.48393 10.4744C7.58166 10.5023 7.68447 10.5074 7.7845 10.4895C7.88452 10.4715 7.97913 10.431 8.06107 10.3709C8.14301 10.3108 8.21013 10.2327 8.25729 10.1427L10.0906 6.64269C10.1727 6.48603 10.1891 6.3032 10.1364 6.13442C10.0836 5.96564 9.96595 5.82473 9.80929 5.74269C9.65264 5.66065 9.46981 5.6442 9.30103 5.69696C9.13224 5.74972 8.99133 5.86737 8.90929 6.02402Z"
        fill="#00875A"
      />
    }
    text="Проверка успешно пройдена"
  />
);

export const Default: Story = () => {
  return (
    <Stack gap={4}>
      <Stack gap={2} direction="row">
        <TextField label="With label" />
        <TextField label="With placeholder" placeholder="Placeholder value" />
        <TextField focused label="Focused" defaultValue="Default value" />
        <TextField
          error
          label="Invalid"
          defaultValue="Default value"
          helperText={errorHelperText}
        />
        <TextField
          error
          focused
          label="Focused invalid"
          defaultValue="Default value"
          helperText={errorHelperText}
        />
        <TextField
          success
          label="Validated"
          defaultValue="Default value"
          helperText={successHelperText}
        />
        <TextField disabled label="Disabled" defaultValue="Default value" />
        <TextField
          label="Read only"
          defaultValue="Default value"
          InputProps={{
            readOnly: true,
          }}
          helperText="Iam readOnly"
        />
      </Stack>
      <Stack gap={2} direction="row">
        <TextField
          label="Цена"
          InputProps={{
            startAdornment: <InputAdornment position="start">₽</InputAdornment>,
          }}
        />
        <TextField
          label="Вес"
          InputProps={{
            endAdornment: <InputAdornment position="end">кг</InputAdornment>,
          }}
        />
        <TextField
          label="Пароль"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 18C7.464 18 4.001 13.74 4.001 12C4.001 9.999 7.46 6 12.001 6C16.377 6 19.999 9.973 19.999 12C19.999 13.74 16.537 18 12.001 18H12ZM12.001 4C6.48 4 2 8.841 2 12C2 15.086 6.576 20 12 20C17.423 20 22 15.086 22 12C22 8.841 17.52 4 12 4"
                      fill="#072D57"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.977 13.984C10.874 13.984 9.977 13.087 9.977 11.984C9.977 10.881 10.874 9.984 11.977 9.984C13.081 9.984 13.977 10.881 13.977 11.984C13.977 13.087 13.081 13.984 11.977 13.984ZM11.977 7.984C9.771 7.984 7.977 9.778 7.977 11.984C7.977 14.19 9.771 15.984 11.977 15.984C14.184 15.984 15.977 14.19 15.977 11.984C15.977 9.778 14.184 7.984 11.977 7.984Z"
                      fill="#072D57"
                    />
                  </svg>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Планета"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21ZM11.1 19.137C9.36032 18.92 7.75986 18.0748 6.59966 16.7605C5.43945 15.4461 4.79944 13.7532 4.8 12C4.8 11.442 4.872 10.911 4.989 10.389L9.3 14.7V15.6C9.3 16.59 10.11 17.4 11.1 17.4V19.137ZM17.31 16.851C17.1958 16.4873 16.9682 16.1696 16.6605 15.9445C16.3529 15.7195 15.9812 15.5987 15.6 15.6H14.7V12.9C14.7 12.405 14.295 12 13.8 12H8.4V10.2H10.2C10.695 10.2 11.1 9.795 11.1 9.3V7.5H12.9C13.89 7.5 14.7 6.69 14.7 5.7V5.331C17.337 6.402 19.2 8.985 19.2 12C19.2 13.872 18.48 15.573 17.31 16.851Z"
                      fill="#1D3F66"
                    />
                  </svg>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack gap={2} direction="row">
        <TextField
          size="small"
          label="With placeholder"
          placeholder="Placeholder value"
        />
        <TextField
          size="small"
          label="Вес"
          InputProps={{
            endAdornment: <InputAdornment position="end">кг</InputAdornment>,
          }}
        />
        <TextField
          size="small"
          label="Пароль"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 18C7.464 18 4.001 13.74 4.001 12C4.001 9.999 7.46 6 12.001 6C16.377 6 19.999 9.973 19.999 12C19.999 13.74 16.537 18 12.001 18H12ZM12.001 4C6.48 4 2 8.841 2 12C2 15.086 6.576 20 12 20C17.423 20 22 15.086 22 12C22 8.841 17.52 4 12 4"
                      fill="#072D57"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.977 13.984C10.874 13.984 9.977 13.087 9.977 11.984C9.977 10.881 10.874 9.984 11.977 9.984C13.081 9.984 13.977 10.881 13.977 11.984C13.977 13.087 13.081 13.984 11.977 13.984ZM11.977 7.984C9.771 7.984 7.977 9.778 7.977 11.984C7.977 14.19 9.771 15.984 11.977 15.984C14.184 15.984 15.977 14.19 15.977 11.984C15.977 9.778 14.184 7.984 11.977 7.984Z"
                      fill="#072D57"
                    />
                  </svg>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};

Default.parameters = { options: { showPanel: false } };
