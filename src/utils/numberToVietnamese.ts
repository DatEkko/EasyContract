export const numberToVietnamese = (n: number): string => {
    if (n === 0) return "không đồng";

    const numberWords = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    const units = ["", "nghìn", "triệu", "tỷ"];

    function readTriple(num: number): string {
        let str = "";
        const hundred = Math.floor(num / 100);
        const ten = Math.floor((num % 100) / 10);
        const unit = num % 10;

        if (hundred > 0) {
            str += numberWords[hundred] + " trăm";
            if (ten === 0 && unit > 0) str += " linh";
        }

        if (ten > 1) {
            str += " " + numberWords[ten] + " mươi";
            if (unit === 1) str += " mốt";
            else if (unit === 5) str += " lăm";
            else if (unit > 0) str += " " + numberWords[unit];
        } else if (ten === 1) {
            str += " mười";
            if (unit === 1) str += " một";
            else if (unit === 5) str += " lăm";
            else if (unit > 0) str += " " + numberWords[unit];
        } else if (ten === 0 && unit > 0) {
            str += " " + numberWords[unit];
        }

        return str.trim();
    }

    let result = "";
    let unitIndex = 0;

    while (n > 0) {
        const triple = n % 1000;
        if (triple > 0) {
            const prefix = readTriple(triple);
            result = prefix + (units[unitIndex] ? " " + units[unitIndex] : "") + " " + result;
        }
        n = Math.floor(n / 1000);
        unitIndex++;
    }

    result = result.trim() + " đồng";

    return result.charAt(0).toUpperCase() + result.slice(1);
}
