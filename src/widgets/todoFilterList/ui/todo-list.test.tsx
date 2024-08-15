import { render, screen, fireEvent } from '@testing-library/react';
import { TodoFilterList } from './todo-list';
import { describe, it, expect, vi } from 'vitest';
import { filterOptions } from '../fixtures';

describe('TodoFilterList Component', () => {
  it('renders filter options correctly', () => {
    render(
      <TodoFilterList activeKey="1" setActiveKey={() => {}} />
    );

    filterOptions.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('highlights the active filter', () => {
    render(
      <TodoFilterList activeKey="2" setActiveKey={() => {}} />
    );

    const activeFilter = screen.getByText('Active');
    expect(activeFilter).toHaveClass('cursor-pointer rounded-lg p-2 border border-red-200');
  });

  it('calls setActiveKey when a filter is clicked', () => {
    const setActiveKeyMock = vi.fn();

    render(
      <TodoFilterList activeKey="1" setActiveKey={setActiveKeyMock} />
    );

    const filterToClick = screen.getByText('Completed');
    fireEvent.click(filterToClick);

    expect(setActiveKeyMock).toHaveBeenCalledWith('3');
  });

  
  it('matches the snapshot', () => {
    const { asFragment } = render(
      <TodoFilterList activeKey="1" setActiveKey={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
