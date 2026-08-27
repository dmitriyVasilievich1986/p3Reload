import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vite-plus/test';

import { ModifiersRow } from './ModifiersRow';

describe('ModifiersRow', () => {
  it('returns null when modifiers is empty', () => {
    const { container } = render(<ModifiersRow modifiers={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('renders a Stats: label and a bulleted line per modifier', () => {
    render(<ModifiersRow modifiers={['Academics +2', 'Courage -1']} />);

    expect(screen.getByText('Stats:')).toBeInTheDocument();
    expect(screen.getByText('Academics +2')).toBeInTheDocument();
    expect(screen.getByText('Courage -1')).toBeInTheDocument();
  });

  it('renders the modifiers inside a bulleted list', () => {
    render(<ModifiersRow modifiers={['Charm +4']} />);

    const item = screen.getByText('Charm +4');
    expect(item.tagName).toBe('LI');
    expect(item.closest('ul')).toHaveClass('list-disc');
  });
});
