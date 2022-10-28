import { fetchFiltersByModeId } from 'common/config';
// import { use } from 'react';

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};

export default async function Page({ params }: PageProps) {
  const filter = await fetchFiltersByModeId(params.exploreId);
  console.log(filter);
  if (!filter) return null;
  return (
    <div>
      <h1>{filter.id}</h1>
    </div>
  );
}
