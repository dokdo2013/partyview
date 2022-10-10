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
import { SettingsIcon } from '@chakra-ui/icons';
import SettingsModal from './SettingsModal';
import configStore from '../stores/ConfigStore';
import { Observer } from 'mobx-react';

export default function Nav({ data }: { data: any }) {
  const {
    isOpen: settingsIsOpen,
    onOpen: settingsOnOpen,
    onClose: settingsOnClose,
  } = useDisclosure();

  const changeSelect = (member: string) => {
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
    <Observer>
      {() => (
        <Box
          bg={configStore.darkModeEnabled ? 'gray.800' : 'gray.100'}
          px={4}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <SettingsModal isOpen={settingsIsOpen} onClose={settingsOnClose} />
          <Flex alignItems="center">
            <Image src="../../leaven.png" h={12} />
            <Badge
              colorScheme={
                configStore.darkModeEnabled ? 'whiteAlpha' : 'blackAlpha'
              }
              style={{ fontSize: '14px', marginLeft: '6px' }}
            >
              MULTI
            </Badge>
          </Flex>
          <Flex justifyContent={'center'} style={{ overflow: 'auto' }}>
            <Tooltip label="침착맨">
              <Avatar
                name="침착맨"
                onClick={() => {
                  changeSelect('zilioner');
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
              ></Avatar>
            </Tooltip>
          </Flex>
          <Flex>
            <Button
              p={0}
              onClick={settingsOnOpen}
              bg={configStore.darkModeEnabled ? 'gray.700' : 'gray.100'}
              _hover={{
                bg: configStore.darkModeEnabled ? 'gray.500' : 'gray.200',
              }}
            >
              <SettingsIcon
                color={configStore.darkModeEnabled ? 'gray.200' : 'gray.400'}
              />
            </Button>
          </Flex>
        </Box>
      )}
    </Observer>
  );
}
