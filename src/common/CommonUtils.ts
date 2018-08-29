export class CommonUtils {

/**
    * Check if the value is null, undefined or empty
    *
    * @param value
    */
   public static isEmptyString(value: string): boolean {
    return value === null || typeof value === "undefined" || !value.length;
}

/**
    * Check if the value is null or undefined
    *
    * @param value
    */
   public static isNull(value: any): boolean {
    return value === null || typeof value === "undefined";
}
}
