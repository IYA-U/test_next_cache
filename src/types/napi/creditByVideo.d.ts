import NapiCommon from './common';

interface Query {
  result_num: number;
  page_size: number;
  page_number: number;
  pages: number;
}

interface Item {
  person_name_code: string;
  person_name: string;
  character_name: string;
  cast_type_name: string;
  person_code: string;
}

interface Credit {
  query: Query;
  items: Item[];
  has_episode_credits: boolean;
}

interface Data {
  credit: Credit;
}

export default interface CreditByVideo {
  common: NapiCommon;
  data: Data;
}
