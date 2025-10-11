import React from "react";

export function formatDateTimeVN(isoDate: string | Date) {
    const date = typeof isoDate === "string" ? new Date(isoDate) : isoDate;

    const days = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
    ];
    const dayName = days[date.getDay()];

    const pad = (n: number) => (n < 10 ? "0" + n : n);

    return (
        <>
            <span className="font-bold">{dayName}</span>
            <span>, ngày </span>
            <span className="font-bold">{date.getDate()}</span>
            <span> tháng </span>
            <span className="font-bold">{date.getMonth() + 1}</span>
            <span> năm </span>
            <span className="font-bold">{date.getFullYear()}</span>
            <span> lúc </span>
            <span className="font-bold">
                {pad(date.getHours())}:{pad(date.getMinutes())}
            </span>
        </>
    );
}

