import { Description } from 'components/Description/Description';
import { Stats } from 'components/Stats/Stats';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.profile}>
    <Description
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
    />
    <Stats followers={stats.followers} views={stats.views} likes={stats.likes} />
  </div>
);
