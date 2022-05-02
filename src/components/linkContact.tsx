import { FC } from 'react';

interface Props {
  nameSvg: JSX.Element;
  title?: string;
  link: string;
}

const LinkContact: FC<Props> = ({ nameSvg, title, link }) => {
  return (
    <div className="linkContact flex items-center mr-24">
      <a className="icon" href={link}>
        {nameSvg}
      </a>
      {!!title && <a href={link}>{title}</a>}
    </div>
  );
};
export default LinkContact;
