import React, {FC} from 'react';

interface IProps {
    people:{
      name: string;
      age: number;
      url: string;
      note?: string
    }[]
  }

const List: FC<IProps> = ({people}) => {
    return (
        <div>
            I am a list;
        </div>
    );
};

export default List;