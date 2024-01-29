export interface Bank {
  id: number;
  bankname: string;
  bank_id: string;
  logo: string;
}

export interface BankDTO {
  status: {
    code: number;
    description: string;
  };
  data: Bank[];
}
