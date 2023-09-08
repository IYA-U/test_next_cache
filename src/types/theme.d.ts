import 'styled-components';
import { NamedColors } from 'src/hocs/withConfig/getColor/getNamedColorsHsl';

declare module 'styled-components' {
  export interface DefaultTheme {
    namedColor: NamedColors;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mappedColor: any;
  }
}
