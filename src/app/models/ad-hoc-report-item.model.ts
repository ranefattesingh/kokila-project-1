export class ReportItem {
    name: string

    constructor(raw?: any){
        this.name = raw.name;
    }
}