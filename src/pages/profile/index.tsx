import InformationItem from '../../components/informationItem';
import Layout from '../../components/Layout';
import LinkContact from '../../components/linkContact';
import Page from '../../components/page';
import { links } from '../../misc/links';

const Profile = () => {
  return (
    <Page>
      <Layout>
        <article>
          <div className="flex user direction-column">
            <div className="user__leftside flex w-50">
              <img
                src="http://makefriendsback.promo-miner.art//documents/images/115818759686584217389_1.png"
                alt="avatar"
                className="user__leftside-img w-50"
              />
            </div>
            <div className="user__rightside w-50">
              <InformationItem title="Город" subtitle={'Москва'} />
              <InformationItem title="Пол" subtitle={'Мужской'} />
              <InformationItem title="Возраст" subtitle={'30'} />
              <div className="usersItem">
                <h2 className="usersItem-title">Интересы</h2>
                <ul className="usersItem__list">
                  <li>Спорт</li>
                  <li>Дайвинг</li>
                </ul>
              </div>
              <InformationItem
                title="О себе"
                subtitle={'Какой-то текст о себе'}
              />
              <div className="flex mb-24">
                <LinkContact
                  link={'https://www.whatsapp.com/'}
                  nameSvg={links.whatsapp}
                />
                <LinkContact
                  link={'https://www.tiktok.com/'}
                  nameSvg={links.tiktoc}
                />
                <LinkContact
                  link={'https://www.instagram.com/'}
                  nameSvg={links.instagram}
                />
                <LinkContact
                  link={'https://www.facebook.com/'}
                  nameSvg={links.facebook}
                />
                <LinkContact
                  link={'https://www.whatsapp.com/'}
                  nameSvg={links.whatsapp}
                />
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </Page>
  );
};
export default Profile;
