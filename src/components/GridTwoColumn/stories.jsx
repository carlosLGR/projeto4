import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, labore ullam nemo eaque odit sapiente facilis. Ipsa, adipisci quas! Repellendus harum aperiam vel, officiis et accusantium eum earum tempore ipsa!`,
    srcImg: 'assets/images/javascript.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
