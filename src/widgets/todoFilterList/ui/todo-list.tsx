import { filterOptions } from "../fixtures";

interface TodoFilterListProps {
  activeKey: string;
  setActiveKey: (key: string) => void;
};

export const TodoFilterList = ({ activeKey, setActiveKey } : TodoFilterListProps) => (
  <ul className="flex gap-4">
    {filterOptions.map(({ key, label }) => (
      <li
        key={key}
        onClick={() => setActiveKey(key)}
        className={activeKey === key ? 'cursor-pointer rounded-lg p-2 border border-red-200' : 'cursor-pointer p-2'}
      >
        {label}
      </li>
    ))}
  </ul>
);

