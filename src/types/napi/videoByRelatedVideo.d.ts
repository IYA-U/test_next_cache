import NapiCommon from './common';

interface Exclusive {
  exclusive_type_code: string;
  is_only_on: boolean;
}

interface PaymentBadgeList {
  payment_badge: string;
  payment_badge_code: string;
}

interface Thumbnail {
  standard: string;
  tspt_fhds: string;
  tspt_fwxga: string;
  first_episode?: unknown;
}

interface Grouplist {
  title_code: string;
  title_name: string;
  catchphrase: string;
  isnew: boolean;
  has_subtitle: boolean;
  has_dub: boolean;
  update_of_week: number;
  last_episode: string;
  rate: number;
  production_year: string;
  country: string;
  restricted_code: string;
  payment_badge: string;
  payment_badge_code: string;
  nfree_badge: string;
  nod_catchup_flg: boolean;
  nod_special_flg: boolean;
  exclusive_badge_code: string;
  exclusive: Exclusive;
  is_original: boolean;
  product_lineup_code_list: string[];
  payment_badge_list: PaymentBadgeList[];
  thumbnail: Thumbnail;
}

interface Relation {
  groupcode: string;
  groupname: string;
  grouplist: Grouplist[];
}

interface Data {
  relation: Relation[];
}

export default interface VideoByRelatedVideo {
  common: NapiCommon;
  data: Data;
}
