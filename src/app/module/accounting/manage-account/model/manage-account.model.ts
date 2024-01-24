export interface AccountList {
  accountId: string;
  accountFullName: string;
  lastLogin: string;
  accountType: string;
}

export interface TableAccoutList {
  allAccount:AccountList[]
}
