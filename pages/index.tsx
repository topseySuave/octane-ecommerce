import Link from 'next/link';
import { Button } from 'antd';

import './index.scss';

export default () => (
  <div>
    <h2>Great Stuff</h2>
    <Button type="primary">Button</Button>
    <p>This React template uses Next, TypeScript and `styled-components`</p>
    <p>Read more on the <Link href='/about'><a>about page</a></Link>!</p>
  </div>
)
