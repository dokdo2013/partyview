import {
  Box,
  Badge,
  Button,
  Flex,
  Avatar,
  Image,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import SettingsModal from './SettingsModal';
import configStore from '../stores/ConfigStore';
import { Observer } from 'mobx-react';
import SearchBar from './SearchBar';
import streamerListStore from '../stores/StreamerListStore';

export default function Nav() {
  const {
    isOpen: settingsIsOpen,
    onOpen: settingsOnOpen,
    onClose: settingsOnClose,
  } = useDisclosure();

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
            {streamerListStore.list.map(streamer => (
              <Tooltip label={streamer.display_name} key={streamer.id}>
                <Avatar name="배돈" src={streamer.thumbnail_url}></Avatar>
              </Tooltip>
            ))}
          </Flex>
          <SearchBar />
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
