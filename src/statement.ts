import { I_INVOICES, I_PERFORMANCE } from "./interfaces/invoice";
import {I_PLAYS } from "./interfaces/plays";

export function Statement(invoice: I_INVOICES, plays: I_PLAYS): string {
    let totalAmount: number = 0;
    let result: string = `청구 내역 (고객명: ${invoice.customer})\n`;

    // 공연 요금 계산
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

    // 공연 데이터
    function playFor(aPerformance:I_PERFORMANCE) {
        return plays[aPerformance.playID]
    }

    // 적립 포인트 계산
    function volumeCreditsFor(aPerformance:I_PERFORMANCE) {
        let result: number = 0;
        result += Math.max(aPerformance.audience - 30, 0);
        if (playFor(aPerformance).type === "comedy") result += Math.floor(aPerformance.audience / 5);
        return result
    }

    // 화폐 단위
    function usd(aNumber: number) {
        return new Intl.NumberFormat("es-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(aNumber/100)
    }

    // 총 적립 포인트 계산
    function totalVolumeCredits() {
        let volumeCredits:number = 0;
    for(let perf of invoice.performances) {
        volumeCredits += volumeCreditsFor(perf)
    }
    return volumeCredits;
    }

    for (let perf of invoice.performances) {
        //청구 내역을 출력한다.
        result += `  ${playFor(perf).name} : ${usd(amountFor(perf))} (${perf.audience}석)\n`;
        totalAmount += amountFor(perf);
    }
    result += `총액 : ${usd(totalAmount)}\n`;
    result += `적립 포인트 : ${totalVolumeCredits()}점\n`;
    return result;
}

