import NapiCommon from './common';

export default interface BookByCategory {
  common: NapiCommon;
  data: {
    result_num: number;
    book_sakuhin_list: {
      book_sakuhin: {
        book_sakuhin_code: string;
        book_sakuhin_name: string;
        evaluation_point: number;
        blacklist: {
          appstore: boolean;
          androidstore: boolean;
        };
        blacklist_flg: boolean;
        complete_flg: boolean;
        unext_subgenre_list: {
          tag_public_code: string;
          tag_name: string;
        }[];
        book_view_code: string;
        total_book_num: number;
        total_book_num_include_preorder: number;
        from_book_no: number;
        to_book_no: number;
        sale_type_badge_list: {
          sale_type_badge_code: string;
          sale_type_badge_name: string;
        }[];
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
      };
      book: {
        book_code: string;
        book_name: string;
        book_no: number;
        media_type_code: string;
        media_type_name: string;
        book_rating_code: string;
        blacklist: {
          appstore: boolean;
          androidstore: boolean;
        };
        book_detail: {
          book_introduction: string;
        };
        publisher: {
          publisher_code: string;
          publisher_name: string;
        };
        published_in_magazine_list: {
          book_magazine_code: string;
          book_magazine_name: string;
        }[];
        book_credit_list: {
          book_author_type: string;
          person_code: string;
          pen_name: string;
          pen_name_code: string;
          pen_name_kana: string;
          unext_publishing_detail: {
            thumbnail?: unknown;
            introduction: string;
          };
        }[];
        thumbnail: {
          standard: string;
          tspt_fwxga: string;
        };
        public_start_datetime: string;
        sale_start_datetime: string;
        sale_end_datetime: string;
        book_preorderable_flg: boolean;
      };
    }[];
  };
}
