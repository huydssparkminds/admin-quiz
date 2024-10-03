import { fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query";
import { nprogress } from "@mantine/nprogress";
import { FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  try {
    nprogress.start(); // Bắt đầu nprogress trước khi gửi yêu cầu
    const baseQuery = fetchBaseQuery({ baseUrl: "/api" });
    const result = await baseQuery(args, api, extraOptions); // Thực hiện yêu cầu API
    return result;
  } finally {
    nprogress.complete();
  }
};

export default customBaseQuery;
