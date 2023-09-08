import NapiCommon from './common';

export default interface VideoFeature {
  common: NapiCommon;
  data: {
    result_num: number;
    pages: number;
    title: {
      title_code: string;
      title_name: string;
      title_comment: string;
      catchphrase: string;
      check: string;
      media_type_code: string;
      media_group_type_code: string;
      series_code: string;
      series_name: string;
      series_in_order: number;
      public_start_date: string;
      public_end_date: string;
      thumbnail: {
        standard: string;
        tspt_fwxga: string;
        tspt_fhds: string;
        first_episode: string;
      };
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
      user_rate: string;
      production_year: string;
      since_year: string;
      country: string;
      minimum_price: number;
      cast_summary: string;
      main_cast: {
        person_name_code: string;
        person_name: string;
        character_name: string;
        cast_type_name: string;
        person_code: string;
      }[];
      sale_text: string;
      end_date_text: string;
      restricted_code: string;
      payment_badge: string;
      payment_badge_code: string;
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
      exclusive: {
        exclusive_type_code: string;
        is_only_on: boolean;
      };
      is_original: boolean;
      product_lineup_code_list: string[];
      umc_content: {
        content_type_code: string;
        caption: string;
        dub: string;
        original: string;
        tv_season: string;
      };
      payment_badge_list: {
        payment_badge: string;
        payment_badge_code: string;
      }[];
      sakuhin_comment: string;
      sakuhin_heading: string;
    }[];
    feature: {
      feature_code: string;
      feature_name: string;
      feature_type_code: string;
      lead_text: string;
      comment_display_flg: boolean;
    };
  };
}
