import { spaceIdVar } from "@/apollo/reactiveVars";
import { GET_USER } from "@/graphql/queries/GetUser";
import { useQuery } from "@apollo/client/react";
import { useEffect } from "react";

const useUser = () => {
  const { data, error, loading } = useQuery(GET_USER);

  useEffect(() => {
    const [firstSpace] = data?.user.spaces || [];

    if (firstSpace) {
      spaceIdVar(firstSpace.id);
    }
    //  I only want to update the space if the user id changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.user?.id]);

  return {
    avatar: data?.user.avatar,
    spaces: data?.user.spaces,
    error,
    loading,
  };
};

export default useUser;
