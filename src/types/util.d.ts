declare interface HslColor {
  hue: number;
  saturation: number;
  lightness: number;
}

declare interface AkamaiPictureCol {
  spCol: 12 | 6 | 4;
  pcCol: 6 | 4 | 3 | 2;
}

declare interface CtaProps {
  text: string;
  lead: string;
  note: string;
  url: string;
  clickHandler: () => void;
  isDisabled: boolean;
}

declare type RCP<T> = React.ComponentProps<T>;

declare type OmitCfCollectionMeta<T> = Omit<
  T,
  'limit' | 'skip' | 'total' | '__typename' | 'sys'
>;
