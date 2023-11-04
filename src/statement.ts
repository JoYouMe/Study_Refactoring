import { I_INVOICES } from "./interfaces/invoice";
import { I_PLAYS } from "./interfaces/plays";

export function Statement(invoice: I_INVOICES, plays: I_PLAYS): string {
    let totalAmount: number = 0;
    let volumeCredits: number = 0;
    let result: string = `청구 내역 (고객명: ${invoice.customer})\n`;
    const format = new Intl.NumberFormat("es-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format;


    for (let perf of invoice.performances) {
        const play = plays[perf.playID];
        let thisAmount = 0;

        switch (play.type) {
            case "tragedy": // 비극
                thisAmount = 40000;
                if (perf.audience > 30) {
                    thisAmount += 1000 * (perf.audience - 30);
                }
                break;
            case "comedy": // 희극
                thisAmount = 30000;
                if (perf.audience > 20) {
                    thisAmount += 10000 + 500 * (perf.audience - 20);
                }
                thisAmount += 300 * perf.audience;
                break;
            default:
                throw new Error(`알 수 없는 장르 : ${play.type}`);
        }

        //포인트를 적립한다.
        volumeCredits += Math.max(perf.audience - 30, 0);
        if (play.type === "comedy") volumeCredits += Math.floor(perf.audience / 5);

        //청구 내역을 출력한다.
        result += `  ${play.name} : ${format(thisAmount / 100)} (${perf.audience}석)\n`;
        totalAmount += thisAmount;
    }
    result += `총액 : ${format(totalAmount / 100)}\n`;
    result += `적립 포인트 : ${volumeCredits}점\n`;
    return result;
}