import { fetchFiltersByModeId } from 'common/config';
import { use } from 'react';

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};

export default function Page({ params }: PageProps) {
  const filter = use(fetchFiltersByModeId(params.exploreId));
  console.log(filter);
  if (!filter) return null;
  return (
    <div>
      <h1>{filter.id}</h1>
    </div>
  );
}
