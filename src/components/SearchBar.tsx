"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    const [searchId, setSearchId] = useState("")
    const router = useRouter()

    const handleSearch = () => {
        if (searchId.trim() !== "") {
            router.push(`/${searchId}`)
        }
    }

    return (
        <div className="flex items-center w-full max-w-md mt-3 mb-15 mx-auto text-base relative">
            <input
                type="text"
                placeholder="Nhập mã hợp đồng cá nhân..."
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-4xl focus:outline-none pl-5"
            />
            {/* icon search */}
            <button
                onClick={handleSearch}
                className="absolute right-3 text-gray-500 hover:text-blue-600"
            >
                <IoSearch className="w-5 h-5" />
            </button>
        </div>
    )
}

export default SearchBar
