import ListFavoriteTemplateComponent from "@/components/ListTemplate/ListFavoriteTemplateComponent";
import { getListTemplateFreeService } from "@/services/templateService";

const ListFavoritePage = async () => {
    const res = await getListTemplateFreeService();
    const data = res.data?.data
    return (
        <div>
            <ListFavoriteTemplateComponent data={data} />
        </div>
    )
}

export default ListFavoritePage;