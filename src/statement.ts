import { I_INVOICES, I_PERFORMANCE } from "./interfaces/invoice";
import {I_PLAYS } from "./interfaces/plays";

export function Statement(invoice: I_INVOICES, plays: I_PLAYS): string {
    let totalAmount: number = 0;
    let volumeCredits:number = 0;
    let result: string = `청구 내역 (고객명: ${invoice.customer})\n`;

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

    function volumeCreditsFor(aPerformance:I_PERFORMANCE) {
        let result: number = 0;
        //포인트를 적립한다.
        result += Math.max(aPerformance.audience - 30, 0);
        if (playFor(aPerformance).type === "comedy") result += Math.floor(aPerformance.audience / 5);
        return result
    }

    function usd(aNumber: number) {
        return new Intl.NumberFormat("es-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(aNumber/100)
    }

    for (let perf of invoice.performances) {
        volumeCredits += volumeCreditsFor(perf)

        //청구 내역을 출력한다.
        result += `  ${playFor(perf).name} : ${usd(amountFor(perf) / 100)} (${perf.audience}석)\n`;
        totalAmount += amountFor(perf);
    }
    result += `총액 : ${usd(totalAmount / 100)}\n`;
    result += `적립 포인트 : ${volumeCredits}점\n`;
    return result;
}

