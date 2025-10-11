import DetailHistoryComponent from "@/components/History/DetailHistoryComponent";
import { gettHistoryByIdService } from "@/services/historyService";
import { getTemplateFreeByIdService } from "@/services/templateService";
interface IParams {
    params: { id: string };
}
const DetailHistoryPage = async ({ params }: IParams) => {
    const { id } = await params
    const historyResponse = await gettHistoryByIdService(id);
    const historyData = historyResponse.data?.data;

    const templateResponse = await getTemplateFreeByIdService(historyData?.templateId ?? "");
    const templateData = templateResponse.data?.data;

    return (
        <div>
            <DetailHistoryComponent historyData={historyData} templateData={templateData} />
        </div>
    )
}

export default DetailHistoryPage;