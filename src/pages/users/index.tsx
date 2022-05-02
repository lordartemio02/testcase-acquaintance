import Layout from '../../components/Layout';
import Page from '../../components/page';
import { useCallback, useEffect, useState } from 'react';
import { UsersDataPost } from '../../api';
import { UserData } from '../../interfaces/UserData';
import LinkContact from '../../components/linkContact';
import { links } from '../../misc/links';
import InformationItem from '../../components/informationItem';

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<UserData[]>();
  const [index, setIndex] = useState(0);
  const getData = useCallback(async () => {
    const value = await UsersDataPost();
    setUserData(value);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  const like = () => {
    if (userData?.length !== index + 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <Page>
      <Layout>
        <article>
          {!isLoading && userData ? (
            <div className="flex user direction-column">
              <div className="user__leftside flex w-50">
                <img
                  src={
                    !!userData[index].images.document_image_1
                      ? 'http://makefriendsback.promo-miner.art/' +
                        userData[index].images.document_image_1?.docfile
                      : ''
                  }
                  alt="avatar"
                  className="user__leftside-img w-50"
                />
                {userData[index].images.document_image_2 ||
                userData[index].images.document_image_3 ? (
                  <div className="flex user__leftside_aditionalImages">
                    {userData[index].images.document_image_2 ? (
                      <img
                        src={
                          'http://makefriendsback.promo-miner.art/' +
                          userData[index].images.document_image_2?.docfile
                        }
                        alt="avatar"
                        className="user__leftside_aditionalImages-img"
                      />
                    ) : null}
                    {!!userData[index].images.document_image_3 ? (
                      <img
                        src={
                          'http://makefriendsback.promo-miner.art/' +
                          userData[index].images.document_image_3?.docfile
                        }
                        className="user__leftside_aditionalImages-img"
                        alt="avatar"
                      />
                    ) : null}
                  </div>
                ) : null}
              </div>
              <div className="user__rightside w-50">
                <InformationItem
                  title="Город"
                  subtitle={userData[index].data.city}
                />
                <InformationItem
                  title="Пол"
                  subtitle={userData[index].data.sex}
                />
                <InformationItem
                  title="Возраст"
                  subtitle={userData[index].data.age}
                />
                <div className="usersItem">
                  <h2 className="usersItem-title">Интересы</h2>
                  <ul className="usersItem__list">
                    {userData[index].interests.map((item, i) => (
                      <li key={'interests' + i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <InformationItem
                  title="О себе"
                  subtitle={userData[index].data.about}
                />
                <div className="flex mb-24">
                  {!!userData[index].data.whatsup && (
                    <LinkContact
                      link={
                        userData[index].data.whatsup ||
                        'https://www.whatsapp.com/'
                      }
                      nameSvg={links.whatsapp}
                    />
                  )}
                  {!!userData[index].data.tictok && (
                    <LinkContact
                      link={
                        userData[index].data.tictok || 'https://www.tiktok.com/'
                      }
                      nameSvg={links.tiktoc}
                    />
                  )}
                  {!!userData[index].data.instagram && (
                    <LinkContact
                      link={
                        userData[index].data.instagram ||
                        'https://www.instagram.com/'
                      }
                      nameSvg={links.instagram}
                    />
                  )}
                  {!!userData[index].data.facebook && (
                    <LinkContact
                      link={
                        userData[index].data.facebook ||
                        'https://www.facebook.com/'
                      }
                      nameSvg={links.facebook}
                    />
                  )}
                </div>
                <div className="user__rightside_buttons mb-24">
                  <button className="button mr-24" onClick={like}>
                    Лайк
                  </button>
                  <button className="button" onClick={like}>
                    Дизлайк
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>Загружается...</>
          )}
        </article>
      </Layout>
    </Page>
  );
};

export default Users;
