import { FC } from 'react';

interface InformationItemProps {
  title: string;
  subtitle: string | number;
}

const InformationItem: FC<InformationItemProps> = ({ title, subtitle }) => {
  return (
    <div className="usersItem">
      <h2 className="usersItem-title">{title}</h2>
      <p className="usersItem-subtitle">{subtitle}</p>
    </div>
  );
};
export default InformationItem;
