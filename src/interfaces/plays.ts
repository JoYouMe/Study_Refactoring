export interface I_PLAYS {
    [playID: string]: I_PLAY;
}

interface I_PLAY {
    name: string;
    type: string;
}