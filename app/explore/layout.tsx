import { ExploreNav, NavWrapper } from './ExploreNav';
import { SceneWrapper } from './SceneWrapper';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavWrapper></NavWrapper>
      <ExploreNav />
      <SceneWrapper />
      {/* {children} */}
    </div>
  );
}
