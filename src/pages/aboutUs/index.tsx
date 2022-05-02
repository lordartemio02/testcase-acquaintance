import Layout from '../../components/Layout';
import Page from '../../components/page';
import mainIMG from '../../images/sobranie-sotrudnikov.jpg';
import itTeam from '../../images/it-team.jpg';
import LinkContact from '../../components/linkContact';
import { links } from '../../misc/links';

const AboutUs = () => {
  return (
    <Page>
      <Layout>
        <article>
          <img src={mainIMG} alt="Main img" />
          <div className="flex aboutUs__content direction-column">
            <div className="w-50">
              <h2 className="aboutUs__content-title">Some info</h2>
              <p className="aboutUs__content-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti perferendis incidunt doloremque, quasi provident atque
                omnis expedita laudantium dolores nihil eius suscipit maiores,
                nesciunt assumenda! Accusamus eos quas voluptate repudiandae?
              </p>
              <p className="aboutUs__content-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti perferendis incidunt doloremque, quasi provident atque
                omnis expedita laudantium dolores nihil eius suscipit maiores,
                nesciunt assumenda! Accusamus eos quas voluptate repudiandae?
              </p>
            </div>
            <div className="w-50">
              <h2 className="aboutUs__content-title">Some info</h2>
              <p className="aboutUs__content-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                laboriosam doloribus ipsam aut? Nam dolore est animi ducimus
                dignissimos provident cum quis aliquam ratione suscipit, fugiat
                vel necessitatibus eaque modi.
              </p>
            </div>
          </div>
          <div className="flex aboutUs__content items-center direction-column-reverse">
            <div className="w-50">
              <p className="aboutUs__content-subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti perferendis incidunt doloremque, quasi provident atque
                omnis expedita laudantium dolores nihil eius suscipit maiores,
                nesciunt assumenda! Accusamus eos quas voluptate repudiandae?
              </p>
            </div>
            <div className="w-50">
              <img src={itTeam} alt="IT team" />
            </div>
          </div>
          <h2 className="aboutUs-title">Свяжитесь с нами для сотрудничества</h2>
          <div className="aboutUs__links mt-24">
            <LinkContact
              link="https://twitter.com/elonmusk"
              nameSvg={links.twitter}
              title="@elonmusk"
            />
            <LinkContact
              link="https://mail.google.com/"
              nameSvg={links.gmail}
              title="some@gmail.com"
            />
            <LinkContact
              link="https://instagram.com/durov"
              nameSvg={links.instagram}
              title="@durov"
            />
            <LinkContact
              link="https://vk.com/durov"
              nameSvg={links.vk}
              title="@durov"
            />
            <div className="flex items-center mr-24">
              {links.phone}
              <span>+79833333333</span>
            </div>
          </div>
        </article>
      </Layout>
    </Page>
  );
};
export default AboutUs;
