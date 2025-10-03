import ListTemplateComponent from "@/components/ListTemplate/ListTempateComponent";
import { getListTemplateFreeService } from "@/services/templateService";

const ListTempatePage = async () => {
    const res = await getListTemplateFreeService();
    const data = res.data?.data

    return (
        <div>
            <ListTemplateComponent data={data} />
        </div>
    )
}

export default ListTempatePage;