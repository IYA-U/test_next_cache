import NapiCommon from './common';

interface Thumbnail {
  standard: string;
  tspt_fwxga: string;
  tspt_fhds: string;
}

interface Item {
  episode_code: string;
  episode_name: string;
  display_no: string;
  no: string;
  introduction: string;
  public_start_date: string;
  public_end_date: string;
  duration: number;
  endroll_position: number;
  audio_type_list: string[];
  download_flg: boolean;
  chromecast_flg: boolean;
  has_subtitle: boolean;
  has_dub: boolean;
  sale_type_code: string;
  movie_type_code: string;
  interruption: number;
  purchase_episode_limit_datetime: string;
  purchase_episode_limitday: string;
  isnew: boolean;
  sale_text: string;
  end_date_text: string;
  supplement_text1: string;
  supplement_text2: string;
  episode_notice: unknown[];
  max_resolution_code: string;
  thumbnail: Thumbnail;
  payment_badge: string;
  payment_badge_code: string;
  nod_catchup_flg: boolean;
  nod_special_flg: boolean;
  nod_catchup_plan_code: string;
  nod_special_plan_code: string;
  product_lineup_code_list: string[];
  last_update_datetime: string;
  complete_flg: boolean;
  publish_style_code: string;
  is_viewed: boolean;
  is_purchase: boolean;
}

interface Query {
  result_num: number;
  page_size: number;
  page_number: number;
  pages: number;
}

interface Data {
  title_code: string;
  title_name: string;
  items: Item[];
  query: Query;
}

export default interface VideoEpisodeByVideo {
  common: NapiCommon;
  data: Data;
}
