export const utils = {
  /**
   * DateオブジェクトからUNIXtimeのbigintへと変換
   * @param date Dateオブジェクト
   * @returns bigint型のUNIXtime
   */
  convertDateToBigIntTimestamp(date: Date): bigint {
    const unixTimestamp = Math.floor(date.getTime() / 1000);
    return BigInt(unixTimestamp);
  },

  /**
   * UNIXtimeのbigintからNumberへと変換
   * @param bigIntTimestamp bigint型のUNIXtime
   * @returns Number
   */
  convertBigIntTimestampToNumber(bigIntTimestamp: bigint): number {
    return Number(bigIntTimestamp) * 1000;
  }
};
