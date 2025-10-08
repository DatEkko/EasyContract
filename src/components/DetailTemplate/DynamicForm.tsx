"use client";
import { ReactElement, useEffect, useState } from "react";
import PartyInfoForm from "@/components/DetailTemplate/PartyInfoForm";
import TableRows from "@/components/DetailTemplate/TableRows";
import TableRowsMobile from "@/components/DetailTemplate/TableRowsMobile";
import {
    Field,
    RowData,
    IDataFields,
    emptyPartyInfo,
    PartyKeys,
    PartyInfo,
} from "@/blocks/type.block";
import { deletePartnerService, getPartnerService } from "@/services/partnerService";

interface DynamicFormProps {
    formData: IDataFields;
    setFormData: (data: IDataFields | ((prev: IDataFields) => IDataFields)) => void;
    fields: Field[];
    rows: RowData[];
    errors: Record<string, string>;
    handleChange: (id: string, field: keyof RowData, value: string) => void;
    deleteRow: (id: string) => void;
}

const DynamicForm = ({
    formData,
    setFormData,
    fields,
    rows,
    errors,
    handleChange,
    deleteRow,
}: DynamicFormProps) => {
    const [listPartner, setListPartner] = useState<PartyInfo[]>([]);
    const handleGetPartner = async () => {
        const res = await getPartnerService();
        if (res.success && res.data?.data) {
            setListPartner(res.data.data);
        }
    };
    const handleDeletePartner = async (id: string) => {
        if (!confirm("Bạn có chắc muốn xóa công ty này?")) return;
        const res = await deletePartnerService(id);
        if (res.success) {
            alert("Xóa thành công");
            await handleGetPartner();
        } else {
            alert(res.error || "Xóa thất bại");
        }
    };
    useEffect(() => {
        handleGetPartner();
    }, []);

    // Hàm cập nhật chung, đảm bảo nếu party đang là beneficiary sẽ cập nhật luôn
    const updateField = <K extends keyof IDataFields>(
        key: K,
        value: IDataFields[K]
    ) => {
        setFormData(prev => {
            const newData = { ...prev, [key]: value };
            if ((key === "partyA" || key === "partyB") && prev.beneficiaryKey === key) {
                newData.beneficiary = value as PartyInfo;
            }

            return newData;
        });
    };

    // Field renderers
    const fieldRenderers: Record<string, (field: Field) => ReactElement> = {
        partyA: (field) => (
            <PartyInfoForm
                key={field.key}
                label="Bên A - Sử Dụng Dịch Vụ"
                value={formData.partyA ?? emptyPartyInfo}
                onChange={(val) => updateField("partyA", val)}
                listPartner={listPartner}
                onDeletePartner={handleDeletePartner}
                refreshPartners={handleGetPartner}
            />
        ),
        partyB: (field) => (
            <PartyInfoForm
                key={field.key}
                label="Bên B - Cung Cấp Dịch Vụ"
                value={formData.partyB ?? emptyPartyInfo}
                onChange={(val) => updateField("partyB", val)}
                listPartner={listPartner}
                onDeletePartner={handleDeletePartner}
                refreshPartners={handleGetPartner}
            />
        ),
        rows: (field) => (
            <div key={field.key}>
                <div className="text-center font-bold my-5 text-2xl">
                    Thông tin hàng hóa, dịch vụ
                </div>
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full border border-collapse text-lg">
                        <thead>
                            <tr className="bg-blue-600 text-white">
                                <th className="border p-2">Tên</th>
                                <th className="border p-2">Số lượng</th>
                                <th className="border p-2">Đơn vị tính</th>
                                <th className="border p-2">Số tiền</th>
                                <th className="border p-2">Tổng số tiền</th>
                                <th className="border p-2">Ghi chú</th>
                                <th className="border p-2">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRows
                                rows={rows}
                                errors={errors}
                                handleChange={handleChange}
                                deleteRow={deleteRow}
                            />
                        </tbody>
                    </table>
                </div>
                <div className="block md:hidden">
                    <TableRowsMobile
                        rows={rows}
                        errors={errors}
                        handleChange={handleChange}
                        deleteRow={deleteRow}
                    />
                </div>
            </div>
        ),
    };

    // Default renderer
    const defaultRenderer = (field: Field) => (
        <div key={field.key} className="my-3 text-left">
            <label className="block font-semibold mb-1">{field.label}</label>
            <input
                type="text"
                className="border p-2 w-full"
                placeholder={field.label}
                value={(formData[field.key as keyof IDataFields] as string | undefined) ?? ""}
                onChange={(e) =>
                    updateField(field.key as keyof IDataFields, e.target.value)
                }
            />
        </div>
    );

    const partyFields = fields.filter(f => f.key.startsWith("party"));
    const hasMultipleParties = partyFields.length > 1;

    return (
        <>
            {/* Party Info */}
            {partyFields.length >= 2 && (
                <div className="flex flex-col md:flex-row gap-4">
                    {partyFields.map((field) => {
                        const isBeneficiary = formData.beneficiaryKey === field.key;
                        const wrapperClass = `flex-1 p-2 rounded-lg ${isBeneficiary
                            ? "border-4 border-green-500 shadow-lg"
                            : "border-2"
                            }`;

                        return (
                            <div key={field.key} className={wrapperClass}>
                                {fieldRenderers[field.key]
                                    ? fieldRenderers[field.key](field)
                                    : defaultRenderer(field)}
                            </div>
                        );
                    })}
                </div>
            )}

            {partyFields.length === 1 &&
                (fieldRenderers[partyFields[0].key]
                    ? fieldRenderers[partyFields[0].key](partyFields[0])
                    : defaultRenderer(partyFields[0]))}

            {/* Dropdown beneficiary */}
            {hasMultipleParties && (
                <div className="my-4">
                    <label className="block font-semibold mb-1 text-left">
                        Người thụ hưởng
                    </label>
                    <select
                        className="border p-2 w-full"
                        value={formData.beneficiaryKey ?? ""}
                        onChange={(e) => {
                            const selectedKey = e.target.value as PartyKeys;
                            const party = formData[selectedKey] ?? emptyPartyInfo;

                            setFormData(prev => ({
                                ...prev,
                                beneficiary: { ...party },
                                beneficiaryKey: selectedKey,
                            }));
                        }}
                    >
                        <option value="">-- Chọn người thụ hưởng --</option>
                        {partyFields.map((field) => (
                            <option key={field.key} value={field.key}>
                                {field.label}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Các field khác */}
            {fields
                .filter(f => !f.key.startsWith("party") && f.key !== "rows")
                .map((field) =>
                    fieldRenderers[field.key]
                        ? fieldRenderers[field.key](field)
                        : defaultRenderer(field)
                )}

            {/* Rows */}
            {fields.find(f => f.key === "rows") &&
                fieldRenderers.rows(fields.find(f => f.key === "rows")!)}
        </>
    );
};

export default DynamicForm;
