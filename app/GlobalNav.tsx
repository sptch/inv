'use client';

import { demos } from '@/lib/demos';
import clsx from 'clsx';
import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.nav`
    overflow: hidden;
    border-radius: 30px;
  `,
  NavItem = styled.a`
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    color: #333;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  `;

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments();

  return (
    <Wrapper>
      {/* <div className="absolute space-y-9 bg-zinc-900 bg-opacity-90 p-20"> */}
      <NavItem>
        {demos.map((demo) => {
          return (
            <div key={demo.name}>
              <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                <div>{demo.name}</div>
              </div>

              {demo.items.map((item) => {
                const isActive = item.slug === selectedLayoutSegments;

                return (
                  <div key={item.slug}>
                    {item.isDisabled ? (
                      <div
                        className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-600"
                        title="Coming Soon"
                      >
                        {item.name}
                      </div>
                    ) : (
                      <Link
                        href={`/${item.slug}`}
                        className={clsx(
                          'block rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-800 hover:text-zinc-100',
                          {
                            'text-zinc-400': !isActive,
                            'text-white': isActive,
                          },
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </NavItem>
    </Wrapper>
  );
}
