import { ExploreNav } from './ExploreNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ExploreNav />
      {children}
    </div>
  );
}
