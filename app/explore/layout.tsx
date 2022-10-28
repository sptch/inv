import { ExploreNav, NavWrapper } from './ExploreNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavWrapper></NavWrapper>
      <ExploreNav />
      {children}
    </div>
  );
}
