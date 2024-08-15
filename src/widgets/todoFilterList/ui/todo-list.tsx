import { filterOptions } from "../fixtures";

interface TodoFilterListProps {
  activeKeys: string[];
  toggleActiveKey: (key: string) => void;
};

export const TodoFilterList = ({ activeKeys, toggleActiveKey }: TodoFilterListProps) => (
  <ul className="flex gap-4">
    {filterOptions.map(({ key, label }) => (
      <li
        key={key}
        onClick={() => toggleActiveKey(key)}
        className={activeKeys.includes(key) ? 'cursor-pointer rounded-lg p-2 border border-red-200' : 'cursor-pointer p-2'}
      >
        {label}
      </li>
    ))}
  </ul>
);
