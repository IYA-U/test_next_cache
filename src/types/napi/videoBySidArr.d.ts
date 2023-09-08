import NapiCommon from './common';

export default interface VideoBySidArr {
  common: NapiCommon;
  data: {
    title_code: string;
    display_name: string;
    public_start_datetime: string;
    public_end_datetime: string;
    catchphrase: string;
    copyright_list: string[];
    highlight: string;
    thumbnail: {
      standard: string;
      tspt_fhds: string;
      tspt_fwxga: string;
    };
  }[];
}
