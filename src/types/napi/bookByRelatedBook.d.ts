import NapiCommon from './common';

interface Blacklist {
  appstore: boolean;
  androidstore: boolean;
}

interface UnextSubgenreList {
  tag_public_code: string;
  tag_name: string;
}

interface SaleTypeBadgeList {
  sale_type_badge_code: string;
  sale_type_badge_name: string;
}

interface BookLabel {
  book_label_code: string;
  book_label_name: string;
}

interface BookSakuhin {
  book_sakuhin_code: string;
  book_sakuhin_name: string;
  evaluation_point: number;
  blacklist: Blacklist;
  blacklist_flg: boolean;
  complete_flg: boolean;
  unext_subgenre_list: UnextSubgenreList[];
  book_view_code: string;
  total_book_num: number;
  total_book_num_include_preorder: number;
  from_book_no: number;
  to_book_no: number;
  sale_type_badge_list: SaleTypeBadgeList[];
  new_flg: boolean;
  point_available_flg: boolean;
  book_label: BookLabel;
  unext_publishing_flg: boolean;
  min_price: number;
  multiple_prices_flg: boolean;
  free_book_num: number;
  recent_sale_flg: boolean;
  sale_flg: boolean;
  feature_piece_code: string;
}

interface Blacklist2 {
  appstore: boolean;
  androidstore: boolean;
}

interface BookDetail {
  book_introduction: string;
}

interface Publisher {
  publisher_code: string;
  publisher_name: string;
}

interface PublishedInMagazineList {
  book_magazine_code: string;
  book_magazine_name: string;
}

interface UnextPublishingDetail {
  thumbnail?: unknown;
  introduction: string;
}

interface BookCreditList {
  book_author_type: string;
  person_code: string;
  pen_name: string;
  pen_name_code: string;
  pen_name_kana: string;
  unext_publishing_detail: UnextPublishingDetail;
}

interface Thumbnail {
  standard: string;
  tspt_fwxga: string;
}

interface Book {
  book_code: string;
  book_name: string;
  book_no: number;
  media_type_code: string;
  media_type_name: string;
  book_rating_code: string;
  blacklist: Blacklist2;
  book_detail: BookDetail;
  publisher: Publisher;
  published_in_magazine_list: PublishedInMagazineList[];
  book_credit_list: BookCreditList[];
  thumbnail: Thumbnail;
  public_start_datetime: string;
  sale_start_datetime: string;
  sale_end_datetime: string;
  book_preorderable_flg: boolean;
}

interface BookSakuhinList {
  book_sakuhin: BookSakuhin;
  book: Book;
}

interface Data {
  result_num: number;
  book_sakuhin_list: BookSakuhinList[];
}

export default interface BookByRelatedBook {
  common: NapiCommon;
  data: Data;
}
