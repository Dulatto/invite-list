import React, {FC} from 'react';

interface IProps {
    people:{
      name: string;
      age: number;
      url: string;
      note?: string
    }[]
  }

const List: FC<IProps> = () => {
    return (
        <div>
            I am a list;
        </div>
    );
};

export default List;