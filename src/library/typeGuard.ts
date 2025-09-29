import { ApiResponse } from "./api";

type ApiError = { statusCode: number; message: string; error?: string };

export function isSuccess<T>(res: ApiResponse<T>): res is T {
    // Nếu res có statusCode thì đây là ApiError
    if (typeof (res as ApiError).statusCode === "number") {
        return (res as ApiError).statusCode === 200 || (res as ApiError).statusCode === 201;
    }
    // Nếu không có statusCode => chắc chắn là payload T
    return true;
}

