'use client';
import Template from "./Template";
import { useRouter } from 'next/navigation';
import ListTemplate from "@/data/ListTemplate.json"

const Homepage = () => {
    const router = useRouter();
    const handleRedirect = (item: string) => {
        router.push(`/${item}`)
    }

    return (
        <div className="h-screen text-center text-3xl pt-5 px-5">
            Xin chào, đây là Easy Contract

            <div className="mt-5 flex flex-row gap-3 border items-center justify-center">
                {ListTemplate.map((item, index) => (
                    <div key={index}
                        className="py-2 cursor-pointer w-[24%]"
                        onClick={() => handleRedirect(item.id)}>
                        <Template item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homepage;