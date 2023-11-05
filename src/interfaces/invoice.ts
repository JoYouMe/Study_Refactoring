export interface I_INVOICES {
    performances: I_PERFORMANCE[];
    customer: string;
}

export interface I_PERFORMANCE { 
    playID: string;
    audience: number;
}