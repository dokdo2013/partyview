import {
  Box,
  Badge,
  Button,
  Flex,
  Avatar,
  AvatarBadge,
  Image,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react';
import { SettingsIcon, LinkIcon } from '@chakra-ui/icons';
import SettingsModal from './SettingsModal';
import LinkModal from './LinkModal';

export default function Nav({ data }) {
  // Modal Disclosure
  const {
    isOpen: linkIsOpen,
    onOpen: linkOnOpen,
    onClose: linkOnClose,
  } = useDisclosure();
  const {
    isOpen: settingsIsOpen,
    onOpen: settingsOnOpen,
    onClose: settingsOnClose,
  } = useDisclosure();

  const changeSelect = member => {
    if (data.selectedUser.indexOf(member) === -1) {
      // 선택 안 되어있으면 선택 상태로 변경
      data.setSelectedUser([...data.selectedUser, member]);
    } else {
      // 선택되어 있으면 선택해제
      const tempSelectedUser = [...data.selectedUser];
      for (let i = 0; i < data.selectedUser.length; i++) {
        if (data.selectedUser[i] === member) {
          tempSelectedUser.splice(i, 1);
        }
      }
      data.setSelectedUser([...tempSelectedUser]);
    }
  };

  return (
    <>
      <Box
        bg={data.chatDarkMode ? 'gray.800' : 'gray.100'}
        px={4}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <LinkModal isOpen={linkIsOpen} onClose={linkOnClose} />
        <SettingsModal
          isOpen={settingsIsOpen}
          onClose={settingsOnClose}
          data={data}
        />
        <Flex alignItems="center">
          <Image src="../../leaven.png" h={12} />
          <Badge
            colorScheme={data.chatDarkMode ? 'whiteAlpha' : 'blackAlpha'}
            style={{ fontSize: '14px', marginLeft: '6px' }}
          >
            MULTI
          </Badge>
        </Flex>
        <Flex justifyContent={'center'} style={{ overflow: 'auto' }}>
          <Tooltip label="감자가비">
            <Avatar
              m={2}
              name="가 비"
              src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/db1b9903-78a1-4fc2-d301-28da83542400/icon200"
              onClick={() => {
                changeSelect('gamjagabee');
              }}
              style={
                data.selectedUser.indexOf('gamjagabee') !== -1
                  ? {
                      outline: '4px solid #6AB781',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: '#6AB781' }
              }
            >
              {data.broadcastMemberList.indexOf('gamjagabee') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          <Tooltip label="구나구나">
            <Avatar
              m={2}
              name="구 나"
              src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/e4bc8398-3eee-4850-9aa5-120560649100/icon200"
              onClick={() => {
                changeSelect('gunaguna00');
              }}
              style={
                data.selectedUser.indexOf('gunaguna00') !== -1
                  ? {
                      outline: '4px solid #6B6FB3',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: '#6B6FB3' }
              }
            >
              {data.broadcastMemberList.indexOf('gunaguna00') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          <Tooltip label="구슬요">
            <Avatar
              m={2}
              name="슬 요"
              src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/837e10f9-4f22-4e8f-2680-550471b1da00/icon200"
              onClick={() => {
                changeSelect('beadyo97');
              }}
              style={
                data.selectedUser.indexOf('beadyo97') !== -1
                  ? {
                      outline: '4px solid #B8DEC1',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: '#B8DEC1' }
              }
            >
              {data.broadcastMemberList.indexOf('beadyo97') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          <Tooltip label="노래하는도란">
            <Avatar
              m={2}
              name="도 란"
              src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/549648e5-4433-43d4-58a6-fad2bbb25500/icon200"
              onClick={() => {
                changeSelect('vnek1234');
              }}
              style={
                data.selectedUser.indexOf('vnek1234') !== -1
                  ? {
                      outline: '4px solid #FCB581',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: '#FCB581' }
              }
            >
              {data.broadcastMemberList.indexOf('vnek1234') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          {data.useSubCharacter && (
            <Tooltip label="키위골드">
              <Avatar
                m={2}
                name="키 위"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/1e3b35ac-096d-44dd-975c-cb0c709e0995-profile_image-70x70.png"
                onClick={() => {
                  changeSelect('kiwi4381');
                }}
                style={
                  data.selectedUser.indexOf('kiwi4381') !== -1
                    ? {
                        outline: '4px solid #FCB581',
                        padding: '1px',
                        background: 'white',
                        cursor: 'pointer',
                      }
                    : { cursor: 'pointer', background: '#FCB581' }
                }
              >
                {data.broadcastMemberList.indexOf('kiwi4381') !== -1 && (
                  <AvatarBadge boxSize="1em" bg="red.500" />
                )}
              </Avatar>
            </Tooltip>
          )}
          <Tooltip label="김병살">
            <Avatar
              m={2}
              name="병 살"
              src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/d11a101a-2e68-4d58-969b-804d05542600/icon200"
              onClick={() => {
                changeSelect('kbs9981');
              }}
              style={
                data.selectedUser.indexOf('kbs9981') !== -1
                  ? {
                      outline: '4px solid #EFB1FF',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: '#EFB1FF' }
              }
            >
              {data.broadcastMemberList.indexOf('kbs9981') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          <Tooltip label="아드리챔">
            <Avatar
              m={2}
              name="리 챔"
              src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/4cc3e389-03c2-4b33-202d-600b216c2a00/icon200"
              onClick={() => {
                changeSelect('adricham');
              }}
              style={
                data.selectedUser.indexOf('adricham') !== -1
                  ? {
                      outline: '4px solid #C9CFFF',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: '#C9CFFF' }
              }
            >
              {data.broadcastMemberList.indexOf('adricham') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          <Tooltip label="유달린">
            <Avatar
              m={2}
              name="달 린"
              src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/a69b2748-81d5-434b-a747-c99c30752500/icon200"
              onClick={() => {
                changeSelect('yudarlinn');
              }}
              style={
                data.selectedUser.indexOf('yudarlinn') !== -1
                  ? {
                      outline: '4px solid #EEBEF5',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: '#EEBEF5' }
              }
            >
              {data.broadcastMemberList.indexOf('yudarlinn') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          <Tooltip label="전해리">
            <Avatar
              m={2}
              name="해 리"
              src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/c552441f-f764-4e67-cd3f-1621da181a00/icon200"
              onClick={() => {
                changeSelect('gofl2237');
              }}
              style={
                data.selectedUser.indexOf('gofl2237') !== -1
                  ? {
                      outline: '4px solid #766E79',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: '#766E79' }
              }
            >
              {data.broadcastMemberList.indexOf('gofl2237') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          <Tooltip label="지야">
            <Avatar
              m={2}
              name="지 야"
              src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/08165e22-c9be-402c-a235-9e134830f800/icon200"
              onClick={() => {
                changeSelect('jeeya0402');
              }}
              style={
                data.selectedUser.indexOf('jeeya0402') !== -1
                  ? {
                      outline: '4px solid #FBBBCA',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: '#FBBBCA' }
              }
            >
              {data.broadcastMemberList.indexOf('jeeya0402') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          <Tooltip label="포도당">
            <Avatar
              m={2}
              name="도 당"
              src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/fa524576-4978-4d27-ac41-f619090f4500/icon200"
              onClick={() => {
                changeSelect('kimc6h12o6');
              }}
              style={
                data.selectedUser.indexOf('kimc6h12o6') !== -1
                  ? {
                      outline: '4px solid #C49CFD',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: '#C49CFD' }
              }
            >
              {data.broadcastMemberList.indexOf('kimc6h12o6') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          {data.useSubCharacter && (
            <Tooltip label="권냥냥">
              <Avatar
                m={2}
                name="권 냥"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/31774c9f-2650-438e-818e-e8dc4135573f-profile_image-70x70.png"
                onClick={() => {
                  changeSelect('nyangoooong');
                }}
                style={
                  data.selectedUser.indexOf('nyangoooong') !== -1
                    ? {
                        outline: '4px solid #C49CFD',
                        padding: '1px',
                        background: 'white',
                        cursor: 'pointer',
                      }
                    : { cursor: 'pointer', background: '#C49CFD' }
                }
              >
                {data.broadcastMemberList.indexOf('nyangoooong') !== -1 && (
                  <AvatarBadge boxSize="1em" bg="red.500" />
                )}
              </Avatar>
            </Tooltip>
          )}
        </Flex>
        <Flex>
          <Button
            p={0}
            onClick={linkOnOpen}
            mr={1}
            bg={data.chatDarkMode ? 'gray.700' : 'gray.100'}
            _hover={{ bg: data.chatDarkMode ? 'gray.500' : 'gray.200' }}
          >
            <LinkIcon color={data.chatDarkMode ? 'gray.200' : 'gray.400'} />
          </Button>
          <Button
            p={0}
            onClick={settingsOnOpen}
            bg={data.chatDarkMode ? 'gray.700' : 'gray.100'}
            _hover={{ bg: data.chatDarkMode ? 'gray.500' : 'gray.200' }}
          >
            <SettingsIcon color={data.chatDarkMode ? 'gray.200' : 'gray.400'} />
          </Button>
        </Flex>
      </Box>
    </>
  );
}
