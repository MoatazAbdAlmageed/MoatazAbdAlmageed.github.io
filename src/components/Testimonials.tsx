import {
  Avatar,
  Box,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import { Link } from 'gatsby';
import { FiUsers } from 'react-icons/fi';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg="#fff"
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
  url,
}: {
  src: string;
  name: string;
  title: string;
  url: string;
}) => {
  return (
    <Flex align={'center'} p={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text color={'orange.400'} fontWeight={600}>
          {name}
        </Text>
        <Text fontSize={'md'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>

        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          <Link target="_blank" to={url}>
            {url}
          </Link>
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Flex id="testimonials" direction="column">
      <Stack spacing={0} align={'center'} p={{ base: 5, md: 10 }}>
        <Icon
          color="orange.400"
          fontSize="64"
          _groupHover={{
            color: 'white',
          }}
          as={FiUsers}
        />{' '}
        <Heading p={10}>Clients Speak</Heading>
        <Text>I have been working with clients around the world</Text>
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 10 }}>
        <Testimonial>
          <TestimonialContent>
            <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
            <TestimonialText>
              Highly recommended for professional websites
            </TestimonialText>
          </TestimonialContent>
          <TestimonialAvatar
            src={
              'https://rtcneklawy.com/wp-content/uploads/2020/11/82c418a2-22e2-4212-a50e-6491ac7ef767-150x150.jpeg'
            }
            name={'Ahmed Neklawy'}
            title={'CFO at rtcneklawy'}
            url="http://rtcneklawy.com/"
          />
        </Testimonial>
        <Testimonial>
          <TestimonialContent>
            <TestimonialHeading>Intuitive Design</TestimonialHeading>
            <TestimonialText>
              Highly recommended for professional websites
            </TestimonialText>
          </TestimonialContent>
          <TestimonialAvatar
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'
            }
            name={'Hamada Hassan'}
            title={'CEO at azanalquran'}
            url="https://www.azanalquran.com/"
          />
        </Testimonial>
        <Testimonial>
          <TestimonialContent>
            <TestimonialHeading>Results are amazing</TestimonialHeading>
            <TestimonialText>
              Highly recommended for professional websites
            </TestimonialText>
          </TestimonialContent>
          <TestimonialAvatar
            src={
              'https://pps.whatsapp.net/v/t61.24694-24/229002938_347695800219086_1999437479412687992_n.jpg?ccb=11-4&oh=01_AVyVWmK7mO7oYEzWuEBpZmHqYYfadZnbWGXpd_-vTr3rSQ&oe=61FBDA1C'
            }
            name={'Bakr Hamza'}
            title={'CEO at beinquran'}
            url="https://beinquran.com/"
          />
        </Testimonial>
      </Stack>
    </Flex>
  );
}
