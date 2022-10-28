import PageViewer from '@/viewer/Viewer';
import { ExploreNav, NavWrapper } from './ExploreNav';
import { SceneWrapper } from './SceneWrapper';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageViewer />
      <div>
        <NavWrapper></NavWrapper>
        <ExploreNav />
        <SceneWrapper />

        {/* {children} */}
      </div>
    </>
  );
}
