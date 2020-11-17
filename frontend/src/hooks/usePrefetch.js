import { useState } from 'react';
import GET_PAGE from '../apollo/get_page';
import GET_FOOTER from '../apollo/get_footer';
import GET_NAVIGATION from '../apollo/get_navigation';
import { useQuery } from '@apollo/client';

export const UsePrefetchPage = (variable) => {
  const [fetchedData, setFetchedData] = useState();

  // Apollo query
  const { error, loading } = useQuery(GET_PAGE, {
    variables: { id: variable },
    onCompleted: (data) => setFetchedData(data),
  });

  const apolloObj = { fetchedData, loading, error };

  return { apolloObj };
};

export const UsePrefetchFooter = () => {
  const [fetchedData, setFetchedData] = useState();

  // Apollo query
  const { error, loading } = useQuery(GET_FOOTER, {
    onCompleted: (data) => setFetchedData(data),
  });

  const apolloObj = { fetchedData, loading, error };

  return { apolloObj };
};

export const UsePrefetchNavigation = () => {
  const [fetchedData, setFetchedData] = useState();

  // Apollo query
  const { error, loading } = useQuery(GET_NAVIGATION, {
    onCompleted: (data) => setFetchedData(data),
  });

  const apolloObj = { fetchedData, loading, error };

  return { apolloObj };
};

// Usage
// import { UsePrefetch... } from '<filepath>'

// const {apolloObj} = UsePrefetch...()
