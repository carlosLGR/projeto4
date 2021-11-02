/* eslint-disable import/no-anonymous-default-export */
import {SectionBackground} from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
        <div>
          <h1>SectionBackground</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis eum, possimus voluptate deserunt iusto placeat, optio est quod reprehenderit cum veritatis veniam vel incidunt commodi, velit eveniet tenetur provident?</p>
        </div>
  )},
  argTypes: {
    children: {type: '',}
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
