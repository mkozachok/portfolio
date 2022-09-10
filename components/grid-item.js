import NextLink from 'next/link'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <img
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail" //?
        width={100}
        height={100}
      ></img>
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={20}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`works/${id}`}>
      <LinkBox cursor="pointer">
        <img
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          width={100}
          height={100}
        />
        <LinkOverlay href={`works/${id}`}>
          <Text fontSize={20} mt={2}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
    `}
  ></Global>
)
