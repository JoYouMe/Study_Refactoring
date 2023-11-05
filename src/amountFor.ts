import { I_PERFORMANCE } from "./interfaces/invoice";
import { I_PLAY } from "./interfaces/plays";

export function amountFor(aPerformance:I_PERFORMANCE, play:I_PLAY) {
    let result = 0;

        switch (play.type) {
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
                throw new Error(`알 수 없는 장르 : ${play.type}`);
        }

    return result

}