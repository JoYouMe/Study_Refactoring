import { I_INVOICES, I_PERFORMANCE } from "./interfaces/invoice";
import { I_PLAY, I_PLAYS } from "./interfaces/plays";

export function Statement(invoice: I_INVOICES, plays: I_PLAYS): string {
    let totalAmount: number = 0;
    let volumeCredits: number = 0;
    let result: string = `청구 내역 (고객명: ${invoice.customer})\n`;
    const format = new Intl.NumberFormat("es-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format;

    function amountFor(aPerformance:I_PERFORMANCE) {
        let result = 0;
    
            switch (playFor(aPerformance).type) {
                case "tragedy": // 비극
                result = 40000;
                    if (aPerformance.audience > 30) {
                        result += 1000 * (aPerformance.audience - 30);
                    }
                    break;
                case "comedy": // 희극
                result = 30000;
                    if (aPerformance.audience > 20) {
                        result += 10000 + 500 * (aPerformance.audience - 20);
                    }
                    result += 300 * aPerformance.audience;
                    break;
                default:
                    throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`);
            }
        return result
    }

    function playFor(aPerformance:I_PERFORMANCE) {
        return plays[aPerformance.playID]
    }

    for (let perf of invoice.performances) {
        let thisAmount = amountFor(perf) // switch 

        //포인트를 적립한다.
        volumeCredits += Math.max(perf.audience - 30, 0);
        if (playFor(perf).type === "comedy") volumeCredits += Math.floor(perf.audience / 5);

        //청구 내역을 출력한다.
        result += `  ${playFor(perf).name} : ${format(thisAmount / 100)} (${perf.audience}석)\n`;
        totalAmount += thisAmount;
    }
    result += `총액 : ${format(totalAmount / 100)}\n`;
    result += `적립 포인트 : ${volumeCredits}점\n`;
    return result;
}

