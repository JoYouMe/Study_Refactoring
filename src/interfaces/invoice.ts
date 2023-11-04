export interface I_INVOICES {
    performances: I_PERFORMANCE[];
    customer: string;
}

interface I_PERFORMANCE { 
    playID: string;
    audience: number;
}