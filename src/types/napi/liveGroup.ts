import NapiCommon from './common';

export default interface LiveGroup {
  common: NapiCommon;
  data: {
    result_num: number;
    live_group: {
      live_group_code: string;
      live_group_name: string;
      live_group_thumbnail: [];
      total_live_num: number;
      live_list: {
        live_code: string;
        live_sale_type_code: string;
        live_name: string;
        description: string;
        copyright: string;
        delivery_start_datetime: string;
        delivery_end_datetime: string;
        performance_start_datetime: string;
        is_only_on: boolean;
        allows_time_shifted_playback: boolean;
        time_shifted_playback_allowed_until?: string;
        time_shifted_playback_intact_until?: string;
        viewable_device_text: string;
        display_live_minute?: string;
        music_cross_aid_text: string;
        attractions: string;
        live_note: string;
        live_location_name: string;
        live_venue: string;
        payment_badge_list: {
          payment_badge: string;
          payment_badge_code: string;
        }[];
        series_code: string;
        cast_summary: string;
        test_live_code: string;
        test_live_name: string;
        live_notices: {
          live_notice_type_code: string;
          live_notice_name: string;
          public_start_datetime: string;
          movies: {
            large: string;
            medium: string;
            small: string;
          };
          thumbnail: {
            standard: string;
            tspt_fwxga: string;
          };
        }[];
        live_tickets: {
          live_ticket_code: string;
          live_ticket_name: string;
          live_ticket_type_code: string;
          sale_start_datetime: string;
          sale_end_datetime: string;
          selling_price: number;
          product_code?: string;
          is_selling_ticket?: boolean;
        }[];
        movie_profile_list: {
          movie_profile_type_code: string;
        }[];
        sub_content_list: {
          sub_content_name: string;
          sub_content_code: string;
          sub_content_type_code: string;
          public_start_datetime?: string;
          public_end_datetime: string;
          is_fixed_start_datetime: boolean;
          thumbnail: {
            standard: string;
          };
        }[];
        credit_list?: string[];
        product_lineup_code_list: string[];
        purchased: boolean;
        display_sale_end_datetime: string;
      }[];
    };
  };
}
