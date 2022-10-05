import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Divider,
  Link,
  Image,
} from '@chakra-ui/react';
import {
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaTiktok,
  FaMusic,
} from 'react-icons/fa';

const Panel = ({ link, icon, linkName }) => {
  let target;
  switch (icon) {
    case 'youtube':
      target = <FaYoutube style={{ marginRight: '5px' }} />;
      break;
    case 'twitch':
      target = <FaTwitch style={{ marginRight: '5px' }} />;
      break;
    case 'instagram':
      target = <FaInstagram style={{ marginRight: '5px' }} />;
      break;
    case 'twitter':
      target = <FaTwitter style={{ marginRight: '5px' }} />;
      break;
    case 'discord':
      target = <FaDiscord style={{ marginRight: '5px' }} />;
      break;
    case 'tiktok':
      target = <FaTiktok style={{ marginRight: '5px' }} />;
      break;
    case 'music':
      target = <FaMusic style={{ marginRight: '5px' }} />;
      break;
    case 'twip':
      target = (
        <Image
          src="https://assets.mytwip.net/favicon/v2/favicon-96x96.png"
          style={{
            height: '16px',
            marginRight: '5px',
          }}
        />
      );
      break;
    case 'tgd':
      target = (
        <Image
          src="https://d4fodtu7cqfym.cloudfront.net/favicon/favicon.ico"
          style={{
            height: '16px',
            marginRight: '5px',
          }}
        />
      );
      break;
    default:
      target = <></>;
  }

  return (
    <Link href={link} isExternal style={{ textDecoration: 'none' }}>
      <Button isFullWidth mb={1}>
        {target}
        {linkName}
      </Button>
    </Link>
  );
};

const LinkTabs = () => {
  return (
    <Tabs variant="soft-rounded" size="sm" colorScheme="purple">
      <TabList flexWrap="wrap">
        <Tab>LEAVEN</Tab>
        <Tab>감자가비</Tab>
        <Tab>구나구나</Tab>
        <Tab>구슬요</Tab>
        <Tab>노래하는도란</Tab>
        <Tab>김병살</Tab>
        <Tab>아드리챔</Tab>
        <Tab>유달린</Tab>
        <Tab>전해리</Tab>
        <Tab>지야</Tab>
        <Tab>포도당</Tab>
      </TabList>
      <Divider mt={2}></Divider>
      <TabPanels>
        {/* LEAVEN */}
        <TabPanel>
          <Panel
            icon="youtube"
            link="https://www.youtube.com/channel/UCDLtY-WrAwy7orpK9aVWG8g"
            linkName="Youtube (유튜브)"
          />
          <Panel
            icon="instagram"
            link="https://www.instagram.com/official_leaven/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            icon="twitch"
            link="https://twitch.tv/team/leaven"
            linkName="Twitch (트위치)"
          />
          <Panel
            icon="twitter"
            link="https://twitter.com/Official_Leaven"
            linkName="Twitter (트위터)"
          />
          <Panel
            icon="tiktok"
            link="https://www.tiktok.com/@official_leaven"
            linkName="Tiktok (틱톡)"
          />
          <Panel
            link="https://cafe.naver.com/leaven0402"
            linkName="Fan Cafe (팬카페)"
          />
        </TabPanel>
        {/* 감자가비 */}
        <TabPanel>
          <Panel
            icon="twitch"
            link="https://twitch.tv/gamjagabee"
            linkName="Twitch (트위치)"
          />
          <Panel
            icon="youtube"
            link="https://www.youtube.com/channel/UCXgm6IunUao6gvES25irTEQ"
            linkName="Youtube (유튜브)"
          />
          <Panel
            icon="discord"
            link="https://discord.com/invite/kAQTt84DX7"
            linkName="Discord (디스코드)"
          />
          <Panel
            icon="twip"
            link="https://twip.kr/gamjagabee"
            linkName="TWIP (트윕)"
          />
          <Panel
            icon="tgd"
            link="https://tgd.kr/s/gamjagabee"
            linkName="TGD (트게더)"
          />
        </TabPanel>
        {/* 구나구나 */}
        <TabPanel>
          <Panel
            icon="youtube"
            link="https://www.youtube.com/c/%EA%B5%AC%EB%82%98Guna"
            linkName="Youtube (유튜브)"
          />
          <Panel
            icon="twitch"
            link="https://twitch.tv/gunaguna00"
            linkName="Twitch (트위치)"
          />
          <Panel
            icon="twip"
            link="https://twip.kr/gunaguna00"
            linkName="TWIP (트윕)"
          />
        </TabPanel>
        {/* 구슬요 */}
        <TabPanel>
          <Panel
            icon="twitch"
            link="https://twitch.tv/beadyo97"
            linkName="Twitch (트위치)"
          />
          <Panel
            icon="youtube"
            link="https://www.youtube.com/channel/UCbZptNWeIIZ3wf4uasQ04vQ"
            linkName="Youtube (유튜브)"
          />
          <Panel
            icon="discord"
            link="https://discord.gg/FMWBbhS7Gf"
            linkName="Discord (디스코드)"
          />
          <Panel
            icon="twip"
            link="https://twip.kr/beadyo97"
            linkName="TWIP (트윕)"
          />
          <Panel
            icon="instagram"
            link="https://www.instagram.com/bead.yo/?hl=ko"
            linkName="Instagram (인스타그램)"
          />
        </TabPanel>
        {/* 노래하는도란 */}
        <TabPanel>
          <Panel
            icon="twitch"
            link="https://twitch.tv/vnek1234"
            linkName="Twitch (트위치)"
          />
          <Panel
            icon="twitch"
            link="https://twitch.tv/kiwi4381"
            linkName="Kiwi4381 Twitch (키위골드 트위치)"
          />
          <Panel
            icon="youtube"
            link="https://www.youtube.com/channel/UC3DKjVJOKMgaCv8DvvSOJRw"
            linkName="Youtube (유튜브)"
          />
          <Panel
            icon="discord"
            link="https://discord.gg/FjyemvHzqw"
            linkName="Discord (디스코드)"
          />
          <Panel
            icon="twip"
            link="https://twip.kr/vnek1234"
            linkName="TWIP (트윕)"
          />
        </TabPanel>
        {/* 김병살 */}
        <TabPanel>
          <Panel
            icon="twitch"
            link="https://twitch.tv/kbs9981"
            linkName="Twitch (트위치)"
          />
          <Panel
            icon="youtube"
            link="https://www.youtube.com/channel/UCNc9ug2dyTI1ryXEfNyVx_Q"
            linkName="Youtube (유튜브)"
          />
          <Panel
            icon="discord"
            link="https://discord.gg/ZSC7GGT"
            linkName="Discord (디스코드)"
          />
          <Panel
            icon="twip"
            link="https://twip.kr/kbs9981"
            linkName="TWIP (트윕)"
          />
        </TabPanel>
        {/* 아드리챔 */}
        <TabPanel>
          <Panel
            icon="twitch"
            link="https://twitch.tv/adricham"
            linkName="Twitch (트위치)"
          />
          <Panel
            icon="youtube"
            link="https://www.youtube.com/channel/UCyVwrTdlX_tn0bu5FySgsMw"
            linkName="Youtube (유튜브)"
          />
          <Panel
            icon="discord"
            link="https://discord.gg/KXgg5bMvYY"
            linkName="Discord (디스코드)"
          />
          <Panel
            icon="twip"
            link="https://twip.kr/adricham"
            linkName="TWIP (트윕)"
          />
          <Panel
            icon="instagram"
            link="https://www.instagram.com/adri_cham_/"
            linkName="Instagram (인스타그램)"
          />
        </TabPanel>
        {/* 유달린 */}
        <TabPanel>
          <Panel
            icon="twitch"
            link="https://twitch.tv/yudarlinn"
            linkName="Twitch (트위치)"
          />
          <Panel
            icon="youtube"
            link="https://www.youtube.com/channel/UCuXubrozmGddYqiWcd4WlLQ?sub_confirmation=1"
            linkName="Youtube (유튜브)"
          />
          <Panel
            icon="discord"
            link="https://discord.link/yudarlinn"
            linkName="Discord (디스코드)"
          />
          <Panel
            icon="twip"
            link="https://twip.kr/yudarlinn"
            linkName="TWIP (트윕)"
          />
          <Panel
            icon="twitter"
            link="https://twitter.com/Yudarlinn"
            linkName="Twitter (트위터)"
          />
          <Panel
            icon="instagram"
            link="https://www.instagram.com/yudarlinn"
            linkName="Instagram (인스타)"
          />
          <Panel
            icon="music"
            link="https://www.streamersonglist.com/t/yudarlinn/songs"
            linkName="노래책"
          />
          <Panel
            link="https://cafe.naver.com/yudarlinn"
            linkName="Fan Cafe (팬카페)"
          />
        </TabPanel>
        {/* 전해리 */}
        <TabPanel>
          <Panel
            icon="twitch"
            link="https://twitch.tv/gofl2237"
            linkName="Twitch (트위치)"
          />
          <Panel
            icon="youtube"
            link="https://www.youtube.com/channel/UCCsvJaEPyupJBVp3JDDAUXA"
            linkName="Youtube (유튜브)"
          />
          <Panel
            icon="discord"
            link="https://discord.gg/FTWqeNRy2B"
            linkName="Discord (디스코드)"
          />
          <Panel
            icon="twip"
            link="https://twip.kr/gofl2237"
            linkName="TWIP (트윕)"
          />
          <Panel
            icon="instagram"
            link="https://www.instagram.com/junharry_/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            link="https://cafe.naver.com/forharryfan"
            linkName="Fan Cafe (팬카페)"
          />
        </TabPanel>
        {/* 지야 */}
        <TabPanel>
          <Panel
            icon="twitch"
            link="https://twitch.tv/jeeya0402"
            linkName="Twitch (트위치)"
          />
          <Panel
            icon="youtube"
            link="https://www.youtube.com/channel/UC_fCM9YzCP-bCLPezj8GiBA"
            linkName="Youtube (유튜브)"
          />
          <Panel
            icon="discord"
            link="https://discord.gg/8Sv937J"
            linkName="Discord (디스코드)"
          />
          <Panel
            icon="twip"
            link="https://twip.kr/jeeya0402"
            linkName="TWIP (트윕)"
          />
        </TabPanel>
        {/* 포도당 */}
        <TabPanel>
          <Panel
            icon="twitch"
            link="https://twitch.tv/kimc6h12o6"
            linkName="Twitch (트위치)"
          />
          <Panel
            icon="twitch"
            link="https://twitch.tv/nyangoooong"
            linkName="Nyangoooong Twitch (권냥냥 트위치)"
          />
          <Panel
            icon="youtube"
            link="https://www.youtube.com/channel/UC91CTe6HyjZa39VvDZlYI7A?view_as=subscriber"
            linkName="Youtube (유튜브)"
          />
          <Panel
            icon="discord"
            link="https://discord.gg/NThjZTc"
            linkName="Discord (디스코드)"
          />
          <Panel
            icon="twip"
            link="https://twip.kr/kimc6h12o6"
            linkName="TWIP (트윕)"
          />
          <Panel
            icon="tgd"
            link="https://tgd.kr/s/kimc6h12o6"
            linkName="TGD (트게더)"
          />
          <Panel
            icon="instagram"
            link="https://www.instagram.com/kimc6h12o6/"
            linkName="Instagram (인스타)"
          />
          <Panel
            icon="music"
            link="https://music.c6h12o6.kr/"
            linkName="노래책"
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default LinkTabs;
