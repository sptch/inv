'use client';

import { Mode } from 'common';
import {
  modes,
  fetchFiltersByModeId,
  getSidepanelFilters,
} from 'common/config';
import Link from 'next/link';
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';
import styled, { css } from 'styled-components';

const styledItem = css`
  all: unset;
  flex-direction: ;
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
`;

const Wrapper = styled.div`
  background-color: rgba(34, 34, 34, 0.5);
  padding: 4px;
  width: 316px;
  border-radius: 8px;
  overflow-x: hidden;
  align-items: flex-start;
`;

const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

const NavGroup = styled.div`
  display: flex;
  border-radius: 6px;
  overflow: hidden;
  justify-content: space-between;
`;

const NavItem = styled.div``;

interface ButtonProps {
  selected: boolean;
}

const StyledLink = styled(Link)<ButtonProps>`
  ${styledItem};
  width: 100%;
  background-color: ${(props) =>
    props.selected ? '#222' : 'rgba(34, 34, 34, 0.5)'};
  color: white;
`;

export function ExploreNav() {
  const modeId = useSelectedLayoutSegments();
  const filters = getSidepanelFilters().find(
    (category) => category.id === modeId[0],
  );
  const selectedMode = modes.find((mode) => mode.id === modeId[0]);

  return (
    <NavWrapper>
      <Wrapper>
        <NavGroup>
          {modes.map((mode) => (
            <StyledLink
              selected={modeId[0] === mode.id}
              key={mode.id}
              href={modeId[0] === mode.id ? '/explore' : `/explore/${mode.id}`}
            >
              {mode.name}
            </StyledLink>
          ))}
        </NavGroup>
        {selectedMode && (
          <>
            <h1>{selectedMode.description}</h1>
            <>
              {filters?.items.map((filter) => (
                <>
                  <h2>{filter.name}</h2>
                </>
              ))}
            </>
          </>
        )}
      </Wrapper>
    </NavWrapper>
  );
}
