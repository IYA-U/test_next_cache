import NapiCommon from './common';

interface PaymentBadgeList {
  payment_badge: string;
  payment_badge_code: string;
}

interface Movies {
  large: string;
  medium: string;
  small: string;
}

interface Thumbnail {
  standard: string;
  tspt_fwxga: string;
  wide: unknown[];
}

interface LiveNotice {
  live_notice_type_code: string;
  live_notice_name: string;
  public_start_datetime: string;
  movies: Movies;
  thumbnail: Thumbnail;
}

interface MovieProfileList {
  movie_profile_type_code: string;
}

interface Thumbnail2 {
  standard?: unknown;
}

interface SubContentList {
  sub_content_name: string;
  sub_content_code: string;
  sub_content_type_code: string;
  public_start_datetime: string;
  public_end_datetime: string;
  is_fixed_start_datetime: boolean;
  thumbnail: Thumbnail2;
}

interface CreditList {
  person_code: string;
  person_name_code: string;
  person_name: string;
  cast_type_code: string;
  cast_type_name: string;
  character_name: string;
}

interface Data {
  live_code: string;
  live_sale_type_code: string;
  live_name: string;
  description: string;
  copyright: string;
  delivery_start_datetime: string;
  delivery_end_datetime: string;
  performance_start_datetime: string;
  is_only_on: boolean;
  viewable_device_text: string;
  display_live_minute: number;
  music_cross_aid_text: string;
  attractions: string;
  live_note: string;
  live_location_name: string;
  live_venue: string;
  payment_badge_list: PaymentBadgeList[];
  series_code: string;
  cast_summary: string;
  test_live_code: string;
  test_live_name: string;
  live_notices: LiveNotice[];
  live_tickets: {
    live_ticket_code: string;
    live_ticket_name: string;
    live_ticket_type_code: string;
    sale_start_datetime: string;
    sale_end_datetime: string;
    selling_price: number;
    product_code: unknown;
    is_selling_ticket: unknown;
  }[];
  movie_profile_list: MovieProfileList[];
  sub_content_list: SubContentList[];
  credit_list: CreditList[];
  display_sale_end_datetime: string;
  purchased: boolean;
}

export default interface LiveDetail {
  common: NapiCommon;
  data: Data;
}
