export interface Root {
  common: Common;
  data: Data;
}

export interface Common {
  userInfo: UserInfo;
  userEnv: UserEnv;
  systemInfo: SystemInfo;
  result: Result;
}

export interface UserInfo {
  cuid: string;
  pfid: string;
  userToken: string;
  userTokenExpire: number;
  memberFlg: string;
  contractStatusCode: string;
  canSubscribe: boolean;
  multipleChargePreventionFlg: boolean;
  securityToken: string;
  enableUpsellBlockUnextPayment: boolean;
  enableUpsellBlockOtherPayment: boolean;
  phoneNumberConfirmationLevel: string;
}

export interface UserEnv {
  siteCode: string;
}

export interface SystemInfo {
  systemDate: string;
  infoVersion: string;
  appVersion: string;
}

export interface Result {
  errorCode: string;
  errorMessage: string;
}

export interface Data {
  live: Live[];
  result_num: number;
}

export interface Live {
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
  time_shifted_playback_allowed_until: string;
  time_shifted_playback_intact_until: string;
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
  live_tickets: unknown[];
  movie_profile_list: MovieProfileList[];
  sub_content_list: SubContentList[];
  credit_list: unknown;
  product_lineup_code_list: string[];
  has_pack_rights: boolean;
  purchased: boolean;
  display_sale_end_datetime: string;
}

export interface PaymentBadgeList {
  payment_badge: string;
  payment_badge_code: string;
}

export interface LiveNotice {
  live_notice_type_code: string;
  live_notice_name: string;
  public_start_datetime: string;
  movies: Movies;
  thumbnail: Thumbnail;
}

export interface Movies {
  large: string;
  medium: string;
  small: string;
}

export interface Thumbnail {
  standard: string;
  tspt_fwxga: string;
  wide: string;
}

export interface MovieProfileList {
  movie_profile_type_code: string;
}

export interface SubContentList {
  sub_content_name: string;
  sub_content_code: string;
  sub_content_type_code: string;
  public_start_datetime: string;
  public_end_datetime: string;
  is_fixed_start_datetime: boolean;
  thumbnail: Thumbnail2;
}

export interface Thumbnail2 {
  standard: string;
}
