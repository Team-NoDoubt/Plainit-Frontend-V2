'use client';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/style/GlobalStyle';
import theme from '@/style/theme';
import StyledComponentsRegistry from './registry';

export default function ThemeProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
