"use client";
import { useEffect, useState } from "react";
import { collectFields } from "@/blocks/engine";
import { IDataFields } from "@/blocks/type.block";
import _ from "lodash";
import { ITemplateStructure, IGetHistory } from "@/services/type.service";
import { createHistoryService, updatetHistoryByIdService } from "@/services/historyService";
import { useRowsLogic } from "./useRowsLogic";

interface UseBaseDetailLogicProps {
    mode: "create" | "update";
    templateData?: ITemplateStructure;
    historyData?: IGetHistory;
    onSuccess?: () => void;
}

export function useBaseDetailLogic({
    mode,
    templateData,
    historyData,
    onSuccess,
}: UseBaseDetailLogicProps) {
    const { rows, errors, handleChange, addRow, deleteRow, tongHopDong, validateRows, setRows } = useRowsLogic();

    const allFields = collectFields(templateData?.blocks ?? []);

    const [formData, setFormData] = useState<IDataFields>(() => {
        if (mode === "update" && historyData?.data?.formData) {
            const data = historyData.data.formData;
            const initial: Partial<IDataFields> = {};
            allFields.forEach((field) => {
                if (field.key === "rows") return;
                const key = field.key as keyof IDataFields;
                const value = data[key];
                if (value !== undefined) {
                    Object.assign(initial, { [key]: value });
                }
            });
            const beneficiary =
                data?.beneficiaryKey && data[data.beneficiaryKey]
                    ? data[data.beneficiaryKey]
                    : undefined;

            return {
                ...initial,
                beneficiary,
                beneficiaryKey: data?.beneficiaryKey,
            } as IDataFields;
        }
        return { beneficiaryKey: "partyA" };
    });

    useEffect(() => {
        if (mode === "update" && historyData?.data?.rows?.length) {
            setRows(historyData.data.rows);
        }
    }, [mode, historyData, setRows]);

    const [nameHistory, setNameHistory] = useState<string>("");
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const handleCreateHistory = async () => {
        const payload = {
            name: nameHistory,
            templateId: templateData?._id,
            data: {
                formData: _.omit(formData, ["beneficiary"]),
                rows,
            },
        };
        const res = await createHistoryService(payload);
        if (res.success) {
            alert("Tạo lịch sử thành công");
            setIsOpenModal(false);
            setNameHistory("");
            onSuccess?.();
        } else alert(res.message);
    };

    const handleUpdateHistory = async () => {
        const payload = {
            _id: historyData?._id,
            data: {
                formData: _.omit(formData, ["beneficiary"]),
                rows,
            },
        };
        const res = await updatetHistoryByIdService(payload);
        if (res.success) {
            alert("Cập nhật lịch sử thành công");
            setIsOpenModal(false);
            onSuccess?.();
        } else alert(res.message);
    };

    return {
        rows,
        errors,
        handleChange,
        addRow,
        deleteRow,
        tongHopDong,
        validateRows,
        allFields,
        formData,
        setFormData,
        nameHistory,
        setNameHistory,
        isOpenModal,
        setIsOpenModal,
        handleCreateHistory,
        handleUpdateHistory,
    };
}
