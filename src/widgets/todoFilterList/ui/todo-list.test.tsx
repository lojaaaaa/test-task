import { render, screen, fireEvent } from '@testing-library/react';
import { TodoFilterList } from './todo-list';
import { describe, it, expect, vi } from 'vitest';
import { filterOptions } from '../fixtures';

describe('TodoFilterList Component', () => {
  it('renders filter options correctly', () => {
    render(
      <TodoFilterList activeKeys={['1']} toggleActiveKey={() => {}} />
    );

    filterOptions.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('highlights the active filters', () => {
    render(
      <TodoFilterList activeKeys={['2', '3']} toggleActiveKey={() => {}} />
    );

    const activeFilter1 = screen.getByText('Active');
    const activeFilter2 = screen.getByText('Completed');
    expect(activeFilter1).toHaveClass('cursor-pointer rounded-lg p-2 border border-red-200');
    expect(activeFilter2).toHaveClass('cursor-pointer rounded-lg p-2 border border-red-200');
  });

  it('calls toggleActiveKey when a filter is clicked', () => {
    const toggleActiveKeyMock = vi.fn();

    render(
      <TodoFilterList activeKeys={['1']} toggleActiveKey={toggleActiveKeyMock} />
    );

    const filterToClick = screen.getByText('Completed');
    fireEvent.click(filterToClick);

    expect(toggleActiveKeyMock).toHaveBeenCalledWith('3');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(
      <TodoFilterList activeKeys={['1']} toggleActiveKey={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
