import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useSearchParams } from 'react-router';
import { afterEach, beforeEach, describe, expect, it } from 'vite-plus/test';

import { Times } from '@constants/times';
import { EmptyEvent } from '@services/event/models/specialEvents';
import { useMainStore } from '@store/main';

import { RightPanel } from './RightPanel';

function DayParamButton({ day }: { day: string }) {
  const [, setSearchParams] = useSearchParams();

  return (
    <button type="button" onClick={() => setSearchParams({ day })}>
      Set day
    </button>
  );
}

function OtherParamButton() {
  const [, setSearchParams] = useSearchParams();

  return (
    <button
      type="button"
      onClick={() =>
        setSearchParams((prev) => {
          prev.set('darkTheme', 'true');
          return prev;
        })
      }
    >
      Toggle theme
    </button>
  );
}

function renderRightPanel(initialEntry: string) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <RightPanel />
      <DayParamButton day="2009-04-08" />
    </MemoryRouter>
  );
}

describe('RightPanel', () => {
  beforeEach(() => {
    useMainStore.setState({
      isLoading: false,
      calendar: null,
      currentDay: null,
      selectedEvent: null,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('renders an empty section when nothing is selected', () => {
    renderRightPanel('/p3Reload/?day=2009-04-07');

    expect(screen.getByRole('region', { name: 'Right panel' })).toBeInTheDocument();
  });

  it('clears the selected event on mount', () => {
    const event = new EmptyEvent({ time: Times.Day, skipCheck: true, isChangeable: true });
    useMainStore.setState({ selectedEvent: event });

    renderRightPanel('/p3Reload/?day=2009-04-07');

    expect(useMainStore.getState().selectedEvent).toBeNull();
  });

  it('clears the selected event when the day param changes', async () => {
    const user = userEvent.setup();
    renderRightPanel('/p3Reload/?day=2009-04-07');

    const event = new EmptyEvent({ time: Times.Day, skipCheck: true, isChangeable: true });
    useMainStore.getState().setSelectedEvent(event);
    expect(useMainStore.getState().selectedEvent).toBe(event);

    await user.click(screen.getByRole('button', { name: 'Set day' }));

    expect(useMainStore.getState().selectedEvent).toBeNull();
  });

  it('keeps the selected event when a non-day param changes', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/p3Reload/?day=2009-04-07']}>
        <RightPanel />
        <OtherParamButton />
      </MemoryRouter>
    );

    const event = new EmptyEvent({ time: Times.Day, skipCheck: true, isChangeable: true });
    useMainStore.getState().setSelectedEvent(event);

    await user.click(screen.getByRole('button', { name: 'Toggle theme' }));

    expect(useMainStore.getState().selectedEvent).toBe(event);
  });
});
