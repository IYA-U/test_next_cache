import NapiCommon from './common';

interface Thumbnail {
  standard: string;
  tspt_fwxga: string;
  tspt_fhds: string;
  first_episode: string;
}

interface MainCast {
  person_name_code: string;
  person_name: string;
  character_name?: unknown;
  cast_type_name: string;
  person_code: string;
}

interface Exclusive {
  exclusive_type_code?: unknown;
  is_only_on: boolean;
}

interface UmcContent {
  content_type_code: string;
  caption: string;
  dub: string;
  original: string;
  tv_season: string;
}

interface PaymentBadgeList {
  payment_badge: string;
  payment_badge_code: string;
}

interface TitleList {
  title_code: string;
  title_name: string;
  title_comment?: unknown;
  catchphrase: string;
  check: string;
  media_type_code: string;
  media_group_type_code: string;
  series_code: string;
  series_name: string;
  series_in_order: number;
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
  public_main_episode_count: number;
  coming_soon_main_episode_count: number;
  rate: number;
  user_rate?: unknown;
  production_year: string;
  since_year: string;
  country: string;
  minimum_price: number;
  cast_summary: string;
  main_cast: MainCast[];
  sale_text: string;
  end_date_text: string;
  restricted_code: string;
  payment_badge?: unknown;
  payment_badge_code?: unknown;
  nfree_badge: string;
  next_update_date: string;
  next_update_datetime: string;
  missing_alert_text: string;
  cast: unknown[];
  resolution_code: string;
  main_genre_code: string;
  main_genre_name: string;
  publish_style_code: string;
  breadcomb: unknown[];
  nod_catchup_flg: boolean;
  nod_special_flg: boolean;
  exclusive_badge_code: string;
  exclusive: Exclusive;
  is_original: boolean;
  product_lineup_code_list: string[];
  umc_content: UmcContent;
  payment_badge_list: PaymentBadgeList[];
}

interface Data {
  title_list: TitleList[];
}

export default interface VideoByRelatedLive {
  common: NapiCommon;
  data: Data;
}
