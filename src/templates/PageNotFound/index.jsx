import { GridContent } from '../../components/GridContent';

export const PageNotFound = ({ children }) => {
  return (
    <GridContent title={'error 404'} html="<p>Página não encontrada</p>" />
  );
};
