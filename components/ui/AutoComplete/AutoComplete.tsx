import { Icon, Input, AutoComplete } from 'antd';

interface Props {
  onSearch: (value: string) => void;
}

const Complete = ({ onSearch }: Props) => {
  return (
    <div className="certain-category-search-wrapper" style={{ width: '50%' }}>
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: '30%' }}
        size="large"
        style={{ width: '100%' }}
        placeholder="Search for products"
        optionLabelProp="value"
        onSearch={onSearch}
      >
        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    </div>
  );
};

export default Complete;