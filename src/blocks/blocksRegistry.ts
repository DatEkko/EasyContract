import { Paragraph } from "docx";
import { AnyBlockDefinition, BlockDefinition, IPartyBlock, ITitleBlock } from "./type.block";
import { makeHeader, makeTitle } from "./ListBlock/makeHeader";
import { makePartyInfo } from "./ListBlock/makePartyInfo";
import { makeSignTable } from "./ListBlock/makeSignTable";
import {
    makeGeneralPolicy12, makeGeneralPolicy3NoDeposit,
    makeGeneralPolicy3WithDeposit, makeGeneralPolicy456, makeTopPolicy
} from "./ListBlock/makeGeneralPolicy";

// Header
export const HeaderBlock: BlockDefinition = {
    type: "header",
    fields: [
        { key: "companyName", label: "Tên công ty", required: true },
        { key: "soHopDong", label: "Số hợp đồng", required: true },
    ],
    render: (_block, _data) => [
        makeHeader(
            _data.companyName,
            _data.soHopDong,
        ),
        new Paragraph({ text: "" }),
    ],
};

//Title
export const TitleBlock: BlockDefinition<ITitleBlock> = {
    type: "title",
    fields: [
        { key: "text", label: "Tiêu đề", required: true },
    ],
    render: (_block, _data) => [
        makeTitle(_block.spacingBefore ?? 0, _block.text)
    ]
};

// Party
export const PartyBlock: BlockDefinition<IPartyBlock> = {
    type: "party",
    fields: [],
    render: (_block, _data) => {
        const info = _block.role === "A" ? _data.partyA : _data.partyB;
        return [
            makePartyInfo(`Bên ${_block.role}`, info),
            new Paragraph({ text: "" })
        ];
    },
    getFields: (_block) => [
        {
            key: _block.role === "A" ? "partyA" : "partyB",
            label: `Thông tin bên ${_block.role}`,
            required: true,
            group: _block.role
        }
    ]
};

// SignTable
export const SignTableBlock: BlockDefinition = {
    type: "signTable",
    fields: [
        { key: "partyA", label: "Thông tin bên A", required: true },
        { key: "partyB", label: "Thông tin bên B", required: true },
    ],
    render: (_block, _data) => [new Paragraph({ text: "" }), makeSignTable(_data.partyA, _data.partyB)],
};

// Policy blocks
export const TopPolicyBlock: BlockDefinition = {
    type: "block",
    name: "makeTopPolicy",
    fields: [],
    render: () => makeTopPolicy(),
};

export const Policy12Block: BlockDefinition = {
    type: "block",
    name: "makeGeneralPolicy12",
    fields: [
        { key: "rows", label: "Danh sách sản phẩm/dịch vụ", required: true },
        { key: "tongHopDong", label: "Tổng hợp đồng", required: true },
    ],
    render: (_block, _data) => makeGeneralPolicy12(_data.rows, _data.tongHopDong),
};

export const Policy3WithDepositBlock: BlockDefinition = {
    type: "block",
    name: "makeGeneralPolicy3WithDeposit",
    fields: [
        { key: "tongHopDong", label: "Tổng hợp đồng", required: true },
        { key: "partyB", label: "Thông tin bên B", required: true },
    ],
    render: (_block, _data) => makeGeneralPolicy3WithDeposit(_data.tongHopDong, _data.partyB),
};

export const Policy3NoDepositBlock: BlockDefinition = {
    type: "block",
    name: "makeGeneralPolicy3NoDeposit",
    fields: [
        { key: "tongHopDong", label: "Tổng hợp đồng", required: true },
        { key: "partyB", label: "Thông tin bên B", required: true },
    ],
    render: (_block, _data) => makeGeneralPolicy3NoDeposit(_data.tongHopDong, _data.partyB),
};

export const Policy456Block: BlockDefinition = {
    type: "block",
    name: "makeGeneralPolicy456",
    fields: [],
    render: () => makeGeneralPolicy456(),
};

export const blocksRegistry: AnyBlockDefinition[] = [
    HeaderBlock,
    TitleBlock,
    PartyBlock,
    SignTableBlock,
    TopPolicyBlock,
    Policy12Block,
    Policy3WithDepositBlock,
    Policy3NoDepositBlock,
    Policy456Block,
];
