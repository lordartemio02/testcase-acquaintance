import { FC, ReactNode } from 'react';
import Header from './header';

type Props = { children: ReactNode };

const Page: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Page;
