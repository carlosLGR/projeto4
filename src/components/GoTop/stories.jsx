/* eslint-disable import/no-anonymous-default-export */
import {GoTop} from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: {type: 'string',}
  },
};

export const Template = (args) => {
  return (
    <div style={{height: '400vh' }}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil suscipit expedita quas, quis qui tempora ratione iure. Beatae excepturi accusamus cum itaque facilis cupiditate, assumenda ex asperiores sunt velit fuga!
      </h1>
      <GoTop {...args} />
    </div>
  );
};
