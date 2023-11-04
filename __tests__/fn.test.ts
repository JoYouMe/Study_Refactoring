import playsData from '../data/plays.json';
import invoicesData from '../data/invoices.json';
import {Statement} from '../src/statement'

test('test', () => {
    const plays = playsData;
    const invoice = invoicesData[0]

    const expected = "청구 내역 (고객명: BigCo)\n" +
    "  Hamlet : $650.00 (55석)\n" +
    "  As You Like It : $580.00 (35석)\n" +
    "  Othello : $500.00 (40석)\n" +
    "총액 : $1,730.00\n" +
    "적립 포인트 : 47점\n";

    expect(Statement(invoice, plays)).toBe(expected);
})