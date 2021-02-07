import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

const QueryProvider: React.FC = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
