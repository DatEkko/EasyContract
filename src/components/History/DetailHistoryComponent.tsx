"use client";
import { IGetHistory, ITemplateStructure } from "@/services/type.service";
import BaseDetailForm from "../BaseDetailForm";

type HistoryProps = {
    historyData?: IGetHistory;
    templateData?: ITemplateStructure;
};

export default function DetailHistoryComponent({ historyData, templateData }: HistoryProps) {
    return <BaseDetailForm templateData={templateData} historyData={historyData} mode="update" />;
}
