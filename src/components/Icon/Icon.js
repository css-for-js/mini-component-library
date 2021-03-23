/**
 * We're given this component "for free" since it's really more
 * specific to React and React Feather. Feel free to read if you're
 * interested, but otherwise you can rely on our docs to learn its
 * API / which props it takes.
 */
import React from 'react';
import styled from 'styled-components';
import { Search, AtSign, ChevronDown } from 'react-feather';

const icons = {
  search: Search,
  'at-sign': AtSign,
  'chevron-down': ChevronDown,
};

const Icon = ({ id, size, strokeWidth = 1, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={{
        '--size': size + 'px',
        '--stroke-width': strokeWidth + 'px',
      }}
      {...delegated}
    >
      <Component color="currentColor" size={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--size);
  height: var(--size);

  /*
    OMG I'm doing that thing I've warned against doing!
    Unfortunately, react-feather doesn't make it possible to pass
    discrete styles to the nested SVG within its components.

    Because I'm "reaching in" to third-party code, though, it feels
    OK. In my mind, this Icon is my bridge to that third-party code,
    and if I have to do some hacky stuff, that's fine. It's
    a special circumstance, and I won't ever have to look at the
    react-feather JSX and try to work out where this SVG style
    is coming from.
  */
  & > svg {
    display: block;
    stroke-width: var(--stroke-width);
  }
`;

export default Icon;
