import NapiCommon from './common';

interface Thumbnail {
  standard: string;
  tspt_fhds: string;
  tspt_fwxga: string;
}

interface MainCast {
  person_name_code: string;
  person_name: string;
  character_name: string;
  cast_type_name: string;
  person_code: string;
}

interface PaymentBadgeList {
  payment_badge: string;
  payment_badge_code: string;
}

interface TitleList {
  title_code: string;
  title_name: string;
  catchphrase: string;
  check: string;
  media_type_code: string;
  media_group_type_code: string;
  series_code: string;
  series_name: string;
  public_start_date: string;
  public_end_date: string;
  thumbnail: Thumbnail;
  onair_flg: boolean;
  isnew: boolean;
  has_subtitle: boolean;
  has_dub: boolean;
  has_multiprice: boolean;
  update_of_week: number;
  last_episode: string;
  rate: number;
  user_rate: number;
  production_year: string;
  country: string;
  minimum_price: number;
  cast_summary: string;
  main_cast: MainCast[];
  sale_text: string;
  end_date_text: string;
  restricted_code: string;
  nfree_badge: string;
  next_update_date: string;
  resolution_code: string;
  main_genre_code: string;
  main_genre_name: string;
  since_year: string;
  publish_style_code: string;
  nod_catchup_flg: boolean;
  nod_special_flg: boolean;
  payment_badge_list: PaymentBadgeList[];
  product_lineup_code_list: string[];
}

interface Data {
  result_num: number;
  title_list: TitleList[];
}

export default interface VideoByRelatedBook {
  common: NapiCommon;
  data: Data;
}
