import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

// export const queryClient = new QueryClient();

interface Props {
  queryConfig?: any;
}
const QueryProvider: React.FC<Props> = (props) => {
  const queryClient = React.useMemo(() => new QueryClient(props.queryConfig), [
    props.queryConfig,
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
