import NapiCommon from './common';

export default interface BookDetail {
  common: NapiCommon;
  data: {
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
      publisher: {
        publisher_code: string;
        publisher_name: string;
      };
      published_in_magazine_list: [
        {
          book_magazine_code: string;
          book_magazine_name: string;
        },
      ];
      book_credit_list: {
        book_author_type: string;
        person_code: string;
        pen_name: string;
        pen_name_code: string;
        pen_name_kana: string;
        unext_publishing_detail: {
          thumbnail: string;
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
      public_end_datetime: string;
      original_sales_date: string;
      sale_text: string;
      new_flg: boolean;
      sale_flg: boolean;
      free_book_flg: boolean;
      sale_type_badge: {
        sale_type_badge_code: string;
        sale_type_badge_name: string;
      };
      book_magazine: {
        book_magazine_code: string;
        book_magazine_name: string;
        magazine_genre_code: string;
      };
      b_agency_content: {
        product_list: Array<{
          product_code: string;
          product_name: string;
          sale_type_code: string;
          product_sale_period: {
            selling_price: number;
            sale_start_datetime: string;
            sale_end_datetime: string;
          };
        }>;
        main_book_file: {
          book_file_code: string;
          license_expired_datetime: string;
          webtoon_flg: boolean;
          resume_point: number;
          complete_flg: boolean;
          update_datetime: string;
        };
        sample_book_file: {
          book_file_code: string;
          license_expired_datetime: string;
          resume_point: number;
          complete_flg: boolean;
          update_datetime: string;
        };
      };
      purchased_flg: boolean;
      rights_flg: boolean;
      reading_history_flg: boolean;
      book_preordered_flg: boolean;
      selling_price: number;
      rights_expiration_datetime: string;
      book_sakuhin_ticket_available_flg: boolean;
      book_plus_ticket_available_flg: boolean;
      book_detail: {
        book_introduction: string;
      };
    };
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
      unext_original_flg: boolean;
      chapter_flg: boolean;
      book_view_code: string;
      total_book_num: number;
      total_book_num_include_preorder: number;
      from_book_no: number;
      to_book_no: number;
      sale_type_badge_list: Array<{
        sale_type_badge_code: string;
        sale_type_badge_name: string;
      }>;
      new_flg: boolean;
      point_available_flg: boolean;
      unext_publishing_flg: boolean;
      min_price: number;
      multiple_prices_flg: boolean;
      free_book_num: number;
      recent_sale_flg: boolean;
      sale_flg: boolean;
      feature_piece_code: string;
      ticket_available_book_num: number;
      next_release_datetime: string;
      next_release_date: string;
      display_ticket_available_end_datetime: string;
      book_sakuhin_ticket_available_flg: boolean;
      book_plus_ticket_available_flg: boolean;
      thumbnail: {
        standard: string;
        tspt_fwxga: string;
      };
      stage_thumbnail: {
        standard: string;
        tspt_fwxga: string;
      };
      book_sakuhin_detail: {
        book_sakuhin_introduction: string;
        book_sakuhin_catch_sentence: string;
      };
      book_volume_type_code: string;
      kana_syllabary_text: string;
      recent_public_end_datetime: string;
      recent_public_end_book_no_from: number;
      recent_public_end_book_no_to: number;
      book_label: {
        book_label_code: string;
        book_label_name: string;
      };
    };
    book_list: Array<{
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
      publisher: {
        publisher_code: string;
        publisher_name: string;
      };
      published_in_magazine_list: [
        {
          book_magazine_code: string;
          book_magazine_name: string;
        },
      ];
      book_credit_list: {
        book_author_type: string;
        person_code: string;
        pen_name: string;
        pen_name_code: string;
        pen_name_kana: string;
        unext_publishing_detail: {
          thumbnail: string;
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
      public_end_datetime: string;
      original_sales_date: string;
      sale_text: string;
      new_flg: boolean;
      sale_flg: boolean;
      free_book_flg: boolean;
      book_detail: {
        book_introduction: string;
      };
      sale_type_badge: {
        sale_type_badge_code: string;
        sale_type_badge_name: string;
      };
      b_agency_content: {
        product_list: Array<{
          product_code: string;
          product_name: string;
          sale_type_code: string;
          product_sale_period: {
            selling_price: number;
            sale_start_datetime: string;
            sale_end_datetime: string;
          };
        }>;
        main_book_file: {
          book_file_code: string;
          license_expired_datetime: string;
          webtoon_flg: boolean;
          resume_point: number;
          complete_flg: boolean;
          update_datetime: string;
        };
      };
      purchased_flg: boolean;
      rights_flg: boolean;
      reading_history_flg: boolean;
      book_preordered_flg: boolean;
      selling_price: number;
      rights_expiration_datetime: string;
      book_sakuhin_ticket_available_flg: boolean;
      book_plus_ticket_available_flg: boolean;
    }>;
    total_book_num: number;
    total_book_num_include_preorder: number;
    purchase_book_num: number;
    is_bookmarked: boolean;
    user_evaluation_point: number;
  };
}
