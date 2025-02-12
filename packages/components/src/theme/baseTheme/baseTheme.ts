import {
  type BreakpointsOptions,
  type Palette as MuiPalette,
  type PaletteColor,
  type ThemeOptions,
  createTheme as createMuiTheme,
} from '@mui/material/styles';

import { typography } from '../typography';
import {
  type Background,
  type Color,
  type ComponentsColors,
  getPalette,
} from '../palette';
import { type FontsUrls, getComponents } from '../components';
import { type Brand, SPACING } from '../constants';
import { elevation } from '../elevation';
import { shape } from '../shape';
import { defaultBreakpoints } from '../breakpoints';
import { type Theme } from '../types';
import { mergeDeep } from '../../utils';

export type Palette = Omit<MuiPalette, 'grey' | 'background'> & {
  red: Color;
  green: Color;
  yellow: Color;
  grey: Color;
  primary: PaletteColor & Color;
  background: Background;
  components: ComponentsColors;
};

type CreateThemeParams = {
  brand: Brand;
  options?: ThemeOptions;
  fontsUrls: FontsUrls;
  breakpoints?: BreakpointsOptions;
};

export const createTheme = (params: CreateThemeParams) => {
  const {
    brand,
    options,
    fontsUrls,
    breakpoints = defaultBreakpoints,
  } = params;

  const themeOptions = {
    typography,
    breakpoints,
    spacing: SPACING,
    palette: getPalette(brand),
    components: getComponents(fontsUrls),
  };

  const mergedThemeOptions = options
    ? (mergeDeep(
        themeOptions,
        options as Record<string, unknown>,
      ) as ThemeOptions)
    : themeOptions;

  const muiTheme = createMuiTheme(mergedThemeOptions);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return mergeDeep(muiTheme as any, { elevation, shape }) as Theme;
};
