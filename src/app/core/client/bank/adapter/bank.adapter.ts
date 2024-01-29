import { NzTableFilterList } from "ng-zorro-antd/table";
import { Bank } from "../dto/bank.dto";

export class BankAdaptor {
    adaptToTableFilterList(bank: Bank[]): NzTableFilterList {
        return bank.map(item => {
            return { text: item.bankname, value: item.bankname, byDefault: false };
        });
    }
}