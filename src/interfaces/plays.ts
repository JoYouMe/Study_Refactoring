export interface I_PLAYS {
    [playID: string]: I_PLAY;
}

export interface I_PLAY {
    name: string;
    type: string;
}