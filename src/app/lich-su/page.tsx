import HistoryComponent from "@/components/History/HistoryComponent";
import { getListHistoryService } from "@/services/historyService";

const HistoryPage = async () => {
    const res = await getListHistoryService();
    const data = res.data?.data;

    return (
        <div>
            <HistoryComponent data={data} />
        </div>
    )
}

export default HistoryPage;