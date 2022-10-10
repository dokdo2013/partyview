import {
  Alert,
  AlertIcon,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Divider,
  Modal,
  Flex,
  Switch,
  Link,
  Text,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import configStore from '../stores/ConfigStore';
import { Observer } from 'mobx-react';

const SettingsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const renderSwitch = (property: keyof typeof configStore) => (
    <Observer>
      {() => (
        <Switch
          size="lg"
          style={{ display: 'flex' }}
          colorScheme="purple"
          defaultValue={[]}
          isChecked={configStore[property]}
          onChange={() => {
            const changeData = configStore[property] ? 'false' : 'true';
            configStore[property] = !configStore[property];
            localStorage.setItem(property, changeData);
          }}
        />
      )}
    </Observer>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>설정 및 정보</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Tabs variant="soft-rounded" size="sm" colorScheme="purple">
            <TabList flexWrap="wrap">
              <Tab>설정</Tab>
              <Tab>실험실 (Beta)</Tab>
              <Tab>쿠키 정책</Tab>
              <Tab>정보</Tab>
            </TabList>
            <Divider mt={2}></Divider>
            <TabPanels>
              <TabPanel>
                <Text fontSize="lg" fontWeight="bold" mb="4">
                  기본 기능
                </Text>
                <Flex flexWrap="wrap">
                  <Flex
                    ml="6"
                    mb="4"
                    style={{ width: '100%' }}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text fontSize="md">채팅창 가리기</Text>
                    {renderSwitch('hideChat')}
                  </Flex>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Alert status="warning" fontSize="sm">
                  <AlertIcon />
                  실험실 기능을 통해 정식 기능 오픈 전 미리 신규 기능을
                  사용해보실 수 있습니다. 실험실 기능은 불안정하여 서비스 오류를
                  유발할 수 있으며, 예고없이 추가/삭제 될 수 있습니다.
                </Alert>
                <Text mt="6" align="center">
                  {/* 현재 이용 가능한 기능이 없습니다. */}
                  <Flex
                    mb="4"
                    style={{ width: '100%' }}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text fontSize="md">
                      방송과 채팅 함께 보기 (와이드 스크린 권장)
                    </Text>
                    {renderSwitch('displayEachChat')}
                  </Flex>
                  <Flex
                    mb="4"
                    style={{ width: '100%' }}
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text fontSize="md">다크모드</Text>
                    {renderSwitch('darkModeEnabled')}
                  </Flex>
                </Text>
              </TabPanel>
              <TabPanel>
                <Text fontSize="xl" fontWeight="bold">
                  개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
                </Text>
                <br />
                <Text fontSize="lg" fontWeight="semibold">
                  쿠키(cookie)란?
                </Text>
                <br />
                <Text fontSize="sm">
                  본 웹사이트는 이용자에 대한 정보를 저장하고 수시로 찾아내는
                  {'쿠키(cookie)'}를 사용합니다. 쿠키는 웹사이트가 이용자의
                  컴퓨터 브라우저(넷스케이프, 인터넷 익스플로러 등)로 전송하는
                  소량의 정보입니다. 이용자가 웹사이트에 접속을 하면 본
                  웹사이트는 이용자의 브라우저에 있는 쿠키의 내용을 읽고,
                  이용자의 추가정보를 이용자의 컴퓨터에서 찾아 접속에 따른 성명
                  등의 추가 입력 없이 서비스를 제공할 수 있습니다. 쿠키는
                  이용자의 컴퓨터는 식별하지만 이용자를 개인적으로 식별하지는
                  않습니다.
                  <br />
                  <br /> 또한 이용자는 쿠키에 대한 선택권이 있습니다. 웹브라우저
                  상단의 도구 - 인터넷옵션 탭(option tab)에서 모든 쿠키를 다
                  받아들이거나, 쿠키가 설치될 때 통지를 보내도록 하거나, 아니면
                  모든 쿠키를 거부할 수 있는 선택권을 가질 수 있습니다. 단,
                  쿠키의 저장을 거부하실 경우 본 웹사이트에서 제공하는 일부
                  서비스는 이용하실 수 없게 됩니다.
                </Text>
                <br />
                <Text fontSize="lg" fontWeight="semibold">
                  쿠키(cookie) 운용 목적
                </Text>
                <br />
                <Text fontSize="sm">
                  본 웹사이트는 이용자의 편의를 위하여 쿠키를 운영합니다. 본
                  웹사이트가 쿠키를 통해 수집하는 정보는 관리자 ID에 한하며, 그
                  외의 다른 정보는 수집하지 않습니다. 본 웹사이트가
                  쿠키(cookie)를 통해 수집한 관리자 ID는 다음의 목적을 위해
                  사용됩니다.
                  <br />
                  <br />
                  - 관리자 페이지 이용을 위한 권한 인증
                  <br />
                  <br />
                  또한, 본 웹사이트는 이용자에게 보다 나은 서비스의 제공을
                  위하여 구글(Google)에서 제공하는 웹로그 분석 도구인 구글
                  애널리틱스를 이용하고 있습니다. 구글 애널리틱스는
                  쿠키(Cookie)를 통하여 본 웹사이트 이용자의 행태정보를 수집하게
                  되며, 이 경우 이용자 개인을 식별할 수 없는 비식별정보 만이
                  수집됩니다. 그럼에도 이용자는 Google 애널리틱스 차단 브라우저
                  부가기능의 설치(https://tools.google.com/dlpage/gaoptout) 또는
                  웹브라우저의 쿠키 설정 거부를 통해 구글 애널리틱스 이용을
                  거부할 수 있습니다.
                  <br />
                  <br />
                  그리고, 이와 같이 수집된 비식별 행태정보는 구글(Google)의 구글
                  애드워즈 서비스를 통하여 온라인 광고 목적으로 사용될 수
                  있습니다.
                </Text>
              </TabPanel>
              <TabPanel>
                <Text fontSize="lg" fontWeight="semibold">
                  Developed By
                </Text>
                <br />
                <Text fontSize="sm">도연 (seju22)</Text>
                <br />
                <Text fontSize="lg" fontWeight="semibold">
                  OpenSource
                </Text>
                <br />
                <Text fontSize="sm">
                  본 프로젝트는 오픈소스로 제작되었으며 GNU GPL v3.0 라이센스를
                  따릅니다. 라이센스 규정 위반시 관련 법령에 의해 처벌될 수
                  있습니다. 소스코드는{' '}
                  <Link
                    href="https://github.com/dokdo2013/leaven-multi"
                    color="purple.300"
                    isExternal
                  >
                    깃허브(새 창)
                  </Link>
                  에 공개되어 있습니다.
                </Text>
                <br />
                <Text fontSize="lg" fontWeight="semibold">
                  Copyrights
                </Text>
                <br />
                <Text fontSize="sm">
                  Copyrights ©{' '}
                  <span style={{ fontWeight: 'bold' }}>multi.leaven.team</span>.
                  All Rights Reserved.
                </Text>
                <Text fontSize="sm">
                  TWITCH, the TWITCH Logo, the Glitch Logo, and/or TWITCHTV are
                  trademarks of Twitch Interactive, Inc. or its affiliates.
                </Text>
                <br />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
