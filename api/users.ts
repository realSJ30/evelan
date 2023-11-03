import { GetUserResponseApi } from "@/utils/types";
import { getRequestApi } from "./client";

export const getUsers = async ({
  page = 1,
}: {
  page?: number;
}): Promise<GetUserResponseApi> => {
  const { data } = await getRequestApi("/users", { params: { page: page } });
  return data as GetUserResponseApi;
};
