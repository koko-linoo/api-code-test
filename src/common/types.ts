export default interface PaginatedResponse<T> {
    status: number;
    message: string;
    response: {
        total: number;
        list: T[];
    };
}