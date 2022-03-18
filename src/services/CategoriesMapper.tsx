import React, { FC } from 'react';
import { Category } from '../styles/components/blocks/Block4.styled';
import { ICategory, ICategoryState } from '../interfaces/components';

type CategoriesMapperProps = {
  array: ICategory[];
  cat: ICategoryState;
  handler: (name: string) => void;
};

const CategoriesMapper: FC<CategoriesMapperProps> = ({
  array,
  cat,
  handler,
}) => {
  return (
    <>
      {array.map(({ name, icon }) => (
        <Category active={cat[name]} onClick={() => handler(name)} key={name}>
          {icon && <img src={icon} alt='icon' />}
          {name}
        </Category>
      ))}
    </>
  );
};

export default CategoriesMapper;
