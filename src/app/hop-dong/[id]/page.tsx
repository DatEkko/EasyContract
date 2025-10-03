import DetailTemplateComponent from "@/components/DetailTemplate/DetailTemplateComponent";
import { getTemplateFreeByIdService } from "@/services/templateService";

interface IParams {
    params: { id: string };
}

const DetailTemplatePage = async ({ params }: IParams) => {
    const { id } = await params
    const res = await getTemplateFreeByIdService(id);
    const data = res.data?.data

    return (
        <div>
            <DetailTemplateComponent data={data} />
        </div>
    )
}

export default DetailTemplatePage;