import playsData from '../data/plays.json';
import invoiceData from '../data/invoices.json'
import { Statement } from './statement';

async function main() {
    const invoice = invoiceData[0];
    const plays = playsData;
    const result = Statement(invoice, plays)
    console.log(result)
    return result
}

main()