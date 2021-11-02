/* eslint-disable import/no-anonymous-default-export */
import {Menu} from '.';

import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'logo',
      link: '#target',
      srcImg: '',
    }
  },
};

export const Template = (args) => {
  return (
    <div style={{height: '300vh', background: 'gray'}}>
      <Menu {...args} />
    </div>
  );
};
