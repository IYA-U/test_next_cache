import NapiCommon from './common';

interface Thumbnail {
  icon: string;
}

interface CategoryList {
  code: string;
  name: string;
  link: string;
  count: string;
  thumbnail: Thumbnail;
  default_order: string;
  menu_type_code: string;
  caption_dub_flg: boolean;
}

export interface Genre {
  code: string;
  name: string;
  display_code: string;
  default_order: string;
  menu_type_code: string;
  caption_dub_flg: boolean;
  category_list: CategoryList[];
}

interface Group {
  display_code: string;
  code: string;
  name: string;
  genre: Genre[];
}

interface Data {
  group: Group[];
}

export default interface VideoGenre {
  common: NapiCommon;
  data: Data;
}
