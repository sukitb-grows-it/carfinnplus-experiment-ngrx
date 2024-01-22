import { SaleCarJobDTO, TableSaleCarJobDTO } from "../dto/table-sale-car-job.dto";
import { SaleCarJob, TableSaleCarJob } from "../../model/table-sale-car-job.model";

export class TableSaleCarJobAdapter {

    private adaptBaseJob(job: SaleCarJobDTO): SaleCarJob {
        const result = {
            id: job.job_number,
            customerFullName: `${job.customer_name ?? ''} ${job.customer_surname ?? ''}`,
            customerPhone: job.customer_phone,
            createdAt: new Date(job.create_date),
            finance: job.previous_bankname,
            loanType: job.loan_type,
            status: job.job_status,
            createdDateUntilToday: 0,
            sla: 0,
            process: job.process,
            closedBy: job.bankname,
            updatedName: job.update_name,
            saleName: job.job_owner_name,
            jobFrom: job.job_type,
            lastStatus: job.lasted_status,
        }

        return result;
    }

    public adapt(dto: TableSaleCarJobDTO): TableSaleCarJob {
        const waitJob = dto.completedJobs.map((job: SaleCarJobDTO) => this.adaptBaseJob(job));
        const processJob = dto.inprocessJobs.map((job: SaleCarJobDTO) => this.adaptBaseJob(job));
        const doneJob = dto.waitJobs.map((job: SaleCarJobDTO) => this.adaptBaseJob(job));

        return {
            waitJob,
            processJob,
            doneJob
        }
    }
}