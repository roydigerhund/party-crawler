import React, { FC, useContext } from 'react';

type Context = {
  MINIO_BASE_URL: string;
};

const EnvironmentVariablesContext = React.createContext<Context>({
  MINIO_BASE_URL: '',
});

export const EnvironmentVariablesProvider: FC = ({ children }) => {
  const variables = {
    MINIO_BASE_URL: process.env.MINIO_BASE_URL || '',
  };

  return <EnvironmentVariablesContext.Provider value={variables}>{children}</EnvironmentVariablesContext.Provider>;
};

export const useEnvironmentVariables = () => {
  const ctx = useContext(EnvironmentVariablesContext);

  if (!ctx) {
    throw Error(
      'The `useEnvironmentVariables` hook must be called from a descendent of the `EnvironmentVariablesProvider`.',
    );
  }

  return ctx;
};
