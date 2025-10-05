import { Paragraph, TextRun, AlignmentType, Table, WidthType } from "docx";
import { makeRows } from "./makeRows";
import { makeBankInfoTable } from "./makeBankInfoTable";
import { numberToVietnamese } from "../../utils/numberToVietnamese";
import { PartyInfo, RowData } from "../type.block";

const makeClause = (text: string) =>
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { before: 100, after: 150 },
        indent: {
            left: 720,
            hanging: 620,
        },
        children: [new TextRun({ text })],
    });

export const makeGeneralPolicy12 = (rows: RowData[], tongHopDong: number) => [
    // Điều 01
    new Paragraph({ text: "" }),
    new Paragraph({
        spacing: { before: 200, after: 150 },
        children: [new TextRun({ text: "ĐIỀU 01: ĐỐI TƯỢNG CỦA HỢP ĐỒNG", bold: true })],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { before: 100, after: 150 },
        children: [
            new TextRun({
                text: "Bên A đồng ý mua và sử dụng dịch vụ mà Bên B đồng ý cung cấp dịch với các tiêu chuẩn như sau: ",
            }),
        ],
    }),
    new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: makeRows(rows, tongHopDong),
    }),

    // Điều 02
    new Paragraph({ text: "" }),
    new Paragraph({
        spacing: { before: 200, after: 150 },
        children: [new TextRun({ text: "ĐIỀU 02: CAM KẾT VỀ CHẤT LƯỢNG", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        indent: { left: 720 },
        children: [new TextRun({ text: "Bên B cam kết các nội dung như sau:", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        indent: { left: 320 },
        children: [
            new TextRun({
                text: "-     Cung cấp dịch vụ đúng theo số lượng được quy định trong điều 1 của hợp đồng này.",
            }),
        ],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        indent: { left: 320 },
        children: [
            new TextRun({
                text: "-     Đảm bảo cung cấp dịch vụ đúng theo qui trình, chất lượng.",
            }),
        ],
    }),
];

export const makeGeneralPolicy3NoDeposit = (tongHopDong: number, beneficiary: PartyInfo) => [
    new Paragraph({ text: "" }),
    new Paragraph({
        children: [new TextRun({ text: "ĐIỀU 03: GIÁ VÀ PHƯƠNG THỨC THANH TOÁN", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        children: [new TextRun({ text: "3.1      Giá trị hợp đồng", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        indent: { left: 320 },
        children: [
            new TextRun({ text: "-     Giá hợp đồng: " }),
            new TextRun({ text: tongHopDong.toLocaleString() + " VNĐ", bold: true }),
            new TextRun({ text: ` (Bằng chữ: ${numberToVietnamese(tongHopDong)})` }),
        ],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        indent: { left: 320 },
        children: [
            new TextRun({
                text: "-     Giá Hợp Đồng đã bao gồm toàn bộ các chi phí để thực hiện công việc thuộc trách nhiệm của Bên B theo Hợp Đồng;",
            }),
        ],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        children: [new TextRun({ text: "3.2      Phương thức thanh toán", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 50, after: 150 },
        children: [
            new TextRun({
                text: "           Bên A thanh toán bằng chuyển khoản cho Bên B theo thông tin như sau:",
            }),
        ],
    }),
    makeBankInfoTable(beneficiary),
    new Paragraph({
        spacing: { before: 150, after: 150 },
        children: [new TextRun({ text: "3.3      Hồ sơ quyết toán", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        indent: { left: 320 },
        children: [new TextRun({ text: "-     Hóa đơn GTGT;" })],
    }),
];

export const makeGeneralPolicy3WithDeposit = (tongHopDong: number, beneficiary: PartyInfo) => [
    new Paragraph({ text: "" }),
    new Paragraph({
        children: [new TextRun({ text: "ĐIỀU 03: GIÁ VÀ PHƯƠNG THỨC THANH TOÁN", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        children: [new TextRun({ text: "3.1      Giá trị hợp đồng", bold: true })],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { before: 100, after: 150 },
        indent: { left: 320 },
        children: [
            new TextRun({ text: "-     Giá hợp đồng: " }),
            new TextRun({ text: tongHopDong.toLocaleString() + " VNĐ", bold: true }),
            new TextRun({ text: ` (Bằng chữ: ${numberToVietnamese(tongHopDong)})` }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { before: 100, after: 150 },
        indent: { left: 320 },
        children: [
            new TextRun({
                text: "-     Giá Hợp Đồng đã bao gồm toàn bộ các chi phí để thực hiện công việc thuộc trách nhiệm của Bên B theo Hợp Đồng;",
            }),
        ],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        children: [new TextRun({ text: "3.2      Phương thức thanh toán", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 50, after: 150 },
        children: [
            new TextRun({
                text: "           Bên A thanh toán bằng chuyển khoản cho Bên B theo thông tin như sau:",
            }),
        ],
    }),
    makeBankInfoTable(beneficiary),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { before: 100, after: 150 },
        indent: { left: 320 },
        children: [
            new TextRun({ text: "-     Đợt 1 (đặt cọc): ", bold: true }),
            new TextRun({
                text: "Bên A thanh toán cho Bên B 30 % giá trị hợp đồng tương đương với số tiền là: ",
            }),
            new TextRun({
                text: (tongHopDong * 0.3).toLocaleString() + " VNĐ",
                bold: true,
            }),
            new TextRun({
                text: ` (Bằng chữ: ${numberToVietnamese(tongHopDong * 0.3)});`,
            }),
            new TextRun({
                text: " trong thời hạn 03 (ba) ngày làm việc kể từ ngày bên A và bên B ký hợp đồng.",
            }),
        ],
    }),
    new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { before: 100, after: 150 },
        indent: { left: 320 },
        children: [
            new TextRun({ text: "-     Đợt 2 (quyết toán): ", bold: true }),
            new TextRun({
                text: "Bên A thanh toán cho Bên B 70 % giá trị hợp đồng tương đương với số tiền là: ",
            }),
            new TextRun({
                text: (tongHopDong * 0.7).toLocaleString() + " VNĐ",
                bold: true,
            }),
            new TextRun({
                text: ` (Bằng chữ: ${numberToVietnamese(tongHopDong * 0.7)});`,
            }),
            new TextRun({
                text: " trong thời hạn 03 (ba) ngày làm việc kể từ ngày bên B hoàn thành việc cung cấp dịch vụ và thi công xong theo các khoản tại điều 1 của hợp đồng.",
            }),
        ],
    }),
    new Paragraph({
        spacing: { before: 150, after: 150 },
        children: [new TextRun({ text: "3.3      Hồ sơ quyết toán", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        indent: { left: 320 },
        children: [new TextRun({ text: "-     Hóa đơn GTGT;" })],
    }),
];

export const makeGeneralPolicy456 = () => [
    // Điều 04
    new Paragraph({ text: "" }),
    new Paragraph({
        children: [new TextRun({ text: "ĐIỀU 04: THỜI HẠN, ĐỊA ĐIỂM, PHƯƠNG THỨC THỰC HIỆN HỢP ĐỒNG", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        children: [new TextRun({ text: "4.1      Thời hạn", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        indent: { left: 320 },
        children: [new TextRun({ text: "-     Thời gian thực hiện hợp đồng: Từ ngày …/ …/ … đến ngày …/ …/ …" })],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        children: [new TextRun({ text: "4.2      Địa điểm thực hiện dịch vụ", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        indent: { left: 320 },
        children: [new TextRun({ text: "-     Bên B tiến hành Cung cấp dịch vụ cho Bên A tại địa chỉ: ……………………………………………………………………………………" })],
    }),
    // Điều 05
    new Paragraph({ text: "" }),
    new Paragraph({
        children: [new TextRun({ text: "ĐIỀU 05: CHẤM DỨT HỢP ĐỒNG", bold: true })],
    }),
    new Paragraph({
        spacing: { before: 100, after: 150 },
        children: [new TextRun({ text: "Hợp đồng chấm dứt trong các trường hợp sau: " })],
    }),
    makeClause("5.1     Xảy ra sự kiện bất khả kháng theo quy định tại của pháp luật;"),
    makeClause("5.2    Khi Bên B vi phạm bất kỳ nghĩa vụ nào trong hợp đồng và không khắc phục theo đúng quy định."),
    makeClause("5.3    Thỏa thuận giữa các bên;"),
    makeClause("5.4    Khi chấm dứt Hợp Đồng, Bên A chỉ có nghĩa vụ thanh toán chi phí hạng mục công việc đã hoàn thành và được nghiệm thu mà không thanh toán bất kì khoản chi phí nào khác."),

    // Điều 06
    new Paragraph({ text: "" }),
    new Paragraph({
        children: [new TextRun({ text: "ĐIỀU 06: GIẢI QUYẾT TRANH CHẤP", bold: true })],
    }),
    makeClause("6.1    Bên A và Bên B có trách nhiệm giải quyết các tranh chấp phát sinh giữa hai bên thông qua thương lượng, hòa giải;"),
    makeClause("6.2    Nếu tranh chấp không thể giải quyết được bằng thương lượng, trong thời gian 30 (ba mươi) ngày kể từ ngày phát sinh tranh chấp, việc giải quyết tranh chấp sẽ được giải quyết tại Tòa án có thẩm quyền tại Thành phố Hồ Chí Minh theo quy định của pháp luật;"),
    makeClause("6.3   Toàn bộ chi phí phát sinh từ/liên quan đến tố tụng do bên thua kiện chịu bao gồm nhưng không giới hạn như chi phí luật sư, …."),

    // Điều 07
    new Paragraph({ text: "" }),
    new Paragraph({
        children: [new TextRun({ text: "ĐIỀU 07: ĐIỀU KHOẢN CHUNG", bold: true })],
    }),
    makeClause("7.1    Việc sửa đổi, bổ sung bất kì nội dung nào trong Hợp Đồng chỉ có giá trị pháp lý và ràng buộc Các Bên thực hiện khi được lập thành văn bản và được ký bởi người có thẩm quyền của Các Bên;"),
    makeClause("7.2    Không Bên nào được chuyển giao toàn bộ hoặc một phần quyền và nghĩa vụ được quy định trong hợp đồng mà không nhận được sự đồng ý trước bằng văn bản của Bên còn lại;"),
    makeClause("7.3    Hợp đồng này có hiệu lực từ ngày ký kết và được lập thành 04 (bốn) bản gốc có giá trị pháp lý như nhau, mỗi Bên giữ 02 (hai) bản để thực hiện."),
];

export const makeTopPolicy = () => [
    // Điều 04
    new Paragraph({ text: "" }),
    new Paragraph({
        spacing: { line: 360 },
        indent: { left: 220 },
        children: [new TextRun({ text: "-      Căn cứ Bộ luật Dân sự năm 2015;", italics: true })],
    }),
    new Paragraph({
        spacing: { line: 360 },
        indent: { left: 220 },
        children: [new TextRun({ text: "-      Căn cứ Luật Thương mại năm 2005;", italics: true })],
    }),
    new Paragraph({
        spacing: { line: 360 },
        indent: { left: 220 },
        children: [new TextRun({ text: "-      Căn cứ nhu cầu và khả năng của hai bên.", italics: true })],
    }),
    new Paragraph({ text: "" }),
];
