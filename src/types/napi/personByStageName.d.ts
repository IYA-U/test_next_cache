import NapiCommon from './common';

interface PenName {
  pen_name_code: string;
  pen_name: string;
  pen_name_kana: string;
}

interface PersonName {
  person_name_code: string;
  person_name: string;
  person_kana: string;
}

interface Person {
  person_name: string;
  person_code: string;
  person_name_list: PersonName[];
  pen_name_list: PenName[];
}

interface Data {
  person: Person;
}

export default interface PersonByStageName {
  common: NapiCommon;
  data: Data;
}
