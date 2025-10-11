"use client"
import { IListHistory } from "@/services/type.service";
import { formatDateTimeVN } from "@/utils/formateDate";
import Link from "next/link";

type ListHistoryComponentProps = {
    data?: IListHistory;
}

const HistoryComponent = ({ data }: ListHistoryComponentProps) => {
    if (!data) {
        return <div>Không có dữ liệu</div>;
    }
    const listHistory = data.results;
    return (
        <div className="min-h-screen p-10">
            <h1 className="text-2xl font-bold">Lịch sử tạo template</h1>
            <div className="mt-5">
                {listHistory && listHistory.length > 0 &&
                    listHistory.map((history) => (
                        <Link
                            href={`/lich-su/${history._id}`}
                            key={history._id}
                            className="border p-3 mt-2 rounded-lg cursor-pointer flex justify-between items-center hover:bg-gray-100">
                            <p>{history.name} </p>
                            <p>Tạo lúc: <span className="italic">{formatDateTimeVN(history.createdAt)}</span></p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default HistoryComponent;