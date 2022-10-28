'use client';

import React, { useState } from 'react';

import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import styled, { css } from 'styled-components';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
// import { useRecoilState } from "recoil";
// import { atoms } from "common/recoil";
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { modes as m } from 'common/config';

const StyledToolbar = styled(ToolbarPrimitive.Root)`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const styledItem = css`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  min-height: 20px;
  padding: 12px;
  border: 0.1px solid #515151;
  background-color: rgba(34, 34, 34, 0.5);
  //aria-pressed style
  &[aria-pressed='true'] {
    background-color: #222;
  }
  &:hover {
    background-color: #333333;
  }
  &:active {
    background-color: #222;
  }
  &:focus {
    // drop shadow on focus
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    z-index: 100;
  }
`;

const StyledSeparator = styled(ToolbarPrimitive.Separator)`
  width: 1;
  height: 20;
  background-color: #515151;
  margin: 0 2px;
`;

const StyledButton = styled(ToolbarPrimitive.Button)`
  ${styledItem};
  cursor: pointer;
  color: white;
  border-radius: 6px;
`;

const StyledToggleGroup = styled(ToolbarPrimitive.ToggleGroup)`
  display: flex;
  border-radius: 6px;
  overflow: hidden;
`;

const StyledToggleItem = styled(ToolbarPrimitive.ToggleItem)`
  ${styledItem};
  cursor: pointer;
  color: white;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4px;
  min-height: 96px;
  gap: 4px;
`;
const Card = styled.div`
  ${styledItem};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4px;
  min-height: 96px;
  min-width: 156px;
  border: 0.1px solid #515151;
  background-color: rgba(34, 34, 34, 0.5);
  border-radius: 6px;
`;

const Wrapper = styled.div`
  background-color: rgba(34, 34, 34, 0.5);
  padding: 4px;
  border-radius: 8px;
  max-width: 100hw;
  overflow-x: hidden;
  align-items: flex-start;
`;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root)`
    height: 100%;
    overflow: hidden;
    padding-bottom: 4px;
  `,
  StyledViewport = styled(ScrollAreaPrimitive.Viewport)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
  `,
  StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar)`
    display: flex;
    border-radius: 5px;
    position: absolute;
    background: rgba(236, 236, 236, 0.5);
    height: 2px;
    margin: 3px;
  `,
  StyledThumb = styled(ScrollAreaPrimitive.Thumb)`
    flex: 1;
    border-radius: 5px;
    height: 20px;
    width: 10px;
    background: rgba(34, 34, 34, 0.5);
  `,
  StyledCorner = styled(ScrollAreaPrimitive.Corner)`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 10px;
    background-color: rgba(34, 34, 34, 0.5);
    border-radius: 6px;
  `;

const wrapp = css`
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-items: flex-start;
`;

const WrapperButton = styled.div`
  ${wrapp};
  bottom: 0;
  left: 0;
`;
const MediaToolbarWrapper = styled.div`
  ${wrapp};
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModelModeControlsWrapper = styled.div`
  ${wrapp};
  top: 0;
  left: 0;
`;

const StyledTabs = styled(TabsPrimitive.Root)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  `,
  StyledList = styled(TabsPrimitive.List)`
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  StyledTrigger = styled(TabsPrimitive.Trigger)`
    ${styledItem};
    color: white;
    &[data-state='active'] {
      background-color: #222;
    }

    &:hover {
      cursor: pointer;
      background-color: #333333;
    }
    &:active {
      background-color: #222;
    }
    &:focus {
      // drop shadow on focus
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
      z-index: 100;
    }
  `,
  StyledContent = styled(TabsPrimitive.Content)``;

export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;
export const ScrollArea = StyledScrollArea;
export const ScrollAreaViewport = StyledViewport;
export const ScrollAreaScrollbar = StyledScrollbar;
export const ScrollAreaThumb = StyledThumb;
export const ScrollAreaCorner = StyledCorner;

export const Toolbar = StyledToolbar;
export const ToolbarButton = StyledButton;
export const ToolbarSeparator = StyledSeparator;

export const ToolbarToggleGroup = StyledToggleGroup;
export const ToolbarToggleItem = StyledToggleItem;

export function MediaToolbar() {
  // const [viewMode, setViewMode] = useRecoilState(atoms.viewMode);
  const [layoutMode, setLayoutMode] = useState<string | undefined>();

  return (
    <MediaToolbarWrapper>
      <Wrapper>
        {layoutMode === 'gallery' && (
          <ScrollArea>
            <ScrollAreaViewport>
              <Gallery>
                {Array.from(Array(20).keys()).map((i) => (
                  <Card key={i}>Card {i}</Card>
                ))}
              </Gallery>
            </ScrollAreaViewport>

            <ScrollAreaScrollbar orientation="horizontal">
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>

            <ScrollAreaCorner />
          </ScrollArea>
        )}

        <Toolbar>
          <ToolbarToggleGroup type="multiple">
            <ToolbarToggleItem
              value="x"
              onClick={() =>
                layoutMode ? setLayoutMode(undefined) : setLayoutMode('gallery')
              }
            >
              {layoutMode ? 'x' : 'G'}
            </ToolbarToggleItem>
          </ToolbarToggleGroup>
          <ToolbarSeparator />
          <ToolbarToggleGroup type="multiple">
            <ToolbarToggleItem value="">
              Precise located media
            </ToolbarToggleItem>
            <ToolbarToggleItem value="cameras">Media</ToolbarToggleItem>
          </ToolbarToggleGroup>
          <ToolbarSeparator />
          <ToolbarToggleGroup type="multiple">
            <ToolbarToggleItem value="t">Testimonies</ToolbarToggleItem>
          </ToolbarToggleGroup>
        </Toolbar>
      </Wrapper>
    </MediaToolbarWrapper>
  );
}

export function ViewportControls() {
  const [viewMode, setViewMode] = useState('3d');

  return (
    <WrapperButton>
      <Wrapper>
        <Toolbar>
          <ToolbarButton
            onClick={() =>
              viewMode === '3d' ? setViewMode('2d') : setViewMode('3d')
            }
          >
            {viewMode}
          </ToolbarButton>
        </Toolbar>
      </Wrapper>
    </WrapperButton>
  );
}

// export function ModelModeControls() {
//   // const [viewMode, setViewMode] = useRecoilState(atoms.viewMode);
//   const [modes, setModelModes] = useState(m);
//   // const [modelMode, setModelMode] = useRecoilState(atoms.modelMode);
//   return (
//     <ModelModeControlsWrapper>
//       <Wrapper>
//         <Tabs value={modelMode} onValueChange={(e) => setModelMode(e)}>
//           <TabsList>
//             {modes.map((mode) => (
//               <TabsTrigger key={mode.id} value={mode.id}>
//                 {mode.name}
//               </TabsTrigger>
//             ))}
//           </TabsList>
//           {modes.map((mode) => (
//             <TabsContent key={mode.id} value={mode.id}>
//               {mode.description}
//             </TabsContent>
//           ))}
//         </Tabs>
//       </Wrapper>
//     </ModelModeControlsWrapper>
//   );
// }

export function ViewportToolbar() {
  return (
    <>
      <MediaToolbar />
      <ViewportControls />
      {/* <ModelModeControls /> */}
    </>
  );
}

export default ViewportToolbar;
