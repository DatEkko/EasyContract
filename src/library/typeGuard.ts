import { ApiResponse } from "./api";

export function isSuccess<T>(res: ApiResponse<T>): res is ApiResponse<T> & { data: T } {
    return res.success === true;
}

