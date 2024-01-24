export interface AccountListDTO {
  account_id: string;
  username: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  account_role: string;
  create_date: string;
  image_name: string;
  datetime_last_login: string;
  role_group: string;
}

export interface TableAccountListDTO {
  account_type: string;
  list: AccountListDTO[];
}
